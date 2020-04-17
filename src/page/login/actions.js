import { LOG_IN_FAILED, LOG_IN_SUCCESS, LOG_OUT_REQUEST } from './types';

export const createLogInSucces = (userName, accessToken) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: {
      userName,
      accessToken,
    },
  };
};

export const createLogInFailed = () => {
  return {
    type: LOG_IN_FAILED,
  };
};

export const createdLoggedOut = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};
