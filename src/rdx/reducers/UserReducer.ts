// Table Reducer
import Types from 'utils/constants';
import { Map } from 'immutable';
import { AnyAction } from 'redux';

const defaultState = Map();

export default (state = defaultState, action: AnyAction) => {
  const { type } = action;
  switch (type) {
    case Types.ADD_USERS:
      const newUsers = action.payload.map((user: any) => {
        const { skills, ...rest } = user;
        return [user.id, rest]
      });
      return state.merge(newUsers);
    case Types.EDIT_USER:
      const { skills, ...rest } = action.payload;
      return state.merge({ [action.payload.id]: {...rest} });
    case Types.REMOVE_USER:
      return state.delete(action.id);
    default:
      return state;
  }
};
