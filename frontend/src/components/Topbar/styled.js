import styled, { css } from 'styled-components';
import { colors, fontSizes, borderRadius } from '../../style/theme';
import avatar from '../../assets/images/avatar-placeholder.png';

export const TopBarHeader = styled.div`
	width: 100%;
	height: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 2;
`;

export const TopBarLeft = styled.div`
	width: 15%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TopBarCenter = styled.div`
	width: 55%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const TopBarRight = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: row-reverse;
	justify-content: flex-start;
	align-items: center;
`;

export const MQLogoWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border-bottom-right-radius: 2rem;
	border-top-left-radius: 2rem;

	.logo-text {
		font-size: ${fontSizes.large};
		font-weight: 400;
		margin-left: 1.2rem;
		font-family: 'Libre Baskerville', Tahoma, sans-serif;

		span {
			margin-left: 1.5rem;
			font-size: ${fontSizes.normal};
		}

		p:nth-child(2) {
			margin-left: 1.8rem;
		}
	}
`;

export const MQLogo = styled.img`
	width: 5rem;
	height: auto;
	align-self: center;
`;

export const AvatarContainer = styled.div`
	display: flex;
	background: url(${props => (props.user.avatar ? props.user.avatar : avatar)});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 7rem;
	height: 5rem;
	margin-top: -0.4rem;
	border-radius: 50%;
	border: 0.13rem solid #ba3bbf;
`;

export const UserProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 0.8rem;
	width: 100%;
	height: 100%;
	p {
		margin: 0.1rem 0;
	}
`;

export const UserWelcome = styled.p`
	text-align: right;
	font-size: 0.8rem;
	padding-top: 2rem;
	line-height: 1.5rem;
	width: 100%;
	span {
		font-size: 1rem;
		font-weight: 500;
	}
`;

export const ViewProfileBtnWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 0.5rem;
	width: 100%;
`;

export const ViewProfileBtn = styled.button`
	padding: 0.4rem 1.2rem;
	font-size: ${fontSizes.small};
	outline: none;
	border: none;
	border-radius: ${borderRadius.borderRadiusS};
	transition: linear 0.15s;
	margin: 0 0.2rem;
	cursor: pointer;
	background: #ba3bbf;
	color: ${colors.white};
	:hover {
		background: #82298f;
	}
`;

export const TokensValidText = styled.div`
	width: ${props => (props.user ? (props.user.isAdmin ? '39%' : '50%') : null)};
	padding: 1.2rem;
	font-size: 0.8rem;
	font-weight: 500;
	display: ${props =>
		props.user ? (props.user.isAdmin ? 'flex' : 'none') : null};
	align-items: center;
	flex-direction: column;
	margin: ${props =>
		props.user ? (props.user.isAdmin ? '0 0 0 .8rem' : '0 6rem 0 0 ') : null};
	background: ${colors.purpleMain};
	:nth-child(1) {
		display: ${props =>
			props.user ? (props.user.is_staff ? 'none	' : 'flex') : null};
	}

	p {
		font-size: 0.7rem;
		letter-spacing: 0.02rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	span {
		font-size: 1.06rem;
		font-weight: 300;
		padding-left: 0.2rem;
		color: #82298f;
		text-transform: lowercase;
	}

	.hide {
		display: none;
	}
`;

export const CompanyText = styled.p`
	text-align: right;
	font-size: 0.85rem;
	width: 100%;
`;
