import React, { Fragment } from 'react';

import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';

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

    const { body } = data.iconUsage;

    return (
        <Fragment>

            <Seo title="Icon Usage" />
            
            <Header />

            <IconLeader />

            <div className="margin-y-5">
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </div>

            <Footer />
            
        </Fragment>
    );
}

export default Icons;

export const query = graphql`
    query MyQuery {
        iconUsage: mdx(frontmatter: {title: {eq: "Using the Icons"}}) {
            body
        }
    }
`;