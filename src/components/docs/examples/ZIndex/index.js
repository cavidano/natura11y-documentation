import React from 'react';

function ZIndexExample() {
    return (
        <div className="container narrow font-size-md text-align-center">

            <div
                className="padding-3 theme-white border border-color-dark box-shadow-1 z-index-300"
                style={{'width': '90%'}}>

                <p className="margin-bottom-1">
                    Z-index value 300
                </p>
                <p><code>.z-index-300</code></p>

            </div>

            <div
                className="padding-3 theme-white border border-color-dark box-shadow-1 z-index-200"
                style={{
                    'width': '90%',
                    'padding': '2em 0.5em 0.5em 0.5em',
                    'margin-left': '5%',
                    'margin-top': '-0.75em'
                }}>

                <p className="margin-bottom-1">
                    Z-index value 200
                </p>
                <p><code>.z-index-200</code></p>

            </div>

            <div
                className="padding-3 theme-white border border-color-dark box-shadow-1 z-index-100"
                style={{
                    'width': '90%',
                    'padding': '2em 0.5em 0.5em 0.5em',
                    'margin-left': '10%',
                    'margin-top': '-0.75em'
                }}>

                <p className="margin-bottom-1">
                    Z-index value 100
                </p>
                <p><code>.z-index-100</code></p>
                
            </div>

        </div>
    )
}

export default ZIndexExample;
