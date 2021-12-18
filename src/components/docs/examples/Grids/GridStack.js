import React from 'react';

import GridItem from './GridItem';

const GridStack = () => {
    return (
        <div className="grid border font-size-md text-align-center">

            <GridItem label="01" />
            
            <GridItem label="02" />

            <GridItem label="03" />

        </div>
    );
};

export default GridStack;