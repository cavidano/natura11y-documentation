import React, { Fragment } from 'react';

const ModalExample = (props) => {

    const { id, closeOutside, scrollAll } = props;

    return (
        <Fragment>

            <button
                className="button theme-primary border-radius width-100 margin-y-3"
                data-modal-open={id}>
                    Open Modal (Default)
            </button>

            <div 
                className={`modal ${scrollAll ? 'modal--scroll-all' : ''} padding-2`}
                data-modal-close-outside={closeOutside}
                id={id}
                role="dialog">

                <div
                    className="modal__content narrow border-radius box-shadow-3"
                    aria-labelledby="modal-example-01-title">

                    <header className="modal__content__head border-bottom">
                        <h2 className="h5" id="modal-example-01-title">
                            Suricata Suricatta
                        </h2>
                        <button className="button button--icon-only" data-modal-close>
                            <span className="icon icon-close" aria-hidden="true"></span>
                        </button>
                    </header>

                    <main className="modal__content__body" id="modal-example-01-content">
                        <p>
                            The <strong>meerkat</strong> (Suricata suricatta) or suricate is a small <a href="#1">mongoose</a> found in southern Africa. It is characterised by a broad head, large eyes, a pointed snout, long legs, a thin tapering tail, and a brindled coat pattern. The head-and-body length is around 24–35 cm (9.4–13.8 in), and the weight is typically between 0.62 and 0.97 kg (1.4 and 2.1 lb). The coat is light grey to yellowish brown with alternate, poorly defined light and dark bands on the back. Meerkats have foreclaws adapted for digging and have the ability to thermoregulate to survive in their harsh, dry habitat. Three subspecies are recognised.
                        </p>

                        {scrollAll && (
                            <Fragment>
                                <p>
                                    Meerkats are eusocial, and form packs of two to 30 individuals each that occupy home ranges around 5 km2 (1.9 sq mi) in area. There is a social hierarchy—generally dominant individuals in a pack breed and produce offspring, and the nonbreeding, subordinate members provide altruistic care to the pups. Breeding occurs round the year, with peaks during heavy rainfall; after a gestation of 60 to 70 days a litter of three to seven pups is born.
                                </p>
                                <p>
                                    They live in rock crevices in stony, often calcareous areas, and in large burrow systems in plains. The burrow systems, typically 5 m (16 ft) in diameter with around 15 openings, are large underground networks consisting of two to three levels of tunnels. These tunnels are around 7.5 cm (3.0 in) high at the top and wider below, and extend up to 1.5 m (4.9 ft) into the ground. Burrows have moderated internal temperatures and provide a comfortable microclimate that protects meerkats in harsh weather and at extreme temperatures.
                                </p>
                                <p>
                                    Meerkats are active during the day, mostly in the early morning and late afternoon; they remain continually alert and retreat to burrows (or 'boltholes') on sensing danger. They use a broad variety of calls to communicate among one another for different purposes, for example to raise alarm on sighting a predator. Primarily insectivorous, meerkats feed heavily on beetles and lepidopterans, though they also include amphibians, arthropods, small birds, reptiles, and plant material in their diet.
                                </p>
                                <p>
                                    Commonly found in arid, open habitats with little woody vegetation, meerkats occur in southwestern Botswana, western and southern Namibia, northern and western South Africa; the range barely extends into southwestern Angola. With no significant threats to the populations, the meerkat is listed as Least Concern on the IUCN Red List. Meerkats are widely depicted in television, movies and other media.
                                </p>
            
                            </Fragment>
                        )}
                    </main>

                    <footer className="modal__content__foot border-top text-color-link">
                        <ul className="nav nav--horizontal justify-content-between">
                            <li>
                                <a href="#1">Secondary Action</a>
                            </li>
                            <li>
                                <a className="button rounded-pill" href="#1">Primary Action</a>
                            </li>
                        </ul>
                    </footer>
                </div>

            </div>

        </Fragment>
    );
}

ModalExample.defaultProps = {
    id: 'modal-example-01',
    closeOutside: false,
    scrollAll: true,
}

export default ModalExample;