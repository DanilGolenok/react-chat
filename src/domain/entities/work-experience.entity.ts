export class WorkExperienceEntity {
	public position: string;
	public company: string;
	public startISO: string;
	public endISO?: string;

	constructor(position: string, company: string, startISO: string, endISO?: string) {
		this.position = position;
		this.company = company;
		this.startISO = startISO;
		this.endISO = endISO;
	}
}
