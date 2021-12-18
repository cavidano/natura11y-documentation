import React from 'react';

const MatrixCell = (props) => {
    
    const { label, itemClass } = props;

    return (
        <div className={`matrix__cell ${itemClass !== null ? itemClass : '' }`}>
            <div className="padding-2 border">
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