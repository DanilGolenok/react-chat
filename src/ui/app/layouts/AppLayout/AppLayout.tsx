import React from 'react';

import { AppHeader } from '../../components/AppHeader';
import { AppSideBar } from 'ui/app/components/AppSideBar';

import './AppLayout.scss';

export const AppLayout: React.FC = ({ children }) => (
	<div className="app-layout">
		<AppSideBar />
		<div className="app-layout__main">
			<AppHeader />
			<div className="app-layout__content">{children}</div>
		</div>
	</div>
);
