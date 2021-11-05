import React from 'react';

const AccessibilitySpotlight = ({ children }) => {
    return (
        <div className="container narrow margin-y-4">
            <div className="alert accessibility-spotlight border-left margin-y-3">
                <div className="alert__title h6">
                    <span className="icon icon-accessibility" aria-hidden="true"></span>
                    <span className="alert__title__text">Accessibility Spotlight</span>
                </div>
                <div className="alert__description">
                    {children}    
                </div>
            </div>
        </div>
    )
}

export default AccessibilitySpotlight;