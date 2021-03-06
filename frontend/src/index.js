import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/theme';
import * as theme from './style/theme';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import userAction from './store/actions/userAction';

try {
	const token = localStorage.getItem('token')
	if (token) {
		store.dispatch(userAction(token));
	}
} catch (error) {	
}


const root = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</Provider>,
	root
);
