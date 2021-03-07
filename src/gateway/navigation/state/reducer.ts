import { AppRoutes } from 'ui/routes/const/app-routes';
import { NavigationActionType } from './actions';

import * as types from './types';

interface NavigationState {
	activeLink: string;
}

const initialState = {
	activeLink: AppRoutes.Home,
};

export const navigationReducer = (
	state: NavigationState = initialState,
	action: NavigationActionType
): NavigationState => {
	switch (action.type) {
		case types.SET_ACTIVE_LINK:
			return {
				...state,
				activeLink: action.payload,
			};

		default:
			return state;
	}
};
