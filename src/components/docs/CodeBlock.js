import React from 'react';

const CodeBlock = ({highlightLines}) => {

    const code = (`
    // Primary as a SASS Variable:
    
    $primary: navy;
    
    .selector--primary{
        background-color: $primary
    }
    
    // Primary as a CSS Variable:
    
    --primary: navy;
    
    .selector--primary{
        background-color: var(--primary);
    }
    `);

    return (
        <figure className="container narrow margin-y-4">

        <pre>
        <code className="language-css">
        {code}
        </code>
    </pre>

    <figcaption>
        Figure 1
    </figcaption>

</figure>
    )
}

export default CodeBlock;