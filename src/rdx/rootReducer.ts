import { combineReducers } from 'redux';
import { userReducer, skillsReducer } from 'rdx/reducers';

//  export combined
export const rootReducer = combineReducers({
  users: userReducer,
  skills: skillsReducer
});
