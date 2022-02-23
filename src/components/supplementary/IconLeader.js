import React, { Fragment } from 'react';

import { Link } from 'gatsby';

const IconLeader = () => {

    const activeStyle = {
        'fontWeight': 'var(--body-font-weight-bold)',
        'textDecoration': 'underline'
    }

    return (
        <Fragment>

            <div className="container narrow margin-y-4 text-align-center">
                <h2>
                    Introducing Natura11y's own icon library.
                </h2>
                <p>
                    Natura11y icons are free to use for commercial or personal use. Include them as a web font or an SVG sprite.
                </p>
            </div>

            <div className="container medium">    
                <ul className="tabs-nav tabs-nav--horizontal">
                    <li>
                        <Link
                            id="tab-button-example-01"
                            to="/icons"
                            role="tab">
                                Icons
                        </Link>
                    </li>
                    <li>
                        <Link
                            id="tab-button-example-02"
                            to="/icons/usage"
                            activeStyle={activeStyle}
                            role="tab">
                                Usage
                        </Link>
                    </li>
                </ul>
            </div>
        
        </Fragment>
    );
}

export default IconLeader;