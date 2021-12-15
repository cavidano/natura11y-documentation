import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ThemeExampleCard from './ThemeExampleCard';

function ThemeColors() {

    return (
        <div className="container narrow grid gap-3 margin-y-4" style={exampleStyles}>

            <ThemeExampleCard themeColor="Primary" border={false} />

            <ThemeExampleCard themeColor="Secondary" border={false} />

            <ThemeExampleCard themeColor="Dark" border={false} />

            <ThemeExampleCard themeColor="Light" border={false} />

            <ThemeExampleCard />

        </div>            
    )
}

export default ThemeColors;