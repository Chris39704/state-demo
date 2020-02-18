import Types from 'utils/constants';

export const addUsers = (payload: {id: number; name: String; dob: String; location: String; skills: String[] }[]) => ({
  type: Types.ADD_USER_CONTEXT,
  payload,
});
export const editUser = (payload: { id: number; name: String; dob: String; location: String; skills: String[] }) => ({
  type: Types.EDIT_USER_CONTEXT,
  payload,
});
