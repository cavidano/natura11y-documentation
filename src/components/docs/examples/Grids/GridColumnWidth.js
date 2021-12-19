import React from 'react';

import GridItem from './GridItem';

const GridColumnWidth = () => {
    return (
        <div className="grid grid--column-3">

            <GridItem label="01" />
            
            <GridItem label="02" />

            <GridItem label="03" />

            <GridItem label="04" />
            
            <GridItem label="05" />

            <GridItem label="06" />

        </div>
    );
};

export default GridColumnWidth;