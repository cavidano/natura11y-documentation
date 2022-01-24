import React from 'react';

import ColorSVG from './ColorSVG';

const ColorContrast = () => {

    return (
        <div className="container narrow">
            
            <div className='grid grid--column-2 gap-2'>

                <ColorSVG
                    backgroundColor="#273a5c"
                    foregroundColor="#a93b6e"    
                />

                <ColorSVG
                    backgroundColor="#1e2947"
                    foregroundColor="#f2849a"    
                />
                
            </div>

        </div>
    );
}

export default ColorContrast;