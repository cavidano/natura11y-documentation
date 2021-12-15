import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ContainerExample from './ContainerExample';

const BreakpointModifier = () => {

    return (
        <figure className="margin-y-4">
            <div className="container" style={exampleStyles}>

                <ContainerExample label="(full width)" widthClass="narrow medium--lg wide--xl" />

            </div>          
        </figure>          
    )
}

export default BreakpointModifier;