import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const ImageProportional = () => {

    return (
        <div class="backdrop theme-dark border-radius">
            <div class="backdrop__credit">
                <p>
                    Photo by <a href="https://unsplash.com/@zmachacek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Zdeněk Macháček</a> on <a href="https://unsplash.com/collections/4468315/landscapes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
                </p>
            </div>
            <div class="backdrop__image">
                <StaticImage
                    className="opacity-40"
                    src="../../../images/examples/backdrop-example-01.jpg"
                    alt=""
                    placeholder="dominantColor"
                    layout="fullWidth"
                />
            </div>
            <div class="backdrop__cover">
                <div class="container text-align-center">
                    <p class="h4 text-shadow margin-bottom-3">
                        <em>In Their Eternal Faces<br />The Sun&#8212;with just delight</em>
                    </p>
                    <a class="button font-size-md theme-secondary" href="#1">Emily Dickenson Poetry</a>
                </div>
            </div>
        </div>
    );
}

export default ImageProportional;