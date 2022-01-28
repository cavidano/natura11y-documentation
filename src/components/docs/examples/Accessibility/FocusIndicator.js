import React from 'react';

import FocusSVG from './FocusSVG';

const FocusIndicator = () => {

    return (

        <div className="container narrow">

            <div className="grid grid--column-3 gap-1">
                <FocusSVG focusRing={true} />
                <FocusSVG />
                <FocusSVG />
            </div>

        </div>
    );
}

export default FocusIndicator;