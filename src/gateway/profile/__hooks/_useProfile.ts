import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMount, useDefine } from 'ui/@core/hooks';
import { profilesMock } from '../__mock/profiles.mock';
import { profileMapper } from '../mapper/profile.mapper';

import { ProfileEntity } from 'domain/entities/profile.entity';
import { ProfileSubstituterService } from 'domain/services/profile-substituter.service';

import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

export const _useProfile = () => {
	const _profileService = useDefine(() => new ProfileSubstituterService(profilesMock));

	const dispatch = useDispatch();
	const profile = useSelector(selectors.getCurrentProfile);

	const changeProfileHandler = useCallback((newProfile: ProfileEntity) => {
		const _profile = profileMapper(newProfile);
		dispatch(actions.setCurrentProfile(_profile));
	}, []);

	useMount(() => {
		_profileService.subscribe(changeProfileHandler);
		const end = _profileService.start();

		return () => end();
	});

	return { profile };
};
