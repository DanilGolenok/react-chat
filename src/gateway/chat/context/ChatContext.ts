import { createContext } from 'react';
import { _useChat } from '../__hooks/_useChat';

type ChatContextType = ReturnType<typeof _useChat>;

export const ChatContext = createContext({} as ChatContextType);
