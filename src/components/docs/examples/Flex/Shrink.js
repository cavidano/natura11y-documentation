import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const Shrink = () => {

    return (
        <div className="font-size-md" style={exampleStyles}>

            <div className="display-flex subtle-fill">
                <FlexItem label="Flex Item (Shrink 2)" itemClass="flex-shrink-1" />
                <FlexItem itemClass="width-100" />
            </div>

        </div>   
    )
}

export default Shrink;