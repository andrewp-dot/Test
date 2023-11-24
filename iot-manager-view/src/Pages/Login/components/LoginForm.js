import React, { useState } from 'react';
import cls from './styles/loginForm.module.css';
import url from '../../../urlConfig.json';

const DEFAULT_LOGIN_DATA = {
	login: '',
	pwd: '',
};

const LoginForm = (props) => {
	const [loginData, setLoginData] = useState(DEFAULT_LOGIN_DATA);

	const handleLogin = (e) => {
		setLoginData({ ...loginData, login: e.target.value });
	};

	const handlePassword = (e) => {
		setLoginData({ ...loginData, pwd: e.target.value });
	};

	const sendLoginData = async () => {
		try {
			const homeDataUrl = url.api + 'default';
			const response = await fetch(homeDataUrl, {
				method: 'POST',
				// headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginData),
			});
			const data = await response.json();
			props.showResponse(data);
		} catch (e) {
			console.log(e);
		}
	};

	const sendDataHandler = (e) => {
		e.preventDefault();
		sendLoginData();
		setLoginData(DEFAULT_LOGIN_DATA);
	};

	return (
		<form
			className={cls['login-form']}
			onSubmit={(e) => {
				sendDataHandler(e);
			}}
		>
			<div>
				<label htmlFor='login'>Login:</label>
				<input
					id='login'
					name='login'
					type='text'
					value={loginData.login}
					onChange={(e) => handleLogin(e)}
				/>
				<label htmlFor='password'>Password: </label>
				<input
					id='password'
					name='password'
					type='password'
					value={loginData.pwd}
					onChange={(e) => handlePassword(e)}
				/>
			</div>
			<input type='submit' />
		</form>
	);
};

export default LoginForm;
