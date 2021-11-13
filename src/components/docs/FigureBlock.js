import React, { useEffect } from 'react';

import Prism from '../../prismjs/prism';

import '../../prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import '../../prismjs/plugins/line-highlight/prism-line-highlight';
import '../../prismjs/plugins/line-numbers/prism-line-numbers';
import '../../prismjs/plugins/toolbar/prism-toolbar';
import '../../prismjs/plugins/show-language/prism-show-language';
import '../../prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import '../../prismjs/plugins/treeview/prism-treeview';

import '../../prismjs/themes/prism-carl.css';

import CodeBlock from './CodeBlock';

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
        figureWidth,
        visualExample,
        visualExampleClass,
        codeToolbar,
        codeLanguage,
        codeExample,
        highlightedLines,
        hideFigCaption
    } = props;

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <figure className={`container ${figureWidth} margin-y-4`} id={`figure_${figureNumber}`}>

            {visualExample ? (
                <div className={visualExampleClass !== null ? `example ${visualExampleClass}` : `example`}>
                    <div className="padding-y-5 box-shadow-1" style={exampleStyles}>
                        <div className="container narrow">
                            {visualExample}
                        </div>
                    </div>
                    <CodeBlock
                        highlightedLines={highlightedLines} 
                        codeToolbar={codeToolbar}
                        codeLanguage={codeLanguage}
                        codeExample={codeExample}
                    />
                </div>
            ) : (
                <CodeBlock 
                    highlightedLines={highlightedLines} 
                    codeToolbar={codeToolbar}
                    codeLanguage={codeLanguage}
                    codeExample={codeExample}
                />
            )}

            <figcaption className={hideFigCaption === true ? `screen-reader-only` : ``}>
                Figure {figureNumber}
            </figcaption>
        </figure>
    );
}

Figure.defaultProps = {
    figureWidth: 'medium',
    visualExample: null,
    visualExampleClass: null,
    codeToolbar: true,
    codeExample: '<p>Code</p>',
    codeLanguage: 'html',
    hideFigCaption: false
}

export default Figure;