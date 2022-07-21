/*

In this file:

// A. CDNs
// B. Placeholder Images
// C. Example Styles
// D. Active Styles

*/

//////////////////////////////////////////////
// A. CDNs
//////////////////////////////////////////////

// GitHub 

export const cdnIcons = `https://cdn.jsdelivr.net/gh/cavidano/natura11y-icons@main/dist/natura11y-icons.min.css`;
export const cdnCSS = `https://cdn.jsdelivr.net/gh/cavidano/natura11y@1.2/dist/css/natura11y.min.css`;
export const cdnJS = `https://cdn.jsdelivr.net/gh/cavidano/natura11y@1.2/dist/js/natura11y.min.js`;

//////////////////////////////////////////////
// B. Placeholder Images
//////////////////////////////////////////////

export const codeImgPlaceholder = `<img src="https://via.placeholder.com/800x400" alt="Placeholder" />`;
export const codeImgPlaceholderBackdrop = `<img class="opacity-50" src="https://via.placeholder.com/1500x750" alt="Placeholder" />`;

//////////////////////////////////////////////
// C. Example Styles
//////////////////////////////////////////////

export const exampleStyles = {
    '--primary': '#440381',
    '--secondary': '#ffcc66',
    '--dark': '#1f163f',
    '--light': '#f2edeb',
    '--primary-text': 'white',
    '--primary-confirm': '#00cc55',
    '--primary-warn': '#ff6090',
    '--secondary-text': 'var(--dark)',
    '--secondary-confirm': '#165a2d',
    '--secondary-warn': '#a40e36',
    '--dark-confirm': '#00cc53',
    '--dark-warn': '#ff5557',
    '--a11y-link': '#0066cc',
    '--dark-link': '#21b2fa',
    '--body-font-family': 'Source Sans Pro',
    '--body-line-height': '1.4',
    '--article-sidebar-width': '200px',
    fontFamily: 'var(--body-font-family)',
    lineHeight: 'var(--body-line-height)'
}

//////////////////////////////////////////////
// D. Active Styles
//////////////////////////////////////////////

export const activeLinkStyles = {
    'fontWeight': 'var(--body-font-weight-bold)',
    'textDecoration': 'underline'
}