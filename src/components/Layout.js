import React, { useEffect, Fragment } from 'react';

import '../icons/natura11y-icons.css';

import '../natura11y/modules/accessibility';
import '../natura11y/modules/accents';
import '../natura11y/modules/article';
import '../natura11y/modules/aspect-ratios';
import '../natura11y/modules/backdrops';
import '../natura11y/modules/borders';
import '../natura11y/modules/breakpoints';
import '../natura11y/modules/cards';
import '../natura11y/modules/color';
import '../natura11y/modules/containers';
import '../natura11y/modules/display';
import '../natura11y/modules/flex';
import '../natura11y/modules/grid';
import '../natura11y/modules/icons';
import '../natura11y/modules/language';
import '../natura11y/modules/links';
import '../natura11y/modules/opacity';
import '../natura11y/modules/overflow';
import '../natura11y/modules/position';
import '../natura11y/modules/shadows';
import '../natura11y/modules/sizing';
import '../natura11y/modules/spacing';
import '../natura11y/modules/typography';
import '../natura11y/modules/z-index/index';

import Accordion from '../natura11y/modules/accordion';
import Alerts from '../natura11y/modules/alerts';
import Buttons from '../natura11y/modules/buttons';
import Collapse from '../natura11y/modules/collapse';
import Document from '../natura11y/modules/document';
import Forms from '../natura11y/modules/forms';
import Modal from '../natura11y/modules/modal';
import Navigation from '../natura11y/modules/navigation';
import Tabs from '../natura11y/modules/tabs';
import Tables from '../natura11y/modules/tables';

import '../natura11y/modules/theme';

import IconSprite from '../icons/natura11y-icons-sprite.svg';

const Layout = ({ children }) => {

  // Icon Sprite

  useEffect(() => {
    const iconSpriteDiv = document.getElementById('natura11y-icons-sprite-container');

    if( !iconSpriteDiv) {

      const ajax = new XMLHttpRequest();
      
      const appendSprite = () => {
          ajax.open('GET', IconSprite, true);
          ajax.send();
          ajax.onload = () => {
            const div = document.createElement('div');
            div.className = 'natura11y-icons-sprite';
            div.setAttribute('id', 'natura11y-icons-sprite-container')
            div.innerHTML = ajax.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
          }
      }
      
      appendSprite();
    }
  }, []);

  // Natura11y JS

  useEffect(() => {

    new Accordion();
    new Alerts();
    new Buttons();
    new Collapse();
    new Document();
    new Forms();
    new Modal();
    new Navigation();
    new Tabs();
    new Tables();

  });

  return (
    <Fragment>

      {children}

    </Fragment>
  );
}

export default Layout;