import React, { Fragment } from 'react';

const FloatingLabels = () => {
    return (
        <Fragment>

        <div className="grid grid__columns-2 gap-2">

            <div 
                className="form-entry"
                data-required="true"
                data-error-message="Username is required!">

                <label className="form-entry__field form-entry__field--float">

                    <span className="form-entry__field__label">
                        Username
                    </span>
                    
                    <span className="form-entry__field__input">
                        <input type="text" id="account-username" name="accountUsername" />
                    </span>

                </label>

            </div>

            <div 
                className="form-entry"
                data-required="true"
                data-error-message="Password is required!">

                <label className="form-entry__field form-entry__field--float">

                    <span className="form-entry__field__label">
                        Password
                    </span>
                    
                    <span className="form-entry__field__input">
                        <input type="password" id="account-password" name="accountPassword" />
                    </span>

                </label>

            </div>

            <div 
                className="form-entry grid__colspan-2"
                data-required="true"
                data-error-message="Password is required!">

                <label className="form-entry__field form-entry__field--float">

                    <span className="form-entry__field__label">
                        Email
                    </span>
                    
                    <span className="form-entry__field__input">
                        <input type="email" id="account-email" name="accountEmail" />
                    </span>

                </label>

            </div>

            <hr className=" grid__colspan-2" />

            <button 
                className="button theme-primary width-100 rounded-pill"
                type="submit">
                    Sign In
            </button>

            <div className="sign-up display-flex justify-content-end align-items-center">
                <a className="text-color-link" href="#1">Sign Up</a>
            </div>

        </div>

        </Fragment>
    );
};

export default FloatingLabels;