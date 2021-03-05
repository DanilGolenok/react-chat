import React from 'react';
import { _useChat } from '../__hooks/_useChat';

import { ChatContext } from '../context/ChatContext';

export const ChatProvider: React.FC = ({ children }) => {
	const _context = _useChat();

	return <ChatContext.Provider value={_context}>{children}</ChatContext.Provider>;
};
