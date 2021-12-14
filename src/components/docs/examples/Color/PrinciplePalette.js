import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

const PrinciplePalette = () => {

    return (
        <figure class="container narrow margin-y-4">

            <div style={exampleStyles}>

                <div class="theme-primary padding-3 margin-y-2">
                    <p><strong>Primary</strong></p>
                </div>
                <div class="theme-secondary padding-3 margin-y-2">
                    <p><strong>Secondary</strong></p>
                </div>
                <div class="theme-dark padding-3 margin-y-2">
                    <p><strong>Dark</strong></p>
                </div>
                <div class="theme-light padding-3 margin-y-2">
                    <p><strong>Light</strong></p>
                </div>
                <div class="theme-white border padding-3 margin-y-2">
                    <p><strong>White (default)</strong></p>
                </div>

            </div>

        </figure>
    );
}

export default PrinciplePalette;