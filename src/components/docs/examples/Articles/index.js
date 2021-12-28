import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const TwoOrThreeColumns = () => {

    return (
        <div className="container wide margin-y-4 overflow-visible" style={exampleStyles}>

            <article className="article--column-2 theme-light box-shadow-2 border-radius">

                <aside className="article__sidebar">

                    <ul class="nav nav--divider position-sticky-top">
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                    </ul>

                </aside>

                <header class="article__header">

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

                        <div class="backdrop__cover">
                            <div class="margin-y-4">
                                <div class="container narrow">
                                    <p class="h1 text-shadow">
                                        Cynara cardunculus
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                
                </header>

                <div className="article__body border-left">

                <div class="container narrow margin-y-5">
                        
                    <p className="h2">Globe Artichoke</p>

                    <p>
                        The globe artichoke (Cynara cardunculus), also known by the names French artichoke and green artichoke, is a variety of a species of thistle cultivated as a food. The edible portion of the plant consists of the flower buds before the flowers come into bloom. The budding artichoke flower-head is a cluster of many budding small flowers (an inflorescence), together with many bracts, on an edible base.
                    </p>

                    <p>
                        Once the buds bloom, the structure changes to a coarse, barely edible form. Another variety of the same species is the cardoon, a perennial plant native to the Mediterranean region. Both wild forms and cultivated varieties (cultivars) exist.
                    </p>

                    <p className="h3">Etymology</p>

                    <p>
                        The English word artichoke was borrowed in the sixteenth century from the northern Italian word articiocco (the standard modern Italian being carciofo). The Italian term was itself borrowed either from Spanish alcarchofa (today usually alcachofa) or directly from the source of the Spanish word—medieval Andalusi Arabic الخرشوفة (al-kharshūfa, including the Arabic definite article al). The Arabic form kharshūfa is still used in Maghrebi Arabic today, while other variants in Arabic include kharshafa, and Modern Standard Arabic khurshūfa. These Arabic forms themselves derive from classical Arabic حرشفة (harshafa) singular word of the plural حراشف (ḥarashef) Scale (anatomy).[5][6] Other languages which derive their word for the artichoke from Arabic include Israeli Hebrew, which has the word חֻרְשָׁף (khursháf).
                    </p>
                    <p>
                        Despite being borrowed from Arabic, European terms for the artichoke have in turn influenced Arabic in their own right. For example, the modern Levantine Arabic term for artichoke is أرضي شوكي (ʔarḍī shawkī). This literally means 'earthy thorny', and is an Arabicisation (through phono-semantic matching) of the English word artichoke or other European terms like it. 
                    </p>
                    <p>
                        As in the case of Levantine Arabic ʔarḍī shawkī, names for the artichoke have frequently changed form due to folk etymology and phono-semantic matching. The Italian form articiocco seems to have been adapted to correspond to Italian arci- ('arch-, chief') and ciocco ('stump'). Forms of the French word artichaut (which also derives from Arabic, possibly via Spanish) have over the years included artichaud (corresponding to chaud, 'warm') and artihault (corresponding to haut, 'height'). Forms found in English have included hartichoak, corresponding to heart and choke, which were likely associated with the belief that the inedible centre of the vegetable could choke its eaters or that the plant can take over a garden, choking out other plants.
                    </p>
                    <p className="h4">External links</p>

                    <ul>
                        <li>
                            <p>
                                <a href="#1">Namib-Naukluft National Park, Namibia (1)</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="#1">Namib-Naukluft National Park, Namibia (1)</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="#1">Namib-Naukluft National Park, Namibia (1)</a>
                            </p>
                        </li>
                    </ul>
                        
                    </div>
                </div>
                
            </article>
        </div>
    )
};

export default TwoOrThreeColumns;