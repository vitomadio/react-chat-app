import TYPES from '../action-types';

export interface IAction {
  type: string,
  payload: any
}

function userReducer(state: any, action: IAction) {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer;