import React from 'react';

const Absolute = () => {

    const setHeight = {
        'height': '240px'
    }

    return (
        <div className="grid gap-3 font-size-md">
                    
            <div className="position-relative subtle-fill" style={setHeight}>
                <div className="position-top-left padding-x-3 padding-y-2 theme-white border">
                    <p><code>.position-absolute</code></p>
                </div>
            </div>
            
            <div className="position-relative subtle-fill" style={setHeight}>
                <div className="position-top-right padding-x-3 padding-y-2 theme-white border">
                    <p><code>.position-top-right</code></p>
                </div>
            </div>

            <div className="position-relative subtle-fill" style={setHeight}>
                <div className="position-bottom-left padding-x-3 padding-y-2 theme-white border">
                    <p><code>.position-bottom-left</code></p>
                </div>
            </div>

            <div className="position-relative subtle-fill" style={setHeight}>
                <div className="position-bottom-right padding-x-3 padding-y-2 theme-white border">
                    <p><code>.position-bottom-right</code></p>
                </div>
            </div>

        </div>
    );
}

export default Absolute;