import React, { Fragment, useState } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { exampleStyles } from '../../../../mdxVars';

const CSSLogicalProperties = () => {

  const [direction, setDirection] = useState('ltr');

  const handleClick = (e) => {
      let currentDirection = e.target.getAttribute('data-direction');
      setDirection(currentDirection);
  } 

  return (

    <Fragment>

      <div style={exampleStyles}>

        <ul className="nav nav--horizontal justify-content-center margin-bottom-4" data-react-nav>
            <li>
                <button
                    className={direction === 'ltr' ? `active` : ``}
                    onClick={handleClick}
                    data-direction="ltr">
                    Left to Right
                </button>
            </li>
            <li>
                <button
                    className={direction === 'rtl' ? `active` : ``}
                    onClick={handleClick}
                    data-direction="rtl">
                    Right to Left
                </button>
            </li>
        </ul>

        <div 
          className="container narrow"
          style={exampleStyles}
          dir={direction}>

            <div className="display-flex align-items-center box-shadow-1">
                <div className="padding-2 border-right flex-shrink-0">
                    <StaticImage
                        src="../../../../images/examples/rtl-css-logical-properties.jpg"
                        alt=""
                        placeholder="dominantColor"
                        width="200"
                        height="200"
                    />
                </div>

                {direction === 'ltr'
                ? (
                    <div className="padding-2">
                        <p className='h6 margin-bottom-1'>
                            Did you know?
                        </p>
                        <p>
                            The association between hermit crabs and their shelters has significantly influenced their biology.
                        </p>
                    </div>
                ) : 
                (
                    <div className="padding-2 arabic-font">
                        <p className='h6 margin-bottom-1'>
                            هل كنت تعلم؟
                        </p>
                        <p>
                            أثرت العلاقة بين السرطانات الناسك وملاجئها بشكل كبير على بيولوجيتها.
                        </p>
                    </div>
                )}

            </div>

        </div>

      </div>

    </Fragment>
  )
}

export default CSSLogicalProperties;