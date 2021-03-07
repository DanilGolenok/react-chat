import { Profile } from '../models/profile';
import { ProfileEntity } from 'domain/entities/profile.entity';

export const profileMapper = (profile: ProfileEntity): Profile => ({
	uid: profile.uid,
	username: profile.username,
	avatar: profile.avatar,
	title: profile.title,
	location: profile.location,
});
