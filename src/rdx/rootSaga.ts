import { all, fork } from 'redux-saga/effects';

// Import Metrics Saga
import { watchAddUsers } from 'rdx/sagas';

export default function* rootSaga() {
  yield all([fork(watchAddUsers)]);
}
