import React from 'react';

const ContainerExample = (props) => {

    const { label } = props;
    
    return (
        <div className="font-size-md">
            <div className="container border subtle-fill padding-y-2 margin-y-3">
                <p>Container {label}</p>
            </div>
        </div>
    )
}

ContainerExample.defaultProps = {
    label: '(full width)'
}

export default ContainerExample;