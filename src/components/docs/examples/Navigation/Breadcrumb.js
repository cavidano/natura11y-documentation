import React from 'react';

const Breadcrumb = () => {
    return (
        <ul className="nav-breadcrumb">
            <li>
                <a className="button button--icon-only" href="#1">
                    <span className="icon icon-home" aria-hidden="true"></span>
                </a>
            </li>
            <li>
                <a href="#1">About</a>
            </li>
            <li className="text-color-primary">
                Services
            </li>
        </ul>
    );
}

export default Breadcrumb;
