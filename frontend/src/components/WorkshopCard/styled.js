import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';
import cardBg from '../../assets/images/card_bg.jpg'

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 50rem;
    margin: 3rem 2rem;
    background: url(${cardBg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    border-radius: 1.5rem;
    padding: 3rem 2rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    color: ${colors.white};
`;