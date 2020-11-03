import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const Btn = styled.a`
	align-items: center;
	justify-content: center;

	${props =>
		props.outline &&
		css`
			background: blue;
			padding: 0.8rem;
		`}

	${props =>
		props.red &&
		css`
			font-size: ${fontSizes.normal};
			padding: 1.5rem;
			background: white;
			transition: linear 0.1s;

			:hover {
				background: ${colors.purpleMainHover};
			}
		`}
`;
