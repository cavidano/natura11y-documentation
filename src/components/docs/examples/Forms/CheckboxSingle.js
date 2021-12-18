import React from 'react';

const CheckboxSwitch = () => {
    return (
        <div class="form-entry">

            <div class="form-entry__field">

                <span class="form-entry__field__label" id="single-option-label">
                    Form Entry Label
                </span>

                <div class="form-entry__option">

                    <div class="form-entry__option__check">

                        <label aria-labeledby="single-option-label">
                            <input
                                type="checkbox"
                                name="singleOption"
                                id="single-option"
                                value="option"
                            />
                            <span class="option__label">
                                Option
                            </span>
                        </label>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CheckboxSwitch;