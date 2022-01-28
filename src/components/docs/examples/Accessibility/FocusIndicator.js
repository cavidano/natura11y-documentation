import React from 'react';

import Button from '../Buttons';

const FocusIndicator = () => {
    return (

        <div className="container narrow">

            <ul className="nav nav--horizontal">
                <li>
                    <Button buttonClasses="theme-primary cool" />
                </li>
                <li>
                    <Button buttonClasses="theme-primary" />
                </li>
                <li>
                    <Button buttonClasses="theme-primary" />
                </li>
            </ul>

        </div>
    );
}

export default FocusIndicator;