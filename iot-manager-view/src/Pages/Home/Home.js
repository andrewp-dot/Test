import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import cls from './styles/home.module.css';
import { Route, Routes } from 'react-router-dom';

const routes = [
	{ name: 'Login', path: '/login' },
	{ name: 'Register', path: '/register' },
];

const Home = () => {
	// const fetchDataFromApi = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			'http://localhost/iot-manager/www/api/article'
	// 		);
	// 		const data = await response.json();
	// 		console.log(data);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchDataFromApi();
	// }, []);

	return (
		<>
			<NavBar routes={routes} />
			<main className={cls['content']}>
				<Routes>
					<Route path='/login' element={<p>LOGIN PAGE</p>}></Route>
					<Route path='/register' element={<p>register PAGE</p>}></Route>
				</Routes>
			</main>
		</>
	);
};

export default Home;
