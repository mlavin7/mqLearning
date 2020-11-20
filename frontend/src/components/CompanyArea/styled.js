import styled from 'styled-components';
import cardBg from '../../assets/images/card-bg1.jpg';
import { colors, borderRadius } from '../../style/theme';

export const CompanyAreaWrapper = styled.section`
	width: 90%;
	min-height: 27rem;
	margin: 0 1.2rem 0 0;
	background: url(${cardBg});
	background-position: 95%;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: ${borderRadius.borderRadiusS};
	display: flex;
	color: ${colors.white};
`;

export const LogoContainer = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	img {
		padding: 1.6rem 0.5rem 0 1.6rem;
		border-radius: ${borderRadius.borderRadiusS};
		width: 100%;
		height: 100%;
	}

	.company-description {
		text-align: justify;
		padding: .8rem 1rem 1.6rem 2rem;
		font-weight: 300;
	}
`;

