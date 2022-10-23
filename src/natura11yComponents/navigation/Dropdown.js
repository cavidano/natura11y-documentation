import React, { useRef, useState, useEffect } from 'react';

import classNames from 'classnames';

const Dropdown = ( props ) => {

    const {
        title = 'Dropdown'
    } = props;

    const dropdownButton = useRef();
    const dropdownMenu = useRef();

    const [dropdownShow, setDropdownShow] = useState(false);

    const showClass = classNames({'shown' : dropdownShow});

    useEffect(() => {

        let dropdownButtonParent = dropdownButton.current.closest('li');

        const dropdownClickListener = (e) => {
        
            let dropdownButtonClick = dropdownButtonParent.contains(e.target);

            if (!dropdownButtonClick) {
                setDropdownShow(false);
            }
        } 

        setDropdownShow(false);

        window.addEventListener('click', dropdownClickListener);

        return () => {
            window.removeEventListener('click', dropdownClickListener);
        }

    }, []);

    const handleClick = () => {
        setDropdownShow(!dropdownShow);
    }

    return (
        <>
            <button
                className='opacity-70'
                ref={dropdownButton}
                data-toggle="dropdown"
                aria-expanded={dropdownShow ? true : false}
                onClick={handleClick}>
                    {title}
            </button>

            <ul
                ref={dropdownMenu}
                className={`nav__dropdown box-shadow-1--lg ${showClass}`}>
                <li>
                    <a href='https://gonatura11y.com/v1/'>
                        v1.2.x
                    </a>
                </li>
            </ul>

        </>
    );
}

export default Dropdown;