import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

const PrinciplePalette = () => {

    return (
        <figure className="margin-y-4">
            <div className="container narrow" style={exampleStyles}>

                <div className="theme-primary padding-3 margin-y-2">
                    <p><strong>Primary</strong></p>
                </div>
                <div className="theme-secondary padding-3 margin-y-2">
                    <p><strong>Secondary</strong></p>
                </div>
                <div className="theme-dark padding-3 margin-y-2">
                    <p><strong>Dark</strong></p>
                </div>
                <div className="theme-light padding-3 margin-y-2">
                    <p><strong>Light</strong></p>
                </div>
                <div className="theme-white border padding-3 margin-y-2">
                    <p><strong>Canvas (default)</strong></p>
                </div>

            </div>
        </figure>
    );
}

export default PrinciplePalette;