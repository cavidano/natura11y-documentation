import React from 'react';

const GridCell = (props) => {
    
    const { label, itemClass } = props;

    return (
        <div className={`theme-light padding-2 border font-size-md text-align-center ${itemClass !== null ? itemClass : '' }`}>
            <p>{label}</p>
        </div>
    );
};

GridCell.defaultProps = {
    label: 'Cell',
    itemClass: null
}

export default GridCell;