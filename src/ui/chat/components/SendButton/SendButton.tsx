import React from 'react';
import { SendIcon } from 'ui/assets/components/SendIcon';

import './SendButton.scss';

type Props = React.ComponentPropsWithRef<'button'>;

export const SendButton: React.FC<Props> = (props) => (
	<button className="send-button" {...props}>
		<SendIcon className="send-button__icon" />
	</button>
);
