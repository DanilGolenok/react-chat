import React from 'react';
import { useChat } from 'gateway/chat/hooks/useChat';

import { PageTitle } from 'ui/@core/components/PageTitle';
import { ChatMessagesList } from 'ui/chat/components/ChatMessagesList';
import { SendMessageForm } from 'ui/chat/forms/SendMessageForm';

import './ChatPage.scss';

export const ChatPage: React.FC = () => {
	const { messages } = useChat();

	return (
		<div className="chat">
			<PageTitle text="Chat" />
			<div className="chat__container">
				<div className="chat__messages">
					<ChatMessagesList messages={messages} />
				</div>
				<div className="chat__input">
					<SendMessageForm />
				</div>
			</div>
		</div>
	);
};
