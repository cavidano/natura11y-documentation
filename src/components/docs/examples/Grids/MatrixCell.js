import React from 'react';

const MatrixCell = (props) => {
    
    const { label, itemClass } = props;

    return (
        <div className={`matrix__cell ${itemClass !== null ? itemClass : '' }`}>
            <div className="theme-light padding-2 border font-size-md text-align-center">
                <p>{label}</p>
            </div>
        </div>
    );
};

MatrixCell.defaultProps = {
    label: 'Cell',
    itemClass: null
}

export default MatrixCell;