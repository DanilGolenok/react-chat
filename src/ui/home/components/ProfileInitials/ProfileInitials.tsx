import React from 'react';

import { Profile } from 'gateway/profile/models/profile';
import { Avatar } from 'ui/@core/components/Avatar';

import './ProfileInitials.scss';

type Props = {
	profile: Profile;
};

export const ProfileInitials: React.FC<Props> = ({ profile }) => (
	<div className="profile">
		<div className="profile__avatar">
			<Avatar size={128} />
		</div>
		<div className="profile__initials">
			<p className="profile__name">{profile.username}</p>
			<p className="profile__title">{profile.title}</p>
			<span className="profile__location">{profile.location}</span>
		</div>
	</div>
);
