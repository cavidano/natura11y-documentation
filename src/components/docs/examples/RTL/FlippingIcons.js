import React, { Fragment } from 'react';

import IconExample from './IconExample';

import { exampleStyles } from '../../../../mdxVars';

import IconSprite from '../../../../icons/natura11y-icons-sprite.svg';

const FlippingIcons = () => {


    if(typeof XMLHttpRequest !== 'undefined') {

        const ajax = new XMLHttpRequest();
        
        const appendSprite = () => {
            ajax.open('GET', IconSprite, true);
            ajax.send();
            ajax.onload = () => {
                const div = document.createElement('div');
                div.className = 'natura11y-icons-sprite';
                div.innerHTML = ajax.responseText;
                document.body.insertBefore(div, document.body.childNodes[0]);
            }
        }
        
        appendSprite();
    }



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