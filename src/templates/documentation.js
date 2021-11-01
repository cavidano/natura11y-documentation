import React from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer} from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';

function Documentation({ data }) {
    const { body } = data.mdx;
    const { title } = data.mdx.frontmatter;
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <MDXRenderer>
                    {body}
                </MDXRenderer>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query queryDocPage($slug: String) {
    mdx(slug: {eq: $slug}) {
        body
        frontmatter {
          title
        }
      }
  }
`
  

export default Documentation;
