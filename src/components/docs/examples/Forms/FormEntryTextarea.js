import React from 'react';

const FormEntryTextarea = () => {
    return (
        <div className="form-entry">

            <label className="form-entry__field">

                <span className="form-entry__field__label">
                    Form Entry Label
                </span>
            
                <span className="form-entry__field__input">
                    <textarea
                        rows="8"
                        name="textInputExample"
                        id="text-input-example"
                        aria-describedby="help-textarea-example"
                    ></textarea>
                </span>
            
            </label>
            
            <small className="form-entry__help" id="help-text-input-example">
                Form entry help text
            </small>
        
        </div>
    );
};

export default FormEntryTextarea;