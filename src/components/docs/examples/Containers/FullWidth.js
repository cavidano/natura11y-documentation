import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ContainerExample from './ContainerExample';

const FullWidth = () => {

    return (
        <figure className="margin-y-4">
            <div className="container" style={exampleStyles}>

                <ContainerExample label="(full width)" />

            </div>          
        </figure>          
    )
}

export default FullWidth;