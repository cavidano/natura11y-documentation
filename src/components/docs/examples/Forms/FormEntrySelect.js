import React from 'react';

const FormEntrySelect = () => {
    return (
        <div className="form-entry">

            <label className="form-entry__field">

                <span className="form-entry__field__label">
                    Form Entry Label
                </span>
            
                <span class="form-entry__field__select">
                    <select
                        id="select-example"
                        name="selectExample"
                        aria-describedby="help-select-example">
                            <option value="">Select</option>
                            <option value="Option One">Option One</option>
                            <option value="Option Two">Option Two</option>
                            <option value="Option Three">Option Three</option>
                            <option value="Option Four">Option Four</option>
                            <option value="Option Five">Option Five</option>
                    </select>
                </span>
            
            </label>
            
            <small className="form-entry__help" id="help-text-input-example">
                Form entry help text
            </small>
        
        </div>
    );
};

export default FormEntrySelect;