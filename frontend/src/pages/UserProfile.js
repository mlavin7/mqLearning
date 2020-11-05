import React, { Fragment } from 'react';
import UserProfilePage from '../components/UserProfilePage';
import Footer from '../components/Footer';
import { Container } from '../style/Container';

const UserProfile = () => {
	return (
		<Fragment>
			<UserProfilePage />
			<Footer />
		</Fragment>
	);
};

export default UserProfile;
