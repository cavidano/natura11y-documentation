import React from 'react';

const Margin = () => {
    return (
        <div className="grid gap-2 font-size-md text-align-center" style={{'--subtle-fill-opacity': '.0375', '--white-border': 'hsla(0, 0%, 50%, 0.375)'}}>

            <div className="subtle-fill overflow-hidden">
                <div className="theme-white border padding-2 margin-1">
                    <p className="margin-bottom-1">
                        Margin value (all sides)
                    </p>
                    <p><code>.margin-1</code></p>
                </div>
            </div>
            
            <div className="subtle-fill overflow-hidden">
                <div className="theme-white border padding-2 margin-2">
                    <p className="margin-bottom-1">
                        Margin value (all sides)
                    </p>
                    <p><code>.margin-2</code></p>
                </div>
            </div>
            
            <div className="subtle-fill overflow-hidden">
                <div className="theme-white border padding-2 margin-3">
                    <p className="margin-bottom-1">
                        Margin value (all sides)
                    </p>
                    <p><code>.margin-3</code></p>
                </div>
            </div>
            
            <div className="subtle-fill overflow-hidden">
                <div className="theme-white border padding-2 margin-4">
                    <p className="margin-bottom-1">
                        Margin value (all sides)
                    </p>
                    <p><code>.margin-4</code></p>
                </div>
            </div>
            
            <div className="subtle-fill overflow-hidden">
                <div className="theme-white border padding-2 margin-5">
                    <p className="margin-bottom-1">
                        Margin value (all sides)
                    </p>
                    <p><code>.margin-5</code></p>
                </div>
            </div>
            
            <div className="subtle-fill overflow-hidden">
                <div className="theme-white border padding-2 margin-6">
                    <p className="margin-bottom-1">
                        Margin value (all sides)
                    </p>
                    <p><code>.margin-6</code></p>
                </div>
            </div>

        </div>

    );
}

export default Margin;