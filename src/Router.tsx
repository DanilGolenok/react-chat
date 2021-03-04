import { Router } from 'react-typesafe-routes';

const Noop: React.FC = () => null;

export const router = Router((route) => ({
	home: route('/', {
		component: Noop,
	}),
}));
