import React from 'react';
import { useChat } from 'gateway/chat/hooks/useChat';

import './ChatPage.scss';

export const ChatPage: React.FC = () => {
	// here we can access to chat context
	const { messages } = useChat();

	return <div></div>;
};
