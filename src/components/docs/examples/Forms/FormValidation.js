import React from 'react';

const FormValidation = () => {

    const onSubmitHandler = (event) => {
        
        event.preventDefault();

    };

    return (
        <form noValidate>

            <p className="required-indicator" aria-hidden="true">
                <span className="required-indicator__text">
                    Required fields indicated with
                </span>
                <span className="icon icon-asterisk"></span>
            </p>

            <div
                className="form-entry"
                data-required="true"
                data-error-message="Your first and last name is required!">

                <label className="form-entry__field">
                    <span className="form-entry__field__label">
                        Name
                    </span>
                    <span className="form-entry__field__input">
                        <input
                            type="text"
                            name="textInputExample"
                            id="first-and-last-name"
                            aria-describedby="help-first-and-last-name"
                        />
                    </span>
                </label>

                <small className="form-entry__help" id="help-first-and-last-name">
                    Include first and last name
                </small>

            </div>

            <div
                className="form-entry"
                data-required="true"
                data-error-message="Your email is required!">

                <label className="form-entry__field">
                    <span className="form-entry__field__label">
                        Email
                    </span>
                    <span className="form-entry__field__input">
                        <input
                            type="email"
                            name="emailAddress"
                            id="email-address"
                            aria-describedby="help-email-address"
                        />
                    </span>
                </label>

                <small className="form-entry__help" id="help-email-address">
                    Example: janeDoe@email.com
                </small>

            </div>
            
            <div className="form-entry">

                <label className="form-entry__field">
                    <span className="form-entry__field__label">
                        Phone
                    </span>
                    <span className="form-entry__field__input">

                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phone-number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        aria-describedby="help-phone-number"
                        required
                    />
                    </span>
                </label>

                <small className="form-entry__help" id="help-phone-number">
                    Example: 999-999-9999
                </small>

            </div>

            <div
                className="form-entry"
                data-required="true"
                data-error-message="Describe the reason for contacting us!">

                <label className="form-entry__field">

                    <span className="form-entry__field__label">
                        Leave a short message
                    </span>

                    <span className="form-entry__field__input">
                        <textarea rows="6"></textarea>
                    </span>

                </label>

            </div>
            
            <div className="form-entry">

                <fieldset className="form-entry__field">

                    <legend className="form-entry__field__label">
                        Contact Preferences
                    </legend>

                    <div className="form-entry__option">

                        <div className="form-entry__option__radio">
                            <label>
                                <input
                                    type="radio"
                                    name="contactPreferences"
                                    id="contact-email"
                                    value="optionOne"
                                />
                                    <span className="option__label">
                                        Contact me by email
                                    </span>
                            </label>
                        </div>

                        <div className="form-entry__option__radio">
                            <label>
                                <input
                                    type="radio"
                                    name="contactPreferences"
                                    id="contact-phone"
                                    value="optionTwo"
                                />
                                    <span className="option__label">
                                        Contact me by phone
                                    </span>
                            </label>
                        </div>

                        <div className="form-entry__option__radio">
                            <label>
                                <input
                                    type="radio"
                                    name="contactPreferences"
                                    id="contact-none"
                                    value="optionThree"
                                />
                                    <span className="option__label">
                                        Do not contact me
                                    </span>
                            </label>
                        </div>

                    </div>

                </fieldset>

            </div>

            <button className="button theme-primary width-100 rounded-pill">
                    Send
            </button>

        </form>
    );
};

export default FormValidation;