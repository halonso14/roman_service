import { ACTIVATE_SOCIALIDPROTECTION, DEACTIVATE_SOCIALIDPROTECTION } from './types';

export const activateSocialIDProtection = () => {
  return {
    type: ACTIVATE_SOCIALIDPROTECTION,
    payload: {
      isSocialIDProtected: true,
    },
  };
};

export const deactivateSocialIDProtection = () => {
  return {
    type: DEACTIVATE_SOCIALIDPROTECTION,
    payload: {
      isSocialIDProtected: false,
    },
  };
};
