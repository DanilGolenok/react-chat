import React from 'react';

import { SendButton } from '../SendButton';
import { InputField } from 'ui/@core/components/InputField';

import './InputMessage.scss';

export const InputMessage: React.FC = () => (
	<div className="input-message">
		<div className="input-message__field">
			<InputField placeholder="Type your message..." />
		</div>
		<div className="input-message__send">
			<SendButton />
		</div>
	</div>
);
