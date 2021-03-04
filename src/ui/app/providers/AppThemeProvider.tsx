import React from 'react';

import { Theme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { theme as defaultTheme } from '../theme';

type Props = {
	theme?: Theme;
};

export const AppThemeProvider: React.FC<Props> = ({ theme = defaultTheme, children }) => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		{children}
	</ThemeProvider>
);
