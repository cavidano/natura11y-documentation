import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const Direction = () => {

    return (
        <div className="grid gap-3 font-size-md" style={exampleStyles}>

            <div className="flex-row subtle-fill">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-row-reverse subtle-fill">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-column subtle-fill">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-column-reverse subtle-fill">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

        </div>   
    );
}

export default Direction;