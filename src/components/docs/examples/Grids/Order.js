import React from 'react';

import GridItem from './GridItem';
import MatrixCell from './MatrixCell';

const Order = () => {
    return (
        <div className="grid gap-3">

            <div>
                <p className="font-size-md margin-bottom-2">
                    The <code>.matrix</code> selector with <code>.order-3</code> applied to the first item:
                </p>

                <div className="matrix matrix--cell-4">

                    <MatrixCell label="01" itemClass="order-3" />
                    <MatrixCell label="02" />
                    <MatrixCell label="03" />

                </div>

            </div>

            <div>
            
                <p className="font-size-md margin-bottom-2">
                    The <code>.grid</code> selector with <code>.order-3</code> applied to the first item:
                </p>

                <div className="grid grid--column-3" style={{ 'gap': '0'}}>

                    <GridItem label="01" itemClass="order-3" />
                    <GridItem label="02" />
                    <GridItem label="03" />
                
                </div>
            
            </div>

        </div>
    );
};

export default Order;