import React from 'react';

const ButtonSelector = (props) => {
    
    const { buttonClasses } = props;

    return (
        <div className="text-align-center">
            <a className="button" href="#1">
                Button
            </a>
        </div>
    );
}

ButtonSelector.defaultProps = {
    buttonClasses = 'button'
}

export default ButtonSelector;