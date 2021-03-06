import React, { Fragment, useState, useEffect } from 'react';

const ThemeExampleCard = (props) => {

    const { cardType, themeColor, border } = props;

    const [themeClass, setThemeClass] = useState('white');

    useEffect(() => {
        
        switch (themeColor) {
            case 'Primary':
                setThemeClass('theme-primary');
                break;
            case 'Secondary':
                setThemeClass('theme-secondary');
                break;
            case 'Dark':
                setThemeClass('theme-dark');
                break;
            case 'Light':
                setThemeClass('theme-light');
                break;
            case 'Prefers':
                setThemeClass('theme-canvas--prefers');
                break;
            default:
                setThemeClass('theme-canvas');
        }

    }, [themeColor]);

    const cardContent = () => {

        switch(cardType){
            case 'theme': 
                return (
                    <Fragment>

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
                    </Fragment>
                );
            case 'link': 
                return (
                    <Fragment>
                        <div className="card__body">
                            <p>
                                It is common along the eastern seaboard, from northern <a href="#">Queensland</a> to <a href="#1">South Australia</a>.
                            </p>
                        </div>
                    </Fragment>
                );
            case 'feedback': 
                return (
                    <Fragment>
                        <div className="card__body">
                            <div className="grid grid--column-2 gap-2 text-align-center">
                                <div className="alert alert--confirm border">
                                    <div className="alert__title">
                                        <span className="icon icon-confirm" aria-hidden="true"></span>
                                        <span className="alert__title__text">
                                            Alert Confirm
                                        </span>
                                    </div>
                                </div>
                                <div className="alert alert--warn border">
                                    <div className="alert__title">
                                        <span className="icon icon-warn" aria-hidden="true"></span>
                                        <span className="alert__title__text">
                                            Alert Warn
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            default: return <p>cool</p>
        }
    }

    return (
        <div className={`card border-radius ${themeClass} ${border && 'border'} `}>
            <div className="card__head border-bottom font-size-rg">
                <p>
                    <strong>{themeColor}</strong>
                </p>
            </div>
            {cardContent()}
        </div>
    );
}

ThemeExampleCard.defaultProps = {
    cardType: 'theme',
    themeColor: 'Canvas',
    border: true,
}

export default ThemeExampleCard;