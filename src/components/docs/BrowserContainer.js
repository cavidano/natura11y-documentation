import React from 'react';

import { exampleStyles } from '../../mdxVars';

const BrowserContainer = (props) => {

    const { 
        frameWidth,
        visualExample
    } = props;
    
    return (
        <figure className={`container ${frameWidth} margin-y-4`} style={exampleStyles}>

            <div className="browser box-shadow-1">

                <div className="browser__bar">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                {visualExample}

            </div>

        </figure>
    )
}

BrowserContainer.defaultProps = {
    frameWidth: 'medium',
    visualExample: null
}

export default BrowserContainer;