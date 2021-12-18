import React from 'react';

const FormEntryFileUpload = () => {
    return (
        <div className="form-entry">

            <div className="form-entry__field">

                <span className="form-entry__field__label">
                    Upload a Single File
                </span>

                <div className="form-entry__field__input">

                    <label className="file-upload">

                        <span className="file-upload__drop">
                            <span className="file-upload__drop__text">Drag and Drop</span>
                        </span>

                        <input
                            className="file-upload__input"
                            type="file"
                            name="fileUploadExample"
                            id="file-upload-example"
                            accept="image/*"
                        />

                        <span className="button button--outline button--has-icon file-upload__button">
                            <span className="icon icon-upload"></span>
                            <span className="button__text">Browse for a File</span>
                        </span>

                    </label>

                </div>

            </div>

            <small className="form-entry__help" id="help-file-upload-example">
                Form entry help text
            </small>

        </div>
    );
};

export default FormEntryFileUpload;