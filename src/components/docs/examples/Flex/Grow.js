import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const Grow = () => {

    return (
        <div className="flex-row subtle-fill font-size-md" style={exampleStyles}>
            <FlexItem label="Flex Item (grow)" itemClass="flex-grow-1" />
            <FlexItem />
        </div>
    );
}

export default Grow;