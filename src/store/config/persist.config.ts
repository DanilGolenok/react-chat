import * as localforage from 'localforage';
import { PersistConfig } from 'redux-persist';

export const persistConfig: PersistConfig<any> = {
	key: 'root',
	version: 1,
	storage: localforage,
	blacklist: [],
};
