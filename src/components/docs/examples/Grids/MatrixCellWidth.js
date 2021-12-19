import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixCellWidth = () => {
    return (
        <div className="matrix matrix--cell-4">

            <MatrixCell label="01" />
            <MatrixCell label="02" />
            <MatrixCell label="03" />
            <MatrixCell label="04" />
            <MatrixCell label="05" />
            <MatrixCell label="06" />

        </div>
    );
};

export default MatrixCellWidth;