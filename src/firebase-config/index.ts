/* eslint-disable no-undef */
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';
import 'firebase/firebase-database';
import IUser from 'interfaces/user-interface';
import IChat from 'interfaces/chat-interface';
import IMessage from 'interfaces/message-interface';
import IAction from 'interfaces/action-interface';
import TYPES from 'store/action-types';

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

    login = async (email: string, password: string): Promise<any> => {
        return await this.auth.signInWithEmailAndPassword(email, password);
    };

    logout = (): void => {
        this.auth.signOut();
    };

    public register = async (
        name: string,
        email: string,
        password: string,
    ): Promise<any | IMessage> => {
        try {
            const { user } = await this.auth.createUserWithEmailAndPassword(email, password);
            await this.auth.currentUser?.updateProfile({
                displayName: name,
            });
            return await this.db.collection('Users').doc(`${user?.uid}`).set({
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
                emailVerified: user?.emailVerified,
                uid: user?.uid,
            });
        } catch (err) {
            return { status: 'error', text: err };
        }
    };

    public isInitialized(): Promise<any> {
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    private updateProfileAvatar = (fullPath: string): void => {
        const storageRef = this.storage.ref();
        storageRef
            .child(fullPath)
            .getDownloadURL()
            .then((url) => this.auth.currentUser?.updateProfile({ photoURL: url }))
            .catch((err) => {
                throw err;
            });
    };

    public updateUserProfile = async (
        file: File | undefined,
        name: string | undefined,
    ): Promise<IMessage> => {
        try {
            if (name) {
                this.auth.currentUser?.updateProfile({ displayName: name });
            }
            if (file) {
                const storageRef = this.storage.ref();
                const fileRef = storageRef.child(`images/${file?.name}`);
                const { metadata } = await fileRef.put(file);
                this.updateProfileAvatar(metadata.fullPath);
            }
            return { status: 'success', text: 'Your profile has been updated' };
        } catch (err) {
            return { status: 'error', text: err };
        }
    };

    getCurrentUser = (): IUser | null => {
        const user = this.auth.currentUser;
        if (user != null) {
            return {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
                uid: user.uid,
            };
        }
        return null;
    };

    getUsers = async (): Promise<IUser[]> => {
        const users = await this.db.collection('Users').get();
        const usersList: IUser[] = [];
        users.forEach((user) => {
            usersList.push(user.data());
        });
        return usersList;
    };

    public getCurrentChatUser = async (userId: string): Promise<any> => {
        const res = await this.rtdb.ref(`/current-user-chat/${userId}`).once('value');
        return res.val();
    };

    public getChatUsers = (currentUserId: string, dispatch: (args: IAction) => IAction): any => {
        try {
            this.rtdb.ref(`users-chats/${currentUserId}`).on('child_added', (snapshot) => {
                dispatch({
                    type: TYPES.GET_CHAT_USERS,
                    payload: snapshot.key,
                });
            });
        } catch (err) {
            throw err;
        }
    };

    public setCurrentChatUser = async (currentUser: IUser, chatUser: IUser): Promise<any> => {
        try {
            this.rtdb.ref(`/current-user-chat/${currentUser.uid}`).set(chatUser);
            if (currentUser.uid) return await this.getCurrentChatUser(currentUser.uid);
            return null;
        } catch (err) {
            throw err;
        }
    };

    public getCurrentChat = async (
        senderId: string,
        receiverId: string,
        dispatch: (args: IAction) => IAction,
    ): Promise<any> => {
        await this.rtdb
            .ref(`users-chats/${senderId}/${receiverId}`)
            .on('child_added', (snapshot) => {
                dispatch({
                    type: TYPES.GET_CHAT_MESSAGES,
                    payload: { ...snapshot.val(), chatId: snapshot.key },
                });
            });
    };

    public addNewMessageToChat = (chat: IChat): any => {
        try {
            const chatKey = this.rtdb.ref(`/users-chats/${chat.senderId}/${chat.receiverId}`).push()
                .key;
            if (chatKey) {
                this.rtdb
                    .ref(`/users-chats/${chat.senderId}/${chat.receiverId}`)
                    .child(chatKey)
                    .set(chat);
                this.rtdb
                    .ref(`/users-chats/${chat.receiverId}/${chat.senderId}`)
                    .child(chatKey)
                    .set(chat);
            }
        } catch (err) {
            throw err;
        }
    };

    public deleteMessage = async (
        chat: IChat,
        messageWriter: string,
    ): Promise<string | undefined> => {
        let reference = `users-chats/${chat.senderId}/${chat.receiverId}/${chat.chatId}`;
        if (messageWriter === 'receiver') {
            reference = `users-chats/${chat.receiverId}/${chat.senderId}/${chat.chatId}`;
        }
        try {
            const chatRef = await this.rtdb.ref(reference);
            chatRef.remove();
            return chat.chatId;
        } catch (err) {
            throw err;
        }
    };
}

export default new Firebase();
