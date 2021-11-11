import React from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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

  const title = data.singleIcon.icon;
  const className = data.singleIcon.className;
  const unicode = data.singleIcon.unicode;
  const codePoint = data.singleIcon.codePoint;
  const svg = data.singleIcon.svgCode.body;
  const tags = data.singleIcon.tags;

  return (
    <Layout components={shortcodes}>

        <div className="container medium text-align-center margin-y-4">
            <h1 className="font-weight-normal">
                {title}
            </h1>
            
            <p className="font-size-md margin-bottom-0">
                <strong>Tags:</strong> 
            
                {tags.map((tag, index) => (
                  <span key={`${tag}_${index}`} className="margin-left-1">
                    {tag}
                  </span> 
                ))}
            
            </p>
            <p className="font-size-sm">
                <strong>Unicode:</strong> <em className="opacity-70">
                  {unicode}
                </em>
            </p>
        </div>

        <div class="padding-y-4 theme-primary">
            <svg width="100%" height="20em" viewBox="0 0 48 48">
              <MDXRenderer>{svg}</MDXRenderer>
            </svg>
        </div>

    </Layout>
  );
}

export const query = graphql`
query queryIconPage($className: String) {
    singleIcon: natura11YiconsYaml(className: {eq: $className}) {
      className
      codePoint
      icon
      id
      tags
      unicode
      svgCode {
        body
      }
    }
  }
`;

export default iconSingle;