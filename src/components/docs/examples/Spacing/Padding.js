import React from 'react'

function Padding() {
    return (
        <div className="grid gap-2 font-size-md text-align-center" style={{'--subtle-fill-opacity': '.0375', '--white-border': 'hsla(0, 0%, 50%, 0.375)'}}>

        <div className="padding-1 subtle-fill border">
            <p className="margin-bottom-1">
                Padding value 1 (all sides)
            </p>
            <p><code>.padding-1</code></p>
        </div>
        
        <div className="padding-2 subtle-fill border">
            <p className="margin-bottom-1">
                Padding value 2 (all sides)
            </p>
            <p><code>.padding-2</code></p>
        </div>

        <div className="padding-3 subtle-fill border">
            <p className="margin-bottom-1">
                Padding value 3 (all sides)
            </p>
            <p><code>.padding-3</code></p>
        </div>

        <div className="padding-4 subtle-fill border">
            <p className="margin-bottom-1">
                Padding value 4 (all sides)
            </p>
            <p><code>.padding-4</code></p>
        </div>

        <div className="padding-5 subtle-fill border">
            <p className="margin-bottom-1">
                Padding value 5 (all sides)
            </p>
            <p><code>.padding-5</code></p>
        </div>

    </div>

    )
}

export default Padding
