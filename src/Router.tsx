import { Router } from 'react-typesafe-routes';
import { HomePage } from './pages';

export const router = Router(route => ({
	home: route('/', {
		component: HomePage,
	}),
}));
