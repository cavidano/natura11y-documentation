import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ThemeExampleCard from './ThemeExampleCard';

function LinkColors() {

    return (
        <figure className="margin-y-4">
            <div className="container narrow grid gap-3" style={exampleStyles}>

                <ThemeExampleCard cardType="link" themeColor="Primary" border={false} />

                <ThemeExampleCard cardType="link" themeColor="Secondary" border={false} />

                <ThemeExampleCard cardType="link" themeColor="Dark" border={false} />

                <ThemeExampleCard cardType="link" themeColor="Light" border={false} />

                <ThemeExampleCard cardType="link" />

            </div>
        </figure>         
    )
}

export default LinkColors;