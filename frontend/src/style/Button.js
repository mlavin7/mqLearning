import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../style/theme';

export const Button = styled.button`
	padding: 0.8rem 2.5rem;
	font-size: ${fontSizes.normal};
	background: ${colors.purpleMain};
	color: ${colors.white};
	outline: none;
	border: none;
	border-radius: 0.5rem;
	transition: linear 0.15s;
	cursor: pointer;

	:hover {
		background: ${colors.purpleMainHover};
	}

	${props =>
		props.registerBtn &&
		css`
			letter-spacing: 0.1rem;
			margin-top: 1.3rem;
			font-weight: 300;
			border-radius: 1.5rem;
			:hover {
				background: ${colors.white};
				color: ${colors.purpleMain};
			}
		`}

	${props =>
		props.loginBtn &&
		css`
			letter-spacing: 0.1rem;
			margin-top: 1.3rem;
			font-weight: 300;
			border-radius: 1.5rem;
			:hover {
				background: ${colors.white};
				color: ${colors.purpleMain};
			}
		`}
`;
