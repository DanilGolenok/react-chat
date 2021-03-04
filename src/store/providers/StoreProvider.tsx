import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Typography } from '@material-ui/core';

import { store, persistor } from '../setup';

export const StoreProvider: React.FC = ({ children }) => (
	<Provider store={store}>
		<PersistGate loading={<Typography>Loading...</Typography>} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
);
