export class EducationEntity {
	public school: string;
	public degree: string;
	public field: string;
	public startISO: string;
	public endISO: string;

	constructor(school: string, degree: string, field: string, startISO: string, endISO: string) {
		this.school = school;
		this.degree = degree;
		this.field = field;
		this.startISO = startISO;
		this.endISO = endISO;
	}
}
