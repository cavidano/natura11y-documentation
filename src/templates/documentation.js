import React, { Fragment, useEffect, useState } from 'react';

import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import DocSidebar from '../components/DocSidebar';
import TableOfContents from '../components/TableOfContents';

import Divider from '../components/docs/Divider';
import AccessibilitySpotlight from '../components/docs/AccessibilitySpotlight';
import TextBlock from '../components/docs/TextBlock';
import FigureBlock from '../components/docs/FigureBlock';
import TableLineDescBlock from '../components/docs/TableLineDescBlock';
import TableLineDescRow from '../components/docs/TableLineDescRow';
import BrowserBlock from '../components/docs/BrowserBlock';
import RelatedCustomProperties from '../components/docs/RelatedCustomProperties';
import SproutingAlert from '../components/docs/SproutingAlert';

const shortcodes = {
  StaticImage,
  GatsbyImage,
  Divider,
  AccessibilitySpotlight,
  TextBlock,
  FigureBlock,
  BrowserBlock,
  TableLineDescBlock,
  TableLineDescRow,
  RelatedCustomProperties,
  SproutingAlert
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

  const relatedCustomProperties = data.relatedCPs.nodes;

  return (
    <Layout>

      <div className="article--column-2">

        <div className="article__sidebar">
            <DocSidebar pages={docPages} />
        </div>

        <div className="article__body border-left--lg" id="primary-content">

          <div className="article__body__content">

            <div className="doc-container">

              <Banner
                title={title}
                image={image}
                creditHandle={bannerCreditHandle}
                creditName={bannerCreditName}
              />

              {sections.length > 0 && (
                <Fragment>
                  <TableOfContents sections={sections} />
                </Fragment>
              )}

              <div className="doc-container__body margin-y-4">
                <MDXProvider components={shortcodes}>
                  <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>

                {relatedCustomProperties.length > 0 && (
                  <RelatedCustomProperties customProperties={relatedCustomProperties} />
                )}

              </div>

            </div>
    
          </div>

        </div>

      </div>
      
    </Layout>
  );
}

export default Documentation;

export const query = graphql`
query queryPageData($slug: String, $title: String) {
    allDocs: allMdx(sort: {fields: frontmatter___title, order: ASC}) {
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
    relatedCPs: allNatura11YcustompropertiesYaml(filter: {type: { eq: $title  }}) {
      nodes {
          customProperties {
              name
              value
              description {
                  body
              }
          }
          type
          scope
      }
  }
}
`;