!function(e){var n={};function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(t,a,function(n){return e[n]}.bind(null,a));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=13)}([function(e,n){e.exports=require("react")},function(e,n,r){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=function(e,n){var r=e[1]||"",t=e[3];if(!t)return r;if(n&&"function"==typeof btoa){var a=(l=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(o," */")),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([a]).join("\n")}var l,c,o;return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var o=[].concat(e[c]);t&&a[o[0]]||(r&&(o[2]?o[2]="".concat(r," and ").concat(o[2]):o[2]=r),n.push(o))}},n}},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("cors")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("serialize-javascript")},function(e,n){e.exports=require("isomorphic-fetch")},function(e,n,r){"use strict";var t=r(1),a=r.n(t)()(!1);a.push([e.i,".button {\r\n    display: inline-block;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    margin-left : 20px;\r\n    margin-right: 20px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: 1px solid transparent;\r\n    padding: 10px 10px 10px 10px;\r\n    font-size: 15px;\r\n    line-height: 1;\r\n    border-radius: .25rem;\r\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n    background-color: #cae79f;\r\n}\r\n\r\nlabel.button input {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.button-outline {\r\n    color: #000;\r\n}\r\n\r\nlabel.selected {\r\n    background-color:#7fbf00;\r\n}\r\n\r\nlabel:hover {\r\n    background-color: #7fbf00;\r\n}\r\n\r\na:focus {\r\n    color:black;\r\n    outline: none;\r\n    text-decoration:none;\r\n}\r\n  \r\na:visited {\r\n    color:black;\r\n    outline: none;\r\n    text-decoration:none;\r\n}\r\n\r\na {\r\n    color:black;\r\n    outline: none;\r\n    text-decoration:none;\r\n}\r\n  \r\nlabel.button {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    color: black;\r\n}",""])},function(e,n,r){"use strict";var t=r(1),a=r.n(t)()(!1);a.push([e.i,".FilterSection {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.FilterHeading {\r\n    text-align: left;\r\n    margin-left: 10px;\r\n    margin-block-start: 10px;\r\n    margin-block-end: 10px;\r\n}\r\n\r\n.container {\r\n    background-color: white;\r\n    height: fit-content;\r\n}\r\n\r\n.container {\r\n    grid-area: filter;\r\n}",""])},function(e,n,r){"use strict";var t=r(1),a=r.n(t)()(!1);a.push([e.i,".data {\r\n    overflow: hidden;\r\n    box-shadow: 0px 2px 8px 0px var(--clr-gray-light);\r\n    background-color: white;\r\n    text-align: initial;\r\n    justify-content: center;\r\n    border-radius: 1rem;\r\n    height: fit-content;\r\n}\r\n\r\nul {\r\n    margin-block-start: 5px;\r\n    margin-block-end: 5px;\r\n    padding-inline-start: 22px;\r\n}\r\nli {\r\n    list-style-type: disc;\r\n}\r\n\r\n@media only screen and (min-width : 700px){\r\n    img {\r\n        width: 180px;\r\n    }\r\n}\r\n\r\n.image-container {\r\n    margin : 10px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    background-color:  #F8F8F8;;\r\n}\r\n\r\n.item-description {\r\n    margin-bottom : 10px;\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n    text-align: initial;\r\n    justify-content: center;\r\n}\r\n\r\n.value {\r\n    color: #9a9fc7;\r\n}\r\n\r\nh4.cardname {\r\n    color:#313d90 !important;\r\n    margin-block-start: 5px;\r\n    margin-block-end: 5px;\r\n}\r\n\r\nh4.missionids {\r\n    margin-block-start: 5px !important;\r\n    margin-block-end: 5px !important;\r\n}",""])},function(e,n,r){"use strict";var t=r(1),a=r.n(t)()(!1);a.push([e.i,".Content {\r\n    display: grid;\r\n    grid-template-columns: minmax(300px, 1fr);\r\n    grid-gap: 1rem;\r\n    justify-content: center;\r\n}\r\n\r\n.norecords {\r\n  color:red;\r\n}\r\n\r\n@media screen and (min-width: 700px) and (max-width: 1024px){\r\n  .Content {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px) {\r\n  .Content {\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n}",""])},function(e,n,r){"use strict";var t=r(1),a=r.n(t)()(!1);a.push([e.i,".App {\n  display: grid;\n  grid-template-columns: 220px 4fr;\n  grid-template-rows: auto 2fr auto auto;\n  grid-gap: 1rem;\n  grid-template-areas: 'header header'\n                       'filter content' \n                       'red content'\n                       'footer footer';\n  justify-content: center;\n  align-content: center;\n  text-align: center;\n}\n\n.header {\n  grid-area : header;\n  text-align : left;\n}\n\n.h2 {\n  margin-block-start: 0px;\n  margin-block-end: 0px\n}\n\n.footer {\n  text-align: center;\n  grid-area: footer;\n}\n\n@media only screen and (max-width : 700px){\n  .App {\n    grid-template-columns: 1fr;\n    grid-template-areas: 'header'\n                         'filter'\n                         'content' \n                         'footer';\n  }\n}\n\n@media only screen and (min-width : 700px) and (max-width : 1024px) {\n  .App {\n    grid-template-columns: 220px 2fr;\n    grid-template-rows: auto 1fr;\n  }\n}\n\n@media only screen and (min-width: 1440px) {\n  .App {\n    max-width: 1440px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n}",""])},function(e,n,r){"use strict";r.r(n);var t=r(3),a=r.n(t),i=r(4),l=r.n(i),c=r(5),o=r(0),u=r.n(o),s=r(2);r(8);function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],t=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(t=(l=c.next()).done)&&(r.push(l.value),!n||r.length!==n);t=!0);}catch(e){a=!0,i=e}finally{try{t||null==c.return||c.return()}finally{if(a)throw i}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return m(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var p=function(e){var n=d(Object(o.useState)(!0===e.value?"True":!1===e.value?"False":e.value),2),r=n[0],t=(n[1],d(Object(o.useState)("button button-outline "),2)),a=t[0],i=(t[1],d(Object(o.useState)("selected"),2)),l=i[0],c=(i[1],d(Object(o.useState)("button button-outline "),2)),m=c[0],p=c[1],f=d(Object(o.useState)((function(){return"Year"===e.name?"/"+e.value+"/"+e.isLaunched+"/"+e.isLanded:"Launch"===e.name?"/"+e.year+"/"+e.value+"/"+e.isLanded:"/"+e.year+"/"+e.isLaunched+"/"+e.value})),2),h=f[0],v=f[1];return Object(o.useEffect)((function(){var n;null!=e.year&&e.year==e.value&&"Year"==e.name||null!=e.isLaunched&&e.isLaunched==e.value&&"Launch"==e.name||null!=e.isLanded&&e.isLanded==e.value&&"Land"==e.name?p(a+l):p(a),n="Year"===e.name?"/"+e.value+"/"+e.isLaunched+"/"+e.isLanded:"Launch"===e.name?"/"+e.year+"/"+e.value+"/"+e.isLanded:"/"+e.year+"/"+e.isLaunched+"/"+e.value,v(n)}),[e.year,e.isLaunched,e.isLanded,e.value]),u.a.createElement("label",{className:m},u.a.createElement(s.Link,{to:h},r))},f=(r(9),function(e){return u.a.createElement("div",{className:"container"},u.a.createElement("h3",{className:"FilterHeading"},"Filters"),u.a.createElement("div",{className:"wrapper"},u.a.createElement("div",{className:"Year"},u.a.createElement("div",null,"Launch Year"),u.a.createElement("div",{id:"Year",className:"FilterSection"},[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020].map((function(n){return u.a.createElement(p,{key:n,value:n,name:"Year",year:e.year,isLaunched:e.isLaunched,isLanded:e.isLanded})})))),u.a.createElement("div",{className:"Launch"},u.a.createElement("div",null,"Successful Launch"),u.a.createElement("div",{id:"Launch",className:"FilterSection"},u.a.createElement(p,{value:!0,name:"Launch",year:e.year,isLaunched:e.isLaunched,isLanded:e.isLanded}),u.a.createElement(p,{value:!1,name:"Launch",year:e.year,isLaunched:e.isLaunched,isLanded:e.isLanded}))),u.a.createElement("div",{className:"Land"},u.a.createElement("div",null,"Successful Land"),u.a.createElement("div",{id:"Land",className:"FilterSection"},u.a.createElement(p,{value:!0,name:"Land",year:e.year,isLaunched:e.isLaunched,isLanded:e.isLanded}),u.a.createElement(p,{value:!1,name:"Land",year:e.year,isLaunched:e.isLaunched,isLanded:e.isLanded}))),u.a.createElement("label",{className:"button button-outline"},u.a.createElement(s.Link,{to:"/"},"Clear Filter"))))}),h=(r(10),function(e){return u.a.createElement("div",{className:"data"},u.a.createElement("div",{className:"image-container"},u.a.createElement("img",{src:e.value.links.mission_patch_small,alt:"Cannot be rendered"})),u.a.createElement("div",{className:"item-description"},u.a.createElement("div",null,u.a.createElement("h4",{className:"cardname"},e.value.mission_name,"#",e.value.flight_number)),u.a.createElement("div",null,u.a.createElement("h4",{className:"missionids"},"Mission Ids:"),u.a.createElement("ul",{className:"value"},e.value.mission_id.map((function(e,n){return u.a.createElement("li",{key:n},e)})))),u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement("b",null,"Launch Year:")),u.a.createElement("span",{className:"value"},e.value.launch_year)),u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement("b",null,"Successful Launch:")),u.a.createElement("span",{className:"value"},null!=e.value.launch_success?e.value.launch_success.toString():"NA")),u.a.createElement("div",null,u.a.createElement("span",null,u.a.createElement("b",null,"Successful Landing:")),u.a.createElement("span",{className:"value"},null!=e.value.launch_landing?e.value.launch_landing.toString():"NA"))))}),v=(r(11),function(e){return null==e.data?u.a.createElement("p",null,"Loading..."):e.data.length?u.a.createElement("div",{className:"Content"},e.data.map((function(e,n){return u.a.createElement(h,{key:n,value:e})}))):u.a.createElement("p",{className:"norecords"},u.a.createElement("b",null,"Sorry!! No matching records found."))});r(12);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],t=!0,a=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(t=(l=c.next()).done)&&(r.push(l.value),!n||r.length!==n);t=!0);}catch(e){a=!0,i=e}finally{try{t||null==c.return||c.return()}finally{if(a)throw i}}return r}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var y=function(e){var n=g(Object(o.useState)(e.data),2),r=n[0],t=n[1];return Object(o.useEffect)((function(){var n="https://api.spaceXdata.com/v3/launches?limit=100";null!=e.isLaunched&&(t(null),!0===e.isLaunched?n+="&launch_success=true":n+="&launch_success=false"),null!=e.isLanded&&(null!=r&&t(null),!0===e.isLanded?n+="&land_success=true":n+="&land_success=false"),null!=e.year&&(null!=r&&t(null),n=n+"&launch_year="+e.year),fetch(n).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){return console.warn(e),null}))}),[e.year,e.isLaunched,e.isLanded]),u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"header"},u.a.createElement("h2",{className:"h2"},"SpaceX Launch Programs")),u.a.createElement(f,{year:e.year,isLaunched:e.isLaunched,isLanded:e.isLanded}),u.a.createElement(v,{data:r}),u.a.createElement("footer",{className:"footer"},u.a.createElement("b",null,"Developed by:")," Dixit R Jain"))},x=function(e){return u.a.createElement(s.BrowserRouter,null,u.a.createElement(s.Switch,null,u.a.createElement(s.Route,{key:"filtered",exact:!0,path:"/:year/:isLaunched/:isLanded",render:function(n){var r=n.match;return u.a.createElement(y,{data:e.data,year:null==r.params.year||"null"==r.params.year?null:r.params.year,isLaunched:null==r.params.isLaunched|"null"==r.params.isLaunched?null:"true"==r.params.isLaunched,isLanded:null==r.params.isLanded|"null"==r.params.isLanded?null:"true"==r.params.isLanded})}}),u.a.createElement(s.Route,{key:"home",path:"/",render:function(n){n.match;return u.a.createElement(y,{data:e.data,year:null,isLaunched:null,isLanded:null})}})))},L=r(6),E=r.n(L),S=r(7),w=r.n(S);var j=new a.a;j.use(l()()),j.use(a.a.static("public")),j.get("*",(function(e,n,r){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t="https://api.spaceXdata.com/v3/launches?limit=100",a=t;null!=n&&(a+=!0===n?"&launch_success=true":"&launch_success=false"),null!=r&&(a+=!0===r?"&land_success=true":"&land_success=false"),null!=e&&(a=a+"&launch_year="+e);var i=encodeURI(a);return w()(i).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.warn(e),null}))})().then((function(e){var r=Object(c.renderToNodeStream)(u.a.createElement(x,{data:e}));n.send('\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="utf-8" />\n                <meta name="viewport" content="width=device-width, initial-scale=1" />\n                <meta name="description" content="SpaceX Frontend Web site"/>\n                <title>SpaceX Details</title>\n                <script src=\'/bundle.js\' defer><\/script>\n                <link rel="stylesheet" href="/main.css">\n                <script>window.__INITIAL_DATA__ = '.concat(E()(e),'<\/script>\n            </head>\n            <body style="margin: 1rem;background-color: #F8F8F8;">\n                <noscript>You need to enable JavaScript to run this app.</noscript>\n                <div id="root">').concat(r,"</div>\n            </body>\n            </html>\n            "))})).catch((function(e){return console.warn(e),null}))}));var k=process.env.PORT||5001;j.listen(k,(function(){console.log("Server is listening on port: 5001")}))}]);