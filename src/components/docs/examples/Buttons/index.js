import React from 'react';

const Button = (props) => {
    
    const { buttonClasses } = props;

    return (
        <a className={`button ${buttonClasses && buttonClasses}`}  href="#1">
            Button
        </a>
    );
}

Button.defaultProps = {
    buttonClasses: 'button'
}

export default Button;