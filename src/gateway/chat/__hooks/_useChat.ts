import { useDispatch, useSelector } from 'react-redux';

import { ProfileEntity } from 'domain/entities/profile.entity';
import { ChatMessageEntity } from 'domain/entities/chat-message.entity';

import * as actions from '../state/actions';
import * as selectors from '../state/selectors';

export const _useChat = () => {
	const dispatch = useDispatch();
	const messages = useSelector(selectors.getMessages);

	const sendMessage = (sender: ProfileEntity, message: string) => {
		const chatMessage = new ChatMessageEntity(sender, message, new Date().toISOString());
		dispatch(actions.addMessage(chatMessage));
	};

	return { messages, sendMessage };
};
