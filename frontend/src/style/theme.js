import { createGlobalStyle } from 'styled-components';
import mainBg from '../assets/images/main-bg.png';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

	body {
        font-family: Poppins, Tahoma, sans-serif;
		font-size: 1rem;
        line-height: 1.6;
       	background: url(${mainBg}); 
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 100vh;
		margin: 0 auto;
        color: '#181818';
    }
    
    a{
        text-decoration: none;
    }
`;

export const colors = {
	white: '#FFF',
	black: '#000',
	gray: '#d6d6d6',
	dimGray: 'rgba(0, 0, 0, .55)',
	// gradientBtn: 'linear-gradient(90deg, #ff64ba 0%, #7478f6)',
	navLink: '#FFEBFD',
	navLinkHover: '#FFBDEE',
	purpleMain: '#A5099D',
	purpleMainHover: '#73066E',
	workshopSelf: '#F5D0FF',
	workshopSelfHover: '#EEBDFC',
	workshopWork: '#8DD6FF',
	workshopWorkHover: '#66C9FF',
	workshopRelations: '#FFDD5C',
	workshopRelationsHover: '#FCD341',
};

export const fontSizes = {
	small: '.8rem',
	normal: '1rem',
	medium: '1.5rem',
	large: '1.8rem',
	exLarge: '2.2rem',
};
