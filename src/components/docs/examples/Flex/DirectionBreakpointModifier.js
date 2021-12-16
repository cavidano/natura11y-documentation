import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import FlexItem from './FlexItem';

const DirectionBreakpointModifier = () => {

    return (
        <div className="container narrow grid gap-3 font-size-md" style={exampleStyles}>

            <div className="flex-column flex-row--lg subtle-fill">
                <FlexItem label="1" />
                <FlexItem label="2" />
                <FlexItem label="3" />
            </div>

        </div>   
    )
}

export default DirectionBreakpointModifier;