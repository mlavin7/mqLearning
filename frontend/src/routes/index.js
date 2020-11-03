import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import MainPage from '../pages/MainPage';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/mainpage' component={MainPage} />
			</Switch>
		</Router>
	);
};

export default Routes;
