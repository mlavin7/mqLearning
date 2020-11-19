import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import mqlogo from '../../assets/images/mq-logo.jpg';
import {
	ViewProfileBtnWrapper,
	ViewProfileBtn,
	TopBarHeader,
	TopBarLeft,
	TopBarCenter,
	TopBarRight,
	AvatarContainer,
	UserProfileContainer,
	UserWelcome,
	TokensValidText,
	CompanyText,
	MQLogoWrapper,
	MQLogo,
} from './styled';
import { logoutAction } from '../../store/actions/logoutAction';
import { useDispatch } from 'react-redux';

const TopBar = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const user = useSelector(state => state.user.user);
	console.log(user);

	const logOutHandler = () => {
		history.push('/');
		return dispatch(logoutAction());
	};

	return (
		<Container mainPage>
			<TopBarHeader>
				<TopBarLeft>
					<MQLogoWrapper>
						<MQLogo src={mqlogo} alt='logo' />
						<div className='logo-text'>
							<p>
								Meaning<span>&reg;</span>
							</p>
							<p>Quotient</p>
						</div>
					</MQLogoWrapper>
				</TopBarLeft>
				<TopBarCenter>
					{user ? (
						<TokensValidText user={user}>
							<p className={user.is_staff ? 'hide' : null}>
								{user.isAdmin
									? 'Company Tokens to distribute: '
									: user.is_staff
									? null
									: 'Personal Tokens remaining: '}
								{user.available_credit && user.company.available_credit ? (
									user.isAdmin ? (
										<span>{user.company.available_credit.total_available}</span>
									) : user.is_staff ? null : (
										<span>{user.available_credit.total_available}</span>
									)
								) : (
									'0'
								)}
							</p>
							<p className={user.is_staff ? 'hide' : 'expiry-date'}>
								Valid until:<span> December 31, 2020</span>
							</p>
						</TokensValidText>
					) : (
						'loading...'
					)}
					<TokensValidText user={user}>
						{user.isAdmin ? (
							<Fragment>
								<p>
									Personal tokens remaining:{' '}
									<span>
										{user.available_credit
											? user.available_credit.total_available
											: '0'}
									</span>
								</p>
								<p className='expiry-date'>
									Valid until:<span> December 31, 2020</span>
								</p>
							</Fragment>
						) : null}
					</TokensValidText>
				</TopBarCenter>
				<TopBarRight>
					<AvatarContainer user={user} />
					<UserProfileContainer>
						<UserWelcome>
							Welcome,{' '}
							<span>
								{user.first_name} {user.last_name}
							</span>
							{''}
							{user.isAdmin ? ' [Admin]' : user.is_staff ? '[Staff]' : ''}
						</UserWelcome>
						<CompanyText>Propulsion Academy</CompanyText>
						<ViewProfileBtnWrapper>
							<Link to='/user-profile/'>
								<ViewProfileBtn>Profile</ViewProfileBtn>
							</Link>
							<ViewProfileBtn onClick={logOutHandler}>Logout</ViewProfileBtn>
						</ViewProfileBtnWrapper>
					</UserProfileContainer>
				</TopBarRight>
			</TopBarHeader>
		</Container>
	);
};

export default TopBar;
