import React from 'react';

const OpacitySwatch = (props) => {

    const { swatchClass } = props;
    
    return (
        <div className="position-relative overflow-hidden">
            <div className={`aspect-ratio-16x9 theme-primary ${swatchClass}`}></div>
            <div className="position-bottom-left flex-row justify-content-center">                
                <div className="padding-1 box-shadow-1 border-radius-top theme-white text-align-center font-size-sm">
                    <p><code>.{swatchClass}</code></p>
                </div>
            </div>
        </div>
    );
}

OpacitySwatch.defaultProps = {
    swatchClass: 'opacity-10'
}

export default OpacitySwatch;
