import { AppState } from 'store';

export const getMessages = (state: AppState) => state.chat.messages;
