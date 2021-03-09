import { ProfileEntity } from 'domain/entities/profile.entity';
import { ProfileActionType } from './actions';

import { profilesMock } from '../__mock/profiles.mock';

import * as types from './types';

interface ProfileState {
	currentProfile: ProfileEntity | null;
}

const initialState: ProfileState = {
	currentProfile: profilesMock[profilesMock.length - 1],
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
