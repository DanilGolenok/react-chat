import * as types from './types';

import { ChatMessageEntity } from 'domain/entities/chat-message.entity';
import { ChatActionType } from './actions';

interface ChatState {
	messages: ChatMessageEntity[];
}

const initialState: ChatState = {
	messages: [],
};

export const chatReducer = (state: ChatState = initialState, action: ChatActionType): ChatState => {
	switch (action.type) {
		case types.ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};

		default:
			return state;
	}
};
