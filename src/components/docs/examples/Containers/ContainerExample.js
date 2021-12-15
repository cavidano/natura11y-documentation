import React from 'react';

const ContainerExample = (props) => {

    const { label, widthClass } = props;
    
    return (
        <div className="font-size-md">
            <div className={`container ${widthClass && widthClass} border subtle-fill padding-y-2 margin-y-3`}>
                <p>Container {label}</p>
            </div>
        </div>
    )
}

ContainerExample.defaultProps = {
    label: '(full width)',
    widthClass: null 
}

export default ContainerExample;