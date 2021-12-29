import React from 'react';

import { exampleStyles } from '../../../../mdxVars';

const TwoOrThreeColumns = (props) => {

    const { articleClass } = props;

    return (
        <div className="container medium margin-y-4 overflow-visible" style={exampleStyles}>

            <article className={`${articleClass} theme-light text-align-center font-size-md border`}>

                <header className="article__header flex-column justify-content-center padding-4 border-bottom">

                    <p className="margin-bottom-1">Header</p>
                    <p><code>.article__Header</code></p>

                </header>

                <aside className="article__sidebar flex-column justify-content-center align-content-center padding-4">

                    <p className="margin-bottom-1">Sidebar</p>
                    <p><code>.article__sidebar</code></p>

                </aside>

                <div className="article__body flex-column justify-content-center align-content-center padding-4 border-left" style={{'height': '400px'}}>

                    <p className="margin-bottom-1">Body</p>
                    <p><code>.article__body</code></p>

                </div>

                {articleClass === 'article--column-3' && (
                    
                
                <aside className="article__related flex-column justify-content-center align-content-center padding-4 border-left">

                    <p className="margin-bottom-1">Sidebar</p>
                    <p><code>.article__sidebar</code></p>

                </aside>
                )}

            </article>
        </div>
    )
};

TwoOrThreeColumns.defaultProps = {
    articleClass: 'article--column-2'
}

export default TwoOrThreeColumns;