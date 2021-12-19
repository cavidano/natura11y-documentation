import React from 'react';

import GridItem from './GridItem';

const OrderBreakpoints = () => {
    return (
        <div className="grid grid--column-3" style={{ 'gap': '0'}}>

            <GridItem label="01" itemClass="order-3--lg" />
            <GridItem label="02" />
            <GridItem label="03" />
        
        </div>
    );
};

export default OrderBreakpoints;