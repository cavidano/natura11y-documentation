import React, { useState } from "react"

const index = () => {

    const [isOpen, setIsOpen] = useState();
    
    return (
        <>

            <button
                class="button width-100 theme-primary display-block border-radius"
                data-toggle="collapse"
                data-target-toggle="#collapseMenuExample">
                    Navigation
            </button>

            <div class="collapse border border-radius margin-y-3" id="collapseMenuExample">
                <ul class="nav nav--divider" id="" role="navigation">
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
        </>
    );
}

export default index
