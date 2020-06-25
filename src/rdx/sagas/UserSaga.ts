import { addUsers } from 'rdx/actions';
import { call, take, actionChannel, put } from 'redux-saga/effects';
import { buffers } from 'redux-saga';
import Types from 'utils/constants';

export function* watchAddUsers() {
  const addMessageChannel = yield actionChannel(
    Types.ADD_USERS_SAGA,
    buffers.expanding()
  );
  while (true) {
    const { payload } = yield take(addMessageChannel);
    try {
      yield call(handleAdd, payload);
    } catch (e) {
      //   yield put(handleError(e));
      console.warn(e);
    }
  }
}

function* handleAdd(payload: any) {
  payload.map((d: any) => [d.id, d]);

  yield put(addUsers(payload));
}
