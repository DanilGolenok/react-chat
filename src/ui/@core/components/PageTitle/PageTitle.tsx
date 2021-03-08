import React from 'react';

import './PageTitle.scss';

type Props = {
	text?: string;
};

export const PageTitle: React.FC<Props> = ({ text = '', children }) => (
	<h3 className="app-page-title">{children ?? text}</h3>
);
