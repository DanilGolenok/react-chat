import React from 'react';

import { RedirectIconButton } from 'ui/@core/components/RedirectIconButton';
import { BellIcon, ChatIcon, HomeIcon, SettingsIcon } from 'ui/assets/components';
import { AppRoutes } from 'ui/routes/const/app-routes';

import './AppHeader.scss';

export const AppHeader: React.FC = () => (
	<div className="app-header">
		<RedirectIconButton icon={HomeIcon} link={AppRoutes.Home} />
		<RedirectIconButton icon={ChatIcon} link={AppRoutes.Chat} />
		<RedirectIconButton icon={BellIcon} link={AppRoutes.Notifications} />
		<RedirectIconButton icon={SettingsIcon} link={AppRoutes.Settings} />
	</div>
);
