import React from 'react';

import { AppRoutes } from '../const/app-routes';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'ui/home';
import { Chat } from 'ui/chat';
import { Notifications } from 'ui/notifications';
import { Settings } from 'ui/settings';

export const PublicRoutes: React.FC = () => (
	<Switch>
		<Route exact path={AppRoutes.Home} component={Home} />
		<Route exact path={AppRoutes.Chat} component={Chat} />
		<Route exact path={AppRoutes.Notifications} component={Notifications} />
		<Route exact path={AppRoutes.Settings} component={Settings} />

		<Redirect path="*" to={AppRoutes.Home} />
	</Switch>
);
