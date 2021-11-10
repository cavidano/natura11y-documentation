import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import Divider from '../components/docs/Divider';
import TextBlock from '../components/docs/TextBlock';
import FigureBlock from '../components/docs/FigureBlock';

const shortcodes = {
  Divider,
  TextBlock,
  FigureBlock,
};

const iconSingle = ({ data }) => {
  
  const pageInfo = data.singleDoc;

  const tags = pageInfo.tags;
    
  console.log("SVG", pageInfo.svg);


  return (
    <Layout components={shortcodes}>

        <div className="container medium text-align-center margin-y-4">
            <h1 className="font-weight-normal">
                { pageInfo.icon }
            </h1>
            
            <p className="font-size-md margin-bottom-0">
                <strong>Tags:</strong> 
            
                {tags.map((tag, index) => (
                   <span className="margin-left-1">{tag}</span> 
                ))}
            
            </p>
            <p className="font-size-sm">
                <strong>Unicode:</strong> <em className="opacity-70">{ pageInfo.unicode }</em>
            </p>
        </div>

        <div class="padding-y-4 theme-primary">
            <svg width="100%" height="20em" viewBox="0 0 48 48">
                { pageInfo.svg }
            </svg>
        </div>

    </Layout>
  );
}

export default iconSingle;

export const query = graphql`
query queryIconPage($className: String) {
    singleDoc: natura11YiconsYaml(className: { eq: $className }) {
        svg
        tags
        icon
        codePoint
        className
        unicode
    }
}
`;