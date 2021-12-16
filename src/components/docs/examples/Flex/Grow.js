import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const Grow = () => {

    return (
        <div className="container narrow font-size-md" style={exampleStyles}>

            <div className="flex-row subtle-fill">
                <FlexItem label="Flex Item (grow)" itemClass="flex-grow-1" />
                <FlexItem />
            </div>

        </div>   
    )
}

export default Grow;