import React from 'react';

import Button from './index';

const OutlinedButtons = () => {
    return (
        <div className="grid grid--column-2--md gap-3">

            <Button
                buttonClasses="button--outline width-100"
            />
        
            <Button
                buttonClasses="button--outline width-100 text-color-link"
            />
        
        </div>
    );
}

export default OutlinedButtons;