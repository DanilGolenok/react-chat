import { ProfileEntity } from './profile.entity';

export class ChatMessageEntity {
	public sender: ProfileEntity;
	public message: string;
	public timeISO: string;

	constructor(sender: ProfileEntity, message: string, timeISO: string) {
		this.sender = sender;
		this.message = message;
		this.timeISO = timeISO;
	}
}
