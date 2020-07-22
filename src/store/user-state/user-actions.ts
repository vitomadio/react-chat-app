import { signUp, signIn } from './user-logic';

export const signUpUser = async (dispatch: Function, body: { email: string, password: string }) => (
  signUp(dispatch, body)
);

export const signInUser = (dispatch: Function, body: { email: string, password: string }) => (
  signIn(dispatch, body)
);



