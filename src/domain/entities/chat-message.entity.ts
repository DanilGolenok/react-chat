import { ProfileEntity } from './profile.entity';

export class ChatMessageEntity {
	private _sender: ProfileEntity;
	private _message: string;
	private _timeISO: string;

	constructor(sender: ProfileEntity, message: string, timeISO: string) {
		this._sender = sender;
		this._message = message;
		this._timeISO = timeISO;
	}

	get sender() {
		return this._sender;
	}

	get message() {
		return this._message;
	}

	get timeISO() {
		return this._timeISO;
	}
}
