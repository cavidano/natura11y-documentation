import React from 'react';

function Styled() {
    return (
        <div className="tabs box-shadow-1" role="tablist">

            <ul className="tabs-nav tabs-nav--horizontal--md">
                <li>
                    <button
                        id="tab-button-example-01"
                        aria-controls="tab-panel-example-01"
                        aria-selected="true"
                        role="tab">
                            Mackerel
                    </button>
                </li>
                <li>
                    <button
                        id="tab-button-example-02"
                        aria-controls="tab-panel-example-02"
                        aria-selected="false"
                        role="tab">
                            Classic
                    </button>
                </li>
                <li>
                    <button id="tab-button-example-03"
                        aria-controls="tab-panel-example-03"
                        aria-selected="false"
                        role="tab">
                            Ticked
                    </button>
                </li>
            </ul>

            <div
                className="tabs__panel shown"
                id="tab-panel-example-01"
                aria-labelledby="tab-button-example-01"
                role="tabpanel">
                <div className="container padding-y-4">
                    <p>
                        The mackerel tabby pattern gives slender vertical, gently curving stripes on the sides of the body. These stripes may be continuous or broken into bars and short segments/spots, especially on the flanks and stomach. Three or five vertical lines in an 'M' shape almost always appear on the forehead, along with dark lines from the corners of the eyes, one or more crossing each cheek, and of course many stripes and lines at various angles on the neck and shoulder area, on the flanks, and around the legs and tail. Mackerel tabbies are also called 'fishbone tabbies,' probably doubly named after the <a href="#1">mackerel</a> fish.
                    </p>
                </div>
            </div>

            <div
                className="tabs__panel"
                id="tab-panel-example-02"
                aria-labelledby="tab-button-example-02"
                role="tabpanel">
                <div className="container padding-y-4">
                    <p>
                    The classic tabby (also known as blotched or marbled tabby) has the 'M' pattern on the forehead but the body markings, rather than primarily thin stripes or spots, are thick curving bands in a whirled or swirled pattern with a distinctive mark on each side of the body resembling a bullseye. Classic tabby is a <a href="#1">recessive</a>  trait. Classic tabbies are the most common type of tabby in much of the United Kingdom and the Middle East, among other places, but they are a far second in number to mackerel tabbies in most parts of the world.
                    </p>
                </div>
            </div>

            <div
                className="tabs__panel"
                id="tab-panel-example-03"
                aria-labelledby="tab-button-example-02"
                role="tabpanel">
                <div className="container padding-y-4">
                    <p>
                        The ticked tabby pattern is due to even fields of <a href="#1">agouti</a> hairs, each with distinct bands of color, which break up the tabby patterning into a salt-and-pepper appearance that makes them look sand-like—thus there are few to no stripes or bands. Residual ghost striping and/or barring can often be seen on the lower legs, face, and belly and sometimes at the tail tip, as well as the standard 'M' and a long dark line running along the spine, primarily in ticked tabbies who also carry a mackerel or classic tabby allele. These types of cats come in many forms and colors.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Styled;