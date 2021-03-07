import React from 'react';
import { useProfile } from 'gateway/profile/hooks/useProfile';

import './CurrentProfile.scss';

export const CurrentProfile: React.FC = () => {
	const { profile } = useProfile();

	return (
		<div className="app-profile">
			<div className="app-profile__avatar"></div>
			<div className="app-profile__info">
				<span className="app-profile__name">{profile?.username}</span>
				<span className="app-profile__title">{profile?.title}</span>
			</div>
		</div>
	);
};
