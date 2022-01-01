import React from 'react';

const ColoringButtons = () => {
    return (
        <ul className="nav nav--horizontal--sm justify-content-center text-align-center">
            <li>
                <a className="button theme-primary" href="#1">
                    Button
                </a>
            </li>
            <li>
                <a className="button theme-secondary" href="#1">
                    Button
                </a>
            </li>
            <li>
                <a className="button theme-dark" href="#1">
                    Button
                </a>
            </li>
        </ul>
    );
}

export default ColoringButtons;