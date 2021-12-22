import React from 'react';

import OpacitySwatch from './OpacitySwatch';

const Opacities = () => {
    return (
        <div className="grid grid--column-3 gap-2">
            <OpacitySwatch />
            <OpacitySwatch swatchClass="opacity-20" />
            <OpacitySwatch swatchClass="opacity-30" />
            <OpacitySwatch swatchClass="opacity-40" />
            <OpacitySwatch swatchClass="opacity-50" />
            <OpacitySwatch swatchClass="opacity-60" />
            <OpacitySwatch swatchClass="opacity-70" />
            <OpacitySwatch swatchClass="opacity-80" />
            <OpacitySwatch swatchClass="opacity-90" />
        </div>
    );
}

export default Opacities;
