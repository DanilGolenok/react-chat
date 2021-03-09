import React, { useState } from 'react';

export const useFormValue = () => {
	const [value, setValue] = useState('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const _value = event.target.value;
		setValue(_value);
	};

	return { value, onChange };
};
