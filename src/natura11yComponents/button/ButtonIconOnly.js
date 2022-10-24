import React, { forwardRef } from 'react';

import classNames from 'classnames';

import { Link } from 'gatsby';

import Icon from '../icon/Icon.js'

const ButtonIconOnly = forwardRef(( props, ref ) => {

    const {
        tag = 'button',
        iconHandle = 'home',
		linkUrl = '#1',
		target = null,
        ariaLabel = null,
        clickHandler = null,
		ariaExpanded = null,
		utilities = null
    } = props;


	const componentClasses = classNames(
		'button',
		'button--icon-only',
		{
			[`${utilities}`] : utilities !== null
		}
	);

    let button;

	switch (tag) {
		case 'button':
			button = (
				<button
					ref={ref}
					className={`${componentClasses}`}
					onClick={clickHandler}
					aria-label={ariaLabel}
					aria-expanded={ariaExpanded}
				>
					<Icon iconHandle={iconHandle} />
				</button>
			);
			break;

		case 'link':
			button = (
				<Link
					className={`${componentClasses}`}
					to={linkUrl}
					aria-label={ariaLabel}
					target={target !== null && target}
				>
					<Icon iconHandle={iconHandle} />
				</Link>
			);
			
			break;
		
		default:
			button = (
				<a
					className={`${componentClasses}`}
					href={linkUrl}
					aria-label={ariaLabel}
					target={target !== null && target}
				>
					<Icon iconHandle={iconHandle} />
				</a>
			);
	}

    return button;
});

export default ButtonIconOnly;
