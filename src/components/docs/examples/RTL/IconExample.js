import React from 'react';

const IconExample = (props) => {

    const { iconName } = props;

    return (
        <div className="flex-column aspect-ratio-4x3 justify-content-end overflow-hidden border">
            <div className="margin-y-auto" style={{ 'transform': 'scaleX(-1)' }}>
                <svg className="icon margin-x-auto">
                    <use href={`#${iconName}`}></use>
                </svg>
            </div>
            <div className="">                
                <div className="padding-1 border-top font-size-sm">
                    <p><code>.icon-{iconName}</code></p>
                </div>
            </div>
        </div>
    );
}

IconExample.defaultProps = {
    iconName: 'arrow-left'
}

export default IconExample;
