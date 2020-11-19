import styled from 'styled-components';
import { colors, fontSizes, borderRadius } from '../../style/theme';
import { avatar } from '../../assets/images/avatar-placeholder.png';

export const Avatar = styled.div`
	display: flex;
	align-items: center;
	background: url(${props => (props.user.avatar ? props.user.avatar : avatar)});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	margin-bottom: 0.5rem;
`;

export const TopProfileBar = styled.section`
	width: 100%;
	height: 100%;
	min-height: 25vh;
	padding: 2rem;
	display: flex;
	align-items: center;

	.avatar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 20%;
		height: 100%;
	}

	.user-details-container {
		width: 80%;
		height: 100%;
		padding: 0rem 0.5rem 2.5rem;
		display: flex;
		align-items: flex-start;
		p {
			margin: 0.3rem 0;
			font-size: ${fontSizes.normal};
		}

		.left-side {
			width: 30%;
			height: 100%;

			h2 {
				font-weight: 400;
				font-size: ${fontSizes.large};
			}
		}

		.right-side {
			height: 100%;
			width: 40%;
			padding: 0.4rem 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		.tokens-container {
			width: 30%;
			padding: 1.2rem;
			background: ${colors.purpleMain};
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			p {
				/* margin: 0.2rem 0;
				font-size: ${fontSizes.normal}; */
				font-size: 0.7rem;
        		letter-spacing: 0.02rem;
        		font-weight: 700;
        		text-transform: uppercase;
				span {
					/* margin-left: 0.2rem; */
					font-size: 1.05rem;
					font-weight: 300;
					padding-left: 0.2rem;
					color: #82298f;
					text-transform: lowercase;
				}
			}
		}
	}
`;

export const ProfileDetailsContainer = styled.section`
	width: 100%;
	height: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	.header-container {
		display: flex;
		flex-direction: column;
		align-self: center;

		h1 {
			color: black;
			font-size: ${fontSizes.large};
			align-self: center;
			font-weight: 500;
			letter-spacing: 0.2rem;
			margin-bottom: 1rem;
		}
	}
	.profile-field-container {
		display: flex;
		flex-direction: column;
		width: 50%;

		.profile-fields {
			display: flex;
			width: 70%;
			height: 45%;
			margin: 0rem auto;
			/* padding: 0.5rem; */
			flex-direction: row;
			align-items: center;
			justify-content: center;

		.profile-field-title {
			color: black;
			margin: 1rem;
			width: 100%;
			font-size: ${fontSizes.normal};
		}

		input {
			border: 1px solid rgba(0, 0, 0, 0.35);
			width: 60%;
			height: 2.55rem;
			padding: 0.9rem;
			outline: none;
			border-radius: 0.3rem;
			color: rgba(0, 0, 0, 0.85);
			margin: 0.7rem 0;
			font-size: ${fontSizes.normal};
		}

		input[type='file'] {
			display: none;
		}

		.avatar-upload-btn {
			padding: 0.5rem 1rem;
			margin: 0.6rem;
			font-size: ${fontSizes.small};
			font-weight: 300;
			background: #ba3bbf;
			color: ${colors.white};
			border-radius: ${borderRadius.borderRadiusS};
			:hover {
				background: #82298f;
			}
		}
	}

	.save-changes-btn-container {
		display: flex;
		align-self: center;
	}

`;
