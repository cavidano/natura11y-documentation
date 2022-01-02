import React from 'react';

import Button from './index';

const SizingButtons = () => {
    return (
        <ul className="nav nav--horizontal--sm justify-content-center text-align-center font-size-sm">
            <li>
                <Button buttonClasses="theme-primary" />
            </li>
            <li>
                <Button buttonClasses="theme-primary" />
            </li>
            <li>
                <Button buttonClasses="theme-primary" />
            </li>
        </ul>
    );
}

export default SizingButtons;