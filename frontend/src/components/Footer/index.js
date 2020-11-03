import React from 'react';
import { FooterWrapper, LeftSide, RightSide } from './styled';

const Footer = () => {
	return (
		<FooterWrapper>
			<LeftSide>
				<p>MQ Learning &copy; 2020</p>
			</LeftSide>
			<RightSide>
				<i className='fab fa-facebook-f social-link'></i>
				<i className='fab fa-twitter social-link'></i>
				<i className='fab fa-google-plus-g social-link'></i>
				<i className='fab fa-instagram social-link'></i>
			</RightSide>
		</FooterWrapper>
	);
};

export default Footer;
