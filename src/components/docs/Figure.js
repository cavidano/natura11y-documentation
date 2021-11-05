import React, { useEffect } from "react";

import Prism from "prismjs";
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

const Figure = ({ figureNumber, figureWidth, language, code, highlightedLines }) => {

    const exampleStyles = {
        '--primary': '#440381',
        '--secondary': '#ffcc66',
        '--dark': '#1f163f',
        '--light': '#f2edeb',
        '--primary-text': 'white',
        '--primary-confirm': '#00cc55',
        '--primary-warn': '#ff6090',
        '--secondary-text': 'var(--dark)',
        '--secondary-confirm': '#165a2d',
        '--secondary-warn': '#a40e36',
        '--dark-confirm': '#00cc53',
        '--dark-warn': '#ff5557',
        '--a11y-link': '#0066cc',
        '--dark-link': '#21b2fa',
        '--body-font-family': 'Source Sans Pro',
        '--body-line-height': '1.4',
        '--article-sidebar-width': '200px',
        fontFamily: 'var(--body-font-family)',
        lineHeight: 'var(--body-line-height)'
    }

    const nw = Prism.plugins.NormalizeWhitespace;

    code = nw.normalize(code);

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <figure className={`container ${figureWidth} margin-y-4`}>
            <div className="example">
                <div className="padding-y-5 box-shadow-1" style={exampleStyles}>

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
                <pre data-line={highlightedLines}>
                    <code className={`language-${language}`}>
                        {code}
                    </code>
                </pre>
            </div>
            <figcaption>
                Figure {figureNumber}
            </figcaption>
        </figure>
    );
}

Figure.defaultProps = {
    figureWidth: 'medium'
}

export default Figure;