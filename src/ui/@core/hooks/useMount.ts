import { useLayoutEffect, EffectCallback } from 'react';

export const useMount = (callback: EffectCallback) => {
	useLayoutEffect(callback, []);
};
