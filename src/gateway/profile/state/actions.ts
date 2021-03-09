import * as types from './types';

import { ProfileEntity } from 'domain/entities/profile.entity';
import { Action } from 'store/types';

export type SetCurrentProfileAction = Action<typeof types.SET_CURRENT_USER, ProfileEntity>;

export const setCurrentProfile = (profile: ProfileEntity): SetCurrentProfileAction => ({
	type: types.SET_CURRENT_USER,
	payload: profile,
});

export type ProfileActionType = SetCurrentProfileAction;
