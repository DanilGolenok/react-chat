import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const dev = process.env.NODE_ENV === 'development';
const logger = createLogger();
const enhancer = dev ? applyMiddleware(thunk, logger) : applyMiddleware(thunk);

export const middleware = dev ? composeWithDevTools(enhancer) : enhancer;
