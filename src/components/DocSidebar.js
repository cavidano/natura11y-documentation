import React from 'react';
import { Link } from 'gatsby';

function DocSidebar({ pages }) {

    // console.log("Doc Pages ====> ", pages);

    return (
        <nav className="padding-2 font-size-md">
            <ul className="nav">

                {pages.map(page => (
                    <li key={page.id}>
                        <Link to={"/docs/" + page.slug}>
                            {page.frontmatter.title}
                        </Link> 
                    </li>
                ))}

            </ul>

        </nav>
    )
};

export default DocSidebar;