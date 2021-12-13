import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const CardImage = () => {

    return (
        <div className="card border">
            <StaticImage
                src="../../../images/examples/card-example-01.jpg"
                alt=""
                placeholder="dominantColor"
                layout="fullWidth"
            />
            <div className="card__body">
                <h2 className="h4">Stellaria graminea</h2>
                <p>
                    Stellaria graminea is a species of flowering plant in the family Caryophyllaceae known by these common names:
                </p>
                <ul>
                    <li>
                    <em>common starwort</em>
                    </li>
                    <li>
                        <em>lesser stitchwort</em>  
                    </li>
                    <li>
                        <em>grass-leaved stitchwort</em>
                    </li>
                    <li>
                        <em>grass-like starwort</em>
                    </li>
                </ul>
            </div>
            <div className="card__foot border-top font-size-md text-color-link">
                <ul className="nav nav--horizontal justify-content-between">
                    <li>
                        <a href="#1">Search Images</a>
                    </li>
                    <li>
                        <a className="button button--outline rounded-pill" href="#1">
                            Visit Wikipedia
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CardImage;