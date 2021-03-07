import React from 'react';
import { _useActiveLink } from '../__hooks/_useActiveLink';

import { NavigationActiveLinkContext } from '../context/NavigationActiveLinkContext';

export const NavigationActiveLinkProvider: React.FC = ({ children }) => {
	const _context = _useActiveLink();

	return <NavigationActiveLinkContext.Provider value={_context}>{children}</NavigationActiveLinkContext.Provider>;
};
