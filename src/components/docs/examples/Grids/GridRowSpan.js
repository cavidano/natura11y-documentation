import React from 'react';

import GridItem from './GridItem';

const GridColumnSpan = () => {
    return (
        <div className="grid grid--column-2">

            <GridItem label="01" itemClass="grid__rowspan-2" />
            
            <GridItem label="02" />

            <GridItem label="03" />

        </div>
    );
};

export default GridColumnSpan;