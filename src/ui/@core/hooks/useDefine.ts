import { useMemo } from 'react';

type DefineUpdaterFunction<TValue> = () => TValue;

export const useDefine = <TValue>(updater: DefineUpdaterFunction<TValue>) =>
	useMemo(() => {
		if (typeof updater === 'function') return updater();
		else throw new Error('Define updater should be callable');
	}, []);
