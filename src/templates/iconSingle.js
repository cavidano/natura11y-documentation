import React, {Fragment} from 'react';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import Divider from '../components/docs/Divider';
import TextBlock from '../components/docs/TextBlock';
import FigureBlock from '../components/docs/FigureBlock';

import iconBG from '../images/grid-pattern.svg';

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

  const iconBackground = {
    backgroundImage: `url(${iconBG})`
  }

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
            <strong>Unicode:</strong>
            <em className="opacity-70 margin-left-1">
              {unicode}
            </em>
        </p>

      </div>

      <div className="container medium">
        <div className="icon-preview box-shadow-1">
            <div className="flex-row justify-content-center align-items-center one" style={iconBackground}>
                <div className="height-100 padding-y-4">
                    <svg width="100%" height="20em" viewBox="0 0 48 48">
                        <MDXRenderer>{svg}</MDXRenderer>
                    </svg>
                </div>
            </div>
            <div className="two theme-dark flex-row justify-content-center align-items-center">
                <svg width="100%" height="5em" viewBox="0 0 48 48">
                    <MDXRenderer>{svg}</MDXRenderer>
                </svg>
            </div>
            <div className="three theme-primary flex-row justify-content-center align-items-center">
                <svg width="100%" height="4em" viewBox="0 0 48 48">
                    <MDXRenderer>{svg}</MDXRenderer>
                </svg>
            </div>
            <div className="four subtle-fill text-color-link flex-row justify-content-center align-items-center">
                <svg width="100%" height="3em" viewBox="0 0 48 48">
                  <MDXRenderer>{svg}</MDXRenderer>
                </svg>
            </div>
        </div>
      </div>

        <FigureBlock
            figureNumber="1"
            language="html"
            hideFigCaption={true}
            codeExample={(`
            <!-- Icon Font --> \n
            <span class="icon icon-${className}"></span> \n
            <!-- SVG Sprite --> \n
            <svg class="icon">
                <use href="#${className}"></use>
            </svg>
            `)}
        />

      <hr />

      <div className="container narrow text-align-center margin-y-4">
          <div className="margin-y-3">
              <a
                  className="button button--has-icon button--outline font-size-md"
                  href="#"
                  download>
                  <span className="icon icon-file-download"></span>
                  <span className="button__text">
                      <span className="Download"></span>
                      <span>Download SVG</span>
                  </span>
              </a>  
          </div>
          <p>
              Natura11y Icons are free to use for commercial or personal use. If you wish to contribute, <a href="#1">please Let me know</a>.
          </p>
          <p className="font-size-md">
              <a href="https://github.com/cavidano/natura11y-icons" target="_blank">Natura11y Icons on Github</a>
          </p>
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