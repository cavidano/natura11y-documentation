import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixCellWidthBreakpoints = () => {
    return (
        <div className="matrix matrix matrix--cell-4--md border">

            <MatrixCell label="01" />
            <MatrixCell label="02" />
            <MatrixCell label="03" />
            <MatrixCell label="04" />
            <MatrixCell label="05" />
            <MatrixCell label="06" />

        </div>
    );
};

export default MatrixCellWidthBreakpoints;