type EventListener<T = undefined> = T extends undefined ? (data?: T) => void : (data: T) => void;

export class EventEmitter<TData extends any> {
	private readonly _listeners: EventListener<TData>[];

	constructor() {
		this._listeners = [];
	}

	get listeners() {
		return this._listeners;
	}

	emit(data: TData) {
		this._listeners.forEach((callback) => callback(data));
	}

	subscribe(callback: EventListener<TData>) {
		this._listeners.push(callback);
	}

	unsubscribe(callback: EventListener<TData>) {
		const idx = this._listeners.indexOf(callback);
		if (idx !== -1) this._listeners.splice(idx, 1);
	}
}
