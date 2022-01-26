import React from 'react';

const IconItem = (props) => {

    const { iconName } = props;

    const iconTitleWords = iconName.replace(/-/g, ' ').split(' ');
    
    let iconTitleArray = [];
    
    iconTitleWords.map((word) => {
        word = word[0].toUpperCase() + word.substr(1);
        iconTitleArray.push(word);
    });

    const iconTitle = iconTitleArray.join(' ');
    
    return (
        <li className="flex-row align-items-center overflow-hidden border">
            <div className="padding-2 border-right">
                <span
                    className={`icon icon-${iconName}`}
                    style={{ '--icon-size': '1.75em' }}>    
                </span>
            </div>
            <div className="padding-2">                
                <p className="font-size-md">
                    {iconTitle}
                </p>
            </div>
        </li>
    );
}

IconItem.defaultProps = {
    iconName: 'arrow-left'
}

export default IconItem;