import React from 'react';

const Breadcrumb = () => {
    return (
        <ul class="nav-breadcrumb">
            <li>
                <a class="button button--icon-only" href="#1">
                    <span class="icon icon-home" aria-hidden="true"></span>
                </a>
            </li>
            <li>
                <a href="#1">About</a>
            </li>
            <li class="text-color-primary">
                Services
            </li>
        </ul>
    );
}

export default Breadcrumb;
