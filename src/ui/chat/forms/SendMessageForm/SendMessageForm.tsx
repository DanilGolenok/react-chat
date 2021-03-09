import React from 'react';
import { useChat } from 'gateway/chat/hooks/useChat';
import { useProfile } from 'gateway/profile/hooks/useProfile';
import { useFormValue } from 'ui/@core/hooks';

import { SendButton } from '../../components/SendButton';
import { InputField } from 'ui/@core/components/InputField';

import './SendMessageForm.scss';

export const SendMessageForm: React.FC = () => {
	const { profile } = useProfile();
	const { sendMessage } = useChat();

	const { value, refresh, onChange } = useFormValue();

	const onSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (value.trim().length !== 0 && !!profile) {
			sendMessage(profile, value);
			refresh();
		}
	};

	return (
		<form onSubmit={onSendMessage} className="send-message">
			<div className="send-message__field">
				<InputField placeholder="Type your message..." value={value} onChange={onChange} />
			</div>
			<div className="send-message__button">
				<SendButton />
			</div>
		</form>
	);
};
