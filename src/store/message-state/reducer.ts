import TYPE from '../action-types';

export interface IAction {
  type: string,
  payload: any
}

function messageReducer(state: any, action: IAction) {
  switch (action.type) {
    case TYPE.USER_SIGN_UP_SUCCESS:
      return { ...state, message: action.payload }
    case TYPE.USER_SIGN_IN_SUCCESS:
      return { ...state, message: action.payload }
    default:
      return state
  }
}

export default messageReducer;