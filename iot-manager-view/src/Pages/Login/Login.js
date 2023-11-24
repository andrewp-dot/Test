import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

const Login = () => {
	const [response, setResponse] = useState('');

	const processResponse = (res) => {
		setResponse(JSON.stringify(res));
	};

	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<LoginForm showResponse={processResponse} />
			{response}
		</div>
	);
};

export default Login;
