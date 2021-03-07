type ClassnamesOptions = {
	[key: string]: boolean;
};

export const computeClassnames = (baseClassName: string, options: ClassnamesOptions) => {
	let computed = baseClassName;

	Object.entries(options).forEach(([className, enabled]) => {
		if (enabled) computed += ` ${className}`;
	});

	return computed;
};
