import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { persistConfig } from '../config/persist.config';

const combinedReducers = combineReducers({});
export const rootReducer = persistReducer(persistConfig, combinedReducers);
