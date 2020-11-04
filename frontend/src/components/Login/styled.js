import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const LoginContainer = styled.section`
	height: 80vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	max-height: 40rem;
`;

export const Title = styled.div`
	text-align: center;
	width: 100%;
	margin: 8rem auto 0;
	
	h1 {
		color: ${colors.white};
		font-size: ${fontSizes.medium};
		letter-spacing: 0.2rem;
	}

`;

export const LeftSide = styled.div`
	width: 50%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RegMessage = styled.div`
	margin: -3rem 0 2rem;
	text-align: center;

	h3 {
		color: ${colors.white};
		padding: 1rem;
		font-weight: 300;
	}
`;

export const RightSide = styled.div`
	width: 50%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 2px;
		height: 80%;
		background: ${colors.white};
		opacity: 0.7;
	}
`;

export const InputsContainer = styled.div`
	display: flex;
	width: 70%;
	height: 45%;
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
