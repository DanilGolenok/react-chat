import React from 'react';

import { AppRoutes } from '../const/app-routes';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Home } from 'ui/home';
import { Chat } from 'ui/chat';

export const PublicRoutes: React.FC = () => (
	<Switch>
		<Route exact path={AppRoutes.Home} component={Home} />
		<Route exact path={AppRoutes.Chat} component={Chat} />

		<Redirect path="*" to={AppRoutes.Home} />
	</Switch>
);
