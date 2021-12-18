import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const JustifyContent = () => {

    return (
        <div className="grid gap-3 font-size-md" style={exampleStyles}>

            <div className="flex-row subtle-fill justify-content-start">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-row subtle-fill justify-content-end">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-row subtle-fill justify-content-center">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-row subtle-fill justify-content-between">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-row subtle-fill justify-content-around">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

            <div className="flex-row subtle-fill justify-content-evenly">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

        </div>   
    )
}

export default JustifyContent;