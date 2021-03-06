import React from 'react';

import { AppLayout } from '../../layouts/AppLayout';
import { Routes } from 'ui/routes';

export const AppView: React.FC = () => (
	<AppLayout>
		<Routes />
	</AppLayout>
);
