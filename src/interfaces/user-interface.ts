export default interface IUser {
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    emailVerified?: boolean;
    uid: string;
}
