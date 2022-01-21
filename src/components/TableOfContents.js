import React, {useEffect} from 'react';

import { Link } from 'gatsby';

import Accessibility from '../natura11y/modules/accessibility';

const TableOfContents = ({ sections }) => {

    useEffect(() => {

        const el = document.querySelector('.doc-container__toc');

        let elDistance;

        window.addEventListener('scroll', () => {

            const winScrollY = window.scrollY;
            const elOffset = el.offsetTop;

            elDistance = elOffset - winScrollY;

            console.log(`
                window ScrollY =======, ${winScrollY},
                element Offset =======, ${elOffset},
                distance =======, ${elDistance}
            `);
            
            if (elDistance <= 0) {
                el.firstChild.classList.add('sticky');

            } else {
                el.firstChild.classList.remove('sticky');
            }
        
        });

        const accessibleLinks = new Accessibility();

        accessibleLinks.init()

    }, []);

    return (
        <div className="doc-container__toc">

            <div className="container narrow font-size-sm">

                <em className='display-block opacity-60 margin-bottom-2'>
                    Table of Contents:
                </em>
            
                <nav id="table-of-contents">
                    <ul className="nav">
                        {sections
                        .map(section => (
                            <li key={`${section.id}`}>
                                <Link to={`#${section.id}`}>
                                    {section.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

        </div>
    );
}

export default TableOfContents;