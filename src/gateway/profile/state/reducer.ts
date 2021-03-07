import { Profile } from '../models/profile';
import { ProfileActionType } from './actions';

import { profilesMock } from '../__mock/profiles.mock';
import { profileMapper } from '../mapper/profile.mapper';

import * as types from './types';

interface ProfileState {
	currentProfile: Profile | null;
}

const initialState: ProfileState = {
	currentProfile: profileMapper(profilesMock[profilesMock.length - 1]),
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileActionType): ProfileState => {
	switch (action.type) {
		case types.SET_CURRENT_USER:
			return {
				...state,
				currentProfile: action.payload,
			};

		default:
			return state;
	}
};
