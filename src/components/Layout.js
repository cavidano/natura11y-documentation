import React from 'react';

import '../../natura11y';
import '../icons/natura11y-icons.css';

import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <div className="Layout">
            <Navbar />

            <div className="content">
                { children }
            </div>

            <footer>
                <p>Copyright 2021 - Web Warrior</p>
            </footer>
            
        </div>
    )
}

export default Layout;