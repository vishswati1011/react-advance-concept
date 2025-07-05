###
    import React, { useState } from 'react'
    import styled from 'styled-components'
    
    const SignUpForm = () => {
    	const [inputValue, setInputValue] = useState({
    		firstName: '',
    		lastName: '',
    		email: '',
    		password: '',
    		confirmPassword: ''
    	})
    
    	const [errorValue, setErrorValue] = useState({
    		firstName: '',
    		lastName: '',
    		email: '',
    		password: '',
    		confirmPassword: ''
    	})
    	const handleChange = (e) => {
    		const { name, value } = e.target
    		setInputValue({
    			...inputValue,
    			[name]: value
    		})
    	}
    	const handleSubmit = (e) => {
    		e.preventDefault()
    		let newErrors = {}
    		if (inputValue.firstName === '') {
    			newErrors.firstName = 'First name cannot be empty'
    		}
    		if (inputValue.lastName === '') {
    			newErrors.lastName = 'Last name cannot be empty'
    		}
    		if (
    			!(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/).test(
    				inputValue.email
    			)
    		) {
    			newErrors.email = 'Invalid email address'
    		}
    		if (inputValue.password.length < 8) {
    			newErrors.password = 'Password must be greater than 7 characters'
    			if (inputValue.confirmPassword !== inputValue.password) {
    				newErrors.confirmPassword = 'Passwords do not match'
    			}
    		}
    		
    		if (Object.keys(newErrors).length > 0) {
    			setErrorValue(newErrors)
    		} else {
    			setErrorValue({});
    			console.log('Form submitted successfully')
    		}
    	}
    
    	return (
    		<Wrapper>
    			<form onSubmit={handleSubmit}>
    				<input
    					data-testid="first-name-id"
    					type="text"
    					name="firstName"
    					placeholder="First Name"
    					onChange={(e) => handleChange(e)}
    					value={inputValue.firstName}
    				/>
    				<p data-testid="first-name-error-id" className="error">
    					{errorValue.firstName}
    				</p>
    				<input
    					data-testid="last-name-id"
    					type="text"
    					name="lastName"
    					placeholder="Last Name"
    					onChange={(e) => handleChange(e)}
    					value={inputValue.lastName}
    				/>
    				<p data-testid="last-name-error-id" className="error">
    					{errorValue.lastName}
    				</p>
    				<input
    					data-testid="email-id"
    					type="email"
    					name="email"
    					placeholder="Email Address"
    					onChange={(e) => handleChange(e)}
    					value={inputValue.email}
    				/>
    				<p data-testid="email-error-id" className="error">
    					{errorValue.email}
    				</p>
    				<input
    					data-testid="password-id"
    					type="password"
    					name="password"
    					placeholder="Password"
    					onChange={(e) => handleChange(e)}
    					value={inputValue.password}
    				/>
    				<p data-testid="password-error-id" className="error">
    					{errorValue.password}
    				</p>
    				<input
    					data-testid="confirm-password-id"
    					type="password"
    					name="confirmPassword"
    					placeholder="Confirm Password"
    					value={inputValue.confirmPassword}
    					onChange={(e) => handleChange(e)}
    				/>
    				<p data-testid="confirm-password-error-id" className="error">
    					{errorValue.confirmPassword}
    				</p>
    				<button type="submit">Sign Up</button>
    			</form>
    		</Wrapper>
    	)
    }
    
    export default SignUpForm
    
    const Wrapper = styled.div`
    	margin-top: 24px;
    	font-family: sans-serif;
    
    	form {
    		display: flex;
    		flex-direction: column;
    		align-items: center;
    		justify-content: center;
    	}
    
    	input {
    		padding: 8px 12px;
    		font-size: 18px;
    		margin-bottom: 6px;
    		width: clamp(200px, 40%, 400px);
    	}
    
    	button {
    		padding: 10px 20px;
    		font-size: 18px;
    		border: none;
    		border-radius: 4px;
    		background-color: #333;
    		color: #fff;
    		cursor: pointer;
    		margin-top: 24px;
    
    		&:hover {
    			opacity: 0.8;
    		}
    	}
    
    	.error {
    		margin: 0 0 24px 0;
    		color: red;
    	}
    `

###
