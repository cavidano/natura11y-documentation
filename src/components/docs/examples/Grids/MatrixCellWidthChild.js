import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixCellWidthChild = () => {
    return (
        <div className="matrix matrix--cell-4 theme-light border font-size-md text-align-center">

            <MatrixCell label="01" />
            <MatrixCell label="02" />
            <MatrixCell label="03" />
            <MatrixCell label="04" />
            <MatrixCell label="05" itemClass="matrix--cell-8" />

        </div>
    );
};

export default MatrixCellWidthChild;