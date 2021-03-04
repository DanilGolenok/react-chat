export class EducationEntity {
	private _school: string;
	private _degree: string;
	private _field: string;
	private _startISO: string;
	private _endISO: string;

	constructor(school: string, degree: string, field: string, startISO: string, endISO: string) {
		this._school = school;
		this._degree = degree;
		this._field = field;
		this._startISO = startISO;
		this._endISO = endISO;
	}

	get school() {
		return this._school;
	}

	get degree() {
		return this._degree;
	}

	get field() {
		return this._field;
	}

	get startISO() {
		return this._startISO;
	}

	get endISO() {
		return this._endISO;
	}
}
