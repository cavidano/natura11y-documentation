import React from 'react';

const CodeBlock = (props) => {
    
    const {
        highlightedLines, 
        codeToolbar,
        codeLanguage,
        codeExample
    } = props;

    return (
        <pre
            data-line={highlightedLines}
            className={codeToolbar === false ? `hide-toolbar` : ``}>

            <code className={`language-${codeLanguage}`}>
                {codeExample}
            </code>
        
        </pre>
    )
}

export default CodeBlock;