import React from 'react';

import '../../natura11y';
import '../icons/natura11y-icons.css';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="Layout">
            <Header />

            <div className="content">
                { children }
            </div>

            <Footer />
            
        </div>
    )
}

export default Layout;