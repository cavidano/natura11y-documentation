import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

const GridExample = () => {
    return (
        <figure className="container medium margin-y-4">

            <div className="grid grid--column-4 gap-border text-align-center font-size-md">

                <div className="theme-primary padding-2 flex-column justify-content-center grid__colspan-2 grid__rowspan-4 aspect-ratio-1x1">
                    <p>Item</p>
                </div>

                <div className="theme-primary padding-2 flex-column justify-content-center">
                    <p>Item</p>
                </div>

                <div className="theme-primary padding-2 flex-column justify-content-center grid__rowspan-2">
                    <p>Item</p>
                </div>

                <div className="theme-primary padding-2 flex-column justify-content-center">
                    <p>Item</p>
                </div>

                <div className="theme-primary padding-2 flex-column justify-content-center">
                    <p>Item</p>
                </div>

                <div className="theme-primary padding-2 flex-column justify-content-center grid__rowspan-2">
                    <p>Item</p>
                </div>

                <div className="theme-primary padding-2 flex-column justify-content-center">
                    <p>Item</p>
                </div>

            </div>

        </figure>
    )
};

export default GridExample;