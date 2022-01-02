import React from 'react';

const ButtonGroup = () => {

    return (
        <div className="button-group justify-content-center font-size-lg">
            <a className="button button--outline" href="#1">
                Sign In  
            </a>
            <a className="button button--icon-only" href="#1" aria-label="Language">
                <span className="icon icon-language" aria-hidden="true"></span>
            </a>
            <a className="button button--icon-only" href="#1" aria-label="Search">
                <span className="icon icon-search" aria-hidden="true"></span>
            </a>
        </div>
    );
}

export default ButtonGroup;