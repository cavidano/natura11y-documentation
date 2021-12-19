import React, { Fragment } from 'react';

import GridItem from './GridItem';
import MatrixCell from './MatrixCell';

const Gap = () => {
    return (
        <Fragment>
            
        <div className="grid gap-3">

            <div>
                <p class="font-size-md margin-bottom-2">
                    The <code>.matrix</code> selector with <code>.gap-1</code> applied:
                </p>

                <div class="matrix matrix--cell-4 gap-1 text-align-center font-size-md">

                    <MatrixCell label="01" />
                    <MatrixCell label="02" />
                    <MatrixCell label="03" />
                    <MatrixCell label="04" />
                    <MatrixCell label="05" />
                    <MatrixCell label="06" />

                </div>

            </div>

            <div>
            
                <p class="font-size-md margin-bottom-2">
                    The <code>.grid</code> selector with <code>.gap-2</code> applied:
                </p>

                <div class="grid grid--column-3 gap-2">

                    <GridItem label="01" />
                    <GridItem label="02" />
                    <GridItem label="03" />
                    <GridItem label="04" />
                    <GridItem label="05" />
                    <GridItem label="06" />
                
                </div>
            
            </div>

        </div>

        </Fragment>
    );
};

export default Gap;