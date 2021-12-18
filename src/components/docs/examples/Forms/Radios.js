import React from 'react';

const Radios = () => {
    return (
        <div class="form-entry">

            <fieldset class="form-entry__field">

                <legend class="form-entry__field__label">
                    Form Entry Label
                </legend>

                <div class="form-entry__option">

                    <div class="form-entry__option__radio">
                        <label>
                            <input
                                type="radio"
                                name="radioGroupExample"
                                id="radio-option-one"
                                value="optionOne"
                            />
                            <span class="option__label">
                                Option One
                            </span>
                        </label>
                    </div>

                    <div class="form-entry__option__radio">
                        <label>
                            <input
                                type="radio"
                                name="radioGroupExample"
                                id="radio-option-two"
                                value="optionTwo"
                            />
                            <span class="option__label">
                                Option Two
                            </span>
                        </label>
                    </div>

                    <div class="form-entry__option__radio">
                        <label>
                            <input
                                type="radio"
                                name="radioGroupExample"
                                id="radio-option-three"
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

export default Radios;