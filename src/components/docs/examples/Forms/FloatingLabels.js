import React, { Fragment } from 'react';

const FloatingLabels = () => {
    return (
        <Fragment>

        <div class="grid grid__columns-2 gap-2">

            <div 
                class="form-entry"
                data-required="true"
                data-error-message="Username is required!">

                <label class="form-entry__field form-entry__field--float">

                    <span class="form-entry__field__label">
                        Username
                    </span>
                    
                    <span class="form-entry__field__input">
                        <input type="text" id="account-username" name="accountUsername" />
                    </span>

                </label>

            </div>

            <div 
                class="form-entry"
                data-required="true"
                data-error-message="Password is required!">

                <label class="form-entry__field form-entry__field--float">

                    <span class="form-entry__field__label">
                        Password
                    </span>
                    
                    <span class="form-entry__field__input">
                        <input type="password" id="account-password" name="accountPassword" />
                    </span>

                </label>

            </div>

            <div 
                class="form-entry grid__colspan-2"
                data-required="true"
                data-error-message="Password is required!">

                <label class="form-entry__field form-entry__field--float">

                    <span class="form-entry__field__label">
                        Email
                    </span>
                    
                    <span class="form-entry__field__input">
                        <input type="email" id="account-email" name="accountEmail" />
                    </span>

                </label>

            </div>

            <hr class=" grid__colspan-2" />

            <button 
                class="button theme-primary width-100 rounded-pill"
                type="submit">
                    Sign In
            </button>

            <div class="sign-up display-flex justify-content-end align-items-center">
                <a class="text-color-link" href="#1">Sign Up</a>
            </div>

        </div>

        </Fragment>
    );
};

export default FloatingLabels;