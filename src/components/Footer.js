import React from 'react';

import { Link } from 'gatsby';

const Footer = ({ version, title }) => {
  return (
    <footer className="theme-white box-shadow-1 text-align-center overflow-hidden font-size-md">

      <h2 className="screen-reader-only">Page Footer</h2>

      <div className="container narrow margin-y-4">

        <p className="text-align-center font-size-sm opacity-70">
          Version: {version}
        </p>

        <ul className="nav nav--horizontal justify-content-center margin-y-3">
          <li>
            <Link to="/docs/get-started">Docs</Link>
          </li>
          <li>
            <Link to="/icons">Icons</Link>
          </li>
          <li>
            <Link to="/comps">Comps</Link>
          </li>
        </ul>

        <a
          className="display-block margin-bottom-2"
          href="https://www.behance.net/carlavidano"
          data-logo="brand"
          target="_blank">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="30"
            viewBox="0 0 150 30">
            <g>
              <path d="M22.3243,10.4878a5.1971,5.1971,0,0,0,.4606-2.58c-.2207-.9782.3625-1.5217.41-2.4774a2.2728,2.2728,0,0,0-.5533-1.5992A8.8255,8.8255,0,0,0,21.3927,2.123,17.1841,17.1841,0,0,0,14.8207,0a3.2154,3.2154,0,0,0-1.2424.3009A.4018.4018,0,0,1,13.0592.07C13.0543.057,13.05.0441,13.0465.0309c-2.5011.688-7.3374,4.0615-6.7246,5.0062a1.8687,1.8687,0,0,0-1.19.56l.2173.3129C3.4888,7.764.0339,12.0265.0118,15.205c-.22,5.08,2.6241,11.67,8.4756,11.5543a8.4663,8.4663,0,0,0,7.85-.5137c.1229-.379.4058-.422.7217-.4228.6126-.0964,2.3416-1.0384,2.4361-1.6446.3643-.0081.5711-.1707.5864-.5077-.0188-.53.4054-.8456.6167-1.25.8921-1.4557-1.06-1.55-1.8866-1.0144-3.6289,2.351-8.6028,3.2912-11.3247-.5906a12.7688,12.7688,0,0,1-.927-2.1869c-.8526-.26-.0881-1.2543-.519-2.0881-.7069-1.3676.8393-2.9033.9691-4.4633l.4335.2285c.7906-1.2073,1.4062-.96,1.576-2.0477.2074-1.33,1.6883-1.6794,2.2992-3.0371.843-1.6362,1.5572-.6889,2.1957-2.322.0221-.8231.8461-.6538,1.2639-.2943.4526.3894.98.0059,1.6051.5449,1.0275.885,3.5344,1.1137,3.6332,2.9286-.5693,1.8865-.5882,4.0675-1.653,5.7447-.94,1.3285-2.8,1.9741-2.48,3.845-.4026,1.0891,3.6429.93,3.6614-.03a13.7336,13.7336,0,0,1,1.0953-1.0326c.1673-.1745.2815-.3877.5792-.4045a4.36,4.36,0,0,0,1.21-2.8322A23.1277,23.1277,0,0,1,22.3243,10.4878Z" />
              <path d="M27.2421,25.0439c-.7278-.1344-.47-.9821-1.5677-1.0674-1.1109.6737-1.6009-.0768-2.9774,1.3057.1638.8969.4314,2.0906,1.6261,2.127a.78.78,0,0,0,1.1473.6.5821.5821,0,0,1,.7061-.0414s.4311-.6336.9561-.2968C28.139,27.152,28.6512,25.304,27.2421,25.0439Z" />
              <path d="M149.6885,21.4466c.75-3.35-2.2638-5.767-5.2958-6.5156-1.64.4164-5.3655-1.3441-6.3627.6186-2.7413,1.5314-2.5415,5.49-.6388,7.669.4484,1.3284,2.7544,2.9867,3.4879,1.6621-.1056-.5069.8976-.7645.8762-.2038.0416.15.289.2493.4473.2711a1.4251,1.4251,0,0,1,.8894.5128c.2567.217.68.2265.775.6566.2283.3084,1.3421.8493,1.6432.5058v-.475a.8937.8937,0,0,0,1.3789-.4239s.5508.6059.97.1081c.3722-.4416,1.112-.3782,1.31-1.0941,1.0017-.4228.4307-1.4147.76-2.1942A1.0152,1.0152,0,0,0,149.6885,21.4466Zm-5.0161-.699c-.1928.7023-1.2793.5679-1.9215.7943-.74.2608-.5769.9827-1.4018.9743-.9519-.01-1.0807-1.5034-1.2436-2.21-.1408-.6108.62-.4905.8118-1.3784.3134-1.4517,2.4192.4412,3.106-.8313,1.058.2288.0867,1.8584.6491,2.6511Z" />
              <path d="M95.0961,7.9652a.5628.5628,0,0,0-.0786-.8918c-.1182-1.2251-.4019-3.48-.9706-4.0335-1.315-.5886-1.78-1.9236-3.2666-1.8812-2.2163.0631-2,4.1235-2.2821,6.0837-.4847,3.3642-1.665,8.05-2.1233,12.1139.4728,1.9376-1.4941,1.3644-2.9077.9324a1.506,1.506,0,0,1-1.0664-2.1056c-.0456-.6212-.3106-1.4768.3061-1.9041a.6.6,0,0,0,.2045-.4271c.0583-.5708.7223-.3419.8677-.9059,1.954.198,1.1931-.7079,2.228-1,.6585-.5015.7119-.8872.4176-1.1724-.7954-.771-4.131-1.3344-4.923-.4189-4.8147.8477-5.1444,7.9872-1.2471,10.03a14.89,14.89,0,0,0,3.9237,1.2845.7811.7811,0,0,1,.9613-.27,3.589,3.589,0,0,0,1.666,2.8427s.8969-.1065.85.4124c-.0273.3028.3048.464.6835.2908.2285-.1046.4118-.5076,1.0934-.3791.0074.7432,1.3029,1.0428,1.9881.5682.8449-.6525,1.6375-.3656,2.2657-1.03l-.0183-.5636c.878.0862.92-.5358.7469-.9674.7536-.4529.84-2.1782-.04-3.715a4.4426,4.4426,0,0,0,.3234-1.3521l-.4812-.1335a4.0537,4.0537,0,0,1,.2407-1.102c.5049-1.3641.2767-3.8107.4136-4.6533.3095-1.077-.1843-2.187.2459-3.2173a3.3175,3.3175,0,0,0,.3916-1.68A1.2586,1.2586,0,0,0,95.0961,7.9652Z" />
              <path d="M74.89,7.2517a12.5574,12.5574,0,0,0,1.1633-1.5709,2.213,2.213,0,0,0-1.92-1.177.6828.6828,0,0,0-.9435-.2049c-.0169.0109-.0334.0225-.0493.0349a1.5349,1.5349,0,0,0-2.3239.2838c-.9728.331-.4044,1.396.5173,2.3222C72.5936,8.206,74.0085,8.1459,74.89,7.2517Z" />
              <path d="M68.62,12.6223c-1.4371.1837-1.6056,1.0763-3.17,1.13-4.0008.1368-4.8232.0358-6.0367,4.1125-.8228,1.805-1.4938,3.8292-1.5518.3354-.06-.5375-.2659-1.29.2192-1.6988,1.2936-1.4984-.9627-3.3375-2.2809-3.9268-1.7071-1.0133-4.3725,2.4513-6.9469,2.5514-.0086-.0313-.0567-.2346-.0652-.2659a.9018.9018,0,0,0,.4334-1.3245c-.09-2.8125.7433-5.1827-.3086-7.9367-2.208-4.3834-7.2645-5.1114-9.81-.5289-2.3811,1.9917-3.3978,4.8341-4.6674,7.5067-1.2095,1.4233-.9983,3.61-1.7908,5.2266-.8248,1.3234-.67,2.8781-1.2823,4.2664-.52,1.3451-1.4818,3.8995.9463,3.3,1.8447.5064.9813-1.43,1.8316-2.0038a1.9721,1.9721,0,0,0,1.0367-1.5167,1.19,1.19,0,0,0,.6224-1.481c4.024.7652,4.882.3116,6.2717.7454.7318,2.4537-.73,6.3488,1.0421,7.8876-.2879.5141.5735.909.5735.909l.4725-.1671L44.3773,30l.47-.2356c.8288.2356,1.729.3958,2.06-.5225.3655.002.3638-.2675.4365-.5166.13-.4435.2148-.5419.7121-.5574.9568-.6792.1673-1.2531.62-2.0357,1.1413-1.971-1.6544-4.859.8362-6.2888l-.0861-.4381c1.7678.3093,1.5027-1.0826,3.0821-1.0573.36-.2065.5789-.74,1.01-.7723-.4023,4.4234,5.243,9.5309,7.6668,3.7165a24.3789,24.3789,0,0,0,1.651-4.1669c.2321-.7975.2031-.6959.9584-.4915a10.2288,10.2288,0,0,0,2.8012.31,62.3031,62.3031,0,0,0-2.3023,9.84c-.041.247.3017.7192.5017.56.5483-.4364.7292.2457,1.07-.02a.3156.3156,0,0,1,.4956.2249.7974.7974,0,0,0,.7274-.4926l.281.1416a.463.463,0,0,1,.6361-.3162c.28.0723.5025-.2779.3466-.5775.0951-.4628.2518-.6562.4481-.73.3876-.1447.8859.2935,1.2771-.1214.4968-.6122.3949-1.5335,1.05-2.0481a1.5474,1.5474,0,0,0,.8047-1.3722,2.8029,2.8029,0,0,1,.6444-1.7115c.6337-.0887.57-.81,1.1811-1.0883a.3164.3164,0,0,0,.54-.1851c.6437.0626.7922-.6781,1.1528-1.0765.4667-.7838-.548-1.3735-.8266-1.9536A6.5205,6.5205,0,0,0,68.62,12.6223ZM44.0618,8.6267c-.3336,2.4145-.7971,4.8239-1.3384,7.1966-.1443,1.6423-4.5078.969-5.7893,1.051-.0249-.6212-.5354-1.31.109-1.6889.32-.3368.5118-.7711.9063-1.03,1.3051-2.3526,2.4164-5.0635,4.5577-6.8814.1809-.2946.6561-.3081.66-.7671.0756-.2575.48-.45.7389-.5879A5.1039,5.1039,0,0,1,44.0618,8.6267Z" />
              <path d="M132.934,22.92c.0623-.9871-.1659-6.22-1.8136-6.6561a3.032,3.032,0,0,0-.6831-1.2987,3.4933,3.4933,0,0,0-3.2237-.8092,2.3577,2.3577,0,0,0-1.0885.544,6.6105,6.6105,0,0,0-4.0708,2.1948c-5.5183-3.6349-8.3955-1.26-12.0013,3.2694-.0767-.0539-.2994-.1949-.3761-.2488a3.2289,3.2289,0,0,0,.6384-2.4572c-.1824-.6126.5309-1.0915-.14-1.8269-1.2449-.2146-1.5734-1.6486-3.443-1.472-1.5522.1466-2.3678,5.29-2.0807,6.6419-.9357.014-2.2921.4708-3.133-.1568a1.908,1.908,0,0,1-.6748-1.2224l.2568-.1332c.4837-.73-.2246-1.8095-.19-2.6046a1.7945,1.7945,0,0,1,2.42-1.57.46.46,0,0,0,.5352-.11c.2268-.2557.3289-.6708.6725-.449.3093.2.515-.2407.515-.2407a.6715.6715,0,0,0,.5122-.4767c.2336-.7967-.5351-1.0487-1.114-1.0715-1.1977-.7486-3.6731-.9023-4.8591.4716a5.0763,5.0763,0,0,0-2.29,1.9721c-1.451,2.5934-.4092,6.8923,2.373,8.1834,1.6938.0382,2.1636.9269,3.2752.0022.3575-.13,1.1925-.0312,1.2059-.6271-.0828-.65.4431-.6453.9058-.8622,1.0159,2.0575,3.912,3.5845,5.968,2.0638,2.8169-.3929,3.5243-3.6368,5.7216-5.305a.6812.6812,0,0,0,.8745-.4039l.0129-.0387c-.1653,2.9536-1.9738,4.4372-1.6608,7.1471l.2682.1313a2.9132,2.9132,0,0,1,2.6617-1.0478l.1677-.3377c.994.6243,2.932,2.1075,3.2958.1391.9315.0331,1.8494-.4984,1.4546-1.2948a10.1011,10.1011,0,0,1,2.4358-5.0707c.4485-.3948.8568-.1478.9355.665.1474,1.522-.209,4.79.686,7.97a3.25,3.25,0,0,0,.33,2.304c.128.28.4316.1452.605.039l.1.22c1.59-.743,1.566-1.1756,2.6112-2.0416.4087.025.6453-.1228.6673-.5544.4808-.3882.2134-.9177.5669-1.3457C133.661,24.3512,132.8909,23.6033,132.934,22.92Z" />
            </g>
          </svg>

        </a>

        <p>
          {title} is an open source design system created by <a href="https://www.behance.net/carlavidano" target="_blank"> Carl Avidano</a>. Carl is a New York-based designer, front-end developer, and aspiring fine artist.
        </p>
      </div>

      <div className="container padding-y-2 border-top">
        <a href="#" data-scroll="top">
          Back to Top
        </a>
      </div>

    </footer>
  );
}

export default Footer;