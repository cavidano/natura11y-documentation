import React, { Fragment } from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Divider from '../../components/docs/Divider';
import CodeBlock from '../../components/docs/CodeBlock';

const RelatedCustomProperties = ({ customProperties }) => {

    return (
        <Fragment>

            <Divider id="relatedCSSVariables" />
            
                {customProperties.map((category, index) => {

                    let title = category.type;
                    let scope = category.scope;
                    let cps = category.customProperties;

                    let showCPs = () => {

                     return;
                    
                    }

                    const slug = title.replace(/ /, '_').toLowerCase();

                    return (
                        <Fragment key={`${category}_${index}`}>
                                                
                            <div className="container narrow margin-y-4">
                                <h2>Related CSS Variables</h2>
                                <p>
                                    Further <a href="/docs/customization/#customizableCDN">customize</a> {title} by redefining any of their related <a href="#">CSS variables</a> as shown below.
                                </p>
                            </div>

                            <figure className={`container medium margin-y-4`}>

                            <CodeBlock
                                codeLanguage="css"
codeExample={(`
${scope} {
${cps.map((property, index) => {
const { name, value } = property;
return `    --${name}: ${value}`
}).join('\n')}
}
`).trim()}
                            />

                            </figure>

                            <div className="display-none">


                            <div className="cp-header box-shadow-1" id={`cp_${slug}`}>
                                <span className="cp-header__title">{title}</span>
                                <a className="cp-header__link button button--has-icon" href="#1">
                                    <span className="button__text">Docs</span>
                                    <span className="icon icon-arrow-right button__icon"></span>
                                </a>
                            </div>

                            <table className="table">
                                <caption className="border-bottom">
                                    <p className="font-size-md">
                                        Variable scope: <code>{scope}</code>
                                    </p>
                                </caption>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            CSS Variable
                                        </th>
                                        <th scope="col">Default Value</th>
                                        <th scope="col">
                                            <button data-clipboard="all"
                                            >
                                                <span>Copy All</span>
                                            </button>
                                        </th>
                                        <th scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>

                            </table>
                            </div>

                            
                        </Fragment>
                    );
                })}
                    
        </Fragment>
    )
}

export default RelatedCustomProperties;