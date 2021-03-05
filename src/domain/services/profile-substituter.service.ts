import { infiniteIterator } from 'lib/infinite-iterator';
import { EventEmitter } from 'lib/event-emitter';

import { ProfileEntity } from 'domain/entities/profile.entity';

type ChangeProfileListener = (profile: ProfileEntity) => void;

const DEFAULT_INTERVAL = 1000 * 30; // 30 sec

export class ProfileSubstituterService {
	private readonly _profiles: ProfileEntity[];
	private readonly _interval: number;

	private readonly _emitter: EventEmitter<ProfileEntity>;

	constructor(profiles: ProfileEntity[], interval: number = DEFAULT_INTERVAL) {
		this._profiles = profiles;
		this._interval = interval;
		this._emitter = new EventEmitter();
	}

	start() {
		const iterator = infiniteIterator(this._profiles);

		const timer = setInterval(() => {
			const currentProfile = iterator.next().value as ProfileEntity;
			this._emitter.emit(currentProfile);
		}, this._interval);

		return () => clearInterval(timer);
	}

	subscribe(callback: ChangeProfileListener) {
		this._emitter.subscribe(callback);
	}

	unsubscribe(callback: ChangeProfileListener) {
		this._emitter.unsubscribe(callback);
	}
}
