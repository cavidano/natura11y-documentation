import React from 'react';
import { Link } from "gatsby";

import Layout from '../../components/Layout';
import IconLeader from '../../components/supplementary/IconLeader';

import Natura11yIcons from '../../content/data/Natura11yIcons.yaml'

const Icons = () => {

    return (

        <Layout>

            <IconLeader />

            <div className="container medium">

                <div class="grid gap-1 grid--column-3 grid--column-6--md text-align-center" id="natura11yIconGrid">

                    {Natura11yIcons.map(icon => {

                        let name = icon.className;
                        let tags = icon.tags;
                        let svg = icon.svg

                        return (
                            <a href="#1">

                                <div class="aspect-ratio-1x1 display-flex justify-content-center align-items-center border border-radius margin-bottom-1">
                                    <svg width="100%" height="2.5em" fill="currentColor" viewBox="0 0 48 48">
                                        {svg}
                                    </svg>
                                </div>
                        
                                <p class="font-size-sm opacity-70">
                                    {name}
                                </p>

                            </a>
                        );
                    })}

                </div>


            </div>

            <ul>
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
