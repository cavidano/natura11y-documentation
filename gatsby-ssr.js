import React from 'react';

import Layout from './src/components/Layout';


export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    // <script type="text/javascript" src="/natura11y.js" key="every-page-js" defer></script>,
  ])
}



export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
        {element}
    </Layout>
  );
}