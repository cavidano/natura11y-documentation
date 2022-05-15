import React from 'react';

const AccordionExample = (props) => {

    const { openFirst } = props;

    return (
        <div className="accordion">

            <button
                className="accordion__button h5"
                id="acc-button-example-01"
                data-toggle="accordion"
                aria-controls="acc-panel-example-01"
                aria-expanded={openFirst ? `true` : `false`}>
                    Danaus Plexippus
            </button>
            
            <div
                className={openFirst ? `accordion__panel show` : `accordion__panel`}
                id="acc-panel-example-01"
                data-accordion="panel"
                aria-labelledby="acc-button-example-01"
                role="region">
                <div className="accordion__panel__content">
                    <p>
                        The monarch butterfly or simply monarch is a milkweed butterfly in the family Nymphalidae. Other common names, depending on region, include milkweed, common tiger, wanderer, and black veined brown. It may be the most familiar <a href="#1">North American</a> butterfly, and is considered an iconic pollinator species.
                    </p>
                </div>
            </div>

            <button
                className="accordion__button h5"
                id="acc-button-example-01"
                data-toggle="accordion"
                aria-controls="acc-panel-example-01"
                aria-expanded="false">
                    Papilio Polyxenes
            </button>
            <div className="accordion__panel"
                id="acc-panel-example-01"
                data-accordion="panel"
                aria-labelledby="acc-button-example-01"
                role="region">
                <div className="accordion__panel__content">
                    <p>
                        The black swallowtail, American swallowtail, or parsnip swallowtail, is a butterfly found throughout much of <a href="#1">North America</a>. It is the state butterfly of Oklahoma and New Jersey.
                    </p>
                </div>
            </div>

            <button
                className="accordion__button h5"
                id="acc-button-example-01"
                data-toggle="accordion"
                aria-controls="acc-panel-example-01"
                aria-expanded="false">
                    Hyalophora Cecropia
            </button>
            <div
                className="accordion__panel"
                id="acc-panel-example-01"
                data-accordion="panel"
                aria-labelledby="acc-button-example-01"
                role="region">
                <div className="accordion__panel__content">
                    <p>
                        The cecropia moth is <a href="#1">North America's</a> largest native moth. It is a member of the family Saturniidae, or giant silk moths. Females have been documented with a wingspan of five to seven inches or more.
                    </p>
                </div>
            </div>

            <button
                className="accordion__button h5"
                id="acc-button-example-01"
                data-toggle="accordion"
                aria-controls="acc-panel-example-01"
                aria-expanded="false">
                    Deilephila Elpenor
            </button>
            <div
                className="accordion__panel"
                id="acc-panel-example-01"
                data-accordion="panel"
                aria-labelledby="acc-button-example-01"
                role="region">
                <div className="accordion__panel__content">
                    <p>
                        The elephant hawk moth or large elephant hawk moth, is a moth in the family Sphingidae. Its common name is derived from the caterpillar's resemblance to an elephant's trunk. It is most common in <a href="#1">central Europe</a> and is distributed throughout the Palearctic region.
                    </p>
                </div>
            </div>

            <button
                className="accordion__button h5"
                id="acc-button-example-01"
                data-toggle="accordion"
                aria-controls="acc-panel-example-01"
                aria-expanded="false">
                    Papilio Troilus
            </button>
            <div
                className="accordion__panel"
                id="acc-panel-example-01"
                data-accordion="panel"
                aria-labelledby="acc-button-example-01"
                role="region">
                <div className="accordion__panel__content">
                    <p>
                        The spicebush swallowtail or green-clouded butterfly, is a common black swallowtail butterfly found in <a href="#1">North America</a>. It has two subspecies, Papilio troilus troilus and Papilio troilus ilioneus, the latter found mainly in the Florida peninsula.
                    </p>
                </div>
            </div>
        </div>
    );
}

AccordionExample.defaultProps = {
    openFirst: false
}

export default AccordionExample;