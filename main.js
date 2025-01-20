(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,"/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n    margin: 0;\n}\n\nbody {\n    /* 3. Add accessible line-height */\n    line-height: 1.5;\n    /* 4. Improve text rendering */\n    -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n    text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    text-wrap: balance;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n    isolation: isolate;\n}\n\n\n.header {\n    display: flex;\n    align-items: center;\n    gap: 50px;\n    padding: 20px 130px;\n    box-shadow:\n            0 1px 1px hsl(0deg 0% 0% / 0.045),\n            0 2px 2px hsl(0deg 0% 0% / 0.045),\n            0 4px 4px hsl(0deg 0% 0% / 0.045)\n}\n\na {\n    font-size: 18px;\n    text-decoration: none;\n    color: inherit;\n    position: relative;\n}\n\na:after {\n    content: '';\n    position: absolute;  \n    left: 0;\n    bottom: -6px;  \n    width: 100%;\n    height: 2px;\n    background-color: transparent;\n    transition: background-color 0.3s ease;\n    /* transition: ; */\n}\n\na:hover::after {\n    /* width: 100%; */\n    background-color:cadetblue;\n}\n\n\n#logo {\n    font-size: 32px;\n}\n\n#search {\n    display: flex;\n    align-items: center;\n    flex: 1;\n}\n\n.input-wrapper {\n    box-sizing: border-box;\n    position: relative;\n    display: flex;\n    flex-grow: 1;\n    min-width: 300px;\n    max-width: 600px;\n    padding-right: 25px;\n    border: none;\n    border-radius: 10px;\n    align-items: center;\n    background-color: aliceblue;\n}\n\n.input-wrapper:focus-within{\n    /* outline: 1px solid black; */\n}\n\n.search-input {\n    display: flex;\n    flex: 1;\n    border: none;\n    padding: 10px 15px;\n    margin: 0;\n    background: transparent;\n    font: inherit;\n    outline: none;\n    box-shadow: none;\n}\n\n.search-button {\n    position: absolute;\n    right: 3px;\n    border: none;\n    background-color: inherit;\n    font-family: inherit;\n    cursor: pointer;\n}\n\n.search-button img{\n    width: 25px;\n}\n\n.main {\n    padding: 30px 130px;\n}\n\n#today {\n    width: 500px;\n    height: 300px;\n    padding: 25px 35px;\n    /* border: 1px solid black; */\n    border-radius: 10px;\n    background-color: aliceblue;\n}\n\n#today-time {\n    opacity: 0.6;\n}\n\n#today-header {\n    font-size: 18px;\n}\n\n#city-name{\n    text-transform: capitalize;\n}\n\n#today-temp-cond-fell {\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 30px;\n    padding: 10px 0px;\n}\n\n#today-temperature {\n    font-size: 48px;\n}\n\n#cond-feel{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\n#today-feelsLike .label{\n    opacity: 0.6;\n}\n\n#today-wind-humidity-pressure {\n    display: flex;\n    gap: 25px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}\n\n#today-wind-humidity-pressure > div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n#today-wind-humidity-pressure img {\n    width: 25px;\n}\n\n\n\n\n",""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(i[u]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var u=t[s],c=r.base?u[0]+r.base:u[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var h=n(l),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var u=r(t,a),c=0;c<o.length;c++){var d=n(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=u}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),u=n.n(s),c=n(56),d=n.n(c),l=n(540),h=n.n(l),m=n(113),f=n.n(m),p=n(208),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=u().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=h(),a()(p.A,g),p.A&&p.A.locals&&p.A.locals;const w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const b={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const M={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function k(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}const S={ordinalNumber:(P={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(P.matchPattern);if(!n)return null;const r=n[0],a=t.match(P.parsePattern);if(!a)return null;let o=P.valueCallback?P.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:k({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:k({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:k({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:k({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var P;const C={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=w[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:b,formatRelative:(t,e,n,r)=>v[t],localize:M,match:S,options:{weekStartsOn:0,firstWeekContainsDate:1}};let T={};function W(){return T}Math.pow(10,8);const D=6048e5,E=Symbol.for("constructDateFrom");function q(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&E in t?t[E](e):t instanceof Date?new t.constructor(e):new Date(e)}function Y(t,e){return q(e||t,t)}function H(t){const e=Y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function O(t,e){const n=Y(t,e?.in);return n.setHours(0,0,0,0),n}function L(t,e){const n=Y(t,e?.in);return function(t,e,n){const[r,a]=function(t,...e){const n=q.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=O(r),i=O(a),s=+o-H(o),u=+i-H(i);return Math.round((s-u)/864e5)}(n,function(t,e){const n=Y(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function N(t,e){const n=W(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=Y(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function F(t,e){return N(t,{...e,weekStartsOn:1})}function z(t,e){const n=Y(t,e?.in),r=n.getFullYear(),a=q(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=F(a),i=q(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=F(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function A(t,e){const n=Y(t,e?.in),r=+F(n)-+function(t,e){const n=z(t,e),r=q(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),F(r)}(n);return Math.round(r/D)+1}function j(t,e){const n=Y(t,e?.in),r=n.getFullYear(),a=W(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=q(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=N(i,e),u=q(e?.in||t,0);u.setFullYear(r,0,o),u.setHours(0,0,0,0);const c=N(u,e);return+n>=+s?r+1:+n>=+c?r:r-1}function $(t,e){const n=Y(t,e?.in),r=+N(n,e)-+function(t,e){const n=W(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=j(t,e),o=q(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),N(o,e)}(n,e);return Math.round(r/D)+1}function Q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const G={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Q(n+1,2)},d:(t,e)=>Q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Q(t.getHours()%12||12,e.length),H:(t,e)=>Q(t.getHours(),e.length),m:(t,e)=>Q(t.getMinutes(),e.length),s:(t,e)=>Q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},X={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return G.y(t,e)},Y:function(t,e,n,r){const a=j(t,r),o=a>0?a:1-a;return"YY"===e?Q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){return Q(z(t),e.length)},u:function(t,e){return Q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return G.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=$(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){const r=A(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,e)},D:function(t,e,n){const r=L(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return G.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,e)},S:function(t,e){return G.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return J(r);default:return J(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return J(r);default:return J(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");default:return"GMT"+J(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");default:return"GMT"+J(r,":")}},t:function(t,e,n){return Q(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return Q(+t,e.length)}};function B(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+Q(o,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):J(t,e)}function J(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+Q(Math.trunc(r/60),2)+e+Q(r%60,2)}const R=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},U=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},V={p:U,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return R(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",R(r,e)).replace("{{time}}",U(a,e))}},Z=/^D+$/,_=/^Y+$/,K=["D","DD","YY","YYYY"];function tt(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+Y(t)));var e}const et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,at=/''/g,ot=/[a-zA-Z]/;function it(t,e,n){const r=W(),a=n?.locale??r.locale??C,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=Y(t,n?.in);if(!tt(s))throw new RangeError("Invalid time value");let u=e.match(nt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,V[e])(t,a.formatLong):t})).join("").match(et).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:st(t)};if(X[e])return{isToken:!0,value:t};if(e.match(ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(u=a.localize.preprocessor(s,u));const c={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return u.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return _.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return Z.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),K.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,X[o[0]])(s,o,a.localize,c)})).join("")}function st(t){const e=t.match(rt);return e?e[1].replace(at,"'"):t}const ut=document.querySelector(".search-button"),ct=document.querySelector(".message"),dt=document.querySelector(".search-input");let lt=dt.value.trim();function ht(){lt=dt.value.trim(),lt?async function(t){try{let e=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${t}?key=TSZSYR8TXE96SYV67WPHZUT5P&unitGroup=metric`,{mode:"cors"});return await e.json()}catch(t){console.log("asd")}}(lt).then((t=>{const e=function(t){console.log(t);const e=[];return t.days.slice(0,10).forEach((n=>{const r={temp:n.temp,feelsLike:n.feelslike,icon:n.icon,snow:n.snow,sunrise:n.sunrise,sunset:n.sunset,date:n.datetime,time:t.currentConditions.datetime,conditions:n.conditions,humidity:n.humidity,windSpeed:n.windspeed,windDirection:n.winddir,hours:n.hours,description:n.description,pressure:n.pressure};e.push(r)})),e}(t);!function(t){document.querySelector("#today-header").innerHTML=`Weather in <span id="city-name">${lt}</span>`;const e=document.querySelector("#today-time"),n=t[0].time,r=it(new Date,"yyyy-MM-dd"),a=it(new Date(`${r}T${n}`),"HH:mm");e.textContent=`State by ${a}`,document.querySelector("#today-temperature").textContent=mt(t[0].temp),document.querySelector("#today-conditions").textContent=`${t[0].conditions}`,document.querySelector("#today-feelsLike .value").textContent=mt(t[0].feelsLike),document.querySelector("#today-wind").textContent=`${t[0].windSpeed} m/s`,document.querySelector("#today-humidity").innerHTML=`${t[0].humidity}%`,document.querySelector("#today-pressure").innerHTML=`${t[0].pressure} hPa`}(e),function(t){const e=document.querySelector("#week");e.innerHTML="";for(let n=0;n<t.length;n++){document.createElement("div").classList.add="day";const r=document.createElement("header");r.id="day-header",r.textContent=0===n?"Today":it(new Date(t[n].date),"EE"),e.appendChild(r),document.createElement("div").id="day-imageContainer";const a=document.createElement("p");a.id="day-date",a.textContent=it(new Date(t[n].date),"dd MMM"),e.appendChild(a);const o=document.createElement("p");o.innerHTML=`<span id="day-temperature">${t[n].temp}</span>`,e.appendChild(o);const i=document.createElement("p");i.innerHTML=`<span id="day-conditions">${t[n].conditions}</span>`,e.appendChild(i)}}(e),dt.value=""})):ct.textContent="Please enter a location"}function mt(t){let e;return t>0&&(e=`+${t}°`),e}ut.addEventListener("click",ht),dt.addEventListener("keyup",(t=>{"Enter"===t.key&&ht()}))})();