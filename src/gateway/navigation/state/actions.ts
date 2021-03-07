import * as types from './types';

import { Action } from 'store/types';

type SetActiveLinkAction = Action<typeof types.SET_ACTIVE_LINK, string>;

export const setActiveLink = (link: string): SetActiveLinkAction => ({
	type: types.SET_ACTIVE_LINK,
	payload: link,
});

export type NavigationActionType = SetActiveLinkAction;
