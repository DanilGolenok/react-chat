import React, { useRef } from 'react';
import { useChatAutoScroll } from 'ui/chat/hooks/useChatAutoScroll';

import { ChatMessageEntity } from 'domain/entities/chat-message.entity';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { NoMessages } from '../NoMessages';

import './ChatMessagesList.scss';

type Props = {
	messages: ChatMessageEntity[];
};

export const ChatMessagesList: React.FC<Props> = ({ messages }) => {
	const listRef = useRef<HTMLDivElement | null>(null);

	useChatAutoScroll(messages, listRef);

	if (messages.length === 0) return <NoMessages />;

	return (
		<div ref={listRef} className="chat-messages-list">
			{messages.map((chatMessage) => (
				<ChatMessage key={chatMessage.uid} chatMessage={chatMessage} />
			))}
		</div>
	);
};
