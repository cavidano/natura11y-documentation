import React from 'react';

const RequiredFields = () => {
    return (
        <div
            className="form-entry is-invalid"
            data-required="true"
            data-error-message="Error description">

            <label className="form-entry__field">
                <span className="form-entry__field__label">
                    Form Entry Label
                </span>
                <div className="form-entry__feedback">
                    <small>
                        <span className="icon icon-warn" aria-hidden="true"></span>
                        <span className="message">
                            <strong>Custom Error Message</strong>
                        </span>
                    </small>
                </div>
                <span className="form-entry__field__input">
                    <input
                        type="text"
                        name="textInputExample"
                        id="required-field-example"
                        aria-describedby="help-required-field-example"
                    />
                </span>
            </label>

            <small className="form-entry__help" id="help-required-field-example">
                Form entry help text
            </small>

        </div>
    );
};

export default RequiredFields;