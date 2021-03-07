import React from 'react';

import { Navigation } from 'ui/navigation';
import { CurrentProfile } from '../CurrentProfile';

import './AppSideBar.scss';

export const AppSideBar: React.FC = () => (
	<div className="side-bar">
		<div className="side-bar__header">
			<h3 className="side-bar__brand">React Chat</h3>
		</div>
		<div className="side-bar__profile">
			<CurrentProfile />
		</div>
		<div className="side-bar__navigation">
			<Navigation />
		</div>
	</div>
);
