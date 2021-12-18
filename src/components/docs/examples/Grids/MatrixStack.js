import React from 'react';

import MatrixCell from './MatrixCell';

const MatrixStack = () => {
    return (
        <div className="matrix theme-light border font-size-md text-align-center">

            <MatrixCell label="01" />
            
            <MatrixCell label="02" />

            <MatrixCell label="03" />

        </div>
    );
};

export default MatrixStack;