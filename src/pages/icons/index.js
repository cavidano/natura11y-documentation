import React from 'react';
import { Link } from "gatsby";

import Banner from '../../components/Banner';
import Layout from '../../components/Layout';

import Natura11yIcons from '../../content/data/Natura11yIcons.yaml';
import { graphql } from "gatsby";

const Icons = ({ data }) => {

    const image = data.bannerImage.childImageSharp.gatsbyImageData;
    const bannerCreditName = 'Zdeněk Macháček';
    const bannerCreditHandle = 'zmachacek';

    return (
        <Layout>
            <Banner
                title="Natura11y Icons"
                image={image}
                creditHandle={bannerCreditHandle}
                creditName={bannerCreditName}
            />

            <div className="container narrow margin-y-5">
                <h2>
                    Introducing Natura11y's own icon library.
                </h2>
                <p>
                    Natura11y icons are free to use for commercial or personal use. Include them as a web font or an SVG sprite.
                </p>
            </div>

            <div className="container medium">    
                <ul className="tabs-nav tabs-nav--horizontal">
                    <li>
                        <Link
                            id="tab-button-example-01"
                            to="/icons/"
                            role="tab">
                                Icons
                        </Link>
                    </li>
                    <li>
                    <Link
                            id="tab-button-example-01"
                            to="/icons/usage"
                            role="tab">
                                Usage
                        </Link>
                    </li>
                </ul>
            </div>


            <ul>
                {Natura11yIcons.map(icon => {
                    return (
                        <li>{icon.className}</li>
                    );
                })}
            </ul>
        </Layout>
    );
}

export default Icons;

export const query = graphql`
query {
    bannerImage: file(relativePath: {eq: "banner/icons.jpg"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }  
`
