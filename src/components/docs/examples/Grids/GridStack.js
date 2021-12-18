import React from 'react';

import GridCell from './GridCell';

const GridStack = () => {
    return (
        <div className="grid border font-size-md text-align-center">

            <GridCell label="01" />
            
            <GridCell label="02" />

            <GridCell label="03" />

        </div>
    );
};

export default GridStack;