import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

export const _useActiveLink = () => {
	const dispatch = useDispatch();
	const activeLink = useSelector(selectors.getActiveLink);

	const setActiveLink = useCallback(
		(link: string) => {
			dispatch(actions.setActiveLink(link));
		},
		[dispatch]
	);

	return { activeLink, setActiveLink };
};
