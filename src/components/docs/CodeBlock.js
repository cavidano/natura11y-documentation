import React, { useEffect }  from 'react';

import Prism from '../../prismjs/prism';

import '../../prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import '../../prismjs/plugins/line-highlight/prism-line-highlight';
import '../../prismjs/plugins/line-numbers/prism-line-numbers';
import '../../prismjs/plugins/toolbar/prism-toolbar';
import '../../prismjs/plugins/show-language/prism-show-language';
import '../../prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import '../../prismjs/plugins/treeview/prism-treeview';

import '../../prismjs/themes/prism-carl.css';

const CodeBlock = (props) => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);
    
    const {
        highlightedLines, 
        codeToolbar,
        codeLanguage,
        codeExample
    } = props;

    Prism.plugins.NormalizeWhitespace.setDefaults({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true,
    });
    

    const nw = Prism.plugins.NormalizeWhitespace;
    const code = nw.normalize(codeExample);
    return (
        <pre
            data-line={highlightedLines}
            className={codeToolbar === false ? `hide-toolbar` : ``}>

            <code className={`language-${codeLanguage}`}>
                {code}
            </code>
        
        </pre>
    )
}

export default CodeBlock;