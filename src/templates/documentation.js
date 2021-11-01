import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

import { MDXRenderer} from 'gatsby-plugin-mdx';

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
