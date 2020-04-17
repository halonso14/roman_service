import { DRAWER_CLOSED, DRAWER_OPEN } from './types';

const initialState = {
  isOpen: false,
};

export const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAWER_OPEN:
    case DRAWER_CLOSED:
      return { isOpen: action.payload.isOpen };

    default:
      return state;
  }
};

export default { drawerReducer };
