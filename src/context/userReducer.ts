import TYPES from 'utils/constants';

function reducer(state: any, action: any) {
  switch (action.type) {
    case TYPES.ADD_USER_CONTEXT:
    const newUsers = action.payload.map((u: any) => [u.id, u]);
      return new Map(newUsers);
    case TYPES.EDIT_USER_CONTEXT:
      return new Map(state).set(action.payload.id, action.payload);
    default:
      throw new Error();
  }
}

export default reducer;