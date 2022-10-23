(self.webpackChunknatura11y_inclusive_framework_documentation=self.webpackChunknatura11y_inclusive_framework_documentation||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},6947:function(e,t,n){"use strict";var r=n(7294),a=n(1597);t.Z=function(){var e=(0,a.K2)("28479125"),t=e.site.siteMetadata.title,n=e.site.siteMetadata.version;return r.createElement("footer",{className:"theme-white box-shadow-1 text-align-center overflow-hidden font-size-md"},r.createElement("h2",{className:"screen-reader-only"},"Page Footer"),r.createElement("div",{className:"container narrow margin-y-4"},r.createElement("p",{className:"text-align-center font-size-sm opacity-70"},n),r.createElement("ul",{className:"nav nav--horizontal justify-content-center margin-y-3"},r.createElement("li",null,r.createElement(a.rU,{to:"/docs/get-started/"},"Docs")),r.createElement("li",null,r.createElement(a.rU,{to:"/icons/"},"Icons")),r.createElement("li",null,r.createElement(a.rU,{to:"/comps/"},"Comps"))),r.createElement("a",{className:"display-block margin-bottom-2",href:"https://design.carlavidano.com","data-logo":"brand",target:"_blank"},r.createElement("span",{className:"screen-reader-only"},"Visit Carl Avidano's Website"),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"30",viewBox:"0 0 150 30"},r.createElement("g",null,r.createElement("path",{d:"M22.3243,10.4878a5.1971,5.1971,0,0,0,.4606-2.58c-.2207-.9782.3625-1.5217.41-2.4774a2.2728,2.2728,0,0,0-.5533-1.5992A8.8255,8.8255,0,0,0,21.3927,2.123,17.1841,17.1841,0,0,0,14.8207,0a3.2154,3.2154,0,0,0-1.2424.3009A.4018.4018,0,0,1,13.0592.07C13.0543.057,13.05.0441,13.0465.0309c-2.5011.688-7.3374,4.0615-6.7246,5.0062a1.8687,1.8687,0,0,0-1.19.56l.2173.3129C3.4888,7.764.0339,12.0265.0118,15.205c-.22,5.08,2.6241,11.67,8.4756,11.5543a8.4663,8.4663,0,0,0,7.85-.5137c.1229-.379.4058-.422.7217-.4228.6126-.0964,2.3416-1.0384,2.4361-1.6446.3643-.0081.5711-.1707.5864-.5077-.0188-.53.4054-.8456.6167-1.25.8921-1.4557-1.06-1.55-1.8866-1.0144-3.6289,2.351-8.6028,3.2912-11.3247-.5906a12.7688,12.7688,0,0,1-.927-2.1869c-.8526-.26-.0881-1.2543-.519-2.0881-.7069-1.3676.8393-2.9033.9691-4.4633l.4335.2285c.7906-1.2073,1.4062-.96,1.576-2.0477.2074-1.33,1.6883-1.6794,2.2992-3.0371.843-1.6362,1.5572-.6889,2.1957-2.322.0221-.8231.8461-.6538,1.2639-.2943.4526.3894.98.0059,1.6051.5449,1.0275.885,3.5344,1.1137,3.6332,2.9286-.5693,1.8865-.5882,4.0675-1.653,5.7447-.94,1.3285-2.8,1.9741-2.48,3.845-.4026,1.0891,3.6429.93,3.6614-.03a13.7336,13.7336,0,0,1,1.0953-1.0326c.1673-.1745.2815-.3877.5792-.4045a4.36,4.36,0,0,0,1.21-2.8322A23.1277,23.1277,0,0,1,22.3243,10.4878Z"}),r.createElement("path",{d:"M27.2421,25.0439c-.7278-.1344-.47-.9821-1.5677-1.0674-1.1109.6737-1.6009-.0768-2.9774,1.3057.1638.8969.4314,2.0906,1.6261,2.127a.78.78,0,0,0,1.1473.6.5821.5821,0,0,1,.7061-.0414s.4311-.6336.9561-.2968C28.139,27.152,28.6512,25.304,27.2421,25.0439Z"}),r.createElement("path",{d:"M149.6885,21.4466c.75-3.35-2.2638-5.767-5.2958-6.5156-1.64.4164-5.3655-1.3441-6.3627.6186-2.7413,1.5314-2.5415,5.49-.6388,7.669.4484,1.3284,2.7544,2.9867,3.4879,1.6621-.1056-.5069.8976-.7645.8762-.2038.0416.15.289.2493.4473.2711a1.4251,1.4251,0,0,1,.8894.5128c.2567.217.68.2265.775.6566.2283.3084,1.3421.8493,1.6432.5058v-.475a.8937.8937,0,0,0,1.3789-.4239s.5508.6059.97.1081c.3722-.4416,1.112-.3782,1.31-1.0941,1.0017-.4228.4307-1.4147.76-2.1942A1.0152,1.0152,0,0,0,149.6885,21.4466Zm-5.0161-.699c-.1928.7023-1.2793.5679-1.9215.7943-.74.2608-.5769.9827-1.4018.9743-.9519-.01-1.0807-1.5034-1.2436-2.21-.1408-.6108.62-.4905.8118-1.3784.3134-1.4517,2.4192.4412,3.106-.8313,1.058.2288.0867,1.8584.6491,2.6511Z"}),r.createElement("path",{d:"M95.0961,7.9652a.5628.5628,0,0,0-.0786-.8918c-.1182-1.2251-.4019-3.48-.9706-4.0335-1.315-.5886-1.78-1.9236-3.2666-1.8812-2.2163.0631-2,4.1235-2.2821,6.0837-.4847,3.3642-1.665,8.05-2.1233,12.1139.4728,1.9376-1.4941,1.3644-2.9077.9324a1.506,1.506,0,0,1-1.0664-2.1056c-.0456-.6212-.3106-1.4768.3061-1.9041a.6.6,0,0,0,.2045-.4271c.0583-.5708.7223-.3419.8677-.9059,1.954.198,1.1931-.7079,2.228-1,.6585-.5015.7119-.8872.4176-1.1724-.7954-.771-4.131-1.3344-4.923-.4189-4.8147.8477-5.1444,7.9872-1.2471,10.03a14.89,14.89,0,0,0,3.9237,1.2845.7811.7811,0,0,1,.9613-.27,3.589,3.589,0,0,0,1.666,2.8427s.8969-.1065.85.4124c-.0273.3028.3048.464.6835.2908.2285-.1046.4118-.5076,1.0934-.3791.0074.7432,1.3029,1.0428,1.9881.5682.8449-.6525,1.6375-.3656,2.2657-1.03l-.0183-.5636c.878.0862.92-.5358.7469-.9674.7536-.4529.84-2.1782-.04-3.715a4.4426,4.4426,0,0,0,.3234-1.3521l-.4812-.1335a4.0537,4.0537,0,0,1,.2407-1.102c.5049-1.3641.2767-3.8107.4136-4.6533.3095-1.077-.1843-2.187.2459-3.2173a3.3175,3.3175,0,0,0,.3916-1.68A1.2586,1.2586,0,0,0,95.0961,7.9652Z"}),r.createElement("path",{d:"M74.89,7.2517a12.5574,12.5574,0,0,0,1.1633-1.5709,2.213,2.213,0,0,0-1.92-1.177.6828.6828,0,0,0-.9435-.2049c-.0169.0109-.0334.0225-.0493.0349a1.5349,1.5349,0,0,0-2.3239.2838c-.9728.331-.4044,1.396.5173,2.3222C72.5936,8.206,74.0085,8.1459,74.89,7.2517Z"}),r.createElement("path",{d:"M68.62,12.6223c-1.4371.1837-1.6056,1.0763-3.17,1.13-4.0008.1368-4.8232.0358-6.0367,4.1125-.8228,1.805-1.4938,3.8292-1.5518.3354-.06-.5375-.2659-1.29.2192-1.6988,1.2936-1.4984-.9627-3.3375-2.2809-3.9268-1.7071-1.0133-4.3725,2.4513-6.9469,2.5514-.0086-.0313-.0567-.2346-.0652-.2659a.9018.9018,0,0,0,.4334-1.3245c-.09-2.8125.7433-5.1827-.3086-7.9367-2.208-4.3834-7.2645-5.1114-9.81-.5289-2.3811,1.9917-3.3978,4.8341-4.6674,7.5067-1.2095,1.4233-.9983,3.61-1.7908,5.2266-.8248,1.3234-.67,2.8781-1.2823,4.2664-.52,1.3451-1.4818,3.8995.9463,3.3,1.8447.5064.9813-1.43,1.8316-2.0038a1.9721,1.9721,0,0,0,1.0367-1.5167,1.19,1.19,0,0,0,.6224-1.481c4.024.7652,4.882.3116,6.2717.7454.7318,2.4537-.73,6.3488,1.0421,7.8876-.2879.5141.5735.909.5735.909l.4725-.1671L44.3773,30l.47-.2356c.8288.2356,1.729.3958,2.06-.5225.3655.002.3638-.2675.4365-.5166.13-.4435.2148-.5419.7121-.5574.9568-.6792.1673-1.2531.62-2.0357,1.1413-1.971-1.6544-4.859.8362-6.2888l-.0861-.4381c1.7678.3093,1.5027-1.0826,3.0821-1.0573.36-.2065.5789-.74,1.01-.7723-.4023,4.4234,5.243,9.5309,7.6668,3.7165a24.3789,24.3789,0,0,0,1.651-4.1669c.2321-.7975.2031-.6959.9584-.4915a10.2288,10.2288,0,0,0,2.8012.31,62.3031,62.3031,0,0,0-2.3023,9.84c-.041.247.3017.7192.5017.56.5483-.4364.7292.2457,1.07-.02a.3156.3156,0,0,1,.4956.2249.7974.7974,0,0,0,.7274-.4926l.281.1416a.463.463,0,0,1,.6361-.3162c.28.0723.5025-.2779.3466-.5775.0951-.4628.2518-.6562.4481-.73.3876-.1447.8859.2935,1.2771-.1214.4968-.6122.3949-1.5335,1.05-2.0481a1.5474,1.5474,0,0,0,.8047-1.3722,2.8029,2.8029,0,0,1,.6444-1.7115c.6337-.0887.57-.81,1.1811-1.0883a.3164.3164,0,0,0,.54-.1851c.6437.0626.7922-.6781,1.1528-1.0765.4667-.7838-.548-1.3735-.8266-1.9536A6.5205,6.5205,0,0,0,68.62,12.6223ZM44.0618,8.6267c-.3336,2.4145-.7971,4.8239-1.3384,7.1966-.1443,1.6423-4.5078.969-5.7893,1.051-.0249-.6212-.5354-1.31.109-1.6889.32-.3368.5118-.7711.9063-1.03,1.3051-2.3526,2.4164-5.0635,4.5577-6.8814.1809-.2946.6561-.3081.66-.7671.0756-.2575.48-.45.7389-.5879A5.1039,5.1039,0,0,1,44.0618,8.6267Z"}),r.createElement("path",{d:"M132.934,22.92c.0623-.9871-.1659-6.22-1.8136-6.6561a3.032,3.032,0,0,0-.6831-1.2987,3.4933,3.4933,0,0,0-3.2237-.8092,2.3577,2.3577,0,0,0-1.0885.544,6.6105,6.6105,0,0,0-4.0708,2.1948c-5.5183-3.6349-8.3955-1.26-12.0013,3.2694-.0767-.0539-.2994-.1949-.3761-.2488a3.2289,3.2289,0,0,0,.6384-2.4572c-.1824-.6126.5309-1.0915-.14-1.8269-1.2449-.2146-1.5734-1.6486-3.443-1.472-1.5522.1466-2.3678,5.29-2.0807,6.6419-.9357.014-2.2921.4708-3.133-.1568a1.908,1.908,0,0,1-.6748-1.2224l.2568-.1332c.4837-.73-.2246-1.8095-.19-2.6046a1.7945,1.7945,0,0,1,2.42-1.57.46.46,0,0,0,.5352-.11c.2268-.2557.3289-.6708.6725-.449.3093.2.515-.2407.515-.2407a.6715.6715,0,0,0,.5122-.4767c.2336-.7967-.5351-1.0487-1.114-1.0715-1.1977-.7486-3.6731-.9023-4.8591.4716a5.0763,5.0763,0,0,0-2.29,1.9721c-1.451,2.5934-.4092,6.8923,2.373,8.1834,1.6938.0382,2.1636.9269,3.2752.0022.3575-.13,1.1925-.0312,1.2059-.6271-.0828-.65.4431-.6453.9058-.8622,1.0159,2.0575,3.912,3.5845,5.968,2.0638,2.8169-.3929,3.5243-3.6368,5.7216-5.305a.6812.6812,0,0,0,.8745-.4039l.0129-.0387c-.1653,2.9536-1.9738,4.4372-1.6608,7.1471l.2682.1313a2.9132,2.9132,0,0,1,2.6617-1.0478l.1677-.3377c.994.6243,2.932,2.1075,3.2958.1391.9315.0331,1.8494-.4984,1.4546-1.2948a10.1011,10.1011,0,0,1,2.4358-5.0707c.4485-.3948.8568-.1478.9355.665.1474,1.522-.209,4.79.686,7.97a3.25,3.25,0,0,0,.33,2.304c.128.28.4316.1452.605.039l.1.22c1.59-.743,1.566-1.1756,2.6112-2.0416.4087.025.6453-.1228.6673-.5544.4808-.3882.2134-.9177.5669-1.3457C133.661,24.3512,132.8909,23.6033,132.934,22.92Z"})))),r.createElement("p",null,t," is an open source design system created by ",r.createElement("a",{href:"https://design.carlavidano.com",target:"_blank"}," Carl Avidano"),". Carl is a New York-based designer, front-end developer, and aspiring fine artist.")),r.createElement("div",{className:"container padding-y-2 border-top"},r.createElement("a",{href:"#","data-scroll":"top"},"Back to Top")))}},3049:function(e,t,n){"use strict";var r=n(7294),a=n(1597),o=n(8430);t.Z=function(){var e=(0,a.K2)("1129062873"),t=e.site.siteMetadata.version,n=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"168",height:"44",viewBox:"0 0 168 44"},r.createElement("g",{className:"natur"},r.createElement("path",{d:"M48.3918,27.6662l.01-10.1724c.0013-.0684.01-.135.01-.2038,0-.0662-.0087-.13-.01-.1961l.01-10.1756-4.6107-.0046L43.8,8.669a10.3745,10.3745,0,1,0-.0169,17.2524l-.0017,1.74ZM38.038,23.0533a5.7633,5.7633,0,1,1,5.7533-5.8626l0,.2005A5.7644,5.7644,0,0,1,38.038,23.0533Z"}),r.createElement("path",{d:"M77.2287,27.664a10.3126,10.3126,0,0,0,5.7634-1.754v1.754h4.6106V6.916H82.9921V17.29a5.7634,5.7634,0,0,1-11.5267,0V6.916H66.8547V17.29A10.3854,10.3854,0,0,0,77.2287,27.664Z"}),r.createElement("path",{d:"M59.9387,2.3053H55.328V6.916H50.7174v4.6107H55.328v9.2191a6.9121,6.9121,0,0,0,6.916,6.9182h2.3054V23.0533H62.244a2.3,2.3,0,0,1-2.3053-2.3053V11.5267h4.6107V6.916H59.9387Z"}),r.createElement("path",{d:"M95.6714,27.6662l.01-10.4774a5.7645,5.7645,0,0,1,5.7531-5.6621V6.916A10.3112,10.3112,0,0,0,95.69,8.6588l.0017-1.74L91.081,6.9137l-.01,10.1726c-.0014.0684-.01.1349-.01.2037h.01l-.01,10.3718Z"}),r.createElement("polygon",{points:"20.748 20.748 5.187 0 0 0 0 27.664 4.611 27.664 4.611 6.916 20.172 27.664 25.359 27.664 25.359 0 20.748 0 20.748 20.748"})),r.createElement("g",{className:"a11y"},r.createElement("path",{d:"M118.5,27.6142l4.6028.0045.01-10.155c.0013-.0683.01-.1348.01-.2034,0-.0661-.0087-.13-.01-.1958l.01-10.1581-4.6027-.0045-.0017,1.7522a10.3566,10.3566,0,1,0-.0169,17.2227Zm-5.7331-4.6a5.7535,5.7535,0,1,1,5.7433-5.8526l0,.2A5.7547,5.7547,0,0,1,112.7672,23.0137Z"}),r.createElement("polygon",{points:"127.726 27.616 132.329 27.616 132.329 0 123.123 0 123.123 4.603 127.726 4.603 127.726 27.616"}),r.createElement("polygon",{points:"143.836 27.616 143.836 0 134.63 0 134.63 4.603 139.233 4.603 139.233 27.616 143.836 27.616"}),r.createElement("polygon",{points:"151.55 36.506 156.488 36.506 160.455 26.306 160.455 26.306 168 6.904 163.062 6.904 157.476 21.267 151.89 6.904 146.952 6.904 155.007 27.617 151.55 36.506"})),r.createElement("g",{className:"tagline"},r.createElement("path",{d:"M0,43.893V34.588H1.88v9.305Z"}),r.createElement("path",{d:"M6.1882,36.508v1.1061A2.45,2.45,0,0,1,8.48,36.401a2.7367,2.7367,0,0,1,2.0666.8332,3.2035,3.2035,0,0,1,.8,2.3134V43.893H9.4805V39.8138a1.8444,1.8444,0,0,0-.44-1.326,1.5816,1.5816,0,0,0-1.2-.46,1.6047,1.6047,0,0,0-1.2064.46,1.8258,1.8258,0,0,0-.4465,1.326V43.893h-1.88V36.508Z"}),r.createElement("path",{d:"M14.2212,42.96a4.2644,4.2644,0,0,1,0-5.52,3.5059,3.5059,0,0,1,2.6259-1.0395,3.753,3.753,0,0,1,2.2536.6538,3.1647,3.1647,0,0,1,1.2132,1.8525H18.2868a1.3985,1.3985,0,0,0-1.44-.92,1.5212,1.5212,0,0,0-1.273.5931,3.0835,3.0835,0,0,0,0,3.24,1.5212,1.5212,0,0,0,1.273.5931,1.413,1.413,0,0,0,1.44-.9335h2.0271a3.327,3.327,0,0,1-1.2334,1.84,3.6331,3.6331,0,0,1-2.2334.68A3.506,3.506,0,0,1,14.2212,42.96Z"}),r.createElement("path",{d:"M22.1616,43.893V34.0277h1.88V43.893Z"}),r.createElement("path",{d:"M31.5128,36.508h1.8805v7.385H31.5128v-1.12a2.46,2.46,0,0,1-2.3057,1.2131,2.72,2.72,0,0,1-2.0531-.8332,3.2014,3.2014,0,0,1-.8-2.3125V36.508h1.8669v4.0657a1.8682,1.8682,0,0,0,.44,1.3327,1.568,1.568,0,0,0,1.2.4668,1.5907,1.5907,0,0,0,1.2064-.4668,1.8492,1.8492,0,0,0,.4465-1.3327Z"}),r.createElement("path",{d:"M35.4136,38.6672a1.994,1.994,0,0,1,.8129-1.6124,3.9108,3.9108,0,0,1,4.3193-.0068,2.2716,2.2716,0,0,1,.867,1.7523h-1.92q-.0795-.9316-1.1466-.9326a1.3906,1.3906,0,0,0-.8264.2132.6852.6852,0,0,0-.2932.5863.6511.6511,0,0,0,.44.5863,4.2951,4.2951,0,0,0,1.0665.3337q.6264.12,1.2469.3a2.3519,2.3519,0,0,1,1.06.64,1.6909,1.6909,0,0,1,.44,1.22,1.9356,1.9356,0,0,1-.8467,1.6259A4.0405,4.0405,0,0,1,36.32,43.38a2.2864,2.2864,0,0,1-.92-1.7792h1.92q.1056.933,1.1861.9325a1.3871,1.3871,0,0,0,.84-.2333.7245.7245,0,0,0,.32-.6134.6684.6684,0,0,0-.44-.6,4.1284,4.1284,0,0,0-1.0666-.3394c-.4185-.08-.8332-.1775-1.2469-.2932a2.3493,2.3493,0,0,1-1.06-.62A1.5919,1.5919,0,0,1,35.4136,38.6672Z"}),r.createElement("path",{d:"M45.5556,34.6285a1.1377,1.1377,0,1,1-.3337-.8139A1.1046,1.1046,0,0,1,45.5556,34.6285ZM43.4765,43.893V36.508h1.88v7.385Z"}),r.createElement("path",{d:"M46.8459,36.508h2l1.9056,5.7726,1.893-5.7726h2l-2.7194,7.385h-2.36Z"}),r.createElement("path",{d:"M59.0689,44a3.4933,3.4933,0,0,1-2.6259-1.0463A3.8081,3.8081,0,0,1,55.43,40.187a3.7452,3.7452,0,0,1,1.0193-2.7522,3.5456,3.5456,0,0,1,2.64-1.0338,3.6636,3.6636,0,0,1,2.6587,1.0067,3.5659,3.5659,0,0,1,1.0405,2.6857,4.5386,4.5386,0,0,1-.054.72H57.35a1.754,1.754,0,0,0,.5333,1.16,1.6584,1.6584,0,0,0,1.1861.44,1.5545,1.5545,0,0,0,1.44-.8h2.0261a3.2441,3.2441,0,0,1-1.24,1.72A3.6867,3.6867,0,0,1,59.0689,44Zm1.2334-5.5729a1.7648,1.7648,0,0,0-1.2064-.44,1.6668,1.6668,0,0,0-1.18.44,1.8634,1.8634,0,0,0-.5661,1.1736h3.4919A1.6109,1.6109,0,0,0,60.3023,38.4271Z"}),r.createElement("path",{d:"M67.74,43.893V34.588h5.7591v1.44H69.62v2.44h2.96v1.44H69.62V43.893Z"}),r.createElement("path",{d:"M76.9459,36.508v1.3067a2.3421,2.3421,0,0,1,2.1592-1.4137v1.92h-.4668a1.7361,1.7361,0,0,0-1.2661.4195,1.99,1.99,0,0,0-.4263,1.4465v3.706H75.0664V36.508Z"}),r.createElement("path",{d:"M81.3192,42.9267a4.2674,4.2674,0,0,1-.0067-5.4659,3.2744,3.2744,0,0,1,2.5063-1.06,2.5858,2.5858,0,0,1,2.32,1.2536V36.508h1.866v7.385H86.139V42.6538A2.6163,2.6163,0,0,1,83.8053,44,3.2466,3.2466,0,0,1,81.3192,42.9267Zm4.2325-1.1331a2.4544,2.4544,0,0,0,0-3.1862,1.9153,1.9153,0,0,0-2.7387-.0068,2.13,2.13,0,0,0-.5806,1.5864,2.1587,2.1587,0,0,0,.5873,1.6,1.8918,1.8918,0,0,0,2.732.0068Z"}),r.createElement("path",{d:"M92.2549,36.508v1.1061a2.4517,2.4517,0,0,1,2.2932-1.2131,2.911,2.911,0,0,1,1.4995.3867,2.5953,2.5953,0,0,1,1.02,1.1061,2.8693,2.8693,0,0,1,1.06-1.0926,2.9,2.9,0,0,1,1.5131-.4,2.84,2.84,0,0,1,2.1263.8264,3.1864,3.1864,0,0,1,.8062,2.32V43.893h-1.866V39.8138a1.84,1.84,0,0,0-.4407-1.326,1.58,1.58,0,0,0-1.2-.46,1.6047,1.6047,0,0,0-1.2064.46,1.8258,1.8258,0,0,0-.4465,1.326V43.893h-1.866V39.8138a1.8448,1.8448,0,0,0-.44-1.326,1.5843,1.5843,0,0,0-1.2007-.46,1.6045,1.6045,0,0,0-1.2063.46,1.8258,1.8258,0,0,0-.4465,1.326V43.893h-1.88V36.508Z"}),r.createElement("path",{d:"M107.94,44a3.4931,3.4931,0,0,1-2.6259-1.0463,3.8122,3.8122,0,0,1-1.0135-2.7667,3.7462,3.7462,0,0,1,1.02-2.7522A3.5435,3.5435,0,0,1,107.96,36.401a3.6657,3.6657,0,0,1,2.66,1.0067,3.565,3.565,0,0,1,1.04,2.6857,4.5427,4.5427,0,0,1-.0531.72h-5.3858a1.7536,1.7536,0,0,0,.5333,1.16,1.6614,1.6614,0,0,0,1.1861.44,1.5525,1.5525,0,0,0,1.44-.8h2.027a3.2486,3.2486,0,0,1-1.24,1.72A3.6919,3.6919,0,0,1,107.94,44Zm1.2334-5.5729a1.765,1.765,0,0,0-1.2064-.44,1.6646,1.6646,0,0,0-1.1794.44,1.86,1.86,0,0,0-.567,1.1736h3.4928A1.6113,1.6113,0,0,0,109.1733,38.4271Z"}),r.createElement("path",{d:"M121.8168,36.508h1.7995L121.35,43.893h-2l-1.2662-4.9587-1.28,4.9587h-2l-2.2662-7.385h1.893l1.36,5.6125,1.36-5.6125h1.9731l1.3327,5.599Z"}),r.createElement("path",{d:"M125.5353,42.9469a3.6832,3.6832,0,0,1-1.0791-2.76,3.6184,3.6184,0,0,1,1.0926-2.7465,4.0606,4.0606,0,0,1,5.4264,0,4.0061,4.0061,0,0,1-.0068,5.5064A3.79,3.79,0,0,1,128.2422,44,3.7214,3.7214,0,0,1,125.5353,42.9469Zm2.7069-.5332a1.8276,1.8276,0,0,0,1.353-.5806,2.6595,2.6595,0,0,0,.0067-3.272,1.8237,1.8237,0,0,0-1.3529-.5738,1.7819,1.7819,0,0,0-1.34.5738,2.735,2.735,0,0,0,0,3.2788A1.7715,1.7715,0,0,0,128.2422,42.4137Z"}),r.createElement("path",{d:"M135.849,36.508v1.3067a2.3421,2.3421,0,0,1,2.1591-1.4137v1.92h-.4667a1.7365,1.7365,0,0,0-1.2662.4195,1.99,1.99,0,0,0-.4262,1.4465v3.706H133.97V36.508Z"}),r.createElement("path",{d:"M141.5077,43.893h-1.88V34.0277h1.88v5.6395l2.4929-3.1592h2.5468l-3.28,3.732,3.28,3.653h-2.5063l-2.5334-3.0792Z"})));return r.createElement("header",{className:"box-shadow-1 z-index-2500",id:"global-header"},r.createElement("a",{className:"focusable-only",href:"#skip-header-target"},"Skip Header"),r.createElement("div",{className:"theme-primary text-align-center padding-y-1 padding-x-2"},r.createElement("p",null,"There is a newer version of ",r.createElement(a.rU,{to:"/"},r.createElement("strong",null,"Naturally")),".")),r.createElement("div",{className:"primary-nav--inline--lg"},r.createElement("div",{className:"primary-nav__logo"},r.createElement(a.rU,{to:"/",title:"Home","data-logo":"brand"},n)),r.createElement("nav",{className:"primary-nav__menu",id:"primary-menu","aria-label":"Main Menu"},r.createElement("ul",null,r.createElement("li",null,r.createElement("span",{className:"font-size-sm margin-y-auto opacity-70"},t)),r.createElement("li",null,r.createElement(a.rU,{to:"/docs/get-started",activeStyle:o.sT,getProps:function(e){return function(e){if(e.pathname.includes("docs"))return{style:o.sT,"aria-current":"page"}}(e.location)}},"Docs")),r.createElement("li",null,r.createElement(a.rU,{to:"/icons/",activeStyle:o.sT,partiallyActive:!0},"Icons")),r.createElement("li",null,r.createElement(a.rU,{to:"/comps/",activeStyle:o.sT,partiallyActive:!0},"Comps")))),r.createElement("div",{className:"primary-nav__toggles"},r.createElement("button",{className:"button button--icon-only mobile-menu-toggle",title:"Menu","data-toggle":"collapse","data-target-toggle":"#primary-menu"},r.createElement("span",{className:"icon icon-menu","aria-hidden":"true"}))),r.createElement("div",{className:"primary-nav__actions"},r.createElement("a",{className:"button button--icon-only",href:"https://github.com/cavidano/natura11y","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer"},r.createElement("span",{className:"icon icon-github"})))))}},4584:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,a,o,i,c=n(7294),l=n(1597),s=n(5697),u=n.n(s),p=n(4839),f=n.n(p),m=n(2993),d=n.n(m),h=n(6494),y=n.n(h),g="bodyAttributes",v="htmlAttributes",b="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",M="name",k="property",N="rel",j="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",L="defer",I="encodeSpecialCharacters",V="onChangeClientState",_="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[E.NOSCRIPT,E.SCRIPT,E.STYLE],U="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,E.TITLE),n=X(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,Z);return t||r||void 0},$=function(e){return X(e,V)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===N&&"canonical"===e[n].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,f=e.titleAttributes;se(E.BODY,r),se(E.HTML,a),le(p,f);var m={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,o),metaTags:ue(E.META,i),noscriptTags:ue(E.NOSCRIPT,c),scriptTags:ue(E.SCRIPT,s),styleTags:ue(E.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(E.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,a=fe(n,r),[c.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=pe(n),o=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case v:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:me(E.BASE,t,r),bodyAttributes:me(g,n,r),htmlAttributes:me(v,a,r),link:me(E.LINK,o,r),meta:me(E.META,i,r),noscript:me(E.NOSCRIPT,c,r),script:me(E.SCRIPT,l,r),style:me(E.STYLE,s,r),title:me(E.TITLE,{title:p,titleAttributes:f},r)}},he=f()((function(e){return{baseTag:J([A,x],e),bodyAttributes:G(g,e),defer:X(e,L),encode:X(e,I),htmlAttributes:G(v,e),linkTags:Q(E.LINK,[N,A],e),metaTags:Q(E.META,[M,T,C,k,S],e),noscriptTags:Q(E.NOSCRIPT,[O],e),onChangeClientState:$(e),scriptTags:Q(E.SCRIPT,[j,O],e),styleTags:Q(E.STYLE,[w],e),title:W(e),titleAttributes:G(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(a=he,i=o=function(e){function t(){return D(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},o)});case E.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var ge=n(1423),ve=function(e){var t=e.title,n=e.version,r=e.description,a=e.image,o=e.article,i=(0,ge.useLocation)().pathname,s=(0,l.K2)(Ee).site.siteMetadata,u=s.defaultTitle,p=s.titleTemplate,f=s.defaultDescription,m=s.siteUrl,d=s.defaultImage,h={title:t||u,version:n,description:r||f,image:""+m+(a||d),url:""+m+i};return c.createElement(ye,{title:h.title,titleTemplate:p},c.createElement("meta",{name:"description",content:h.description}),c.createElement("meta",{name:"image",content:h.image}),h.url&&c.createElement("meta",{property:"og:url",content:h.url}),!o?null:c.createElement("meta",{property:"og:type",content:"article"}),h.title&&c.createElement("meta",{property:"og:title",content:h.title}),h.description&&c.createElement("meta",{property:"og:description",content:h.description}),h.image&&c.createElement("meta",{property:"og:image",content:h.image}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),h.title&&c.createElement("meta",{name:"twitter:title",content:h.title}),h.description&&c.createElement("meta",{name:"twitter:description",content:h.description}),h.image&&c.createElement("meta",{name:"twitter:image",content:h.image}))},be=ve;ve.defaultProps={title:null,version:null,description:null,image:null,article:!1};var Ee="903098576"}}]);
//# sourceMappingURL=commons-fa38b404b5fad6753511.js.map