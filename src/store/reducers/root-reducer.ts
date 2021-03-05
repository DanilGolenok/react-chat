import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { persistConfig } from '../config/persist.config';
import { state } from 'gateway/@store-root';

const combinedReducers = combineReducers(state);

export type StateType = ReturnType<typeof combinedReducers>;
export const rootReducer = persistReducer(persistConfig, combinedReducers);
