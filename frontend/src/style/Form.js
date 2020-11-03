import styled, { css } from 'styled-components';
import { fontSizes } from '../style/theme';

export const Form = styled.input`
	width: 80%;
	height: 3rem;
	padding: 0.8rem;
	font-size: ${fontSizes.normal};
	outline: none;
	border: 1px solid transparent;
	border-radius: 0.3rem;
	margin: 1rem 0;


	${props =>
		props.regHalfInput &&
		css`
			width: 50%;
			margin: 1rem 0.2rem;
		`}

	${props =>
		props.loginForm &&
		css`
			transition: all 0.3s ease-in-out;

			:focus {
				box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
				border: 2px solid #fff;
			}
		`}
`;
