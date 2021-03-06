import React, { Fragment, useState } from 'react';

import IconRow from './IconRow';

import { exampleStyles } from '../../../../mdxVars';

const FlippingIcons = () => {

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

            <ul className="grid gap-1 text-align-center">

                <IconRow />
                <IconRow iconName="double-chevron-left" />
                <IconRow iconName="checkbox-checked" />
                <IconRow iconName="confirm" />

            </ul>

        </div>

      </div>

    </Fragment>
  )
}

export default FlippingIcons;