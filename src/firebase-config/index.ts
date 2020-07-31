/* eslint-disable no-undef */
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
class Firebase {
    auth: app.auth.Auth;
    db: app.firestore.Firestore;
    storage: app.storage.Storage;

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    async login(email: string, password: string) {
        return await this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    async register(name: string, email: string, password: string) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser?.updateProfile({
            displayName: name,
        });
    }

    isInitialized() {
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    getCurrentUser() {
        return this.auth.currentUser;
    }

    updatePhotoUrl(fullPath: string) {
        const storageRef = this.storage.ref();
        storageRef
            .child(fullPath)
            .getDownloadURL()
            .then((url) => this.auth.currentUser?.updateProfile({ photoURL: url }))
            .catch((err) => {
                throw err;
            });
    }

    async updateUserProfile(file: File | undefined, name: string | undefined) {
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
    }
}

export default new Firebase();
