import React, { Fragment, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const GradientVeneerThemes = () => {

    const [theme, setTheme] = useState('primary');

    const handleClick = (e) => {
        let currenttheme = e.target.getAttribute('data-theme');
        setTheme(currenttheme);
    } 

    return (
        <Fragment>

            <ul className="nav nav--horizontal justify-content-center margin-bottom-4" data-react-nav>
                <li>
                    <button
                        className={theme === 'primary' ? `active` : ``}
                        onClick={handleClick}
                        data-theme="primary">
                        Primary
                    </button>
                </li>
                <li>
                    <button
                        className={theme === 'secondary' ? `active` : ``}
                        onClick={handleClick}
                        data-theme="secondary">
                        Secondary
                    </button>
                </li>
            </ul>

            <div className={`backdrop border-radius theme-${theme}`}>
                <div className="backdrop__image gradient-veneer-bottom">
                    <StaticImage
                        src="../../../../images/gradient-veneer-themes.jpg"
                        className="opacity-80"
                        alt="whoa"
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                </div>
                <div className="backdrop__cover">
                    <div className="gv-dir margin-top-auto">
                        <p>
                            <strong>
                                .gradient-veneer-{theme}
                            </strong>
                        </p> 
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GradientVeneerThemes;