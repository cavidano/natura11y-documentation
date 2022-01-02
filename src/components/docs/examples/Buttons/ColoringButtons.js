import React from 'react';

import Button from './index';

const ColoringButtons = () => {
    return (
        <ul className="nav nav--horizontal--sm justify-content-center text-align-center">
            <li>
                <Button buttonClasses="theme-primary" />
            </li>
            <li>
                <Button buttonClasses="theme-secondary" />
            </li>
            <li>
                <Button buttonClasses="theme-dark" />
            </li>
        </ul>
    );
}

export default ColoringButtons;