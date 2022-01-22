import React from 'react';

function RTLExample() {

    const logoPlaceholder = (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="34" viewBox="0 0 70 34">
            <g>
                <path d="M19.795,20.9688a4.55,4.55,0,0,1-4.1457,2.0237,9.9517,9.9517,0,0,1-1.7767,4.7081,8.9625,8.9625,0,0,1-6.9247,3.2526C2.301,30.9532,0,27.4054,0,23.2654a12.885,12.885,0,0,1,1.891-6.6177l1.23.6137a9.785,9.785,0,0,0-1.07,3.776A4.7524,4.7524,0,0,0,3.6677,25.04a6.1573,6.1573,0,0,0,3.8037,1.296,7.7159,7.7159,0,0,0,4.4422-1.4332c1.071-.7278,1.8679-1.4779,2.0045-2.228,0-1.5018-1.1157-3.571-2.4825-5.7543a40.6051,40.6051,0,0,1,2.3-3.6843l.2278.0455c.5011,1.1371,1.0254,2.3421,1.5721,3.73a1.7639,1.7639,0,0,0,1.64,1.319,2.4615,2.4615,0,0,0,1.3891-.5234c.8656-.6137,1.0247-2.1833,1.3891-3.3883a19.7975,19.7975,0,0,1,1.8-1.0693l.16.1372a6.8731,6.8731,0,0,0-.2733,1.8194,2.4251,2.4251,0,0,0,2.46,2.706,1.2822,1.2822,0,0,0,.9559-.3184,24.7909,24.7909,0,0,0-.7513-4.1846,34.7512,34.7512,0,0,1,2.5057-2.6158l.2965.091a27.76,27.76,0,0,1,.5,4.9586,7.1287,7.1287,0,0,1-1.3205,4.2294c-1.0022,1.4556-2.0732,2.4339-3.3712,2.4339a3.9814,3.9814,0,0,1-3.0068-1.6375ZM17.0385,5.3442a19.1547,19.1547,0,0,1,2.7334,2.6844,9.59,9.59,0,0,1-2.0956,2.4331c-.9112-.8866-1.8447-1.7054-2.8014-2.5472ZM18.975.3408a19.1558,19.1558,0,0,1,2.7335,2.6844,9.59,9.59,0,0,1-2.0957,2.4331c-.9111-.8866-1.8454-1.7054-2.8014-2.5472Zm3.0524,4.7767A19.1549,19.1549,0,0,1,24.7608,7.8a9.6209,9.6209,0,0,1-2.0956,2.4338c-.9112-.8873-1.8447-1.7061-2.8022-2.5472Z"/>
                <path d="M42.0046,10.6205a5.9258,5.9258,0,0,0-3.1658-.91c-2.3011,0-4.5789,1.5465-4.5789,2.0244,0,.7278.7745,1.5234,1.708,2.32a4.6329,4.6329,0,0,0,2.301,1.0917c.6147,0,3.0979-1.296,7.3572-2.8887l.2285.1819c-.3421,1.3877-.7065,2.7977-1.1845,4.14-7.1756,2.4331-11.0936,5.2763-11.0936,7.6185,0,2.8655,3.8724,5.3672,10.5693,5.3672a28.3871,28.3871,0,0,0,5.08-.4317l.3414.5227a32.046,32.046,0,0,1-5.4438,4.0258A8.9311,8.9311,0,0,1,41.39,34c-5.6267,0-10.0689-2.5919-10.0689-8.3231,0-2.4338.98-4.9355,3.2353-7.5506-1.7088-1.2288-2.9157-2.6844-2.9157-4.5948a7.9392,7.9392,0,0,1,1.1845-3.9341A5.9484,5.9484,0,0,1,37.6991,6.368c1.9365,0,3.5766,1.2281,4.9665,3.5023Z"/>
                <path d="M52.0041,23.1521A38.8532,38.8532,0,0,0,52.3,17.6715,134.7865,134.7865,0,0,0,51.5254,2.888,37.78,37.78,0,0,1,54.1677,0l.3876.2051c.4556,4.9124.5235,9.5057.5235,13.9185,0,3.57-.2053,5.9579-.7057,6.7319a16.3129,16.3129,0,0,1-1.8686,2.66Z"/>
                <path d="M67.22,10.8255C69.2024,14.0774,70,16.0564,70,17.9213c0,1.0685-.0911,1.6606-.0911,2.0923a11.8224,11.8224,0,0,1-1.4579,6.0272c-1.4354,2.4331-3.189,3.8431-5.1711,3.8431a13.1619,13.1619,0,0,1-6.2413-1.979L57.471,26.7a8.8163,8.8163,0,0,0,2.2778.2729,8.3762,8.3762,0,0,0,5.5356-2.7515c1.549-1.5465,2.5057-3.1162,2.5057-3.8439,0-.8188-.8656-2.4107-3.0523-5.6857.6378-1.3646,1.3667-2.6836,2.05-3.8663Z"/>
            </g>
        </svg>
    );

    return (
        <div className='overflow-hidden theme-light' dir='rtl' lang='ar'>
                
            <div
                className="primary-nav--inline--lg box-shadow-1">

                <div className="primary-nav__logo">
                    <a href="#1" title="Home" data-logo="brand">
                        {logoPlaceholder}
                    </a>
                </div>

                <nav className="primary-nav__menu" aria-label="Main Menu" id="primary-menu-below">

                    <ul>
                        <li>
                            <button data-toggle="dropdown">Dropdown</button>
                            <ul className="nav__dropdown box-shadow-1--lg">
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
                        </li>
                        <li>
                            <a href="#1">وصلة</a>
                        </li>
                        <li>
                            <a href="#1">وصلة</a>
                        </li>
                    </ul>

                </nav>

                <div className="primary-nav__actions">

                    <button
                        className="button button--icon-only mobile-menu-toggle"
                        aria-label="Menu"
                        data-toggle="collapse"
                        data-target-toggle="#primary-menu-below">
                            <span className="icon icon-menu"></span>
                    </button>
                    
                    <div className="button-group">

                        <a href="#1" className="button button--outline">
                        تسجيل الدخول
                        </a>

                    </div>

                </div>

            </div>

            <div class="backdrop backdrop--fixed theme-dark" style={{ '--backdrop-fixed-height': '700px' }}>

                <div class="backdrop__credit">
                    <p>
                        Photo by <a href="#1">Jane Doe</a> on Unsplash
                    </p>
                </div>

                <div class="backdrop__image gradient-veneer-left">
                    <img class="opacity-50" src="https://via.placeholder.com/1500x750" alt="Placeholder" />
                </div>

                <div class="backdrop__cover">

                    <div class="container narrow margin-y-5">

                        <div class="text-shadow margin-bottom-4">
                            <h1 class="banner-headline">
                            هل كنت تعلم؟
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus repellendus est quo, hic impedit corporis itaque, debitis voluptatem veniam dolorum similique odit tenetur necessitatibus iste sequi. Facilis, eius. Aliquam?
                            </p>
                        </div>

                        <div class="grid grid--column-2--md gap-2">

                            <a class="button button--outline width-100" href="#1">
                                انواع من
                            </a>

                            <a class="button theme-secondary width-100 box-shadow-1" href="#1">
                                Emily Dickenson Poetry
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default RTLExample;