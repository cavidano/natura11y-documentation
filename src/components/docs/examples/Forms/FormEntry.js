import React from 'react';

const FormEntry = () => {
    return (
        <div className="form-entry">

            <label className="form-entry__field">

                <span className="form-entry__field__label">
                    Form Entry Label
                </span>
            
                <span className="form-entry__field__input">
                    <input
                        type="text"
                        name="textInputExample"
                        id="text-input-example" 
                        aria-describedby="help-text-input-example"
                    />
                </span>
            
            </label>
            
            <small className="form-entry__help" id="help-text-input-example">
                Form entry help text
            </small>
        
        </div>
    );
};

export default FormEntry;