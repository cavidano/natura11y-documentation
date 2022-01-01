import React from 'react';

const OutlinedButtons = () => {
    return (
        <div className="grid grid--column-2--md gap-3">            
            <a className="button button--outline width-100" href="#1">
                Button
            </a>
            <a className="button button--outline width-100 text-color-link" href="#1">
                Button
            </a>
        </div>
    );
}

export default OutlinedButtons;