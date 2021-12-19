import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixStack = () => {
    return (
        <div className="matrix">

            <MatrixCell label="01" />
            
            <MatrixCell label="02" />

            <MatrixCell label="03" />

        </div>
    );
};

export default MatrixStack;