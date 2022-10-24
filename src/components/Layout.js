import React, { useEffect } from 'react';

import ThemeContext from './ThemeContext';

import '../icons/natura11y-icons.css';

import IconSprite from '../icons/natura11y-icons-sprite.svg';

const Layout = ({ children }) => {

	const mql = window.matchMedia('(prefers-color-scheme: dark)');
  	const prefersDark = mql.matches;

	const [darkMode, setDarkMode] = React.useState(prefersDark)

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	const value = React.useMemo(
		() => ({
			darkMode,
			toggleTheme,
		}),
		[darkMode]
	);

	// Icon Sprite

	useEffect(() => {
	
		const iconSpriteDiv = document.getElementById(
			'natura11y-icons-sprite-container'
		);

		if (!iconSpriteDiv) {
			const ajax = new XMLHttpRequest();

			const appendSprite = () => {
				ajax.open('GET', IconSprite, true);
				ajax.send();
				ajax.onload = () => {
					const div = document.createElement('div');
					div.className = 'natura11y-icons-sprite';
					div.setAttribute('id', 'natura11y-icons-sprite-container');
					div.innerHTML = ajax.responseText;
					document.body.insertBefore(div, document.body.childNodes[0]);
				};
			};

			appendSprite();
		}
	}, []);

	return (
		<ThemeContext.Provider value={value}>
			<div className={darkMode ? 'theme-dark' : 'theme-light'}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export default Layout;