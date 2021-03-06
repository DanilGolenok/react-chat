import { FAKE_PROFILES } from '../__fake__/profiles';
import { ProfileSubstituterService } from '../services/profile-substituter.service';

describe('Profile Substituter', () => {
	const INTERVAL = 1000 * 30;
	let profileService: ProfileSubstituterService;
	let mockHandler = jest.fn().mockImplementation((_: any) => {});

	beforeEach(() => {
		profileService = new ProfileSubstituterService(FAKE_PROFILES, INTERVAL);
	});

	describe('Start interval', () => {
		let end: () => void;

		beforeEach(() => {
			end = profileService.start();
			profileService.subscribe(mockHandler);
		});

		afterEach(() => {
			profileService.unsubscribe(mockHandler);
			end();
		});

		it('profile change handler is called', () => {
			jest.advanceTimersByTime(INTERVAL);

			expect(mockHandler).toHaveBeenCalledTimes(1);
		});

		it('profile change handler is not called before delay is over', () => {
			jest.advanceTimersByTime(INTERVAL - 1000);

			expect(mockHandler).not.toHaveBeenCalled();
		});

		it('profile change handler is called as many times depending on the interval delay', () => {
			const NUMBER_OF_CALLS = 5;
			jest.advanceTimersByTime(INTERVAL * NUMBER_OF_CALLS);

			expect(mockHandler).toHaveBeenCalledTimes(NUMBER_OF_CALLS);
		});

		it('profile change handler is called with first item at the first call', () => {
			const firstItem = FAKE_PROFILES[0];
			jest.advanceTimersByTime(INTERVAL);

			expect(mockHandler).toHaveBeenCalledWith(firstItem);
		});
	});

	describe('End interval', () => {
		it('when substituter is stopped the handler should not to be called anymore', () => {
			profileService.subscribe(mockHandler);
			const end = profileService.start();
			end();
			jest.advanceTimersByTime(INTERVAL * 5);

			expect(mockHandler).toHaveBeenCalledTimes(0);
		});
	});
});
