import React from 'react';

import CustomPropertiesData from "../../content/data/AllCustomProperties.yaml"

function AllCustomProperties() {

    const CustomProperties = CustomPropertiesData;

    return (
        <ul>
        {CustomProperties.map((category, index) => {
                let title = category.type;
                let customProperties = category.customProperties;
                let scope = category.scope;


                return (
                    <li key={`content_item_${index}`}>
                        {category.type}
                    </li>
                )
            })}
        </ul>
    )
}

export default AllCustomProperties;