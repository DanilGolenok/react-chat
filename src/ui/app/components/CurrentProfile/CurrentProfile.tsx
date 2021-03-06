import React from 'react';
import { useProfile } from 'gateway/profile/hooks/useProfile';

import './CurrentProfile.scss';
import { Avatar } from 'ui/@core/components/Avatar';

export const CurrentProfile: React.FC = () => {
	const { profile } = useProfile();

	if (!profile) return null;

	return (
		<div className="app-profile">
			<div className="app-profile__avatar">
				<Avatar size={64} hash={profile.uid} letter={profile.username} fontSize={24} />
			</div>
			<div className="app-profile__info">
				<span className="app-profile__name">{profile?.username}</span>
				<span className="app-profile__title">{profile?.title}</span>
			</div>
		</div>
	);
};
