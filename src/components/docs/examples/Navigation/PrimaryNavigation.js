import React, { Fragment } from 'react';

import { v4 as uuidv4 } from 'uuid';

const PrimaryNavigation = (props) => {

    const idSuffix = uuidv4();

    const { navClass } = props;

    const logoPlaceholder = (
        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="34" viewBox="0 0 126 34">
            <g>
                <polygon points="8 25 8 1 0 1 0 33 3 33 8 33 16 33 16 25 8 25"/>
                <path d="M35,0A17,17,0,1,0,52,17,17,17,0,0,0,35,0Zm0,26a9,9,0,1,1,9-9A9,9,0,0,1,35,26Z"/>
                <path d="M109,0a17,17,0,1,0,17,17A17,17,0,0,0,109,0Zm0,26a9,9,0,1,1,9-9A9,9,0,0,1,109,26Z"/>
                <path d="M88.95,16H72v6h7.4824a9,9,0,1,1,0-10H88.25A17.0052,17.0052,0,1,0,89,17C89,16.6624,88.9689,16.3327,88.95,16Z"/>
            </g>
        </svg>
    );

    const toggleButtons = () => {

        switch(navClass){
            case 'primary-nav--below--lg': 
                return (
                    <Fragment>
                    
                        <button
                            className="mobile-menu-toggle button button--icon-only"
                            aria-label="Menu"
                            data-toggle="collapse"
                            data-target-toggle={`#main-menu_${idSuffix}`}>
                            <span className="icon icon-menu"></span>
                        </button>
                        
                    </Fragment>
                );
            case 'primary-nav--inline--lg': 
                return (
                    <Fragment>
                    
                        <button
                            className="mobile-menu-toggle button button--icon-only"
                            aria-label="Menu"
                            data-toggle="collapse"
                            data-target-toggle={`#main-menu_${idSuffix}`}
                            data-target-close={`#search_${idSuffix}`}>
                            <span className="icon icon-menu"></span>
                        </button>

                        <button
                            className="mobile-menu-toggle button button--icon-only"
                            aria-label="Search"
                            data-toggle="collapse"
                            data-target-toggle={`#search_${idSuffix}`}
                            data-target-close={`#main-menu_${idSuffix}`}>
                                <span className="icon icon-search"></span>
                        </button>

                    </Fragment>
                );
            default: return <p>cool</p>
        }
    }

    return (
      <div className="container wide margin-y-4">
        <div className={`${navClass} box-shadow-1 z-index-1500`}>
          <div className="primary-nav__logo">
            <a href="#1" title="Home" data-logo="brand">
              {logoPlaceholder}
            </a>
          </div>

          <nav className="primary-nav__menu" id={`main-menu_${idSuffix}`}>
            <ul>
              <li>
                <button data-toggle="dropdown">Dropdown</button>
                <ul className="nav__dropdown box-shadow-1--lg">
                  <li>
                    <a href="#1">Link</a>
                  </li>
                  <li>
                    <a href="#1">Link</a>
                  </li>
                  <li>
                    <a href="#1">Link</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#1">Link</a>
              </li>
              <li>
                <a href="#1">Link</a>
              </li>
              <li>
                <a href="#1">Link</a>
              </li>
            </ul>
          </nav>

          <div className="primary-nav__toggle">

            {toggleButtons()}

          </div>

          <form className="primary-nav__search" role="search" id={`search_${idSuffix}`}>
            <div className="form-entry" aria-label="Search">
              <div className="form-entry__field">
                <span className="form-entry__field__input">
                  <input type="text" name="global-search" />
                  <button className="button font-size-sm">Search</button>
                </span>
              </div>
            </div>
          </form>

          <div className="primary-nav__actions">
            <button className="button button--icon-only" aria-label="Language">
              <span className="icon icon-language"></span>
            </button>
          </div>
        </div>
      </div>
    )
}

PrimaryNavigation.defaultProps = {
    navClass : 'primary-nav--inline--lg'
}

export default PrimaryNavigation;