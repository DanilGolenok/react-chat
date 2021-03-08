import React from 'react';
import { useProfile } from 'gateway/profile/hooks/useProfile';

import { PageTitle } from 'ui/@core/components/PageTitle';
import { ProfileInitials } from 'ui/home/components/ProfileInitials';

import './HomePage.scss';

export const HomePage: React.FC = () => {
	const { profile } = useProfile();

	return (
		<div className="home-page">
			<PageTitle text="Home Page" />
			<div className="home-page__container">
				<div className="home-page__profile">
					<ProfileInitials profile={profile!} />
				</div>
			</div>
		</div>
	);
};
