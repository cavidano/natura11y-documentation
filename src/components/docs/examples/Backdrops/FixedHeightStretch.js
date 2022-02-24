import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const FixedHeightStretch = () => {

    return (

        <div className="backdrop backdrop--fixed theme-dark margin-y-5" style={exampleStyles}>

            <div className="backdrop__credit">
                <p>Photo by <a href="#1">Jane Doe</a> on Unsplash</p>
            </div>

            <div className="backdrop__image">
                <StaticImage
                    className="opacity-40"
                    src="../../../../images/examples/backdrop-example-04.jpg"
                    alt=""
                    placeholder="dominantColor"
                />
            </div>

            <div className="backdrop__cover">

                <div className="margin-y-5">

                    <div className="container narrow">
                        <h1 className="banner-headline text-align-center text-shadow margin-bottom-4">
                        <em>Nature in Poetry</em>
                        </h1>
                    </div>

                    <div className="container narrow medium--xl">

                        <div className="grid grid--column-2--xl gap-2 justify-content-center">

                            <div className="card border-radius theme-light box-shadow-2">

                                <div className="card__head border-bottom">
                                    <p>
                                        <em>Featured Poem</em>
                                    </p>
                                </div>

                                <div className="card__body">
                                    <h2 className="h6">
                                        This—is the land—the Sunset washes—
                                    </h2>
                                    <p>
                                        <em>
                                            This—is the land—the Sunset washes—<br />
                                            These—are the Banks of the Yellow Sea—<br />
                                            Where it rose—or whither it rushes—<br />
                                            These—are the Western Mystery!
                                        </em>
                                    </p>
                                    <p>
                                        <em>
                                            Night after Night<br />
                                            Her purple traffic<br />
                                            Strews the landing with Opal Bales—<br />
                                            Merchantmen—poise upon Horizons—<br />
                                            Dip—and vanish like Orioles!
                                        </em>
                                    </p>
                                </div>

                                <div className="card__foot border-top">
                                    <a className="button button--has-icon--disperse theme-primary" href="#1">
                                        <span className="button__text">Emily Dickenson Poetry</span>
                                        <span className="icon icon-arrow-right button__icon"></span>
                                    </a>
                                </div>

                            </div>

                            <div className="card border-radius theme-light box-shadow-2">

                                <div className="card__head border-bottom">
                                    <p>
                                        <em>About the Poet</em>
                                    </p>
                                </div>

                                <div className="card__body">
                                    <h2 className="h4">
                                        Emily Dickenson
                                    </h2>
                                    <p>
                                        Emily Elizabeth Dickinson was an American poet. Little-known during her life, she has since been regarded as one of the most important figures in American poetry.
                                    </p>
                                    <p>
                                        Dickinson was born in Amherst, Massachusetts into a prominent family with strong ties to its community.
                                    </p>
                                </div>

                                <div className="card__foot border-top">
                                    <a className="button button--has-icon--disperse theme-primary" href="#1">
                                        <span className="button__text">About Emily Dickenson</span>
                                        <span className="icon icon-arrow-right button__icon"></span>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default FixedHeightStretch;