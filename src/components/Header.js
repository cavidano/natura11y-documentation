import React from 'react';

import { Link } from 'gatsby';

const Header = ({ version }) => {

  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="44"
      viewBox="0 0 168 44">

      <g className="natur">
        <path d="M48.3918,27.6662l.01-10.1724c.0013-.0684.01-.135.01-.2038,0-.0662-.0087-.13-.01-.1961l.01-10.1756-4.6107-.0046L43.8,8.669a10.3745,10.3745,0,1,0-.0169,17.2524l-.0017,1.74ZM38.038,23.0533a5.7633,5.7633,0,1,1,5.7533-5.8626l0,.2005A5.7644,5.7644,0,0,1,38.038,23.0533Z"/>
        <path d="M77.2287,27.664a10.3126,10.3126,0,0,0,5.7634-1.754v1.754h4.6106V6.916H82.9921V17.29a5.7634,5.7634,0,0,1-11.5267,0V6.916H66.8547V17.29A10.3854,10.3854,0,0,0,77.2287,27.664Z"/>
        <path d="M59.9387,2.3053H55.328V6.916H50.7174v4.6107H55.328v9.2191a6.9121,6.9121,0,0,0,6.916,6.9182h2.3054V23.0533H62.244a2.3,2.3,0,0,1-2.3053-2.3053V11.5267h4.6107V6.916H59.9387Z"/>
        <path d="M95.6714,27.6662l.01-10.4774a5.7645,5.7645,0,0,1,5.7531-5.6621V6.916A10.3112,10.3112,0,0,0,95.69,8.6588l.0017-1.74L91.081,6.9137l-.01,10.1726c-.0014.0684-.01.1349-.01.2037h.01l-.01,10.3718Z"/>
        <polygon points="20.748 20.748 5.187 0 0 0 0 27.664 4.611 27.664 4.611 6.916 20.172 27.664 25.359 27.664 25.359 0 20.748 0 20.748 20.748"/>
      </g>

      <g className="a11y">
        <path d="M118.5,27.6142l4.6028.0045.01-10.155c.0013-.0683.01-.1348.01-.2034,0-.0661-.0087-.13-.01-.1958l.01-10.1581-4.6027-.0045-.0017,1.7522a10.3566,10.3566,0,1,0-.0169,17.2227Zm-5.7331-4.6a5.7535,5.7535,0,1,1,5.7433-5.8526l0,.2A5.7547,5.7547,0,0,1,112.7672,23.0137Z"/>
        <polygon points="127.726 27.616 132.329 27.616 132.329 0 123.123 0 123.123 4.603 127.726 4.603 127.726 27.616"/>
        <polygon points="143.836 27.616 143.836 0 134.63 0 134.63 4.603 139.233 4.603 139.233 27.616 143.836 27.616"/>
        <polygon points="151.55 36.506 156.488 36.506 160.455 26.306 160.455 26.306 168 6.904 163.062 6.904 157.476 21.267 151.89 6.904 146.952 6.904 155.007 27.617 151.55 36.506"/>
      </g>
      
      <g className="tagline">
        <path d="M0,43.893V34.588H1.88v9.305Z"/>
        <path d="M6.1882,36.508v1.1061A2.45,2.45,0,0,1,8.48,36.401a2.7367,2.7367,0,0,1,2.0666.8332,3.2035,3.2035,0,0,1,.8,2.3134V43.893H9.4805V39.8138a1.8444,1.8444,0,0,0-.44-1.326,1.5816,1.5816,0,0,0-1.2-.46,1.6047,1.6047,0,0,0-1.2064.46,1.8258,1.8258,0,0,0-.4465,1.326V43.893h-1.88V36.508Z"/>
        <path d="M14.2212,42.96a4.2644,4.2644,0,0,1,0-5.52,3.5059,3.5059,0,0,1,2.6259-1.0395,3.753,3.753,0,0,1,2.2536.6538,3.1647,3.1647,0,0,1,1.2132,1.8525H18.2868a1.3985,1.3985,0,0,0-1.44-.92,1.5212,1.5212,0,0,0-1.273.5931,3.0835,3.0835,0,0,0,0,3.24,1.5212,1.5212,0,0,0,1.273.5931,1.413,1.413,0,0,0,1.44-.9335h2.0271a3.327,3.327,0,0,1-1.2334,1.84,3.6331,3.6331,0,0,1-2.2334.68A3.506,3.506,0,0,1,14.2212,42.96Z"/>
        <path d="M22.1616,43.893V34.0277h1.88V43.893Z"/>
        <path d="M31.5128,36.508h1.8805v7.385H31.5128v-1.12a2.46,2.46,0,0,1-2.3057,1.2131,2.72,2.72,0,0,1-2.0531-.8332,3.2014,3.2014,0,0,1-.8-2.3125V36.508h1.8669v4.0657a1.8682,1.8682,0,0,0,.44,1.3327,1.568,1.568,0,0,0,1.2.4668,1.5907,1.5907,0,0,0,1.2064-.4668,1.8492,1.8492,0,0,0,.4465-1.3327Z"/>
        <path d="M35.4136,38.6672a1.994,1.994,0,0,1,.8129-1.6124,3.9108,3.9108,0,0,1,4.3193-.0068,2.2716,2.2716,0,0,1,.867,1.7523h-1.92q-.0795-.9316-1.1466-.9326a1.3906,1.3906,0,0,0-.8264.2132.6852.6852,0,0,0-.2932.5863.6511.6511,0,0,0,.44.5863,4.2951,4.2951,0,0,0,1.0665.3337q.6264.12,1.2469.3a2.3519,2.3519,0,0,1,1.06.64,1.6909,1.6909,0,0,1,.44,1.22,1.9356,1.9356,0,0,1-.8467,1.6259A4.0405,4.0405,0,0,1,36.32,43.38a2.2864,2.2864,0,0,1-.92-1.7792h1.92q.1056.933,1.1861.9325a1.3871,1.3871,0,0,0,.84-.2333.7245.7245,0,0,0,.32-.6134.6684.6684,0,0,0-.44-.6,4.1284,4.1284,0,0,0-1.0666-.3394c-.4185-.08-.8332-.1775-1.2469-.2932a2.3493,2.3493,0,0,1-1.06-.62A1.5919,1.5919,0,0,1,35.4136,38.6672Z"/>
        <path d="M45.5556,34.6285a1.1377,1.1377,0,1,1-.3337-.8139A1.1046,1.1046,0,0,1,45.5556,34.6285ZM43.4765,43.893V36.508h1.88v7.385Z"/>
        <path d="M46.8459,36.508h2l1.9056,5.7726,1.893-5.7726h2l-2.7194,7.385h-2.36Z"/>
        <path d="M59.0689,44a3.4933,3.4933,0,0,1-2.6259-1.0463A3.8081,3.8081,0,0,1,55.43,40.187a3.7452,3.7452,0,0,1,1.0193-2.7522,3.5456,3.5456,0,0,1,2.64-1.0338,3.6636,3.6636,0,0,1,2.6587,1.0067,3.5659,3.5659,0,0,1,1.0405,2.6857,4.5386,4.5386,0,0,1-.054.72H57.35a1.754,1.754,0,0,0,.5333,1.16,1.6584,1.6584,0,0,0,1.1861.44,1.5545,1.5545,0,0,0,1.44-.8h2.0261a3.2441,3.2441,0,0,1-1.24,1.72A3.6867,3.6867,0,0,1,59.0689,44Zm1.2334-5.5729a1.7648,1.7648,0,0,0-1.2064-.44,1.6668,1.6668,0,0,0-1.18.44,1.8634,1.8634,0,0,0-.5661,1.1736h3.4919A1.6109,1.6109,0,0,0,60.3023,38.4271Z"/>
        <path d="M67.74,43.893V34.588h5.7591v1.44H69.62v2.44h2.96v1.44H69.62V43.893Z"/>
        <path d="M76.9459,36.508v1.3067a2.3421,2.3421,0,0,1,2.1592-1.4137v1.92h-.4668a1.7361,1.7361,0,0,0-1.2661.4195,1.99,1.99,0,0,0-.4263,1.4465v3.706H75.0664V36.508Z"/>
        <path d="M81.3192,42.9267a4.2674,4.2674,0,0,1-.0067-5.4659,3.2744,3.2744,0,0,1,2.5063-1.06,2.5858,2.5858,0,0,1,2.32,1.2536V36.508h1.866v7.385H86.139V42.6538A2.6163,2.6163,0,0,1,83.8053,44,3.2466,3.2466,0,0,1,81.3192,42.9267Zm4.2325-1.1331a2.4544,2.4544,0,0,0,0-3.1862,1.9153,1.9153,0,0,0-2.7387-.0068,2.13,2.13,0,0,0-.5806,1.5864,2.1587,2.1587,0,0,0,.5873,1.6,1.8918,1.8918,0,0,0,2.732.0068Z"/>
        <path d="M92.2549,36.508v1.1061a2.4517,2.4517,0,0,1,2.2932-1.2131,2.911,2.911,0,0,1,1.4995.3867,2.5953,2.5953,0,0,1,1.02,1.1061,2.8693,2.8693,0,0,1,1.06-1.0926,2.9,2.9,0,0,1,1.5131-.4,2.84,2.84,0,0,1,2.1263.8264,3.1864,3.1864,0,0,1,.8062,2.32V43.893h-1.866V39.8138a1.84,1.84,0,0,0-.4407-1.326,1.58,1.58,0,0,0-1.2-.46,1.6047,1.6047,0,0,0-1.2064.46,1.8258,1.8258,0,0,0-.4465,1.326V43.893h-1.866V39.8138a1.8448,1.8448,0,0,0-.44-1.326,1.5843,1.5843,0,0,0-1.2007-.46,1.6045,1.6045,0,0,0-1.2063.46,1.8258,1.8258,0,0,0-.4465,1.326V43.893h-1.88V36.508Z"/>
        <path d="M107.94,44a3.4931,3.4931,0,0,1-2.6259-1.0463,3.8122,3.8122,0,0,1-1.0135-2.7667,3.7462,3.7462,0,0,1,1.02-2.7522A3.5435,3.5435,0,0,1,107.96,36.401a3.6657,3.6657,0,0,1,2.66,1.0067,3.565,3.565,0,0,1,1.04,2.6857,4.5427,4.5427,0,0,1-.0531.72h-5.3858a1.7536,1.7536,0,0,0,.5333,1.16,1.6614,1.6614,0,0,0,1.1861.44,1.5525,1.5525,0,0,0,1.44-.8h2.027a3.2486,3.2486,0,0,1-1.24,1.72A3.6919,3.6919,0,0,1,107.94,44Zm1.2334-5.5729a1.765,1.765,0,0,0-1.2064-.44,1.6646,1.6646,0,0,0-1.1794.44,1.86,1.86,0,0,0-.567,1.1736h3.4928A1.6113,1.6113,0,0,0,109.1733,38.4271Z"/>
        <path d="M121.8168,36.508h1.7995L121.35,43.893h-2l-1.2662-4.9587-1.28,4.9587h-2l-2.2662-7.385h1.893l1.36,5.6125,1.36-5.6125h1.9731l1.3327,5.599Z"/>
        <path d="M125.5353,42.9469a3.6832,3.6832,0,0,1-1.0791-2.76,3.6184,3.6184,0,0,1,1.0926-2.7465,4.0606,4.0606,0,0,1,5.4264,0,4.0061,4.0061,0,0,1-.0068,5.5064A3.79,3.79,0,0,1,128.2422,44,3.7214,3.7214,0,0,1,125.5353,42.9469Zm2.7069-.5332a1.8276,1.8276,0,0,0,1.353-.5806,2.6595,2.6595,0,0,0,.0067-3.272,1.8237,1.8237,0,0,0-1.3529-.5738,1.7819,1.7819,0,0,0-1.34.5738,2.735,2.735,0,0,0,0,3.2788A1.7715,1.7715,0,0,0,128.2422,42.4137Z"/>
        <path d="M135.849,36.508v1.3067a2.3421,2.3421,0,0,1,2.1591-1.4137v1.92h-.4667a1.7365,1.7365,0,0,0-1.2662.4195,1.99,1.99,0,0,0-.4262,1.4465v3.706H133.97V36.508Z"/>
        <path d="M141.5077,43.893h-1.88V34.0277h1.88v5.6395l2.4929-3.1592h2.5468l-3.28,3.732,3.28,3.653h-2.5063l-2.5334-3.0792Z"/>
      </g>
    </svg>
  );

  const active = {
    fontWeight: 'bold',
    textDecoration: 'underline'
  }

  return (
    <header className="box-shadow-1 z-index-2500" id="global-header">

      <a className="focusable-only" href="#skip-header-target">
        Skip Header
      </a>

      <div className="primary-nav--inline--lg">
      
        <div className="primary-nav__logo">
          <Link to="/" title="Home" data-logo="brand">
            {logo}
          </Link>
        </div>

        <nav className="primary-nav__menu" id="primary-menu">
          <ul>
            <li>
              <span className="font-size-sm margin-y-auto opacity-70">
                {version}
              </span>
            </li>
            <li>
              <Link 
                to="/docs/get-started"
                activeStyle={active}
                partiallyActive={true}>
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/icons"
                activeStyle={active}
                partiallyActive={true}>
                  Icons
              </Link>
            </li>
            <li>
              <Link to="/comps">
                Comps
              </Link>
            </li>
          </ul>
        </nav>

        <div className="primary-nav__actions">
          <button
            className="button button--icon-only mobile-menu-toggle"
            title="Menu"
            data-toggle="collapse"
            data-target-toggle="#primary-menu">
              <span className="icon icon-menu" aria-hidden="true"></span>
          </button>

          <div className="button-group">
            <a
              className="button button--icon-only"
              href="https://github.com/cavidano/natura11y"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer">
                <span className="icon icon-github"></span>
            </a>
          </div>

        </div>
      
      </div>
    
    </header>
  );
}

export default Header;