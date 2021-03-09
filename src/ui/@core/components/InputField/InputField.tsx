import React from 'react';

import './InputField.scss';

type Props = React.ComponentProps<'input'>;

export const InputField: React.FC<Props> = (props) => <input {...props} className="input-field" />;
