import React from 'react';

const AccessibilitySpotlight = ({ children }) => {
    return (
        <div class="container narrow margin-y-4">
            <div class="alert accessibility-spotlight border-left margin-y-3">
                <div class="alert__title h6">
                    <span class="icon icon-accessibility" aria-hidden="true"></span>
                    <span class="alert__title__text">Accessibility Spotlight</span>
                </div>
                <div class="alert__description">
                    {children}    
                </div>
            </div>
        </div>
    )
}

export default AccessibilitySpotlight;
