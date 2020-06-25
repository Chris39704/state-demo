// Table Reducer
import Types from 'utils/constants';
import { Map } from 'immutable';
import { AnyAction } from 'redux';

const defaultState = Map();

export default (state = defaultState, action: AnyAction) => {
  const { type } = action;
  switch (type) {
    case Types.ADD_USERS:
      const userSkills = action.payload.map(
        (user: {
          id: number;
          name: String;
          dob: String;
          location: String;
          skills: String[];
        }) => [user.id, user.skills]
      );
      return state.merge(userSkills);
    case Types.EDIT_SKILL:
      return state.merge({ [action.payload.id]: action.payload.skills });
    case Types.REMOVE_USER:
      return state.delete(action.id);
    default:
      return state;
  }
};
