import React from 'react';
import { Link } from "gatsby";

import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../../components/Layout';
import IconLeader from '../../components/supplementary/IconLeader';

import Divider from '../../components/docs/Divider';
import TextBlock from '../../components/docs/TextBlock';
import FigureBlock from '../../components/docs/FigureBlock';

const shortcodes = {
    Divider,
    TextBlock,
    FigureBlock,
};

const Icons = ({ data }) => {

    const { body } = data.neat;

    return (

        <Layout className="theme-dark">

            <IconLeader />

            <div className="margin-y-5">
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
            
        </Layout>
    );
}

export default Icons;

export const query = graphql`
query MyQuery {
    neat: mdx(frontmatter: {title: {eq: "Using the Icons"}}) {
        body
      }
}
`;