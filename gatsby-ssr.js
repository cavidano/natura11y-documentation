import React from 'react';

export const onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
      className: 'theme-canvas--prefers'
    });
};

export const wrapRootElement = ({ element, props }) => {
  return (
    <Layout {...props}>
        {element}
    </Layout>
  );
}