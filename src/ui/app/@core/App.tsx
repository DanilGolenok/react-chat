import React from 'react';

import { ProfileProvider } from 'gateway/profile/providers/ProfileProvider';
import { AppView } from '../views/AppView';
import { StoreProvider } from 'store';

export const App: React.FC = () => (
	<StoreProvider>
		<ProfileProvider>
			<AppView />
		</ProfileProvider>
	</StoreProvider>
);
