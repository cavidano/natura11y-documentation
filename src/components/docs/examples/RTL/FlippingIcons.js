import React, { Fragment } from 'react';

import IconExample from './IconExample';

import { exampleStyles } from '../../../../mdxVars';

const FlippingIcons = () => {

  return (

    <Fragment>

        <div className="container medium" style={exampleStyles}>

            <div className="grid grid--column-4--md gap-2 text-align-center">

                <IconExample />
                <IconExample iconName="double-chevron-left" />
                <IconExample iconName="confirm" />
                <IconExample iconName="checkbox-checked" />

            </div>

        </div>

    </Fragment>
  )
}

export default FlippingIcons;