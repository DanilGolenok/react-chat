import React from 'react';
import { useChat } from 'gateway/chat/hooks/useChat';

import { PageTitle } from 'ui/@core/components/PageTitle';
import { InputMessage } from 'ui/chat/components/InputMessage';

import './ChatPage.scss';

export const ChatPage: React.FC = () => {
	// here we can access to chat context
	const { messages } = useChat();

	return (
		<div className="chat">
			<PageTitle text="Chat" />
			<div className="chat__container">
				<div className="chat__messages"></div>
				<div className="chat__input">
					<InputMessage />
				</div>
			</div>
		</div>
	);
};
