import React from 'react';

const ContainerExample = (props) => {

    const { label, widthClass } = props;
    
    return (
        <div className={`container ${widthClass ? widthClass : ''} border subtle-fill padding-y-2 margin-y-3 font-size-md`}>
            <p>Container {label}</p>
        </div>
    )
}

ContainerExample.defaultProps = {
    label: '(full width)',
    widthClass: null 
}

export default ContainerExample;