import React from 'react';

const FormValidation = () => {

    // const formList = document.querySelectorAll('form[novalidate]');
        
    const formEntryList = document.querySelectorAll('.form-entry');

    let formSubmitAttempted = false;

    const checkIfEmpty = (field) => {
        if (isEmpty(field.value)) {
            setInvalid(field);
            return true;
        } else {
            setValid(field);
            return false;
        }
    }

    const isEmpty = (value = null) => {
        if (value === '') return true;
        return false;
    }

    const invalidClasses = ['is-invalid'];

    const setInvalid = (field) => {
        let entryRoot = field.closest('.form-entry');
        entryRoot.classList.add(...invalidClasses);
    }

    const setValid = (field) => {
        let entryRoot = field.closest('.form-entry');
        entryRoot.classList.remove(...invalidClasses);
    }



    const createErrorMessage = ((desc, inst) => {
            
        if(desc === null) {
            desc = 'This field is Required';
        }
        
        return (`
            <div class="form-entry__feedback">
                <small>
                    <span class="icon icon-warn" aria-hidden="true"></span>
                    <span class="message">
                        <strong>${desc}</strong> ${inst !== undefined ? inst : ''}
                    </span>
                </small>
            </div>
        `);
    });


    const onSubmitHandler = (event) => {
        
        event.preventDefault();
        alert("Wha??");

        const form = event.target.closest('form');

        formSubmitAttempted = true;
        
        let errorsArray = [];

        // Create list of elements that fail to validate
        let formErrorsList = form.querySelectorAll(':invalid');

        formErrorsList.forEach((formError) => {

            let formErrorEntry = formError.closest('.form-entry');
            let formErrorEntryLabel = formErrorEntry.querySelector('.form-entry__field__label');

            // Add error class to .form-entry selector
            formErrorEntry.classList.add('is-invalid');

            // Form Entry Feedback
            const formEntryFeedback = formErrorEntry.querySelector('.form-entry__feedback');

            // Form Entry Feedback
            const formEntryHelp = formErrorEntry.querySelector('.form-entry__help');

            let entryHelpText;

            if(formEntryHelp) {
                entryHelpText = formEntryHelp.innerHTML.toString();
            }

            let errorMessage = formErrorEntry.getAttribute('data-error-message');
            let errorFeedback = [errorMessage, entryHelpText];

            // Send errors to errorArray
            errorsArray.push(errorFeedback);

            if (formEntryFeedback === null) {
                formErrorEntryLabel.insertAdjacentHTML('afterend', createErrorMessage(errorMessage, entryHelpText));
            }
        });

        // If errors exist, do not submit the form
        if (errorsArray.length > 0) {
            event.preventDefault();
        }
        
        // Scroll to first error

        let firstError = form.querySelector('[class*="alert"], [class*="invalid"]');
        
        if (firstError) {

            if (firstError.hasAttribute('data-alert')) {
                firstError.style.display = 'block';
            }

            let myScroll = firstError.offsetTop - 16;

            window.scrollTo({
                top: myScroll,
                behavior: 'smooth'
            });
        }

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

            <button 
                className="button theme-primary width-100 rounded-pill"
                onClick={onSubmitHandler}>
                    Send
            </button>

        </form>
    );
};

export default FormValidation;