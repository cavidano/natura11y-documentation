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
                    Photo by&nbsp;
                    <a href={`https://unsplash.com/${creditHandle}`} target="_blank">
                        {creditName}
                    </a>&nbsp;
                    on Unsplash
                </p>
              </div>
        </div>
    );
}

export default Banner;