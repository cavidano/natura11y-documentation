import React, { Fragment } from 'react';

import Button from './index';

const ButtonBorderRadius = (props) => {

    const { borderRadiusType } = props;
    
    return (
        <Fragment>
            
            {borderRadiusType === 'none' 
            ? (
                <div style={{ '--button-border-radius': '0' }}>
                    <Button
                        buttonClasses="width-100 theme-primary"
                    /> 
                </div>
            ) : (
                <Button
                    buttonClasses="width-100 theme-secondary border-radius-pill"
                /> 
            )}
        
        </Fragment>       
    );
}

ButtonBorderRadius.defaultProps = {
    borderRadiusType: 'none'
}

export default ButtonBorderRadius;