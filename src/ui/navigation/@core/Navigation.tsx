import React from 'react';

import { NavigationActiveLinkProvider } from 'gateway/navigation/providers/NavigationActiveLinkProvider';
import { NavBar } from '../components/NavBar';

export const Navigation: React.FC = () => (
	<NavigationActiveLinkProvider>
		<NavBar />
	</NavigationActiveLinkProvider>
);
