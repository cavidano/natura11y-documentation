import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ThemeExampleCard from './ThemeExampleCard';

function LinkColors() {

    return (
        <div className="container narrow grid gap-3 margin-y-4" style={exampleStyles}>

            <ThemeExampleCard cardType="cool" themeColor="Primary" border={false} />

            <ThemeExampleCard cardType="cool" themeColor="Secondary" border={false} />

            <ThemeExampleCard cardType="cool" themeColor="Dark" border={false} />

            <ThemeExampleCard cardType="cool" themeColor="Light" border={false} />

            <ThemeExampleCard cardType="cool" />

        </div>            
    )
}

export default LinkColors;