import { LOG_IN_FAILED, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_REQUEST } from './types';

const initialState = { isLoggedIn: false, userName: undefined, accessToken: undefined };

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return initialState;
    case LOG_IN_SUCCESS:
      return {
        isLoggedIn: true,
        userName: action.payload.userName,
        accessToken: action.payload.accessToken,
      };
    case LOG_IN_FAILED:
    case LOG_OUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};
