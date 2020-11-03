import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import { Container } from '../../style/Container';
import { Form } from '../../style/Form';
import { Button } from '../../style/Button';
import {
	LoginContainer,
	LeftSide,
	RightSide,
	Title,
	InputsContainer,
	RegMessage,
} from './styled';

const LoginPage = () => {
	const [currentStage, setCurrentStage] = useState(0);

	const handleRegistration = e => {
		e.preventDefault();
		setCurrentStage(currentStage + 1);
	};

	// Timeout function to take registration
	// form back to initial state
	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentStage === 3) {
				setCurrentStage(0);
			}
		}, 2000);
		return () => clearTimeout(timer);
	}, [currentStage]);

	return (
		<Container centerLoginContainer>
			<LoginContainer>
				<LeftSide>
					<Title>
						<h1>Registration</h1>
					</Title>

					{/* First Step of Registration - User details */}
					{currentStage === 0 ? (
						<InputsContainer registration>
							<div>
								{/* First Name and Last Name inputs are half of the other inputs */}
								<Form placeholder='First Name' regHalfInput />
								<Form placeholder='Last Name' regHalfInput />
							</div>
							<Form placeholder='Email' />
							<Form placeholder='Company' />
							{/* If the button is pressed, first step is done and user
								should see a message */}
							<Button registerBtn onClick={handleRegistration}>
								Register
							</Button>
						</InputsContainer>
					) : null}

					{/* Second Step of Registration - Successful registration message */}
					{currentStage === 1 ? (
						<InputsContainer registration>
							<RegMessage>
								<h3>
									Thanks for your registration. We've sent a code to your email
									address.
								</h3>
							</RegMessage>
							<Button registerBtn onClick={handleRegistration}>
								Verification
							</Button>
						</InputsContainer>
					) : null}

					{/* Third Step of Registration - Code verification/validation*/}
					{currentStage === 2 ? (
						<InputsContainer registrationVerifyCode>
							<div>
								<Form placeholder='Email' regHalfInput />
								<Form placeholder='Verification Code' regHalfInput />
							</div>
							<div>
								<Form placeholder='Password' regHalfInput />
								<Form placeholder='Repeat Password' regHalfInput />
							</div>
							<Button registerBtn onClick={handleRegistration}>
								Validate Code
							</Button>
						</InputsContainer>
					) : null}

					{/* Last Step of Registration - Successful validation message. Registration completed */}
					{currentStage === 3 ? (
						<InputsContainer registrationVerifyCode>
							<RegMessage>
								<h3>Your code was successfully verified. You can now login.</h3>
							</RegMessage>
						</InputsContainer>
					) : null}
				</LeftSide>

				<RightSide>
					<Title>
						<h1>Login</h1>
					</Title>
					<InputsContainer>
						<Form loginForm placeholder='Email' required />
						<Form loginForm placeholder='Password' required />
						<Button loginBtn>Login</Button>
					</InputsContainer>
				</RightSide>
			</LoginContainer>
		</Container>
	);
};

//todo login and registration functionality

export default LoginPage;
