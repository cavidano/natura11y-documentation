import React, { Fragment, useEffect, useState } from 'react';

import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import DocSidebar from '../components/DocSidebar';
import TableOfContents from '../components/TableOfContents';

import Divider from '../components/docs/Divider';
import AccessibilitySpotlight from '../components/docs/AccessibilitySpotlight'
import TextBlock from '../components/docs/TextBlock';
import FigureBlock from '../components/docs/FigureBlock';
import TableLineDescBlock from '../components/docs/TableLineDescBlock';
import TableLineDescRow from '../components/docs/TableLineDescRow';

const shortcodes = {
    Divider,
    AccessibilitySpotlight,
    TextBlock,
    FigureBlock,
    TableLineDescBlock,
    TableLineDescRow,
    StaticImage,
  };

const Documentation = ({ data }) => {
  
  const [sections, setSections] = useState([]);

  const getPageSections = () => {

    let pageSections = [];

    const sectionDividers = document.querySelectorAll('hr.section-start');

    sectionDividers.forEach(section => {

      const sectionId = section.getAttribute('id');
      const sectionDividerSibling = section.nextElementSibling;
      const sectionHeader = sectionDividerSibling.querySelector('h2');
      let sectionText = '';

      if(sectionHeader){
        sectionText = section.nextElementSibling.querySelector('h2').textContent;
      }
      
      if(sectionId && sectionText !== ''){
        pageSections.push({ id: sectionId, text: sectionText });
      }

    });

    setSections(pageSections);
  }

  useEffect(() => {
    getPageSections();
  }, []);
    
  const docPages = data.allDocs.nodes;

  const { body } = data.singleDoc;
  const { title } = data.singleDoc.frontmatter;
  const { bannerCreditName } = data.singleDoc.frontmatter;
  const { bannerCreditHandle } = data.singleDoc.frontmatter;
  const image = getImage(data.singleDoc.frontmatter.bannerImage);

  return (
    <Layout>
      <div className="article article--two-column">
        <div className="article__sidebar">
            <DocSidebar pages={docPages} />
        </div>

        <div className="article__body border-left--lg" id="primary-content">
          <div className="article__body__content">
            <div className="backdrop backdrop--fixed theme-dark">
              <div className="backdrop__image">
                <GatsbyImage
                  className="opacity-40"
                  image={image}
                  alt=""
                />
              </div>

              <div className="backdrop__cover">
                <div className="margin-y-5">
                  <div className="container narrow">
                    <h1 className="banner-headline text-shadow">{title}</h1>
                  </div>
                </div>
              </div>

              <div className="backdrop__credit">
                <p>
                    Photo by &nbsp;
                    <a href={`https://unsplash.com/${bannerCreditHandle}`} target="_blank">
                        {bannerCreditName}
                    </a>&nbsp;
                    on Unsplash
                </p>
              </div>
            </div>

            {console.log("from below ", sections)}

            {sections.length > 0 && (
              <Fragment>
                <TableOfContents sections={sections} />
                <hr />
              </Fragment>
            )}

            <div className="margin-y-5">
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Documentation;

export const query = graphql`
query queryDocPage($slug: String) {
    allDocs: allMdx {
      nodes {
        frontmatter {
          category
          title
        }
        slug
        id
      }
    }
    singleDoc: mdx(slug: { eq: $slug }) {
        slug
        body
        frontmatter {
            title
            bannerCreditName
            bannerCreditHandle
            bannerImage {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
}
`;