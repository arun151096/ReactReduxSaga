import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit'
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)});
sagaMiddleware.run(mySaga);
