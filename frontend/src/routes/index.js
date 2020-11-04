import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import Workshop from '../pages/Workshop';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/mainpage' component={MainPage} />
				<Route exact path='/workshop-single' component={Workshop} />
			</Switch>
		</Router>
	);
};

export default Routes;
