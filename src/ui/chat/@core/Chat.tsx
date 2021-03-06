import React from 'react';

import { ChatProvider } from 'gateway/chat/providers/ChatProvider';
import { ChatPage } from '../pages/ChatPage';

export const Chat: React.FC = () => (
	<ChatProvider>
		<ChatPage />
	</ChatProvider>
);
