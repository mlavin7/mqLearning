import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../style/theme';

export const Button = styled.button`
	padding: 0.5rem 2rem;
	font-size: ${fontSizes.normal};
	background: ${colors.purpleMain};
	color: ${colors.white};
	outline: none;
	border: none;
	border-radius: 0.3rem;
	transition: linear 0.15s;
	cursor: pointer;

	:hover {
		background: ${colors.purpleMainHover};
	}

	${props => {
		if (props.btnNavDashboard) {
			return `
			width: 15rem;
			height: 4rem;
		
		`;
	}
}}


`


