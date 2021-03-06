import React, { Fragment } from 'react';

const AlertExample = (props) => {

    const { inverse, dismissable, description } = props;

    return (
        <Fragment>

            <div
                className={(`
                    alert
                    ${inverse ? "alert--confirm--inverse": "alert--confirm"}
                    ${dismissable && "alert--dismissable"}
                    margin-y-3 
                `)}
                aria-labelledby="alert-confirm-label"
                aria-describedby="alert-confirm-description"
                role="alert">

                <div className="alert__title h5">
                    <span className="icon icon-confirm" aria-hidden="true"></span>
                    <span className="alert__title__text" id="alert-confirm-label">
                        Alert Confirm
                    </span>
                </div>

                {description && (
                    <div className="alert__description" id="alert-confirm-description">
                        <p>
                            Thank you for your feedback. A confirmation message has been sent to your email. Return to our <a href="#1">homepage</a>.
                        </p>
                    </div>
                )}

            </div>

            <div
                className={(`
                    alert
                    ${inverse ? "alert--warn--inverse": "alert--warn"}
                    ${dismissable && "alert--dismissable"}
                    margin-y-3 
                `)}
                aria-labelledby="alert-warn-label"
                aria-describedby="alert-warn-description"
                role="alert">

                <div className="alert__title h5">
                    <span className="icon icon-warn" aria-hidden="true"></span>
                    <span className="alert__title__text" id="alert-warn-label">
                        Alert Warn
                    </span>
                </div>
                
                {description && (
                    <div className="alert__description" id="alert-warn-description">
                        <p>
                            Your feedback was not sent. Complete <a href="#1">all required fields</a> below and submit the form again.
                        </p>
                    </div>
                )}
                
            </div>

        </Fragment>
    );
}

AlertExample.defaultProps = {
    description: true,
    inverse: false,
    dismissable: false
}

export default AlertExample;