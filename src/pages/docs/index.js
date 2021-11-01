import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import DocSidebar from '../../components/DocSidebar';

const Docs = ({ data }) => {

    console.log(data);

    const docPages = data.docs.nodes;

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
                                            Page Title
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
                            Content 
                        </div>
                    
                    </div>

                </div>

            </div>
            
        </Layout>
    );

}

export const query = graphql`
    query queryDocs {
        docs: allMdx {
            nodes {
                frontmatter {
                    title
                    stack
                }
                slug
                id
            }
        }
    }
`;

export default Docs;