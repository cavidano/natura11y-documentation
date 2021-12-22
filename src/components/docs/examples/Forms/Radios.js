import React from 'react';

const Radios = () => {
    return (
        <div className="form-entry">

            <fieldset className="form-entry__field">

                <legend className="form-entry__field__label">
                    Form Entry Label
                </legend>

                <div className="form-entry__option">

                    <div className="form-entry__option__radio">
                        <label>
                            <input
                                type="radio"
                                name="radioGroupExample"
                                id="radio-option-one"
                                value="optionOne"
                            />
                            <span className="option__label">
                                Option One
                            </span>
                        </label>
                    </div>

                    <div className="form-entry__option__radio">
                        <label>
                            <input
                                type="radio"
                                name="radioGroupExample"
                                id="radio-option-two"
                                value="optionTwo"
                            />
                            <span className="option__label">
                                Option Two
                            </span>
                        </label>
                    </div>

                    <div className="form-entry__option__radio">
                        <label>
                            <input
                                type="radio"
                                name="radioGroupExample"
                                id="radio-option-three"
                                value="optionThree"
                            />
                            <span className="option__label">
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