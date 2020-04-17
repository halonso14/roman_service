import { DRAWER_CLOSED, DRAWER_OPEN } from './types';

export const openDrawer = () => {
  return {
    type: DRAWER_OPEN,
    payload: {
      isOpen: true,
    },
  };
};

export const closeDrawer = () => {
  return {
    type: DRAWER_CLOSED,
    payload: {
      isOpen: false,
    },
  };
};
