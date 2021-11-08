import React, { Fragment } from 'react';

import CustomPropertiesData from '../../content/data/AllCustomProperties.yaml';

function AllCustomProperties() {

    const CustomProperties = CustomPropertiesData;

    return (
        <div className="container medium margin-y-4" id="all-custom-properties">
            <div className="table-scroll" role="region">
                <div className="table-scroll__container theme-dark">
            
                    {CustomProperties.map((category, index) => {
                        let title = category.type;
                        let customProperties = category.customProperties;
                        let scope = category.scope;

                        const slug = title.replace(' ', '_').toLowerCase();

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
                                                <button data-clipboard="all">
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
                                                    <button data-clipboard="single">
                                                        Copy
                                                    </button>
                                                </td>
                                                <td>
                                                    {description}
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