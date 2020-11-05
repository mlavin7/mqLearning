import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import UserProfile from '../pages/Profile';
import Workshop from '../pages/Workshop';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/main-page' component={MainPage} />
				<Route exact path='/user-profile/' component={UserProfile} />
				<Route exact path='/workshop-single/' component={Workshop} />
				{/* <Route
					exact
					path='/workshop-single/:workshopId/'
					component={Workshop}
				/> */}
			</Switch>
		</Router>
	);
};

export default Routes;
