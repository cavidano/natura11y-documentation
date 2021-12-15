import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const StackBreakpointModifier = () => {

    return (
        <div className="backdrop backdrop--stack--lg theme-dark" style={exampleStyles}>

            <div className="backdrop__credit">
                <p>
                    Photo by <a href="https://unsplash.com/@anik3t?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Aniket Deole</a> on <a href="https://unsplash.com/s/photos/yosemite?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
                </p>
            </div>

            <div className="backdrop__image">
                <StaticImage
                    className="opacity-40--lg"
                    src="../../../../images/examples/backdrop-example-02.jpg"
                    alt=""
                    placeholder="dominantColor"
                    layout="fullWidth"
                />
            </div>

            <div className="backdrop__cover">

                <div className="container narrow margin-y-5">

                    <div className="text-shadow text-align-center margin-bottom-4">
                        <h1 className="banner-headline"> 
                            The mountain at a given distance In amber lies
                        </h1>
                        <p>
                            &#8212;Excerpt from <em>Delight becomes pictoral</em>
                        </p>
                    </div>

                    <div className="grid grid--column-2--md gap-2">

                        <a className="button button--outline width-100" href="#1">
                            About Emily Dickenson
                        </a>
                        
                        <a className="button theme-secondary width-100 box-shadow-1" href="#1">
                            Emily Dickenson Poetry
                        </a>
                        
                    </div>

                </div>

            </div>

        </div>
    );
}

export default StackBreakpointModifier;