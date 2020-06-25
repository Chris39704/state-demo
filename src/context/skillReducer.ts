// Table Reducer
import Types from 'utils/constants';

const defaultState = new Map();

export default (state = defaultState, action: any) => {
  const { type } = action;
  switch (type) {
    case Types.ADD_USER_CONTEXT:
      const userSkills = action.payload.map(
        (user: {
          id: number;
          name: String;
          dob: String;
          location: String;
          skills: String[];
        }) => [user.id, user.skills]
      );
      return new Map(userSkills);
    case Types.EDIT_USER_CONTEXT:
      return new Map(state).set(action.payload.id, action.payload.skills);
    default:
      return new Map(state);
  }
};
