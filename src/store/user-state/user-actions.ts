import { signUp, signIn } from './user-logic';

export const signUpUser = (dispatch: any, body: { email: string; password: string }) =>
    signUp(dispatch, body);

export const signInUser = (dispatch: any, body: { email: string; password: string }) =>
    signIn(dispatch, body);
