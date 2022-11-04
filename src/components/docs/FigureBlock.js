import React from 'react';

import CodeBlock from './CodeBlock';

import { exampleStyles } from '../../mdxVars';

const Figure = (props) => {

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

    return (
        <figure
            className={`${figureWidth} margin-y-4 margin-x-auto box-shadow-3`}
            id={`figure_${figureNumber}`}
        >

            {visualExample ? (
                <div className="example">
                    <div className={(`padding-y-5 ${visualExampleClass && visualExampleClass}`)} style={exampleStyles}>
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