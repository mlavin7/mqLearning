import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../style/theme';

export const Form = styled.input`
	width: 65%;
	height: 2.5rem;
	padding: ${fontSizes.small};
	font-size: 0.8rem;
	outline: none;
	border: 1px solid transparent;
	border-radius: 0.3rem;
	color: ${colors.dimGray};
	margin: 1rem 0;
	transition: all 0.3s ease-in-out;
	:focus {
		box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
		border: 2px solid #fff;
	}

	${props =>
		props.regHalfInput &&
		css`
			width: 40%;
			margin: 1rem 0.2rem;
		`}
`;
