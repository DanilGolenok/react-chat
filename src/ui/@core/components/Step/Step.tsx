import React from 'react';

import './Step.scss';

type Props = {
	title: string;
	subtitle: string;
};

export const Step: React.FC<Props> = ({ title, subtitle }) => (
	<div className="steps">
		<div className="steps__bullet">
			<div className="steps__inner-bullet" />
		</div>
		<div className="steps__info">
			<span className="steps__title">{title}</span>
			<span className="steps__subtitle">{subtitle}</span>
		</div>
	</div>
);
