import React, { useEffect } from "react";

import Prism from "prismjs";
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

function Figure() {

    const nw = Prism.plugins.NormalizeWhitespace;
        
    const language = 'html';

    let code = (`
        <div
            className="alert alert--confirm margin-y-3"
            aria-labelledby="alert-confirm-label"
            aria-describedby="alert-confirm-description"
            role="alert">

            <div className="alert__title h5">
                <span className="icon icon-confirm" aria-hidden="true"></span>
                <span className="alert__title__text" id="alert-confirm-label">
                    Alert Confirm
                </span>
            </div>

            <div className="alert__description" id="alert-confirm-description">
                <p>
                    Thank you for your feedback. A confirmation message has been sent to your email. Return to our <a href="#1">homepage</a>.
                </p>
            </div>

        </div>
    `);

    code = nw.normalize(code);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <figure className="container medium margin-y-4">
        <div className="example">
            <div className="padding-y-5 box-shadow-1">

                <div className="container narrow">
                
                    <div
                        className="alert alert--confirm margin-y-3"
                        aria-labelledby="alert-confirm-label"
                        aria-describedby="alert-confirm-description"
                        role="alert">

                        <div className="alert__title h5">
                            <span className="icon icon-confirm" aria-hidden="true"></span>
                            <span className="alert__title__text" id="alert-confirm-label">
                                Alert Confirm
                            </span>
                        </div>

                        <div className="alert__description" id="alert-confirm-description">
                            <p>
                                Thank you for your feedback. A confirmation message has been sent to your email. Return to our <a href="#1">homepage</a>.
                            </p>
                        </div>

                    </div>

                    <div
                        className="alert alert--warn margin-y-3"
                        aria-labelledby="alert-warn-label"
                        aria-describedby="alert-warn-description"
                        role="alert">

                        <div className="alert__title h5">
                            <span className="icon icon-warn" aria-hidden="true"></span>
                            <span className="alert__title__text" id="alert-warn-label">
                                Alert Warn
                            </span>
                        </div>

                        <div className="alert__description" id="alert-warn-description">
                            <p>
                                Your feedback was not sent. Complete <a href="#1">all required fields</a> below and submit the form again.
                            </p>
                        </div>

                    </div>
        
                </div>

            </div>
            <pre data-line="2-5,7-12,14-18">
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
        <figcaption>
            Figure 1
        </figcaption>
    </figure>
  );
}

export default Figure;
