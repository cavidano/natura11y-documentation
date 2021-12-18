import React from 'react';

const Checkboxes = () => {
    return (
        <div class="form-entry">

            <fieldset class="form-entry__field">

                <legend class="form-entry__field__label">
                    Form Entry Label
                </legend>

                <div class="form-entry__option">

                    <div class="form-entry__option__check">
                        <label>
                            <input
                                type="checkbox"
                                name="checkboxGroupExample"
                                id="checkbox-option-one"
                                value="optionOne"
                            />
                                <span class="option__label">
                                    Option One
                                </span>
                        </label>
                    </div>

                    <div class="form-entry__option__check">
                        <label>
                            <input
                                type="checkbox"
                                name="checkboxGroupExample"
                                id="checkbox-option-two"
                                value="optionTwo"
                            />
                                <span class="option__label">
                                    Option Two
                                </span>
                        </label>
                    </div>

                    <div class="form-entry__option__check">
                        <label>
                            <input
                                type="checkbox"
                                name="checkboxGroupExample"
                                id="checkbox-option-three"
                                value="optionThree"
                            />
                            <span class="option__label">
                                Option Three
                            </span>
                        </label>
                    </div>

                </div>

            </fieldset>

        </div>
    );
};

export default Checkboxes;