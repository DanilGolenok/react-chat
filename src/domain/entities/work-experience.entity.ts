export class WorkExperienceEntity {
	private _position: string;
	private _company: string;
	private _startISO: string;
	private _endISO?: string;

	constructor(position: string, company: string, startISO: string, endISO?: string) {
		this._position = position;
		this._company = company;
		this._startISO = startISO;
		this._endISO = endISO;
	}

	get position() {
		return this._position;
	}

	get company() {
		return this._company;
	}

	get startISO() {
		return this._startISO;
	}

	get endISO() {
		return this._endISO;
	}
}
