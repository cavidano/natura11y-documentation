import React from 'react';

const GenericNavigation = (props) => {

    const { navClasses } = props
    
    return (
        <ul class={`nav ${navClasses !== '' && navClasses}`}>
            <li>
                <a href="#1">Link</a>
            </li>
            <li>
                <a href="#1">Link</a>
            </li>
            <li>
                <a href="#1">Link</a>
            </li>
        </ul>
    );
}

GenericNavigation.defaultProps = {
    navClasses: ''
}

export default GenericNavigation;