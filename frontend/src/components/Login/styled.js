import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const LoginContainer = styled.section`
	height: 80vh;
	width: 100%;
	max-height: 40rem;
	text-align: center;

	.cta {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		margin: 0 auto;
		width: 100%;
		height: 10rem;
		text-transform: uppercase;
		-webkit-animation: slideIn 2s forwards;
		-moz-animation: slideIn 2s forwards;
		animation: slideIn 2s forwards;

		@-webkit-keyframes slideIn {
			0% {
				transform: translateX(-900px);
			}
			100% {
				transform: translateX(0);
			}
		}
		@-moz-keyframes slideIn {
			0% {
				transform: translateX(-900px);
			}
			100% {
				transform: translateX(0);
			}
		}
		@keyframes slideIn {
			0% {
				transform: translateX(-900px);
			}
			100% {
				transform: translateX(0);
			}
		}

		.top {
			font-size: ${fontSizes.large};
			background: rgba(186, 59, 191, 0.55);
			margin-bottom: 0.4rem;
			padding: 0.7rem 8rem 0.7rem 1.5rem;
			font-weight: 600;
			color: white;
			position: relative;
			:after {
				content: '';
				position: absolute;
				width: 6rem;
				height: 4.2rem;
				background: white;
				top: -0.2rem;
				right: -2rem;
				transform: skew(40deg);
			}
		}
		.bottom {
			font-size: ${fontSizes.large};
			background: rgba(130, 41, 143, 0.55);
			margin-bottom: 0.4rem;
			padding: 0.7rem 4rem 0.7rem 1.5rem;
			color: white;
			font-weight: 200;
			position: relative;
			:after {
				content: '';
				position: absolute;
				width: 6rem;
				height: 4.2rem;
				background: white;
				top: -0.2rem;
				right: -4rem;
				transform: skew(40deg);
			}
		}
	}
`;

export const Title = styled.div`
	text-align: center;
	width: 100%;
	margin: 3em auto -1.2rem;

	h1 {
		color: ${colors.dimGray};
		font-size: ${fontSizes.large};
		font-weight: 300;
		letter-spacing: 0.2rem;
		font-weight: 400;
	}
`;

// export const LeftSide = styled.div`
// 	width: 50%;
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// `;

export const RegMessage = styled.div`
	margin: -3rem 0 2rem;
	text-align: center;

	p {
		color: ${colors.dimGray};
		padding: 1rem;
		font-weight: 400;
	}
`;

// export const RightSide = styled.div`
// 	width: 50%;
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;

// 	::before {
// 		content: '';
// 		position: absolute;
// 		top: 50%;
// 		left: 0;
// 		transform: translateY(-50%);
// 		width: 2px;
// 		height: 80%;
// 		background: ${colors.white};
// 		opacity: 0.7;
// 	}
// `;

export const InputsContainer = styled.div`
	display: flex;
	width: 70%;
	height: 45%;
	margin: 0 auto 2rem auto;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	div {
		display: flex;
		justify-content: center;
		width: 80%;
	}

	${props =>
		props.registration &&
		css`
			width: 85%;
			height: 55%;
		`}

	${props =>
		props.registrationVerifyCode &&
		css`
			width: 90%;
			height: 45%;
		`}
`;
