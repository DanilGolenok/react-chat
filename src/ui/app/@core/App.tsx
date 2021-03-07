import React from 'react';

import { ProfileProvider } from 'gateway/profile/providers/ProfileProvider';
import { StoreProvider } from 'store';

import { BrowserRouter } from 'react-router-dom';
import { AppView } from '../views/AppView';

export const App: React.FC = () => (
	<StoreProvider>
		<ProfileProvider>
			<BrowserRouter>
				<AppView />
			</BrowserRouter>
		</ProfileProvider>
	</StoreProvider>
);
