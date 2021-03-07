import { useContext } from 'react';
import { NavigationActiveLinkContext } from '../context/NavigationActiveLinkContext';

export const useActiveLink = () => useContext(NavigationActiveLinkContext);
