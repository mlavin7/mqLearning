import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigateDashboard from '../components/NavDashboard';
import Login from '../components/Login';


const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />git branch
			</Switch>
		</Router>
	);
};

export default Routes;
