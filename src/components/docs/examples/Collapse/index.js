import React, { useState } from "react"

const index = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <button
                className="button width-100 theme-primary display-block border-radius"
                onClick={handleClick}
                >
                    Navigation
            </button>

            {isOpen && (
                
                <div className="border border-radius margin-y-3" id="collapseMenuExample">
                    <ul className="nav nav--divider" id="" role="navigation">
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                        <li>
                            <a href="#1">Link</a>
                        </li>
                    </ul>
                </div>
            
            )}

        </>
    );
}

export default index
