import React from 'react';

import GridCell from './GridCell';

const GridColumnWidth = () => {
    return (
        <div className="grid grid--column-3 border font-size-md text-align-center">

            <GridCell label="01" />
            
            <GridCell label="02" />

            <GridCell label="03" />

            <GridCell label="04" />
            
            <GridCell label="05" />

            <GridCell label="06" />

        </div>
    );
};

export default GridColumnWidth;