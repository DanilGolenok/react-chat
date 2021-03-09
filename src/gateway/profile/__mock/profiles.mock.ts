import { ProfileEntity } from 'domain/entities/profile.entity';
import { WorkExperienceEntity } from 'domain/entities/work-experience.entity';

const workExperience = [
	new WorkExperienceEntity('UI/UX Developer', 'Google'),
	new WorkExperienceEntity('QA', 'Amazon'),
	new WorkExperienceEntity('Project Manager', 'Facebook'),
	new WorkExperienceEntity('Frontend Developer', 'Apple'),
];

const profiles = [
	new ProfileEntity('Allison Abbott', '', 'UI/UX Designer', 'Lisbon'),
	new ProfileEntity('Austin Kaori', '', 'Software Engineer', 'London'),
	new ProfileEntity('Chris Barrera', '', 'Project Manager', 'California'),
	new ProfileEntity('Kane Michiyo', '', 'Freelancer', 'Paris'),
	new ProfileEntity('Naoko Lee', '', 'QA', 'Praha'),
	new ProfileEntity('Debby Ortiz', '', 'Web Developer', 'Rome'),
	new ProfileEntity('Cardenas Etsuko', '', 'Fullstack Developer', 'Madrid'),
];

export const profilesMock = profiles.map((profile, idx) => {
	let experienceSize = idx % workExperience.length;
	experienceSize = experienceSize <= 1 ? 2 : experienceSize; // should be at least 2 work places

	for (let i = 0; i < experienceSize; ++i) {
		profile.addWorkExperience(workExperience[i]);
	}

	return profile;
});
