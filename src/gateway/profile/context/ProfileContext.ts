import { createContext } from 'react';
import { _useProfile } from '../__hooks/_useProfile';

type ProfileContextType = ReturnType<typeof _useProfile>;

export const ProfileContext = createContext({} as ProfileContextType);
