import React from 'react';

import { ProfileProvider } from 'gateway/profile/providers/ProfileProvider';
import { AppView } from '../views/AppView';

export const App: React.FC = () => (
	<ProfileProvider>
		<AppView />
	</ProfileProvider>
);
