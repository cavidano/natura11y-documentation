import React from 'react';

const CheckboxSwitch = () => {
    return (
        <div class="form-entry">

            <div class="form-entry__field">

                <span class="form-entry__field__label" id="switch-option-label">
                    Form Entry Label
                </span>

                <div class="form-entry__option">

                    <div class="form-entry__option__switch">

                        <label aria-labeledby="switch-option-label">
                            <input
                                type="checkbox"
                                name="singleOption"
                                id="switch-option"
                                value="option"
                            />
                            <span class="switch__slider"></span>
                            <span class="option__label">
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