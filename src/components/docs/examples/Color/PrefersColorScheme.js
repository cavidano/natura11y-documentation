import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ThemeExampleCard from './ThemeExampleCard';

const PrefersColorScheme = () => {

    return (
        <figure className="margin-y-4"> 
            <div className="container narrow" style={exampleStyles}>

                <ThemeExampleCard themeColor="Prefers" />

            </div>        
        </figure>        
    );
}

export default PrefersColorScheme;