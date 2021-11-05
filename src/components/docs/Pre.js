import React from 'react';

const Pre = (props) => {
    
    const {
        highlightedLines, 
        codeToolbar,
        codeLanguage,
        code
    } = props;

    return (
        <pre data-line={highlightedLines} className={codeToolbar === false && `hide-toolbar`}>
            <code className={`language-${codeLanguage}`}>
                {code}
            </code>
        </pre>
    )
}

export default Pre;