import React from 'react';

import { Link } from 'react-router-dom';
import { IconButton } from '../IconButton';

type Props = React.ComponentProps<typeof IconButton> & {
	link: string;
};

export const RedirectIconButton: React.FC<Props> = ({ link, ...props }) => (
	<Link to={link}>
		<IconButton {...props} />
	</Link>
);
