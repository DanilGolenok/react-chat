import React from 'react';
import { AppRoutes } from 'ui/routes/const/app-routes';

import { ChatIcon, HomeIcon } from 'ui/assets/components';
import { NavigationLink } from '../NavigationLink';

import './NavBar.scss';

export const NavBar: React.FC = () => (
	<div className="app-navbar">
		<NavigationLink link={AppRoutes.Home} text="Home" icon={HomeIcon} />
		<NavigationLink link={AppRoutes.Chat} text="Chat" icon={ChatIcon} />
	</div>
);
