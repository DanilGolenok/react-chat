import * as types from './types';

import { Action } from 'store/types';
import { ChatMessageEntity } from 'domain/entities/chat-message.entity';

type AddMessageAction = Action<typeof types.ADD_MESSAGE, ChatMessageEntity>;

export const addMessage = (message: ChatMessageEntity): AddMessageAction => ({
	type: types.ADD_MESSAGE,
	payload: message,
});

export type ChatActionType = AddMessageAction;
