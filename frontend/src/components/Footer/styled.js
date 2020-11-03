import styled from 'styled-components';
import { colors, fontSizes } from '../../style/theme';

export const FooterWrapper = styled.footer`
	height: 2rem;
	width: 100%;
	padding: 1rem 2.5rem;
	display: flex;
	align-items: center;
	flex-direction: row;
	color: ${colors.white};
	font-size: ${fontSizes.normal};
`;

export const LeftSide = styled.div`
	width: 50%;
`;

export const RightSide = styled.div`
	text-align: right;
	width: 50%;
	i {
		font-size: 1.2rem;
		margin: 0 1rem;
		cursor: pointer;
	}
	i:nth-child(4) {
		margin-right: 0;
	}
`;
