import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const StackBreakpointModifier = () => {

    return (
        <div class="backdrop backdrop--stack--lg theme-dark" style={exampleStyles}>

            <div class="backdrop__credit">
                <p>
                    Photo by <a href="https://unsplash.com/@anik3t?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Aniket Deole</a> on <a href="https://unsplash.com/s/photos/yosemite?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
                </p>
            </div>

            <div class="backdrop__image">
                <StaticImage
                    className="opacity-40--lg"
                    src="../../../../images/examples/backdrop-example-02.jpg"
                    alt=""
                    placeholder="dominantColor"
                    layout="fullWidth"
                />
            </div>

            <div class="backdrop__cover">

                <div class="container narrow margin-y-5">

                    <div class="text-shadow text-align-center margin-bottom-4">
                        <h1 class="banner-headline"> 
                            The mountain at a given distance In amber lies
                        </h1>
                        <p>
                            &#8212;Excerpt from <em>Delight becomes pictoral</em>
                        </p>
                    </div>

                    <div class="grid grid--column-2--md gap-2">

                        <a class="button button--outline width-100" href="#1">
                            About Emily Dickenson
                        </a>
                        
                        <a class="button theme-secondary width-100 box-shadow-1" href="#1">
                            Emily Dickenson Poetry
                        </a>
                        
                    </div>

                </div>

            </div>

        </div>
    );
}

export default StackBreakpointModifier;