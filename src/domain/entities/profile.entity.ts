import * as uuid from 'uuid';

import { EducationEntity } from './education.entity';
import { WorkExperienceEntity } from './work-experience.entity';

export class ProfileEntity {
	private _uid: string;
	private _username: string;
	private _avatar?: string;
	private _title?: string;
	private _location?: string;

	private _workExperience: WorkExperienceEntity[];
	private _education: EducationEntity[];

	constructor(username: string, avatar?: string, title?: string, location?: string) {
		this._uid = uuid.v4();

		this._username = username;
		this._avatar = avatar;
		this._title = title;
		this._location = location;

		this._workExperience = [];
		this._education = [];
	}

	addWorkExperience(experience: WorkExperienceEntity) {
		this._workExperience.push(experience);
	}

	addEducation(education: EducationEntity) {
		this._education.push(education);
	}

	get uid() {
		return this._uid;
	}

	get username() {
		return this._username;
	}

	get avatar() {
		return this._avatar;
	}

	get title() {
		return this._title;
	}

	get location() {
		return this._location;
	}

	get workExperience() {
		return this._workExperience;
	}

	get education() {
		return this._education;
	}
}
