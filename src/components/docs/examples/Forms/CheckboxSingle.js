import React from 'react';

const CheckboxSwitch = () => {
    return (
        <div className="form-entry">

            <div className="form-entry__field">

                <span className="form-entry__field__label" id="single-option-label">
                    Form Entry Label
                </span>

                <div className="form-entry__option">

                    <div className="form-entry__option__check">

                        <label>
                            <input
                                type="checkbox"
                                name="singleOption"
                                id="single-option"
                                value="option"
                            />
                            <span className="option__label">
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