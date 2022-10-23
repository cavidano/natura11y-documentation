import React, { Fragment, useEffect } from 'react';

import '../icons/natura11y-icons.css';

import IconSprite from '../icons/natura11y-icons-sprite.svg';

const Layout = ({ children }) => {
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

	return <Fragment>{children}</Fragment>;
};

export default Layout;
