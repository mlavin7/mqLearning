import React, { useState, useEffect } from 'react';
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
					{/* Change title to Validation when validation step is reached */}
					{currentStage === 2 ? (
						<Title>
							<h1>Validation</h1>
						</Title>
					) : (
						<Title>
							<h1>Sign in</h1>
						</Title>
					)}

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
							<Button registerLoginBtn onClick={handleRegistration}>
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
							<Button registerLoginBtn onClick={handleRegistration}>
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
							<Button registerLoginBtn onClick={handleRegistration}>
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
						<Form placeholder='Email' required />
						<Form placeholder='Password' required />
						<Button registerLoginBtn>Login</Button>
					</InputsContainer>
				</RightSide>
			</LoginContainer>
		</Container>
	);
};

//todo login and registration functionality

export default LoginPage;
