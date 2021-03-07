import { AppState } from 'store';

export const getActiveLink = (state: AppState) => state.navigation.activeLink;
