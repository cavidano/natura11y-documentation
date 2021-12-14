import React from 'react';

const ThemeCard = (props) => {
    const { themeClass, border } = props;
    return (
        <div className={`card border-radius ${themeClass} ${border && 'border'} `}>

            <div className="card__head border-bottom font-size-rg">
                <p>
                    <strong>Primary</strong>
                </p>
            </div>

            <div className="card__body">
                <h2 className="h4">
                    Rainbow lorikeet
                </h2>
                <p>
                    The rainbow lorikeet is a species of parrot found in Australia. It is common along the eastern seaboard, from northern <a href="#">Queensland</a> to <a href="#1">South Australia</a>. Its habitat is rainforest, coastal bush and woodland areas.
                </p>
            </div>

            <div className="card__foot font-size-md border-top">
                <ul className="nav nav--horizontal justify-content-between">
                    <li>
                        <a href="#1">Search Images</a>
                    </li>
                    <li>
                        <a className="button button--outline rounded-pill" href="#1">
                            Visit Wikipedia
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

ThemeCard.defaultProps = {
    themeClass: 'theme-white',
    border: true,
}

export default ThemeCard;
