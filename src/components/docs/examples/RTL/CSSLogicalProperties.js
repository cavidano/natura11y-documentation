import React, { Fragment, useState } from 'react';

import IconItem from './IconItem';

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

        <ul className="nav nav--horizontal justify-content-center margin-bottom-3" data-react-nav>
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

                <IconItem />
                <IconItem iconName="double-chevron-left" />
                <IconItem iconName="confirm" />
                <IconItem iconName="checkbox-checked" />

            </ul>

        </div>

      </div>

    </Fragment>
  )
}

export default CSSLogicalProperties;