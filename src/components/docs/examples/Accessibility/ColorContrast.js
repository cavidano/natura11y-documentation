import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const ColorContrast = () => {
    return (
        <div className="container narrow">
            
            <div className='grid grid--column-2 gap-2'>

                <StaticImage
                    src="../../../../images/color-contrast-fail.svg"
                    alt=""
                    placeholder="dominantColor"
                    layout="fullWidth"
                />
                
                <StaticImage
                    src="../../../../images/color-contrast-pass.svg"
                    alt=""
                    placeholder="dominantColor"
                    layout="fullWidth"
                />
                
            </div>

        </div>
    );
}

export default ColorContrast;