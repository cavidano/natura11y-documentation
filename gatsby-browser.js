import React from 'react';

import './src/natura11yStyles';
import './src/theme.scss';

import Layout from './src/components/Layout';

export const wrapRootElement = ({ element, props }) => {
  return (
    <Layout {...props}>
        {element}
    </Layout>
  );
}