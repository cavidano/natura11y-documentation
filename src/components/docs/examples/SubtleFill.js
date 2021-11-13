import React, { Fragment, useState } from 'react';

const SubtleFill = () => {

    const [theme, settheme] = useState('white');

    const handleClick = (e) => {
        let currenttheme = e.target.getAttribute('data-theme');
        settheme(currenttheme);
    } 

    return (
        <Fragment>

            <ul className="nav nav--horizontal justify-content-center margin-bottom-4" data-react-nav>
                <li>
                    <button
                        className={theme === 'white' ? `active` : ``}
                        onClick={handleClick}
                        data-theme="white">
                        White
                    </button>
                </li>
                <li>
                    <button
                        className={theme === 'dark' ? `active` : ``}
                        onClick={handleClick}
                        data-theme="dark">
                        Dark
                    </button>
                </li>
            </ul>

            <div className={theme === 'dark' ? `card border theme-dark` : `card border`}>

                <div className="card__body">
                    <h3 className="h4">Rainbow</h3>
                    <p>
                        A rainbow is a meteorological phenomenon that appears as a multicolored arc that forms with the sunlight reflecting off water.
                    </p>
                </div>

                <div className="card__foot font-size-sm subtle-fill">
                    <ul className="nav nav--horizontal justify-content-between">
                        <li>
                            <a href="#1">Secondary Action</a>
                        </li>
                        <li>
                            <a className="button button--outline border-radius-pill" href="#1">Primary Action</a>
                        </li>
                    </ul>
                </div>

            </div>

        </Fragment>
    );
}

export default SubtleFill;