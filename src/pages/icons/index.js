import React from 'react';
import Layout from '../../components/Layout';

import Natura11yIcons from '../../content/data/Natura11yIcons.yaml'

const Icons = () => {
    return (
        <Layout>
            <h2>Icons</h2>
            <ul>
                {Natura11yIcons.map(icon => {
                    return (
                        <li>{icon.className}</li>
                    )
                })}
            </ul>
        </Layout>
    );
}

export default Icons;