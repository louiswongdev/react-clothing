import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';

import rootSaga from './root-saga';
import rootReducer from './root-Reducer';

const sagaMiddleWare = createSagaMiddleWare();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer, 
  applyMiddleware(...middlewares)
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
