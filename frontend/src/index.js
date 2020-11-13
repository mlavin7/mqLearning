import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/theme';
import * as theme from './style/theme';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { loginReducer } from './store/reducers/loginReducer';

try {
	const token = localStorage.getItem('token')
	if (token) {
		store.dispatch(loginReducer(token));
	}
} catch (error) {
	
}


ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</Provider>,
	root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
