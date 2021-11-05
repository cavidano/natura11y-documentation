import React, { useEffect } from 'react';

import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-highlight/prism-line-highlight';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

import Pre from './Pre';

const Figure = (props) => {

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

    const {
        figureNumber,
        visualExample,
        codeToolbar,
        codeLanguage, 
        codeExample,
        highlightedLines
    } = props;

    const nw = Prism.plugins.NormalizeWhitespace;
    let code = nw.normalize(codeExample);

    let figureWidth;
    visualExample ? figureWidth = 'medium' : figureWidth = 'narrow'; 

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <figure className={`container ${figureWidth} margin-y-4`}>

            {visualExample ? (
                <div className="example">
                    <div className="padding-y-5 box-shadow-1" style={exampleStyles}>
                        <div className="container narrow">
                            {visualExample}
                        </div>
                    </div>
                    <Pre
                        highlightedLines={highlightedLines} 
                        codeToolbar={codeToolbar}
                        codeLanguage={codeLanguage}
                        code={code}
                    />
                </div>
            ) : (
                <Pre 
                    highlightedLines={highlightedLines} 
                    codeToolbar={codeToolbar}
                    codeLanguage={codeLanguage}
                    code={code}
                />
            )}

            <figcaption>
                Figure {figureNumber}
            </figcaption>
        </figure>
    );
}

Figure.defaultProps = {
    visualExample: null,
    codeToolbar: true,
    codeExample: '<p>Code</p>',
    codeLanguage: 'html',
}

export default Figure;