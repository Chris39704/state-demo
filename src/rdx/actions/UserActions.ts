import Types from 'utils/constants';

export const addUsers = (payload: {id: number; name: String; dob: String; location: String; skills: String[] }[]) => ({
  type: Types.ADD_USERS,
  payload,
});
export const editUser = (payload: { id: number; name: String; dob: String; location: String; skills: String[] }) => ({
  type: Types.EDIT_USER,
  payload,
});

export const removeUser = (id: number) => ({
  type: Types.REMOVE_USER,
  id,
});
