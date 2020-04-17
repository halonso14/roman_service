import { combineReducers } from 'redux';
import { authReducer } from '../page/login/reducers';
import { drawerReducer } from '../page/main/reducers';

export default combineReducers({
  drawer: drawerReducer,
  auth: authReducer,
});
