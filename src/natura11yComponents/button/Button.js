import React from 'react';

import classNames from 'classnames';

import { Link } from 'gatsby';

import Icon from '../icon/Icon';

const Button = ( props ) => {

    const {
        tag = 'button',
		title = 'Button',
		linkUrl = '#1',
		target = null,
		outline = false,
        iconHandle = null,
		utilities = null,
        clickHandler = null
    } = props;

	const componentClasses = classNames(
		'button',
		{ 
			'button--outline' : outline,
			'button--has-icon' : iconHandle !== null,
			[`${utilities}`] : utilities !== null
		}
	);

	const buttonContents = () => {
		return iconHandle !== null 
			? (
				<>
					<Icon iconHandle={iconHandle} />
					<span className="button__text">{title}</span>
				</>
			) : (
				<>{title}</>
			);
	} 

	let button;

	switch (tag) {
		case 'button':
			button = (
				<button
					className={`${componentClasses}`}
					onClick={clickHandler}
				>
					{buttonContents()}
				</button>
			);
			break;

		case 'link':
			button = (
				<Link
					className={`${componentClasses}`}
					to={linkUrl}
					target={target !== null && target}
				>
					{buttonContents()}
				</Link>
			);

			break;

		default:
			button = (
				<a
					className={`${componentClasses}`}
					href={linkUrl}
					target={target !== null && target}
				>
					{buttonContents()}
				</a>
			);
	}

	return button;
};

export default Button;
