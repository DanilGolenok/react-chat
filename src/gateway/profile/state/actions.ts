import * as types from './types';

import { Action } from 'store/types';
import { Profile } from '../models/profile';

export type SetCurrentProfileAction = Action<typeof types.SET_CURRENT_USER, Profile>;

export const setCurrentProfile = (profile: Profile): SetCurrentProfileAction => ({
	type: types.SET_CURRENT_USER,
	payload: profile,
});

export type ProfileActionType = SetCurrentProfileAction;
