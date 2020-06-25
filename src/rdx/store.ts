import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

let store: any;
let composeEnhancers;

// const logger = createLogger({
//   duration: true,
//   timestamp: true,
//   logErrors: true,
// });

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);
middlewares.push(thunkMiddleware);

// if (process.env.REDUX_LOG) {
//   middlewares.push(logger);
// }
if (process.env.NODE_ENV === 'development') {
  console.log('Running In Dev');
  composeEnhancers = composeWithDevTools({ maxAge: 20, latency: 0 });
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}
sagaMiddleware.run(rootSaga);

export default store;
