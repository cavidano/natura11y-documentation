import React from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer} from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import DocSidebar from '../components/DocSidebar';

function Documentation({ data }) {

    const docPages = data.allDocs.nodes;

    const { body } = data.singleDoc;
    const { title } = data.singleDoc.frontmatter;

    return (
        <Layout>
            <div className="article article--two-column">

                <div className="article__sidebar">
                    <ul className="nav">
                        <DocSidebar pages={docPages} />
                    </ul>
                </div>

                <div className="article__body border-left--lg" id="primary-content">

                    <div className="article__body__content">

                        <div className="backdrop backdrop--fixed theme-dark">

                            <div className="backdrop__image">
                                <img className="opacity-40" src="https://via.placeholder.com/1600x900" alt="" />
                            </div>

                            <div className="backdrop__cover">

                                <div className="margin-y-5">

                                    <div className="container narrow">
                                        <h1 className="banner-headline text-shadow">
                                            {title}
                                        </h1>
                                    </div>

                                </div>

                            </div>

                            <div className="backdrop__credit">
                                <p>
                                    Photo by <a href="#1" target="_blank">Jane Doe</a> on Unsplash
                                </p>
                            </div>

                        </div>

                        <div className="padding-y-4">
                            <div className="container narrow font-size-rg">
                                <h2 className="screen-reader-only">On this Page:</h2>
                                <nav id="table-of-contents"></nav>
                            </div>
                        </div>

                        <hr />

                        <div className="margin-y-5">
                            <MDXRenderer>
                                {body}
                            </MDXRenderer>
                        </div>
                    
                    </div>

                </div>

            </div>
            
        </Layout>
    )
}

export default Documentation;

export const query = graphql`
    query queryDocPage($slug: String) {
    allDocs: allMdx {
        nodes {
            frontmatter {
                title
            }
            slug
            id
        }
    }
    singleDoc: mdx(slug: {eq: $slug}) {
        body
        frontmatter {
            title
        }
    }
  }
`;


  