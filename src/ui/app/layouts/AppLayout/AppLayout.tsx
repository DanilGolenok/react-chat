import React from 'react';

import { AppHeader } from '../../components/AppHeader';
import { AppNavBar } from '../../components/AppNavBar';

import 'AppLayout.scss';

export const AppLayout: React.FC = ({ children }) => (
	<div className="app-layout">
		<div className="app-layout__sidebar">
			<AppNavBar />
		</div>
		<div className="app-layout__main">
			<AppHeader />
			<div className="app-layout__content">{children}</div>
		</div>
	</div>
);
