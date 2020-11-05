import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../style/theme';



export const Button = styled.button`
	align-items: center;
	justify-content: center;
	
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

export const NavbarDiV = styled.div`
	display:flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center; 
	padding: 2rem;
	
`; 

export const SectionWorkshop = styled.div`
	display:flex;
	
	flex-direction:column; 
	align-items: center; 
	height: 40rem; 
	overflow-y: scroll;
	scroll-snap-type: mandatory; 

	
	
	
	::-webkit-scrollbar {
  	display: none;
	}
		
			.Fragment.ul{
				padding-top: 20rem;
				 
				justify-items: center; 
				list-style-type: none; 
				scroll-snap-align: start;

  				
			}
	
`; 

export const SectionInfo = styled.section`

margin: 4% 0;
	border-radius: 1 Rem; 
	width: 100%;
	height: 10rem; 
	text-align: center;
	background-color: #fff !important;
	border-radius: 5px;

`;

