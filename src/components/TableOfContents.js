import React, {useEffect} from 'react';

import { Link } from 'gatsby';

const TableOfContents = ({ sections }) => {

    useEffect(() => {

        const el = document.querySelector('.doc-container__toc');

        let elDistance;

        const stickyTOC = () => {

            const winScrollY = window.scrollY;
            const elOffset = el.offsetTop;

            elDistance = elOffset - winScrollY;
            
            if (elDistance <= 0) {
                el.firstChild.classList.add('sticky');
            } else {
                el.firstChild.classList.remove('sticky');
            }        
        }

        window.addEventListener('scroll', stickyTOC);

        stickyTOC();

    }, []);

    return (
        <div className="doc-container__toc">

            <div className="container narrow font-size-sm">

                <strong className='display-block opacity-80 margin-bottom-2'>
                    On this page:
                </strong>
            
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