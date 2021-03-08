import React from 'react';

import './Avatar.scss';

type Props = {
	size: number;
};

export const Avatar: React.FC<Props> = ({ size }) => (
	<div className="avatar" style={{ height: size, width: size }}></div>
);
