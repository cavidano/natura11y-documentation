import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const StackBreakpointModifier = (props) => {

    const { 
        backdropClasses,
        imageClass
    } = props; 

    const bannerStyle = {
        '--banner-headline-font-size': 'calc(var(--body-font-size) * 3)'
    }

    return (
        <div className={`${backdropClasses} theme-dark position-relative`} style={exampleStyles}>

            <div className="backdrop__credit position-top-right">
                <p>
                    Photo by <a href="https://unsplash.com/@anik3t?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Aniket Deole</a> on <a href="https://unsplash.com/s/photos/yosemite?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>
                </p>
            </div>

            <div className="backdrop__image">
                <div className={imageClass}>
                    <StaticImage
                        src="../../../../images/examples/backdrop-example-02.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                </div>
            </div>

            <div className="backdrop__cover">

                <div className="container narrow margin-y-4">

                    <div className="text-shadow text-align-center margin-bottom-4">
                        <h1
                            className="banner-headline"
                            style={imageClass === '' ? bannerStyle : null }> 
                                The mountain at a given distance In amber lies
                        </h1>
                        <p>
                            &#8212;Excerpt from <em>Delight becomes pictoral</em>
                        </p>
                    </div>

                    <div className="grid grid--column-2 gap-2">

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

StackBreakpointModifier.defaultProps = {
    backdropClasses: 'backdrop backdrop--stack--lg',
    imageClass: 'opacity-40--lg'
}

export default StackBreakpointModifier;