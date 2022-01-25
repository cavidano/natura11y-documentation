import React, { Fragment } from 'react';

const TextAndIconButtons = (props) => {

    const { TextAndIconDisperse } = props;
    
    return (
        <Fragment>

            {TextAndIconDisperse ? (

                <a className="button button--has-icon--disperse theme-dark" href="#1">
                    <span className="button__text">Button</span>
                    <span className="icon icon-arrow-right"></span>
                </a>

            ) : (

                <div className="grid grid--column-2--md gap-3">
                    <a className="button button--has-icon width-100 theme-primary" href="#1">
                        <span className="icon icon-edit"></span>
                        <span className="button__text">Edit</span>
                    </a>  
                    <a className="button button--has-icon width-100 button--outline" href="#1">
                        <span className="icon icon-delete"></span>
                        <span className="button__text">Delete</span>
                    </a>
                </div>
                
            )}

        </Fragment>
    );
}

TextAndIconButtons.defaultProps = {
    TextAndIconDisperse : false
}

export default TextAndIconButtons;