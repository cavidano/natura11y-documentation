import React from 'react';

import GridItem from './GridItem';

const GridColumnSpan = () => {
    return (
        <div className="grid grid--column-4">

            <GridItem label="01" itemClass="grid__colspan-3" />
            
            <GridItem label="02" />

            <GridItem label="03" />

            <GridItem label="04" />
            
            <GridItem label="05" />

            <GridItem label="06" />

        </div>
    );
};

export default GridColumnSpan;