import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ThemeExampleCard from './ThemeExampleCard';

function LinkColors() {

    return (
        <figure className="margin-y-4">
            <div className="container narrow grid gap-3" style={exampleStyles}>

                <ThemeExampleCard cardType="feedback" themeColor="Primary" border={false} />

                <ThemeExampleCard cardType="feedback" themeColor="Secondary" border={false} />

                <ThemeExampleCard cardType="feedback" themeColor="Dark" border={false} />

                <ThemeExampleCard cardType="feedback" themeColor="Light" border={false} />

                <ThemeExampleCard cardType="feedback" />

            </div>          
        </figure>          
    )
}

export default LinkColors;