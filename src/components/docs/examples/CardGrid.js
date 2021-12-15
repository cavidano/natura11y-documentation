import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const CardGrid = () => {

    return (
        <div className="container medium margin-y-5">            
            <div className="grid grid--column-3--md gap-3">
                <div className="card border font-size-md">
                    <StaticImage
                        src="../../../images/examples/card-example-02.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                    <div className="card__body">
                        <p className="h6">Prunus mume</p>
                        <p>
                            Prunus mume is an East Asian and Southeast Asian tree species classified in the Armeniaca section of the genus Prunus subgenus Prunus.
                        </p>
                    </div>
                    <div className="card__foot border-top">
                        <a className="button button--outline width-100 text-color-link" href="#1">
                            Wikipedia
                        </a>
                    </div>
                </div>
                <div className="card border font-size-md">
                    <StaticImage
                        src="../../../images/examples/card-example-03.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                    <div className="card__body">
                        <p className="h6">Eschscholzia californica</p>
                        <p>
                            Eschscholzia californica, the California poppy, golden poppy, California sunlight or cup of gold, is a species of flowering plant in the family Papaveraceae, native to the United States and Mexico.
                        </p>
                    </div>
                    <div className="card__foot border-top">
                        <a className="button button--outline text-color-link width-100" href="#1">
                            Wikipedia
                        </a>
                    </div>
                </div>
                <div className="card border font-size-md">
                    <StaticImage
                        src="../../../images/examples/card-example-04.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />
                    <div className="card__body">
                        <p className="h6">Geranium pratense</p>
                        <p>
                            Geranium pratense, the meadow crane's-bill or meadow geranium, is a species of flowering plant in the family Geraniaceae, native to Europe and Asia.
                        </p>
                    </div>
                    <div className="card__foot border-top">
                        <a className="button button--outline width-100 text-color-link" href="#1">
                            Wikipedia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardGrid;