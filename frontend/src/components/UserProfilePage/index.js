import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopProfileBar } from './styled';
import { Button } from '../../style/Button';
import { Avatar } from './styled';

const UserProfilePage = ({ user }) => {
	const history = useHistory();

	const fullName = `${user.first_name} ${user.last_name}`;

	return (
		<Container>
			<TopProfileBar>
				<div className='avatar-container'>
					<Avatar user={user ? user : null} />
					<Link to='#'>
						<Button editProfileBtn onClick={() => history.push('/mainpage/')}>
							Back
						</Button>
						<Button editProfileBtn>Edit profile</Button>
					</Link>
				</div>
				<div className='user-details-container'>
					<div className='left-side'>
						<h2>{fullName}</h2>
						<p>{user.email}</p>
						<p>{user.company ? user.company.name : null}</p>
						<p>{user.address}</p>
					</div>
					<div className='right-side'>
						<p>{user.zip_code}</p>
						<p>{user.city}</p>
						<p>{user.country}</p>
					</div>
					<div className='tokens-container'>
						<p>
							Company tokens:
							<span>
								{user.company.available_credit
									? user.company.available_credit.total_available
									: null}{' '}
								tokens
							</span>
						</p>
						<p>expiry date: 20/03/2021</p>
					</div>
				</div>
			</TopProfileBar>
		</Container>
	);
};

export default UserProfilePage;
