import React, { useEffect } from "react";

import Prism from "prismjs";
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

// node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js

function Figure() {
    
    // ..or use the default object from Prism
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
    <div className="Code">
      <pre data-line="2-5,7-12,14-18">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default Figure;
