import React from 'react';

import { ChatMessageEntity } from 'domain/entities/chat-message.entity';
import { Avatar } from 'ui/@core/components/Avatar';

import './ChatMessage.scss';

type Props = {
	chatMessage: ChatMessageEntity;
};

export const ChatMessage: React.FC<Props> = ({ chatMessage }) => (
	<div className="chat-message">
		<div className="chat-message__header">
			<div className="chat-message__avatar">
				<Avatar size={42} hash={chatMessage.sender.uid} letter={chatMessage.sender.username} fontSize={18} />
			</div>
			<div className="chat-message__info">
				<span className="chat-message__sender">{chatMessage.sender.username}</span>
				<span className="chat-message__time">19:52</span>
			</div>
		</div>
		<div className="chat-message__text-container">
			<p className="chat-message__text">{chatMessage.message}</p>
		</div>
	</div>
);
