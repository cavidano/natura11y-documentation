import React from 'react';

const IconItem = (props) => {

    const { iconName } = props;

    return (
        <li className="flex-row align-items-center overflow-hidden border">
            <div className="padding-2 border-right">
                <span
                    className={`icon icon-${iconName}`}
                    style={{ '--icon-size': '2em' }}>    
                </span>
            </div>
            <div className="padding-2">                
                <div className="font-size-md">
                    <p><code>.icon-{iconName}</code></p>
                </div>
            </div>
        </li>
    );
}

IconItem.defaultProps = {
    iconName: 'arrow-left'
}

export default IconItem;