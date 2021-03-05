import { ProfileEntity } from 'domain/entities/profile.entity';
import { ProfileActionType } from './actions';

import * as types from './types';

interface ProfileState {
	profile: ProfileEntity;
}

export const profileReducer = (state: ProfileState, action: ProfileActionType): ProfileState => {
	switch (action.type) {
		case types.SET_CURRENT_USER:
			return {
				...state,
				profile: action.payload,
			};

		default:
			return state;
	}
};
