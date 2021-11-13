import React, { Fragment, useState } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const GradientVeneerDirections = () => {

    const [direction, setDirection] = useState('top');

    const handleClick = (e) => {
        let currentDirection = e.target.getAttribute('data-direction');
        setDirection(currentDirection);
    } 

    return (
        <Fragment>

            <ul className="nav nav--horizontal justify-content-center margin-bottom-4" data-react-nav>
                <li>
                    <button
                        className={direction === 'top' ? `active` : ``}
                        onClick={handleClick}
                        data-direction="top">
                        Top
                    </button>
                </li>
                <li>
                    <button
                        className={direction === 'right' ? `active` : ``}
                        onClick={handleClick}
                        data-direction="right">
                        Right
                    </button>
                </li>
                <li>
                    <button
                        className={direction === 'bottom' ? `active` : ``}
                        onClick={handleClick}
                        data-direction="bottom">
                        Bottom
                    </button>
                </li>
                <li>
                    <button
                        className={direction === 'left' ? `active` : ``}
                        onClick={handleClick}
                        data-direction="left">
                        Left
                    </button>
                </li>
            </ul>

            <div className="backdrop">
                <div className={`backdrop__image gradient-veneer-${direction}`}>
                    <StaticImage
                        src="../../../images/gradient-veneer-directions.jpg"
                        alt="whoa"
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                </div>
                <div className="backdrop__cover">
                    <div className={`gv-dir gv-dir--${direction}`}>
                        <p>
                            <strong>
                                .gradient-veneer-{direction}
                            </strong>
                        </p> 
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default GradientVeneerDirections;