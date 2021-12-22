import React from 'react';

const PrimaryNavigation = (props) => {

    const { navClass, searchWidth } = props;

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

    return (

        <div className="container wide margin-y-4">
            
            <div
                className={`${navClass} box-shadow-1 z-index-1500`}
                style={{'--primary-nav-search-width': `${searchWidth}`}}>

                <div className="primary-nav__logo">
                    <a href="#1" title="Home" data-logo="brand">
                        {logoPlaceholder}
                    </a>
                </div>

                <nav className="primary-nav__menu" aria-label="Main Menu" id="primary-menu-below">

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
                    </ul>

                    <form className="form-entry" aria-label="Search" role="search">

                        <div className="form-entry__field">
        
                            <span className="form-entry__field__input">
                                <span className="icon icon-search opacity-50" aria-hidden="true"></span>
                                <input type="text" name="global-search" placeholder="Search" />
                            </span>

                        </div>
                    
                    </form>

                </nav>

                <div className="primary-nav__actions">

                    <button
                        className="button button--icon-only mobile-menu-toggle"
                        aria-label="Menu"
                        data-toggle="collapse"
                        data-target-toggle="#primary-menu-below">
                            <span className="icon icon-menu"></span>
                    </button>
                    
                    <div className="button-group">

                        <a href="#1" className="button">
                            Sign In
                        </a>

                        <button
                            className="button button--icon-only"
                            aria-label="Language"
                            data-modal-open="global-language">
                                <span className="icon icon-language"></span>
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

PrimaryNavigation.defaultProps = {
    navClass : 'primary-nav--below--lg',
    searchWidth  : '25%'
}

export default PrimaryNavigation;
