import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ContainerExample from './ContainerExample';

const WidthVariations = () => {

    return (
        <figure className="margin-y-4">
            <div className="container" style={exampleStyles}>

                <ContainerExample label="(full width)" widthClass="narrow" />
                <ContainerExample label="(medium width)" widthClass="medium" />
                <ContainerExample label="(wide width)" widthClass="wide" />

            </div>          
        </figure>          
    )
}

export default WidthVariations;