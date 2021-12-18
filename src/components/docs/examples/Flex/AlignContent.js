import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const AlignContent = () => {

    const exampleHeight = {
        height: '240px'
    }

    return (
        <div className="grid gap-3 font-size-md" style={exampleStyles}>

            <div className="flex-row justify-content-center align-content-start subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

            <div className="flex-row justify-content-center align-content-end subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

            <div className="flex-row justify-content-center align-content-center subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

            <div className="flex-row justify-content-center align-content-between subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

            <div className="flex-row justify-content-center align-content-around subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

            <div className="flex-row justify-content-center align-content-evenly subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

            <div className="flex-row justify-content-center align-content-stretch subtle-fill" style={exampleHeight}>
                <FlexItem label="Item 1" />
                <FlexItem label="Item 2" />
                <FlexItem label="Item 3" />
                <FlexItem label="Item 4" />
                <FlexItem label="Item 5" />
                <FlexItem label="Item 6" />
                <FlexItem label="Item 7" />
                <FlexItem label="Item 8" />
                <FlexItem label="Item 9" />
            </div>

        </div>   
    );
}

export default AlignContent;