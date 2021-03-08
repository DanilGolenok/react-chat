import React from 'react';

import './IconButton.scss';

type Props = {
	icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const IconButton: React.FC<Props> = ({ icon: Icon }) => (
	<button className="app-icon-button">
		<Icon className="app-icon-button__icon" />
	</button>
);
