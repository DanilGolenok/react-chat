import { middleware } from '../middleware';

import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { rootReducer } from '../reducers/root-reducer';

export const store = createStore(rootReducer, {}, middleware);
export const persistor = persistStore(store);
