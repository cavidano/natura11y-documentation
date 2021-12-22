import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixFitAndFill = () => {
    return (
        <div className="grid gap-2 font-size-md">

            <div className="matrix matrix--cell-fill">
                <MatrixCell label="01" />
                <MatrixCell label="02" />
                <MatrixCell label="03" />
            </div>

            <div className="matrix matrix--cell-fit subtle-fill">
                <MatrixCell label="01" />
                <MatrixCell label="02" />
                <MatrixCell label="03" />
            </div>

        </div>
    );
};

export default MatrixFitAndFill;