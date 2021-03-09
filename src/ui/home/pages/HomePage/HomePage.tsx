import React from 'react';
import { useProfile } from 'gateway/profile/hooks/useProfile';

import { Step } from 'ui/@core/components/Step';
import { PageTitle } from 'ui/@core/components/PageTitle';
import { ProfileInitials } from 'ui/home/components/ProfileInitials';

import './HomePage.scss';

export const HomePage: React.FC = () => {
	const { profile } = useProfile();

	if (!profile) return null;

	return (
		<div className="home-page">
			<PageTitle text="Home Page" />
			<div className="home-page__container">
				<div className="home-page__profile">
					<ProfileInitials profile={profile!} />
				</div>
				{profile.workExperience.length > 0 && (
					<div className="home-page__work-experience">
						<h4 className="home-page__section-title">Work Experience</h4>
						<div className="home-page__experience-list">
							{profile.workExperience.map(({ position, company }) => (
								<Step key={position} title={position} subtitle={company} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
