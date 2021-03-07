import { createContext } from 'react';
import { _useActiveLink } from '../__hooks/_useActiveLink';

type NavigationActiveLinkContextType = ReturnType<typeof _useActiveLink>;

export const NavigationActiveLinkContext = createContext({} as NavigationActiveLinkContextType);
