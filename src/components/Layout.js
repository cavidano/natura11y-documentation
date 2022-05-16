import React, { Fragment, useEffect, useState } from "react";

import { globalHistory } from "@reach/router";

import "../icons/natura11y-icons.css"

import "../natura11y/modules/accents"

import "../natura11y/modules/accessibility"

import initAccordion from '../natura11y/modules/accordion';

import initAlerts from "../natura11y/modules/alerts"

import "../natura11y/modules/article"

import "../natura11y/modules/aspect-ratios"

import "../natura11y/modules/backdrops"

import "../natura11y/modules/borders"

import "../natura11y/modules/breakpoints"

import initButtons from "../natura11y/modules/buttons"

import "../natura11y/modules/cards"

import initCollapse from "../natura11y/modules/collapse"

import "../natura11y/modules/color"

import "../natura11y/modules/containers"

import "../natura11y/modules/display"

import initDocument from "../natura11y/modules/document"

import "../natura11y/modules/flex"

import initForms from "../natura11y/modules/forms"

import "../natura11y/modules/grid"

import "../natura11y/modules/icons"

import "../natura11y/modules/links"

import initModal from "../natura11y/modules/modal"

import initNavigation from "../natura11y/modules/navigation"

import "../natura11y/modules/opacity"

import "../natura11y/modules/overflow"

import "../natura11y/modules/position"

import "../natura11y/modules/shadows"

import "../natura11y/modules/sizing"

import "../natura11y/modules/spacing"

import initTabs from "../natura11y/modules/tabs"

import initTables from "../natura11y/modules/tables"

import "../natura11y/modules/typography"

import "../natura11y/modules/z-index/index"

import "../natura11y/modules/theme"

import IconSprite from "../icons/natura11y-icons-sprite.svg"

const Layout = ({ children }) => {

  // const cool = () => {

  //     window.addEventListener('load', (event) => {
  //       console.log("Why am I here?")
  //       // initCollapse();
  //       // initAlerts();
  //       // initButtons();
  //       // initDocument();
  //       // initForms();
  //       // initModal();
  //       // initNavigation();
  //       // initTabs();
  //       // initTables();
  //     });
  // if (typeof document !== `undefined`) {
  //   }
  // }

  // Icon Sprite

  useEffect(() => {
    const iconSpriteDiv = document.getElementById(
      "natura11y-icons-sprite-container"
    )

    if (!iconSpriteDiv) {
      const ajax = new XMLHttpRequest()

      const appendSprite = () => {
        ajax.open("GET", IconSprite, true)
        ajax.send()
        ajax.onload = () => {
          const div = document.createElement("div")
          div.className = "natura11y-icons-sprite"
          div.setAttribute("id", "natura11y-icons-sprite-container")
          div.innerHTML = ajax.responseText
          document.body.insertBefore(div, document.body.childNodes[0])
        }
      }

      appendSprite();

    }


  }, []);

  function waitForElm(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          // resolve(document.querySelector(selector));

          console.log("I am disconnected");
          observer.disconnect();
        }
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    })
  }

  globalHistory.listen(({ action }) => {
    if (action === "PUSH") {
    waitForElm(".accordion").then(elm => {
      console.log(elm, "is ready")
      initAccordion()
    })
    }
  })



  return <Fragment>{children}</Fragment>
}

export default Layout
