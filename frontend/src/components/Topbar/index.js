import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/svgs/avatar.svg';
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
	Avatar,
	UserProfileContainer,
	UserWelcome,
	TokensValidText,
	CompanyText,
	MQLogoWrapper,
	MQLogo,
} from './styled';

const TopBar = () => {
	return (
		<TopBarHeader>
			<TopBarLeft>
				<MQLogoWrapper>
					<MQLogo src={mqlogo} alt='logo' />
				</MQLogoWrapper>
			</TopBarLeft>
			<TopBarCenter>
				<TokensValidText>
					Tokens Remaining: 3<br></br>
					Valid Until: 31 / 12 / 2020
				</TokensValidText>
			</TopBarCenter>
			<TopBarRight>
				<AvatarContainer>
					<Avatar src={avatar}></Avatar>
				</AvatarContainer>
				<UserProfileContainer>
					<UserWelcome>Welcome, User</UserWelcome>
					<CompanyText>Company: Zurich</CompanyText>
					<ViewProfileBtnWrapper>
						<ViewProfileBtn>
							<Link to='/user-profile/'>View Your Profile</Link>
						</ViewProfileBtn>
					</ViewProfileBtnWrapper>
				</UserProfileContainer>
			</TopBarRight>
		</TopBarHeader>
	);
};

export default TopBar;
