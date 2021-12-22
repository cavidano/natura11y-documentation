import React, { Fragment } from 'react';

const StyleVariations = () => {
    return (
        <Fragment>

            <div
                className="alert text-color-link border-left margin-bottom-3"
                aria-labelledby="alert-07-label"
                aria-describedby="alert-07-desc"
                role="alert">

                <div className="alert__title h5">
                    <span className="icon icon-warn" aria-hidden="true"></span>
                    <span className="alert__title__text" id="alert-07-label">
                        Attention
                    </span>
                </div>

                <div className="alert__description" id="alert-07-desc">
                    <p>
                        You have <strong>4</strong> unread messages waiting in <a href="#1">your account dashboard</a>.
                    </p>
                </div>

            </div>

            <div
                className="alert theme-dark border-radius text-align-center"
                aria-labelledby="alert-06-label"
                aria-describedby="alert-06-desc"
                role="alert">

                <div className="alert__title h5 text-color-secondary">
                    <span className="icon icon-warn" aria-hidden="true"></span>
                    <span className="alert__title__text" id="alert-06-label">
                        Attention
                    </span>
                </div>

                <div className="alert__description" id="alert-06-desc">
                    <p>
                        You have <strong>4</strong> unread messages waiting in <a href="#1">your account dashboard</a>.
                    </p>
                </div>

            </div>

        </Fragment>
    )
}

export default StyleVariations;