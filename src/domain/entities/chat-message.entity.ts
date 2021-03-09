import { ProfileEntity } from './profile.entity';
import * as uuid from 'uuid';

export class ChatMessageEntity {
	public uid: string;
	public sender: ProfileEntity;
	public message: string;
	public timeISO: string;

	constructor(sender: ProfileEntity, message: string, timeISO: string) {
		this.uid = uuid.v4();
		this.sender = sender;
		this.message = message;
		this.timeISO = timeISO;
	}
}
