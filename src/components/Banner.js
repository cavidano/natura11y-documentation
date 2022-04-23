import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

const Banner = (props) => {

    const {
        image, 
        title,
        creditHandle,
        creditName
    } = props;

    return (
      <div className="doc-container__header backdrop backdrop--fixed theme-dark">

        <div className="backdrop__image">

          <GatsbyImage
            className="opacity-40"
            image={image}
            alt=""
          />
          
          <div className="backdrop__image__credit margin-1">
            <p>
                Photo by&nbsp;
                <a href={`https://unsplash.com/${creditHandle}`} target="_blank">
                    {creditName}
                </a>&nbsp;
                on Unsplash
            </p>
          </div>

        </div>

        <div className="backdrop__cover">
          <div className="justify-self-stretch">
            <div className="container narrow">
              <h1 className="banner-headline text-shadow">{title}</h1>
            </div>
            
          </div>
        </div>

      </div>
    );
}

export default Banner;