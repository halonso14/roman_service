import { ACTIVATE_SOCIALIDPROTECTION, DEACTIVATE_SOCIALIDPROTECTION } from './types';

const initialState = {
  isProtected: false,
};

export const socialIDProtectionReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case ACTIVATE_SOCIALIDPROTECTION:
    case DEACTIVATE_SOCIALIDPROTECTION:
      return { isSocialIDProtected: action.payload.isSocialIDProtected };

    default:
      return state;
  }
};

export default { socialIDProtectionReducer };
