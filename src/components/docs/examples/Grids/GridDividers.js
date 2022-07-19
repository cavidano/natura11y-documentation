import React from 'react';

import GridItem from './GridItem';

const GridDividers = (props) => {
    const { gridDividerClass } = props;
    return (
        <ul className={`grid ${gridDividerClass} grid--column-3--lg`}>

            <li>
                <GridItem label="01" />
            </li>

            <li>
                <GridItem label="02" />
            </li>
            
            <li>
                <GridItem label="03" />
            </li>
            
            <li>
                <GridItem label="04" />
            </li>
            
            <li>
                <GridItem label="05" />
            </li>
            
            <li>
                <GridItem label="06" />
            </li>
            
            <li>
                <GridItem label="07" />
            </li>
            
            <li>
                <GridItem label="08" />
            </li>
            
            <li>
                <GridItem label="09" />
            </li>

        </ul>
    );
};


GridDividers.defaultProps = {
    gridDividerClass: 'grid--divider'
}

export default GridDividers;