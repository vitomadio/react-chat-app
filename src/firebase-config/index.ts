/* eslint-disable no-undef */
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';
import 'firebase/firebase-database';
import IUser from 'interfaces/user-interface';

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
class Firebase {
    auth: app.auth.Auth;
    db: app.firestore.Firestore;
    rtdb: app.database.Database;
    storage: app.storage.Storage;

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
        this.rtdb = app.database();
        this.storage = app.storage();
    }

    async login(email: string, password: string) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name: string, email: string, password: string) {
        const { user } = await this.auth.createUserWithEmailAndPassword(email, password);
        await this.auth.currentUser?.updateProfile({
            displayName: name,
        });
        if (user) {
            return await this.db.collection('Users').doc(`${user.uid}`).set({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
                uid: user.uid,
            });
        }
    }

    isInitialized() {
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    updatePhotoUrl = (fullPath: string) => {
        const storageRef = this.storage.ref();
        storageRef
            .child(fullPath)
            .getDownloadURL()
            .then((url) => this.auth.currentUser?.updateProfile({ photoURL: url }))
            .catch((err) => {
                throw err;
            });
    };

    updateUserProfile = async (file: File | undefined, name: string | undefined) => {
        try {
            if (name) {
                this.auth.currentUser?.updateProfile({ displayName: name });
            }
            if (file) {
                const storageRef = this.storage.ref();
                const fileRef = storageRef.child(`images/${file?.name}`);
                const { metadata } = await fileRef.put(file);
                this.updatePhotoUrl(metadata.fullPath);
            }
            return { status: 'success', text: 'Your profile has been updated' };
        } catch (err) {
            return { status: 'error', text: err };
        }
    };

    getCurrentUser() {
        return this.auth.currentUser;
    }

    getUsers = async () => {
        const users = await this.db.collection('Users').get();
        const usersList: IUser[] = [];
        users.forEach((user) => {
            usersList.push(user.data());
        });
        return usersList;
    };

    setCurrentChatUser = async (currentUser: IUser, chatUser: IUser) => {
        try {
            const ref = await this.rtdb.ref(`/current-user-chat/${currentUser.uid}`).once('value');
            console.log(ref.val());
            if (ref.val()) {
                await this.rtdb.ref(`/current-user-chat/${currentUser.uid}`).update(chatUser);
            } else {
                await this.rtdb.ref(`/current-user-chat/${currentUser.uid}`).set(chatUser);
            }
            if (currentUser.uid) return await this.getCurrentChatUser(currentUser.uid);
            return null;
        } catch (err) {
            console.log(err);
        }
    };

    getCurrentChatUser = async (userId: string) => {
        const res = await this.rtdb.ref(`/current-user-chat/${userId}`).once('value');
        return res.val();
    };
}

export default new Firebase();
