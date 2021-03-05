import React from 'react';
import { _useProfile } from '../__hooks/_useProfile';

import { ProfileContext } from '../context/ProfileContext';

export const ProfileProvider: React.FC = ({ children }) => {
	const _context = _useProfile();

	return <ProfileContext.Provider value={_context}>{children}</ProfileContext.Provider>;
};
