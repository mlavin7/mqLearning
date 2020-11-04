import { createGlobalStyle } from 'styled-components';
import rightTop from '../assets/images/right_top.png';
import leftBottom from '../assets/images/left_bottom.png';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

	body {
<<<<<<< HEAD
        font-family: Poppins, Helvetica, sans-serif, Tahoma, sans-serif;
=======
        font-family: Poppins, Tahoma, sans-serif;
>>>>>>> 1248c5675e093215076d7ee6e339f860bebf8b37
		font-size: 1rem;
        line-height: 1.6;
		background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
		height: 100%;
		margin: 0 auto;
        color: '#181818';
		position: relative;
		z-index: 2;
		::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: url(${rightTop}) no-repeat right top;
			z-index: -1;
		}
		::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url(${leftBottom}) no-repeat left bottom;
			z-index: -1;
		}
    }
    
    a{
        text-decoration: none;
    }
`;

export const colors = {
	white: '#FFF',
	black: '#000',
	gray: '#d6d6d6',
	dimGray: 'rgba(0, 0, 0, .85)',
	navLink: '#FFEBFD',
	navLinkHover: '#FFBDEE',
	purpleMain: '#c26cfc',
	purpleMainHover: '#af38ff',
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
