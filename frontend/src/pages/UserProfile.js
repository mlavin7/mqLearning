import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UserProfilePage from '../components/UserProfilePage';
import Footer from '../components/Footer';
import userAction from '../store/actions/userAction';

const UserProfile = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState(null);

	// const user = useSelector(state => state.user.user);
	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(userAction());
			setUser(data);
		};
		getData();
	}, [dispatch]); 

	return (
		<Fragment>
			{ user && <UserProfilePage user={user} /> }
			<Footer />
		</Fragment>
	);
};

export default UserProfile;
