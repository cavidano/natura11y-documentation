import React from 'react';

function FlexItem(props) {
    
    const { label, itemClass } = props;

    return (
        <div class={`${itemClass && itemClass } padding-x-3 padding-y-2 theme-white border text-align-center`}>
            <p>{label}</p>
        </div>
    )
}

FlexItem.defaultProps = {
    label: 'Flex Item',
    itemClass: null
}

export default FlexItem;
