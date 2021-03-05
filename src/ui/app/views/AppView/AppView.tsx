import React from 'react';

import { AppLayout } from '../../layouts/AppLayout';
import { PublicRoutes } from 'ui/routes';

export const AppView: React.FC = () => (
	<AppLayout>
		<PublicRoutes />
	</AppLayout>
);
