import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const FixedHeight = () => {

    return (

        <div className="backdrop backdrop--fixed theme-dark margin-y-5" style={exampleStyles}>


            <div className="backdrop__image">
                <StaticImage
                    className="opacity-40"
                    src="../../../../images/examples/backdrop-example-03.jpg"
                    alt=""
                    placeholder="dominantColor"
                />
                <div className="backdrop__image__credit">
                    <p>Photo by <a href="#1">Jane Doe</a> on Unsplash</p>
                </div>
            </div>

            <div className="backdrop__cover">

                <div className="container medium margin-y-4">
                    <h1 className="banner-headline text-color-secondary text-shadow">
                        The Mountain sat upon the Plain
                    </h1>
                </div>

            </div>

        </div>
    );
}

export default FixedHeight;