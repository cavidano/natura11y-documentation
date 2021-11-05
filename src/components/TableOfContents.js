import React from 'react';

const TableOfContents = ({ sections }) => {

    return (
        <div className="padding-y-4">
            <div className="container narrow font-size-rg">
                <h2 className="screen-reader-only">On this Page:</h2>
                <nav id="table-of-contents">
                    <ul className="nav font-size-md">
                        {sections
                        .map(section => (
                            <li>
                                <a href={`#${section.id}`}>
                                    {section.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TableOfContents;