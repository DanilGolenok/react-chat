import { AppState } from 'store';

export const getCurrentProfile = (state: AppState) => state.profile.currentProfile;
