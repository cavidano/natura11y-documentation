import React from 'react';

const Dropdowns = (props) => {

    const { navClasses } = props;
    
    return (
        
        <div className="aspect-ratio-3x2 display-flex subtle-fill border-radius" style={{'--subtle-fill-opacity':'0.0125;'}}>
            <div className="width-100 padding-4 align-self-center">
                <ul className={`nav ${navClasses !== '' && navClasses} nav--divider border theme-white`} role="navigation">
                    <li>
                        <button data-toggle="dropdown">Dropdown</button>
                        <ul className="nav__dropdown">
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
            </div>
        </div>
    );
}

Dropdowns.defaultProps = {
    navClasses: ''
}

export default Dropdowns;