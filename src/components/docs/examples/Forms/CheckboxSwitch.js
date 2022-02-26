import React from 'react';

const CheckboxSwitch = () => {
    return (
        <div className="form-entry">

            <div className="form-entry__field">

                <span className="form-entry__field__label" id="switch-option-label">
                    Form Entry Label
                </span>

                <div className="form-entry__option">

                    <div className="form-entry__option__switch">

                        <label>
                            <input
                                type="checkbox"
                                name="singleOption"
                                id="switch-option"
                                value="option"
                            />
                            <span className="switch__slider"></span>
                            <span className="option__label">
                                Recieve Notifications
                            </span>
                        </label>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CheckboxSwitch;