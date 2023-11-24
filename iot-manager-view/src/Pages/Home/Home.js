import React from 'react';
import NavBar from '../../components/NavBar';
import cls from './styles/home.module.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';

const routes = [
	{ name: 'Login', path: '/login' },
	{ name: 'Register', path: '/register' },
];

const Home = () => {
	return (
		<>
			<NavBar routes={routes} />
			<main className={cls['content']}>
				<Routes>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<p>register PAGE</p>}></Route>
				</Routes>
			</main>
		</>
	);
};

export default Home;
