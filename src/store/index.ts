import { rootReducer } from './reducers/root-reducer';

export type AppState = ReturnType<typeof rootReducer>;
export { StoreProvider } from './providers/StoreProvider';
