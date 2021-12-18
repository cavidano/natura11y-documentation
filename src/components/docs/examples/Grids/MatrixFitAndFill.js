import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixFitAndFill = () => {
    return (
        <div className="grid gap-2 font-size-md">

            <div class="matrix matrix--cell-fill border">

                <MatrixCell label="01" />
                <MatrixCell label="02" />
                <MatrixCell label="03" />

            </div>

            <div class="matrix matrix--cell-fit subtle-fill border" style={{'--subtle-fill-opacity': '.0375'}}>

                <MatrixCell label="01" />
                <MatrixCell label="02" />
                <MatrixCell label="03" />

            </div>

        </div>
    );
};

export default MatrixFitAndFill;