import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from '../components/PublicRoutes';

export const Routes: React.FC = () => (
	<BrowserRouter>
		<PublicRoutes />
	</BrowserRouter>
);
