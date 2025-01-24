(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n    margin: 0;\n}\n\nbody {\n    /* 3. Add accessible line-height */\n    line-height: 1.5;\n    /* 4. Improve text rendering */\n    -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n    text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    text-wrap: balance;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n    isolation: isolate;\n}\n\nbody {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n:root {\n    --primary-color: white;\n    --secondary-color: aliceblue;\n    --text-color: #333;\n\n    --opacity-white: rgba(255, 255, 255, 0.56);\n}\n\n\n/* HEADER */\n.header {\n    display: flex;\n    \n    align-items: center;\n    gap: clamp(20px, 4vw, 70px);\n    padding: 20px clamp(10px, 10vw, 130px);    \n    box-shadow:\n            0 1px 1px hsl(0deg 0% 0% / 0.045),\n            0 2px 2px hsl(0deg 0% 0% / 0.045),\n            0 4px 4px hsl(0deg 0% 0% / 0.045)\n}\n\n/* links */\n\na {\n    font-size: 16px;\n    text-decoration: none;\n    color: inherit;\n    position: relative;\n}\n\na:after {\n    content: '';\n    position: absolute;  \n    left: 0;\n    bottom: -6px;  \n    width: 100%;\n    height: 1px;\n    background-color: transparent;\n    transition: background-color .3s .05s ease;\n}\n\na:hover::after {\n    background-color:rgba(145, 192, 216, 0.804);\n}\n\n/* logo */\n#logo {\n    display: flex;\n    font-size: 32px;\n    min-width: 175px;\n}\n\n/* search */\n#search {\n    display: flex;\n    align-items: center;\n    flex: 1;\n}\n\n.input-wrapper {\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-grow: 1;\n    min-width: 300px;\n    max-width: 600px;\n    padding-right: 25px;\n    border: none;\n    border-radius: 10px;\n    align-items: center;\n    background-color: var(--secondary-color);\n}\n\n.input-wrapper:focus-within{\n    /* outline: 1px solid black; */\n}\n\n.search-input {\n    display: flex;\n    flex: 1;\n    border: none;\n    padding: 10px 15px;\n    margin: 0;\n    background: transparent;\n    font: inherit;\n    outline: none;\n    box-shadow: none;\n}\n\n.search-button {\n    position: absolute;\n    right: 3px;\n    border: none;\n    background-color: inherit;\n    font-family: inherit;\n    cursor: pointer;\n}\n\n.search-button img{\n    width: 25px;\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n}\n/* MAIN */\n.main {\n    padding: 30px clamp(10px, 10vw, 130px);\n    background-color: var(--secondary-color);\n    height: 90vh;\n}\n\n/* TODAY */\n#today {\n    color: white;\n    width: 500px;\n    height: 300px;\n    padding: 25px 35px;\n    /* border: 1px solid black; */\n    border-radius: 10px;\n    background-color: transparent;\n\n    position: relative;\n    z-index: 1;\n}\n\n#today::before {\n    border-radius: 10px;\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    /* background-image: url(\"blue-sky-background.jpg\"); */\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: top;\n    opacity: 0.8;\n    filter: brightness(0.8);\n    z-index: -1;\n}\n\n#today-time {\n    /* opacity: 0.6; */\n}\n\n#today-header {\n    font-size: 18px;\n}\n\n#city-name{\n    text-transform: capitalize;\n}\n\n#today-temp-cond-fell {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    padding: 10px 0px;\n}\n\n#today-temperature {\n    font-size: 48px;\n}\n\n#cond-feel{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    margin-left: 20px;\n}\n\n#today-feelsLike .label{\n    /* opacity: 0.6; */\n}\n\n#today-wind-humidity-pressure {\n    display: flex;\n    gap: 25px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--opacity-white);\n}\n\n#today-wind-humidity-pressure > div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n#today-wind-humidity-pressure img {\n    width: 25px;\n    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(356deg) brightness(119%) contrast(121%);\n}\n\n\n\n/* WEEK */\n#carousel-container {\n    width: clamp(calc(110px * 5 + 70px + 25px), calc(100vw), calc(110px * 7 + 70px + 25px)); \n    \n    /* 110px width of hour-card 70px for 7 gaps, 25px for left padding in car-cont  */\n    overflow: hidden;\n    position: relative;\n    background-color: var(--primary-color);\n    margin-top: 20px;\n    border-radius: 10px;\n    padding: 15px 0px 15px 25px;\n    /* box-sizing: border-box; */\n}\n\n.next,\n.prev {\n\n    z-index: 10;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    font-size: 24px;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background: var(--primary-color);\n    border: none;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.next img,\n.prev img {\n    /* filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(356deg) brightness(119%) contrast(121%); */\n     width: 50px;\n    height: 30px;\n}\n\n.next.today,\n.prev.today {\n    padding: 8px;\n    width: 40px;\n    height: 40px;\n    box-shadow:\n            0px 1px 10px hsl(0deg 0% 0% / 0.1),\n            0px 1px 1px hsl(0deg 0% 0% / 0.15)\n}\n\n.next.today::before,\n.prev.today::before {\n    content: '';\n    position: absolute;\n    inset: -10px;\n}\n\n.prev {\n    left: 20px;\n}\n\n.next {\n    right: 20px;\n}\n\n.prev.hour,\n.next.hour {\n    width: 30px;\n    height: 30px;\n    opacity: 0.7;\n}\n\n.prev.hour {\n    left: 0px;\n}\n\n.next.hour {\n    right: 0px;\n}\n\n.next.hidden,\n.prev.hidden {\n    display: none;\n}\n\nbutton:disabled {\n    /* background-color: #ccc; */\n    /* color: #666; */\n    cursor:auto;\n    opacity: 0.5;\n}\n\n#week {\n    display: flex;\n    gap: 10px;\n    background-color: var(--primary-color);\n    transition: transform 0.3s ease;\n}\n\n.day {\n    min-width: 110px;\n    padding: 10px;\n    box-sizing: border-box;\n    /* background-color: var(--primary-color); */\n    transition: box-shadow 0.3s ease;\n    border-radius: 10px;\n}\n\n.day:hover {\n    box-shadow:\n            0 1px 1px hsl(0deg 0% 0% / 0.045),\n            0 2px 2px hsl(0deg 0% 0% / 0.045),\n            0 4px 4px hsl(0deg 0% 0% / 0.045)\n}\n\n.day-header{\n    font-size: 18px;\n}\n\n.day-date{\n    font-size: 14px;\n}\n\n.day-temperature{\n    font-size: 18px;\n    font-weight: 600;\n}\n\n.day-conditions{\n    display: inline-block;\n    font-size: 14px;\n}\n\n\n/* hours */\n\n.hours-panel {\n    display: flex;\n    position: relative;\n    justify-content: center;\n}\n\n.hours-container {\n    width: calc(60px * 6);\n    overflow: hidden;\n    position: relative;\n    background-color: transparent;\n    border-radius: 10px;\n    padding: 10px 0;\n}\n\n\n.hours-carousel {\n    display: flex;\n    /* gap: 5px; */\n    /* background-color: var(--primary-color); */\n    transition: transform 0.3s ease;\n}\n\n.hour-card {\n    min-width: 60px;\n    padding: 5px;\n    text-align: center;\n    /* background-color: var(--primary-color); */\n    /* border-radius: 10px; */\n}\n\n.hour-time {\n    font-size: 14px;\n    /* max-width: 20px; */\n}\n\n.hour-card:nth-of-type(25) {\n    position: relative;\n    min-width: 75px\n}\n\n.hour-card:nth-of-type(25)::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 25%;\n    height: 70%;\n    border-left: 1px solid var(--opacity-white);\n    width: 0;\n}\n\n.hour-card:nth-of-type(25) .hour-time {\n\n    font-size: 14px;\n}\n\n\n\n\n.today-icon {\n    width: 50px;\n}\n\n.message {\n    height: 90vh;\n    padding: 40px;\n    font-size: 30px;\n    background-color: var(--secondary-color);\n}\n\n.message.hidden {\n    display: none;\n    visibility: hidden;\n}\n\n.main.hidden {\n    display: none;\n}\n\nfooter {\npadding: 20px;\n}\n\nfooter a{\n\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var h=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var m=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,t.d({},{$:()=>Hn});var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),d=t(56),u=t.n(d),l=t(540),h=t.n(l),p=t(113),m=t.n(p),f=t(208),g={};g.styleTagTransform=m(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),o()(f.A,g),f.A&&f.A.locals&&f.A.locals;const y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const b={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},x={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function v(n){return(e,t)=>{let r;if("formatting"===(t?.context?String(t.context):"standalone")&&n.formattingValues){const e=n.defaultFormattingWidth||n.defaultWidth,o=t?.width?String(t.width):e;r=n.formattingValues[o]||n.formattingValues[e]}else{const e=n.defaultWidth,o=t?.width?String(t.width):n.defaultWidth;r=n.values[o]||n.values[e]}return r[n.argumentCallback?n.argumentCallback(e):e]}}const M={ordinalNumber:(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},era:v({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:v({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:v({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:v({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:v({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function k(n){return(e,t={})=>{const r=t.width,o=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?function(n){for(let e=0;e<n.length;e++)if(n[e].test(i))return e}(s):function(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&n[e].test(i))return e}(s);let d;return d=n.valueCallback?n.valueCallback(c):c,d=t.valueCallback?t.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}const S={ordinalNumber:(T={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,e={})=>{const t=n.match(T.matchPattern);if(!t)return null;const r=t[0],o=n.match(T.parsePattern);if(!o)return null;let a=T.valueCallback?T.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:n.slice(r.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var T;const C={code:"en-US",formatDistance:(n,e,t)=>{let r;const o=y[n];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},formatLong:b,formatRelative:(n,e,t,r)=>x[n],localize:M,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};let L={};function E(){return L}Math.pow(10,8);const P=6048e5,H=Symbol.for("constructDateFrom");function D(n,e){return"function"==typeof n?n(e):n&&"object"==typeof n&&H in n?n[H](e):n instanceof Date?new n.constructor(e):new Date(e)}function W(n,e){return D(e||n,n)}function q(n){const e=W(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function $(n,e){const t=W(n,e?.in);return t.setHours(0,0,0,0),t}function z(n,e){const t=W(n,e?.in);return function(n,e,t){const[r,o]=function(n,...e){const t=D.bind(null,n||e.find((n=>"object"==typeof n)));return e.map(t)}(t?.in,n,e),a=$(r),i=$(o),s=+a-q(a),c=+i-q(i);return Math.round((s-c)/864e5)}(t,function(n,e){const t=W(n,e?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}(t))+1}function Y(n,e){const t=E(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,o=W(n,e?.in),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function j(n,e){return Y(n,{...e,weekStartsOn:1})}function O(n,e){const t=W(n,e?.in),r=t.getFullYear(),o=D(t,0);o.setFullYear(r+1,0,4),o.setHours(0,0,0,0);const a=j(o),i=D(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=j(i);return t.getTime()>=a.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}function A(n,e){const t=W(n,e?.in),r=+j(t)-+function(n,e){const t=O(n,e),r=D(e?.in||n,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),j(r)}(t);return Math.round(r/P)+1}function I(n,e){const t=W(n,e?.in),r=t.getFullYear(),o=E(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=D(e?.in||n,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=Y(i,e),c=D(e?.in||n,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const d=Y(c,e);return+t>=+s?r+1:+t>=+d?r:r-1}function N(n,e){const t=W(n,e?.in),r=+Y(t,e)-+function(n,e){const t=E(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,o=I(n,e),a=D(e?.in||n,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),Y(a,e)}(t,e);return Math.round(r/P)+1}function F(n,e){return(n<0?"-":"")+Math.abs(n).toString().padStart(e,"0")}const B={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return F("yy"===e?r%100:r,e.length)},M(n,e){const t=n.getMonth();return"M"===e?String(t+1):F(t+1,2)},d:(n,e)=>F(n.getDate(),e.length),a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];default:return"am"===t?"a.m.":"p.m."}},h:(n,e)=>F(n.getHours()%12||12,e.length),H:(n,e)=>F(n.getHours(),e.length),m:(n,e)=>F(n.getMinutes(),e.length),s:(n,e)=>F(n.getSeconds(),e.length),S(n,e){const t=e.length,r=n.getMilliseconds();return F(Math.trunc(r*Math.pow(10,t-3)),e.length)}},X={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if("yo"===e){const e=n.getFullYear(),r=e>0?e:1-e;return t.ordinalNumber(r,{unit:"year"})}return B.y(n,e)},Y:function(n,e,t,r){const o=I(n,r),a=o>0?o:1-o;return"YY"===e?F(a%100,2):"Yo"===e?t.ordinalNumber(a,{unit:"year"}):F(a,e.length)},R:function(n,e){return F(O(n),e.length)},u:function(n,e){return F(n.getFullYear(),e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return F(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return F(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return B.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return F(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const o=N(n,r);return"wo"===e?t.ordinalNumber(o,{unit:"week"}):F(o,e.length)},I:function(n,e,t){const r=A(n);return"Io"===e?t.ordinalNumber(r,{unit:"week"}):F(r,e.length)},d:function(n,e,t){return"do"===e?t.ordinalNumber(n.getDate(),{unit:"date"}):B.d(n,e)},D:function(n,e,t){const r=z(n);return"Do"===e?t.ordinalNumber(r,{unit:"dayOfYear"}):F(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const o=n.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return F(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(o,{width:"short",context:"formatting"});default:return t.day(o,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const o=n.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return F(a,e.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(o,{width:"narrow",context:"standalone"});case"cccccc":return t.day(o,{width:"short",context:"standalone"});default:return t.day(o,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return F(o,e.length);case"io":return t.ordinalNumber(o,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const r=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(r,{width:"narrow",context:"formatting"});default:return t.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return t.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(o,{width:"narrow",context:"formatting"});default:return t.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(n,e,t){if("ho"===e){let e=n.getHours()%12;return 0===e&&(e=12),t.ordinalNumber(e,{unit:"hour"})}return B.h(n,e)},H:function(n,e,t){return"Ho"===e?t.ordinalNumber(n.getHours(),{unit:"hour"}):B.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return"Ko"===e?t.ordinalNumber(r,{unit:"hour"}):F(r,e.length)},k:function(n,e,t){let r=n.getHours();return 0===r&&(r=24),"ko"===e?t.ordinalNumber(r,{unit:"hour"}):F(r,e.length)},m:function(n,e,t){return"mo"===e?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):B.m(n,e)},s:function(n,e,t){return"so"===e?t.ordinalNumber(n.getSeconds(),{unit:"second"}):B.s(n,e)},S:function(n,e){return B.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Q(r);case"XXXX":case"XX":return R(r);default:return R(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return Q(r);case"xxxx":case"xx":return R(r);default:return R(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(r,":");default:return"GMT"+R(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(r,":");default:return"GMT"+R(r,":")}},t:function(n,e,t){return F(Math.trunc(+n/1e3),e.length)},T:function(n,e,t){return F(+n,e.length)}};function G(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),o=Math.trunc(r/60),a=r%60;return 0===a?t+String(o):t+String(o)+e+F(a,2)}function Q(n,e){return n%60==0?(n>0?"-":"+")+F(Math.abs(n)/60,2):R(n,e)}function R(n,e=""){const t=n>0?"-":"+",r=Math.abs(n);return t+F(Math.trunc(r/60),2)+e+F(r%60,2)}const U=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},J=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},V={p:J,P:(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],o=t[2];if(!o)return U(n,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",U(r,e)).replace("{{time}}",J(o,e))}},K=/^D+$/,Z=/^Y+$/,_=["D","DD","YY","YYYY"];function nn(n){return!(!((e=n)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof n||isNaN(+W(n)));var e}const en=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rn=/^'([^]*?)'?$/,on=/''/g,an=/[a-zA-Z]/;function sn(n,e,t){const r=E(),o=t?.locale??r.locale??C,a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=W(n,t?.in);if(!nn(s))throw new RangeError("Invalid time value");let c=e.match(tn).map((n=>{const e=n[0];return"p"===e||"P"===e?(0,V[e])(n,o.formatLong):n})).join("").match(en).map((n=>{if("''"===n)return{isToken:!1,value:"'"};const e=n[0];if("'"===e)return{isToken:!1,value:cn(n)};if(X[e])return{isToken:!0,value:n};if(e.match(an))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:n}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const d={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return c.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!t?.useAdditionalWeekYearTokens&&function(n){return Z.test(n)}(a)||!t?.useAdditionalDayOfYearTokens&&function(n){return K.test(n)}(a))&&function(n,e,t){const r=function(n,e,t){const r="Y"===n[0]?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(n,e,t);if(console.warn(r),_.includes(n))throw new RangeError(r)}(a,e,String(n)),(0,X[a[0]])(s,a,o.localize,d)})).join("")}function cn(n){const e=n.match(rn);return e?e[1].replace(on,"'"):n}function dn(n){let e;return e=n>0?`+${n}°`:`${n}°`,e}const un=t.p+"clear-day.jpg",ln=t.p+"overcast.jpg",hn=t.p+"rain.jpg",pn=t.p+"snow.jpg",mn=t.p+"cloudy.jpg",fn=t.p+"clear-night.jpg",gn=t.p+"overcast-night.jpg",yn=t.p+"cloudy-night.jpg",wn=t.p+"negative.svg",bn=t.p+"clear-day.svg",xn=t.p+"clear-night.svg",vn=t.p+"moderate-rain.svg",Mn=t.p+"moderate-snow.svg",kn=t.p+"cloudy-day.svg",Sn=t.p+"cloudy-night.svg",Tn=t.p+"no-data.svg";function Cn(n=0,e,t,r,o,a,i,s){const c=document.querySelector(e),d=document.querySelector(t),u=document.querySelector(r);if(!c||!d||!u)return void console.error("Invalid selectors");let l=n;function h(){const n=document.querySelectorAll(o).length;"hidden"===s?(d.classList.toggle("hidden",0===l),u.classList.toggle("hidden",l>=n-a)):"block"===s&&(d.disabled=0===l,u.disabled=l>=n-a);const e=document.querySelector(o).offsetWidth,t=-l*(e+i);c.style.transform=`translateX(${t}px)`,9===l&&10===i&&(c.style.transform=`translateX(${t+115}px)`),42===l&&(c.style.transform=`translateX(${t-20}px)`)}d.addEventListener("click",(()=>{l>0&&(l-=3,h())})),u.addEventListener("click",(()=>{const n=document.querySelectorAll(o).length;l<n-a&&(l+=3,h())})),h()}window.addEventListener("load",(()=>{document.getElementById("content").style.visibility="visible",document.getElementById("content").style.display="flex";const n=document.getElementById("loader");n&&(n.style.display="none")}));const Ln=document.querySelector(".message.hidden"),En=document.querySelector(".search-input"),Pn=document.querySelector(".main");function Hn(n=En.value.trim()){n?async function(n){try{let e=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=TSZSYR8TXE96SYV67WPHZUT5P&unitGroup=metric`,{mode:"cors"});return e.ok?await e.json():(console.log("Fetch error:",e.status,e.statusText),null)}catch(n){console.log("error")}}(n).then((e=>{if(!e)return Pn.classList.add("hidden"),void Ln.classList.remove("hidden");const t=function(n){const e=[];return n.days.forEach((t=>{const r={temp:t.temp,feelsLike:t.feelslike,icon:t.icon,snow:t.snow,sunrise:t.sunrise,sunset:t.sunset,date:t.datetime,time:n.currentConditions.datetime,conditions:t.conditions,humidity:t.humidity,windSpeed:t.windspeed,windDirection:t.winddir,hours:t.hours,description:t.description,pressure:t.pressure};e.push(r)})),e}(e);!function(n,e){const t=document.querySelector("#today");document.querySelector("#today-header").innerHTML=`Weather in <span id="city-name">${e}</span>`;const r=document.querySelector("#today-time"),o=n[0].time,a=sn(new Date,"yyyy-MM-dd"),i=sn(new Date(`${a}T${o}`),"HH:mm");r.textContent=`State by ${i}`,document.querySelector("#today-temperature").textContent=dn(n[0].temp);const s=document.querySelector(".today-icon");function c(n,e){let t=document.getElementById("dynamic-before-style");t||(t=document.createElement("style"),t.id="dynamic-before-style",document.head.appendChild(t)),t&&(t.innerHTML=""),t.textContent=`body #today::before { background-image: url("${e}"); };`}document.querySelector("#today-conditions").textContent=`${n[0].conditions}`,document.querySelector("#today-feelsLike .value").textContent=dn(n[0].feelsLike),document.querySelector("#today-wind").textContent=`${n[0].windSpeed} m/s`,document.querySelector("#today-humidity").innerHTML=`${n[0].humidity}%`,document.querySelector("#today-pressure").innerHTML=`${n[0].pressure} hPa`;const d=parseInt(i.split(":")[0],10);let u=!1;(d>=18||d<6)&&(u=!0),u?n[0].conditions.includes("Clear")?(c(0,fn),s.innerHTML=`<img src="${xn}" alt="Icon">`):n[0].conditions.includes("Rain")?(c(0,hn),s.innerHTML=`<img src="${vn}" alt="Icon">`):n[0].conditions.includes("Overcast")?(c(0,gn),s.innerHTML=`<img src="${wn}" alt="Icon">`):n[0].conditions.includes("Snow")?(c(0,pn),s.innerHTML=`<img src="${Mn}" alt="Icon">`):n[0].conditions.includes("cloudy")&&(c(0,yn),s.innerHTML=`<img src="${Sn}" alt="Icon">`):u?s.innerHTML=`<img src="${Tn}" alt="Icon">`:n[0].conditions.includes("Clear")?(c(0,un),s.innerHTML=`<img src="${bn}" alt="Icon">`):n[0].conditions.includes("Rain")?(c(0,hn),s.innerHTML=`<img src="${vn}" alt="Icon">`):n[0].conditions.includes("Overcast")?(c(0,ln),s.innerHTML=`<img src="${wn}" alt="Icon">`):n[0].conditions.includes("Snow")?(c(0,pn),s.innerHTML=`<img src="${Mn}" alt="Icon">`):n[0].conditions.includes("cloudy")&&(console.log("cloudy"),c(0,mn),s.innerHTML=`<img src="${kn}" alt="Icon">`);const l=t.querySelector(".hours-panel");l&&l.remove();const h=document.createElement("div");h.classList.add("hours-panel");const p=document.createElement("div");p.classList.add("hours-container");const m=document.createElement("div");m.classList.add("hours-carousel");const f=document.createElement("button");f.classList.add("next","hour"),f.innerHTML='<img src="chevron-right.svg" alt="picture for pressure"></img>';const g=document.createElement("button");g.classList.add("prev","hour"),g.innerHTML='<img src="chevron-left.svg" alt="picture for pressure"></img>',h.append(f,g),n[0].hours.concat(n[1].hours).forEach(((n,e)=>{const t=document.createElement("div");t.classList.add("hour-card");const r=n.datetime,o=`${sn(new Date,"yyyy-MM-dd")}T${r}`,a=document.createElement("p");a.classList.add("hour-time"),(e<24||e>24&&24!==e)&&(a.textContent=sn(new Date(o),"HH:mm")),24===e&&(a.textContent=sn(new Date(o),"EE HH:mm")),t.appendChild(a);const i=document.createElement("p");i.innerHTML=`<span class="hour-temperature">${dn(n.temp)}</span>`,t.appendChild(i),m.appendChild(t)})),p.appendChild(m),h.appendChild(p),t.appendChild(h)}(t,n),function(n){const e=document.querySelector("#week");e.innerHTML="";for(let t=0;t<n.length;t++){const r=document.createElement("div");r.classList.add("day");const o=document.createElement("header");o.classList.add("day-header"),o.textContent=0===t?"Today":sn(new Date(n[t].date),"EE"),r.appendChild(o),document.createElement("div").classList.add("day-imageContainer");const a=document.createElement("p");a.classList.add("day-date"),a.textContent=sn(new Date(n[t].date),"dd MMM"),r.appendChild(a);const i=document.createElement("p");i.innerHTML=`<span class="day-temperature">${dn(n[t].temp)}</span>`,r.appendChild(i);const s=document.createElement("p");s.innerHTML=`<span class="day-conditions">${n[t].conditions}</span>`,r.appendChild(s),e.appendChild(r)}}(t);const r=function(n){const e=n[0].hours.map((n=>n.datetime)),t=n[0].time,r=sn(new Date,"yyyy-MM-dd"),o=sn(new Date(`${r}T${t}`),"HH:mm"),a=n=>{const[e,t]=n.split(":").map(Number);return 60*e+t},i=e.reduce(((n,e)=>Math.abs(a(e)-a(o))<Math.abs(a(n)-a(o))?e:n));return e.indexOf(i)}(t);Cn(0,"#week",".prev.today",".next.today",".day",7,10,"hidden"),Cn(r,".hours-carousel",".prev.hour",".next.hour",".hour-card",6,0,"block"),En.value="",Pn.classList.remove("hidden"),Ln.classList.add("hidden")})):""===n&&(Pn.classList.add("hidden"),Ln.classList.remove("hidden"))}Hn("moscow"),function(){const n=document.querySelector(".search-button"),e=document.querySelector(".search-input");n.addEventListener("click",Hn),e.addEventListener("keyup",(n=>{"Enter"===n.key&&Hn()}))}()})();