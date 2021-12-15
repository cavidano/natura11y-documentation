import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

const InfinitelyNestable = () => {

    return (
        <figure className="container narrow margin-y-4">
            <div className="theme-primary padding-3" style={exampleStyles}>
                <p><strong>Primary</strong></p>
                <div className="theme-secondary padding-3 box-shadow-1">
                    <p><strong>Secondary</strong></p>
                    <div className="theme-dark padding-3 box-shadow-1">
                        <p><strong>Dark</strong></p>
                        <div className="theme-light padding-3 box-shadow-1">
                            <p><strong>Light</strong></p>
                            <div className="theme-white padding-3 box-shadow-1">
                                <p><strong>White</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </figure>          
    )
}

export default InfinitelyNestable;