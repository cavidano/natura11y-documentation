import React from 'react';

const IconOnlyButtons = (props) => {
    
    const { hasColor } = props;

    return (
        <div className="button-group font-size-lg">
            <a className={`button button--icon-only ${hasColor && 'theme-primary'}`} href="#1" aria-label="Home">
                <span className="icon icon-home" aria-hidden="true"></span>
            </a>
            <a className={`button button--icon-only ${hasColor && 'theme-secondary'}`} href="#1" aria-label="Print">
                <span className="icon icon-print" aria-hidden="true"></span>
            </a>
            <a className={`button button--icon-only ${hasColor && 'theme-dark'}`} href="#1" aria-label="Settings">
                <span className="icon icon-settings" aria-hidden="true"></span>
            </a>
        </div>
    );
}

IconOnlyButtons.defaultProps = {
    hasColor: false
}

export default IconOnlyButtons;