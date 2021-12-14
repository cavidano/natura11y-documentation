import React, { Fragment } from 'react';

import { exampleStyles } from '../../../../mdxVars';

import ThemeCard from './ThemeCard';

function ThemeColors() {

    return (
        <div className="container narrow grid gap-3 margin-y-4" style={exampleStyles}>

            <ThemeCard themeClass="theme-primary" border={false} />

            <ThemeCard themeClass="theme-secondary" border={false} />

            <ThemeCard themeClass="theme-dark" border={false} />

            <ThemeCard themeClass="theme-light" border={false} />

            <ThemeCard />

        </div>            
    )
}

export default ThemeColors;
