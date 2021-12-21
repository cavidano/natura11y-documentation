import React from 'react';

const IconsInNav = () => {
    
    return (
        <div className="grid gap-3">

            <ul class="nav nav--has-icons nav--horizontal justify-content-center">
                <li>
                    <a href="#1">
                        <span class="icon icon-home"></span>
                        <span class="nav__text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span class="icon icon-calendar"></span>
                        <span class="nav__text">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span class="icon icon-bell"></span>
                        <span class="nav__text">Notifications</span>
                    </a>
                </li>
            </ul>

            <ul class="nav nav--divider nav--has-icons border">
                <li>
                    <a href="#1">
                        <span class="icon icon-home"></span>
                        <span class="nav__text">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span class="icon icon-calendar"></span>
                        <span class="nav__text">Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="#1">
                        <span class="icon icon-bell"></span>
                        <span class="nav__text">Notifications</span>
                    </a>
                </li>
            </ul>

        </div>
    );
}

export default IconsInNav;