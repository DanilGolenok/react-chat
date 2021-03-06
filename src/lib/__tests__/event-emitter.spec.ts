import { EventEmitter } from '../event-emitter';

describe('Event Emitter', () => {
	let emitter: EventEmitter<any>;
	let mockHandler = jest.fn().mockImplementation((_: any) => {});
	let mockHandler2 = jest.fn().mockImplementation((_: any) => {});

	beforeEach(() => {
		emitter = new EventEmitter<any>();
	});

	it('initialize an empty array of listeners', () => {
		expect(emitter.listeners).toHaveLength(0);
	});

	describe('Subscribe', () => {
		beforeEach(() => {
			emitter.subscribe(mockHandler);
		});

		it('subscribe method adds an event handler to the listeners array', () => {
			expect(emitter.listeners).toHaveLength(1);
		});

		it('subscribe method adds an expected event handler', () => {
			expect(emitter.listeners).toEqual(expect.arrayContaining([mockHandler]));
		});
	});

	describe('Unsubscribe', () => {
		it('unsubscribe should remove event handler from the listeners array', () => {
			emitter.subscribe(mockHandler);
			emitter.unsubscribe(mockHandler);

			expect(emitter.listeners).toEqual(expect.not.arrayContaining([mockHandler]));
		});
	});

	describe('Emit', () => {
		const FAKE_PARAM = { data: 1 };

		it('emit method should call event handler', () => {
			emitter.subscribe(mockHandler);
			emitter.emit(null);

			expect(mockHandler).toHaveBeenCalled();
		});

		it('emit method should call multiple event handlers', () => {
			emitter.subscribe(mockHandler);
			emitter.subscribe(mockHandler2);
			emitter.emit(null);

			expect(mockHandler).toHaveBeenCalled();
		});

		it('event handler is called with a specific param', () => {
			emitter.subscribe(mockHandler);
			emitter.emit(FAKE_PARAM);

			expect(mockHandler).toHaveBeenCalledWith(FAKE_PARAM);
		});

		it('all event handlers should be called with the same param', () => {
			emitter.subscribe(mockHandler);
			emitter.subscribe(mockHandler2);
			emitter.emit(FAKE_PARAM);

			expect(mockHandler).toHaveBeenCalledWith(FAKE_PARAM);
		});
	});
});
