import "./_style.scss"

//////////////////////////////////////////////
// Accessibility
//////////////////////////////////////////////

export default class Accessibility {

  constructor() {
  
    this.elements = [
      'a[href]',
      'button',
      '[role="tab"]',
      '[data-toggle="accordion"]',
    ];

  }
  
  init() {

    const focusableElementList = document.querySelectorAll(this.elements);

    focusableElementList.forEach(focusableElement => {
      let mouseDown = false;

      focusableElement.addEventListener('mousedown', () => {
        mouseDown = true;
      });

      focusableElement.addEventListener('mouseup', () => {
        mouseDown = false;
      });

      focusableElement.addEventListener('focus', event => {
        if (mouseDown) {
          event.target.blur();
        }
      });

    });

  }

}