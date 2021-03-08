import React from 'react';
import { useChat } from 'gateway/chat/hooks/useChat';

import { PageTitle } from 'ui/@core/components/PageTitle';

import './ChatPage.scss';

export const ChatPage: React.FC = () => {
	// here we can access to chat context
	const { messages } = useChat();

	return (
		<div className="chat">
			<PageTitle text="Chat" />
		</div>
	);
};
