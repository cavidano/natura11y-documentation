import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const ImageProportional = () => {

    return (
        <div className="backdrop theme-dark border-radius">
            <div className="backdrop__credit">
                <p>
                    Photo by <a href="https://unsplash.com/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Zdeněk Macháček</a> on <a href="https://unsplash.com/collections/4468315/landscapes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
                </p>
            </div>
            <div className="backdrop__image">
                <StaticImage
                    className="opacity-40"
                    src="../../../../images/examples/backdrop-example-01.jpg"
                    alt=""
                />
            </div>
            <div className="backdrop__cover">
                <div className="container text-align-center">
                    <p className="h4 text-shadow margin-bottom-3">
                        <em>In Their Eternal Faces<br />The Sun&#8212;with just delight</em>
                    </p>
                    <a className="button font-size-md theme-secondary" href="#1">Emily Dickenson Poetry</a>
                </div>
            </div>
        </div>
    );
}

export default ImageProportional;