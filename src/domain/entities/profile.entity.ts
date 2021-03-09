import * as uuid from 'uuid';

import { EducationEntity } from './education.entity';
import { WorkExperienceEntity } from './work-experience.entity';

export class ProfileEntity {
	public uid: string;
	public username: string;
	public avatar?: string;
	public title?: string;
	public location?: string;

	public workExperience: WorkExperienceEntity[];
	public education: EducationEntity[];

	constructor(username: string, avatar?: string, title?: string, location?: string) {
		this.uid = uuid.v4();

		this.username = username;
		this.avatar = avatar;
		this.title = title;
		this.location = location;

		this.workExperience = [];
		this.education = [];
	}

	addWorkExperience(experience: WorkExperienceEntity) {
		this.workExperience.push(experience);
	}

	addEducation(education: EducationEntity) {
		this.education.push(education);
	}
}
