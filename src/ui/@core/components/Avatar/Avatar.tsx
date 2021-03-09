import React from 'react';

import { colors } from 'ui/assets/const/colors';
import { convertStringToNumber } from 'utils';

import './Avatar.scss';

type Props = {
	hash: string;
	size?: number;
	letter?: string;
	fontSize?: number;
};

export const Avatar: React.FC<Props> = ({ size = 20, letter, hash, fontSize }) => {
	const _letter = letter?.charAt(0) ?? '?';
	const colorIdx = convertStringToNumber(hash) % colors.length;
	const backgroundColor = colors[colorIdx];

	return (
		<div className="avatar" style={{ height: size, width: size, fontSize, backgroundColor }}>
			<span className="avatar__letter">{_letter}</span>
		</div>
	);
};
