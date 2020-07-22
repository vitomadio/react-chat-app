import firebase from '../../firebase';
import TYPES from '../action-types';
import IUser from '../../interfaces/user-interface';

const signUp = async (dispatch: Function, body: { email: string, password: string }) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(body.email, body.password);
    if (response.user) {
      const sessionUser: any = await firebase.auth().currentUser;
      sessionUser.sendEmailVerification();
      dispatch({
        type: TYPES.GET_NEW_MESSAGE,
        payload: { success: true, message: "We have sent you an email for verification" }
      })
    }
  } catch (err) {
    dispatch({
      type: TYPES.GET_NEW_MESSAGE,
      payload: { success: false, message: err }
    })
  }
  return ({ success: false, message: "Something wrong happened, please try again!" });
}

const signIn = async (dispatch: Function, body: { email: string, password: string }) => {
  try {
    const response: any = await firebase.auth().signInWithEmailAndPassword(body.email, body.password)
    if (response.user && !response.user.emailVerified) {
      return dispatch({
        type: TYPES.GET_NEW_MESSAGE,
        payload: { success: false, message: "Your account has not been verified yet!" }
      });
    }
    const newUser: IUser = {
      name: response.user.displayName,
      email: response.user.email,
      photoUrl: response.user.photoURL,
      uid: response.user.uid
    }
    return dispatch({
      type: TYPES.USER_SIGN_IN_SUCCESS,
      payload: newUser
    });
  } catch (err) {
    dispatch({
      type: TYPES.GET_NEW_MESSAGE,
      payload: { success: false, message: err.message }
    });
  }
}

export {
  signUp,
  signIn
}