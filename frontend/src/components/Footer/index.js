import React from 'react';
import { FooterWrapper, LeftSide, RightSide } from './styled';
import { Container } from '../../style/Container';
import proplogo3 from '../../assets/images/proplogo3.png';

const Footer = () => {
	return (
		<Container>
			<FooterWrapper>
				<LeftSide>
					<p>
						MQ Learning <span>&reg;</span> 2020  Powered by
						<a href="https://propulsion.academy/"><img src={proplogo3} alt="prop_logo" height = "30" /></a>
					</p>
					{/*<p>*/}
					{/*	Powered by <img src={proplogo3} alt="prop_logo" height = "26" />*/}
					{/*</p>*/}
				</LeftSide>
				<RightSide>
					<a
						href='https://www.linkedin.com/company/mq-learning/'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-linkedin social-link'></i>
					</a>
					<a
						href='https://www.facebook.com/meaning.quotient/'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-facebook-f social-link'></i>
					</a>
					<a
						href='https://www.instagram.com/meaningquo/'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-instagram social-link'></i>
					</a>
					<a
						href='https://soundcloud.com/user-806321828'
						rel='noreferrer'
						target='_blank'
					>
						<i className='fab fa-soundcloud social-link'></i>
					</a>
				</RightSide>
			</FooterWrapper>
		</Container>
	);
};

export default Footer;
