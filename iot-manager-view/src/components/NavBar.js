import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './styles/navBar.module.css';

const NavBar = (props) => {
	const routes = props.routes || [];

	const activeLinkHandler = ({ isActive }) => {
		return isActive ? cls['active'] : '';
	};

	return (
		<header>
			<nav>
				{routes.map((route, key) => {
					return (
						<NavLink key={key} className={activeLinkHandler} to={route.path}>
							{route.name}
						</NavLink>
					);
				})}
			</nav>
		</header>
	);
};

export default NavBar;
