import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const Shrink = () => {

    return (
        <div className="display-flex subtle-fill font-size-md" style={exampleStyles}>
            <FlexItem label="Flex Item (Shrink 2)" itemClass="flex-shrink-1" />
            <FlexItem itemClass="width-100" />
        </div>
    )
}

export default Shrink;