import React from 'react';

const IconsInNav = () => {
    
    return (
        <div className="grid gap-3">

            <ul className="nav nav--has-icons nav--horizontal justify-content-center">
                <li>
                    <a href="#1">
                        <span className="icon icon-home"></span>
                        <span className="nav__text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span className="icon icon-calendar"></span>
                        <span className="nav__text">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span className="icon icon-bell"></span>
                        <span className="nav__text">Notifications</span>
                    </a>
                </li>
            </ul>

            <ul className="nav nav--divider nav--has-icons border">
                <li>
                    <a href="#1">
                        <span className="icon icon-home"></span>
                        <span className="nav__text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span className="icon icon-calendar"></span>
                        <span className="nav__text">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span className="icon icon-bell"></span>
                        <span className="nav__text">Notifications</span>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default IconsInNav;