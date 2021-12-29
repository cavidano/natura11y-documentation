import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const ExampleWithContent = () => {

    return (
        <div
            className="container wide margin-y-4"
            id="articleTop"
            style={exampleStyles}>

            <article className="article--column-2 theme-light box-shadow-2 border-radius">

                <aside className="article__sidebar">

                    <ul className="nav nav--divider position-sticky-top">
                        <li>
                            <a aria-current="page" href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                    </ul>

                </aside>

                <header className="article__header">

                    <div
                        className="backdrop backdrop--fixed theme-dark"
                        style={{'--backdrop-fixed-height': '320px'}}>

                        <div className="backdrop__image">
                            <StaticImage
                                className="opacity-50"
                                src="../../../../images/examples/article-example-01.jpg"
                                alt=""
                                placeholder="dominantColor"
                                layout="fullWidth"
                            />
                        </div>

                        <div className="backdrop__cover">
                            <div className="margin-y-4">
                                <div className="container narrow">
                                    <p className="h1 text-shadow">
                                        Cynara cardunculus
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                
                </header>

                <div className="article__body overflow-hidden border-left">

                    <div className="container narrow margin-y-5">
                        
                        <p className="h2">Globe Artichoke</p>

                        <p>
                            The globe artichoke (Cynara cardunculus), also known by the names French artichoke and green artichoke, is a variety of a species of <a href="#1">thistle</a> cultivated as a food. The edible portion of the plant consists of the flower buds before the flowers come into bloom. The budding artichoke flower-head is a cluster of many budding small flowers (an inflorescence), together with many bracts, on an edible base.
                        </p>

                        <p>
                            Once the buds bloom, the structure changes to a coarse, barely edible form. Another variety of the same species is the cardoon, a perennial plant native to the Mediterranean region. Both wild forms and cultivated varieties (cultivars) exist.
                        </p>

                        <p className="h3">Agricultural output</p>

                        <p>
                            Cultivation of the globe artichoke is concentrated in the Americas and the countries bordering the Mediterranean basin. The main European producers are Italy, Spain, and France and the main American producers are Argentina, Peru and the United States. In the United States, California provides nearly 100% of the U.S. crop, with about 80% of that being grown in Monterey County; there, Castroville proclaims itself to be "The Artichoke Center of the World" and holds the annual Castroville Artichoke Festival. More recently, artichokes have been grown in South Africa in a small town called Parys, located along the Vaal River.
                        </p>

                        <p>
                            In 2019, the world produced approximately 1.6 million tons of artichokes.
                        </p>

                    </div>
                   
                    <div className="container narrow margin-y-4">

                        <table class="table table--edge">

                            <caption>
                                Top 5 globe artichoke producers in 2017
                            </caption>

                            <thead>
                                <tr>
                                    <th scope="col">Country</th>
                                    <th scope="col">Production</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Italy</td>
                                    <td>387,803</td>
                                </tr>
                                <tr>
                                    <td>Spain</td>
                                    <td>223,150</td>
                                </tr>
                                <tr>
                                    <td>Egypt</td>
                                    <td>185,695</td>
                                </tr>
                                <tr>
                                    <td>Peru</td>
                                    <td>145,068</td>
                                </tr>
                                <tr>
                                    <td>Argentina</td>
                                    <td>108,683</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <footer className="container narrow margin-y-5">
                                        
                        <a className="font-size-md" href="#articleTop">
                            Back to Top
                        </a>

                    </footer>

                </div>

            </article>

        </div>
    );
};

export default ExampleWithContent;