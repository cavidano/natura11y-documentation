import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';

const AllCustomProperties = () => {

    const data = useStaticQuery(graphql`
        query queryCustomProperties {
            allNatura11YcustompropertiesYaml {
                nodes {
                    customProperties {
                    name
                    value
                    description {
                        body
                        }
                    }
                    type
                    scope
                }
            }
        }
    `);

    const CustomProperties = data.allNatura11YcustompropertiesYaml.nodes;

    const copyButtonText = 'Copy';
    const copyButtonActionText = 'Copied';

    const handleCopyAll = (event) => {
        
        let currentTable = event.target.closest('table');
        let currentTableRowsList = currentTable.querySelectorAll('tbody > tr');
        let currentTableSingleButtonList = currentTable.querySelectorAll('[data-clipboard="single"]');

        currentTableSingleButtonList.forEach((singleButton) => {
            singleButton.innerHTML = copyButtonActionText.toString(); 
        });

        let currentCPArray = [];

        currentTableRowsList.forEach((row) => {

            let cpName = row.querySelector('[data-prop]').innerHTML.trim().replace(/&nbsp;/g, '');
            let cpValue = row.querySelector('[data-val]').innerHTML.trim().replace(/&nbsp;/g, '');
            let cpText = `${cpName}: ${cpValue};`;

            currentCPArray.push(cpText);

        });

        let myClipboardProperties = currentCPArray.map((property) => {
            return `    ${property}`
        
        }).join('\n');
        
        let myClipboardText = (`
            :root {
                ${myClipboardProperties}
            }
        `);

        // Create an auxiliary hidden input
        var aux = document.createElement( 'textarea' );

        // Get the text from the element passed into the input
        aux.innerHTML = myClipboardText.trim();

        // Append the aux input to the body
        document.body.appendChild(aux);

        // Highlight the content
        aux.select();

        // Execute the copy command
        document.execCommand( 'copy' );

        // Remove the input from the body
        document.body.removeChild(aux);

    }

    const handleCopySingle = (event) => {

        event.preventDefault();
        const cpButtonList = document.querySelectorAll('[data-clipboard="single"]');

        cpButtonList.forEach((otherButtons)=> {
            otherButtons.innerHTML = copyButtonText;
        });

        const currentRow = event.target.closest('tr');

        const myCustomPropertyName = currentRow.querySelector('[data-prop]').innerHTML.trim().replace(/&nbsp;/g, '');
        const myCustomPropertyValue = currentRow.querySelector('[data-val]').innerHTML.trim().replace(/&nbsp;/g, '');
        const myClipboardText = `${myCustomPropertyName}: ${myCustomPropertyValue};`;

        if( myClipboardText ){
            event.target.innerHTML = copyButtonActionText;
        }

        // Create an auxiliary hidden input
        var aux = document.createElement( 'input' );

        // Get the text from the element passed into the input
        aux.setAttribute( 'value', myClipboardText );

        // Append the aux input to the body
        document.body.appendChild(aux);

        // Highlight the content
        aux.select();

        // Execute the copy command
        document.execCommand( 'copy' );

        // Remove the input from the body
        document.body.removeChild(aux);

    }

    return (
        <div className="container medium margin-y-4" id="all-custom-properties">
            <div className="table-scroll" role="region">
                <div className="table-scroll__container theme-dark">
            
                    {CustomProperties.map((category, index) => {
                        let title = category.type;
                        let customProperties = category.customProperties;
                        let scope = category.scope;

                        const slug = title.replace(/ /, '_').toLowerCase();

                        return (
                            <section key={`${category}_${index}`}>
                            
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
                                                onClick={handleCopyAll}>
                                                    <span>Copy All</span>
                                                </button>
                                            </th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {customProperties.map((property, index) => {

                                        const name = property.name;
                                        const value = property.value;
                                        const description = property.description;

                                        return (
                                            <tr key={`${name}_${index}`}>
                                                <td>
                                                    <span data-prop>--{name}</span>
                                                </td>
                                                <td>
                                                    <span data-val>{value}</span>
                                                </td>
                                                <td>  
                                                    <button
                                                        data-clipboard="single"
                                                        onClick={handleCopySingle}>
                                                        Copy
                                                    </button>
                                                </td>
                                                <td>
                                                  <MDXRenderer>
                                                    {description.body}
                                                  </MDXRenderer> 
                                                </td>
                                            </tr>
                                        );
                                    })}
                                        
                                    </tbody>

                                </table>

                            </section>
                        );
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default AllCustomProperties;
