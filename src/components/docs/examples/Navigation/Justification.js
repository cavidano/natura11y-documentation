import React from 'react';

import GenericNavigation from './GenericNavigation';

const Justification = () => {
    
    return (
        <div className="grid gap-3">

            <GenericNavigation navClasses="nav--horizontal justify-content-center" />

            <GenericNavigation navClasses="nav--horizontal justify-content-end" />

        </div>
    );
}

export default Justification;