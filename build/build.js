!function o(i,r,a){function s(n,e){if(!r[n]){if(!i[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(l)return l(n,!0);throw(e=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",e}t=r[n]={exports:{}},i[n][0].call(t.exports,function(e){return s(i[n][1][e]||e)},t,t.exports,o,i,r,a)}return r[n].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,t){n.exports=function(o){return function(e){function n(o,i){r=o,a=i,s.forEach(function(e,t){e.forEach(function(e,n){e.classList.add("bespoke-bullet"),t<o||t===o&&n<=i?(e.classList.add("bespoke-bullet-active"),e.classList.remove("bespoke-bullet-inactive")):(e.classList.add("bespoke-bullet-inactive"),e.classList.remove("bespoke-bullet-active")),t===o&&n===i?e.classList.add("bespoke-bullet-current"):e.classList.remove("bespoke-bullet-current")})})}function t(e){return void 0!==s[r][a+e]}var r,a,s=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof o?o:"[data-bespoke-bullet]"),0)});e.on("next",function(){var e=r+1;if(t(1))return n(r,a+1),!1;s[e]&&n(e,0)}),e.on("prev",function(){var e=r-1;if(t(-1))return n(r,a-1),!1;s[e]&&n(e,s[e].length-1)}),e.on("slide",function(e){n(e.index,0)}),n(0,0)}}},{}],2:[function(e,n,t){n.exports=function(){return function(i){function r(e,n){e.classList.add("bespoke-"+n)}function a(e,n){e.className=e.className.replace(new RegExp("bespoke-"+n+"(\\s|$)","g")," ").trim()}function n(e,n){var t=i.slides[i.slide()],o=0<(n=n-i.slide())?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(a.bind(null,e)),e!==t&&["inactive",o,o+"-"+Math.abs(n)].map(r.bind(null,e))}r(i.parent,"parent"),i.slides.map(function(e){r(e,"slide")}),i.on("activate",function(e){i.slides.map(n),r(e.slide,"active"),a(e.slide,"inactive")})}}},{}],3:[function(e,n,t){n.exports=function(i){return function(n){var t=(i=i&&(i.object||i.name||i.scope)?i:{object:i}).object,e=i.name||"bespoke",o=i.scope||window;t?o[e]=t:t=o[e]||(o[e]={}),(Array.isArray(t.decks)?t.decks:t.decks=[]).push(t.deck=n),n.on("destroy",function(){var e=t.decks.indexOf(n);0<=e&&t.decks.splice(e,1),delete t.deck})}}},{}],4:[function(e,n,t){n.exports=function(){return function(e){function o(){var e,n=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(e=document).exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen:(e=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen;n.apply(e)}function n(e){var n,t=e.which;70!==t&&122!==t||(n=e).ctrlKey||n.shiftKey||n.altKey||n.metaKey||(o(),122===t&&e.preventDefault())}var t="keydown";(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(e.on("destroy",function(){document.removeEventListener(t,n)}),e.on("fullscreen.toggle",o),document.addEventListener(t,n))}}},{}],5:[function(e,n,t){n.exports=function(){return function(n){function o(e){(e=-1<e&&e<n.slides.length?e:0)!==n.slide()&&n.slide(e)}function e(){var t=window.location.hash.slice(1),e=parseInt(t,10);t&&(e?o(e-1):n.slides.forEach(function(e,n){e.getAttribute("data-bespoke-hash")!==t&&e.id!==t||o(n)}))}setTimeout(function(){e(),n.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=n||e.index+1}),window.addEventListener("hashchange",e)},0)}}},{}],6:[function(e,n,t){n.exports=function(){return function(o){function e(e){if(t=(n=e).which,!(n.ctrlKey||n.shiftKey&&(t===r||t===i)||n.altKey||n.metaKey))switch(e.which){case 32:return(e.shiftKey?o.prev:o.next)();case 39:case 34:case 76:return o.next();case 37:case 33:case 72:return o.prev();case r:return o.slide(0);case i:return o.slide(o.slides.length-1)}var n,t}var i=35,r=36,n="keydown";o.on("destroy",function(){document.removeEventListener(n,e)}),document.addEventListener(n,e)}}},{}],7:[function(e,n,t){n.exports=function(f){return function(n){function e(e){c=1===e.touches.length?e.touches[0][d]:null}function t(e){if(null!==c)return void 0===c?e.preventDefault():void(Math.abs(u=e.touches[0][d]-c)>p&&((0<u?n.prev:n.next)(),c=e.preventDefault()))}var o=f||{},i="touchstart",r="touchmove",a="addEventListener",s="removeEventListener",l=n.parent,c=null,u=null,d="page"+("y"===o.axis?"Y":"X"),p="number"==typeof o.threshold?o.threshold:50/window.devicePixelRatio;n.on("destroy",function(){l[s](i,e),l[s](r,t)}),l[a](i,e),l[a](r,t)}}},{}],8:[function(o,e,n){e.exports=function(e){e=e||{};var n=o("bespoke-nav-kbd")(e.kbd),t=o("bespoke-nav-touch")(e.touch);return function(e){n(e),t(e)}}},{"bespoke-nav-kbd":6,"bespoke-nav-touch":7}],9:[function(e,n,t){var o=0;n.exports=function(V){var e,n;return 0==o++&&(e=document.head,(n=document.createElement("style")).textContent=".bespoke-parent.bespoke-overview{pointer-events:auto}\n.bespoke-overview *{pointer-events:none}\n.bespoke-overview img{-moz-user-select:none}\n.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;overflow:hidden;pointer-events:auto}\n.bespoke-overview .bespoke-active{outline:6px solid #cfd8dc;outline-offset:-3px;-moz-outline-radius:3px}\n.bespoke-overview .bespoke-bullet{opacity:1;visibility:visible}\n.bespoke-overview-counter{counter-reset:overview}\n.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:.75em;bottom:.5em;font-size:1.25rem;line-height:1.25}\n.bespoke-title{visibility:hidden;position:absolute;top:0;left:0;width:100%;pointer-events:auto}\n.bespoke-title h1{margin:0;font-size:1.6em;line-height:1.2;text-align:center}\n.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible}\n.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}",e.insertBefore(n,e.firstChild)),function(S){V="object"==typeof V?V:{};function e(){S.on("activate",e)(),S.parent.scrollLeft=S.parent.scrollTop=0,(V.autostart||o.test(location.search))&&setTimeout(G,100)}function n(){(W?i:G)()}function t(e){if(79===e.which)e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||n();else if(W)switch(e.which){case 13:e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||i();break;case 38:return H(-T,{index:S.slide()});case 40:return H(T,{index:S.slide()})}}var j,a=/, */,s=/^none(?:, ?none)*$/,f=/^translate\((.+?)px, ?(.+?)px\) scale\((.+?)\)$/,o=/(^\?|&)overview(?=$|&)/,F=!("transition"in document.body.style)&&"webkitTransition"in document.body.style?"webkitTransitionEnd":"transitionend",r=["webkit","Moz"],T="number"==typeof V.columns?parseInt(V.columns):3,O="number"==typeof V.margin?parseFloat(V.margin):15,W=null,P=function(e,n){if(!(n in e.style))for(var t=n.charAt(0).toUpperCase()+n.substr(1),o=0,i=r.length;o<i;o++)if(r[o]+t in e.style)return r[o]+t;return n},B=function(e,n){return parseFloat(e.style[n].slice(6,-1))},D=function(e){if("zoom"in e.style)return parseFloat(e.style.zoom)||void 0},M=function(e){var t,o,i=[],n=getComputedStyle(e),r=n[P(e,"transitionProperty")];return r&&!s.test(r)&&(r=r.split(a),t=n[P(e,"transitionDuration")].split(a),o=n[P(e,"transitionDelay")].split(a),r.forEach(function(e,n){"0s"===t[n]&&"0s"===o[n]||i.push(e)})),i},q=function(e,n,t,o){n&&(e.style[n]=t);e.offsetHeight;n&&(e.style[n]=o)},K=function(){i(S.slides.indexOf(this))},H=function(e,n){n=n.index+e;return 0<=n&&n<S.slides.length&&S.slide(n,{preview:!0}),!1},I=function(e){!1!==e.scrollIntoView&&_(e.slide,e.index,D(e.slide))},$=function(e){var n=location.search.replace(o,"").replace(/^[^?]/,"?$&");e?history.replaceState(null,null,location.pathname+(0<n.length?n+"&":"?")+"overview"+location.hash):history.replaceState(null,null,location.pathname+n+location.hash)},_=function(e,n,t){S.parent.scrollTop=n<T?0:S.parent.scrollTop+e.getBoundingClientRect().top*(t||1)},R=function(e,n,t,o){t.removeEventListener(F,j,!1),o&&o!==t&&o.removeEventListener(F,j,!1),j=void 0,n.remove("bespoke-overview-"+e)},U=function(e){var n,t,o=e.firstElementChild;return o.classList.contains("bespoke-title")?(o.style.width="",o):((n=document.createElement("header")).className="bespoke-title",n.style[P(n,"transformOrigin")]="0 0",(t=document.createElement("h1")).appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),n.appendChild(t),q(e.insertBefore(n,o)),n)},G=function(){var n,e,t=S.slides,o=S.parent,i=o.classList,r=t.length-1,a=S.slide(),s=0<a?t[0]:t[r],l=P(s,"transform"),c=o.querySelector(".bespoke-scale-parent"),u=1,d=0,p=W,f="webkitAppearance"in o.style,m=(c?u=B(c,l):(n=D(s))&&(u=n),j&&R("from",i,t[0],t[r]),V.title&&(e=U(o)),p||(S.slide(a,{preview:!0}),i.add("bespoke-overview"),addEventListener("resize",G,!1),W=[S.on("activate",I),S.on("prev",H.bind(null,-1)),S.on("next",H.bind(null,1))],V.counter&&i.add("bespoke-overview-counter"),V.location&&$(!0),i.add("bespoke-overview-to"),d=0<r?M(s).length:M(s).join(" ").indexOf("transform")<0?0:1,o.style.overflowY="scroll",o.style.scrollBehavior="smooth",f&&t.forEach(function(e){q(e,"marginBottom","0%","")})),o.clientWidth/u),g=o.clientHeight/u,h=(c||o).offsetWidth-o.clientWidth,v=c?h/2/u:0,c=s.offsetWidth,b=s.offsetHeight,y=m/(T*c+(T+1)*O),k=u*y,w=c*y,x=b*y,E=(m-w)/2,z=(g-x)/2,C=O*y,L=0,N=0,A=0;e&&(L=!1!==V.scaleTitle?(e.style[n?"zoom":l]=n?k:"scale("+k+")",e.style.width=o.clientWidth/k+"px",e.offsetHeight*y):(0<h&&(e.style.width=o.clientWidth+"px"),e.offsetHeight/u)),t.forEach(function(e){var n=A*w+(A+1)*C-v-E,t=N*x+(N+1)*C+L-z;e.style[l]="translate("+(n.toString().indexOf("e-")<0?n:0)+"px, "+(t.toString().indexOf("e-")<0?t:0)+"px) scale("+y+")",N*T+A===r&&(e.style.marginBottom=O+"px"),e.addEventListener("click",K,!1),A===T-1?(N+=1,A=0):A+=1}),p?_(t[a],a,n):0<d?s.addEventListener(F,j=function(e){e.target===this&&0==--d&&(R("to",i,this),f&&o.scrollHeight>o.clientHeight&&q(o,"overflowY","auto","scroll"),_(t[a],a,n))},!1):(t.forEach(function(e){q(e)}),i.remove("bespoke-overview-to"),_(t[a],a,n))},i=function(e){S.slide("number"==typeof e?e:S.slide(),{scrollIntoView:!1});var e=S.slides,n=S.parent,t=n.classList,o=e.length-1,i=0<S.slide()?e[0]:e[o],r=P(i,"transform"),a=P(i,"transition"),s=n.querySelector(".bespoke-scale-parent"),l="webkitAppearance"in n.style,c=s?B(s,r):(c=D(i))||1,u=(j&&R("to",t,e[0],e[o]),n.scrollTop/c),d=(n.offsetWidth-(s||n).clientWidth)/2/c,p=(n.style.scrollBehavior=n.style.overflowY="",e.forEach(function(e){l&&q(e,"marginBottom","0%",""),e.removeEventListener("click",K,!1)}),(u||d)&&e.forEach(function(e){var n=e.style[r].match(f);e.style[r]="translate("+(parseFloat(n[1])-d)+"px, "+(parseFloat(n[2])-u)+"px) scale("+n[3]+")",q(e,a,"none","")}),n.scrollTop=0,t.remove("bespoke-overview"),removeEventListener("resize",G,!1),(W||[]).forEach(function(e){e()}),W=null,V.counter&&t.remove("bespoke-overview-counter"),V.location&&$(!1),t.add("bespoke-overview-from"),0<o?M(i).length:M(i).join(" ").indexOf("transform")<0?0:1);e.forEach(function(e){e.style[r]=""}),0<p?i.addEventListener(F,j=function(e){e.target===this&&0==--p&&R("from",t,this)},!1):(e.forEach(function(e){q(e)}),t.remove("bespoke-overview-from"))};S.on("activate",e),S.on("destroy",function(){removeEventListener("resize",G,!1),document.removeEventListener("keydown",t,!1)}),S.on("overview",n),document.addEventListener("keydown",t,!1)}}},{}],10:[function(c,t,o){!function(e){var n;"object"==typeof o&&void 0!==t?t.exports=e():"function"==typeof define&&define.amd?define([],e):(n=(n=(n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bespoke||(n.bespoke={})).plugins||(n.plugins={})).prism=e()}(function(){return function o(i,r,a){function s(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof c&&c;if(!e&&n)return n(t,!0);if(l)return l(t,!0);e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}};i[t][0].call(n.exports,function(e){var n=i[t][1][e];return s(n||e)},n,n.exports,o,i,r,a)}return r[t].exports}for(var l="function"==typeof c&&c,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(n,e,t){var o=n("insert-css"),i=n("prism-themes/themes/prism-ghcolors.css");e.exports=function(){var e=n("prismjs");return n("prismjs/plugins/unescaped-markup/prism-unescaped-markup"),n("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"),o(i,{prepend:!0}),function(){e.highlightAll()}}},{"insert-css":2,"prism-themes/themes/prism-ghcolors.css":3,prismjs:6,"prismjs/plugins/normalize-whitespace/prism-normalize-whitespace":4,"prismjs/plugins/unescaped-markup/prism-unescaped-markup":5}],2:[function(e,n,t){var o={};n.exports=function(e,n){var t;o[e]||(o[e]=!0,(t=document.createElement("style")).setAttribute("type","text/css"),"textContent"in t?t.textContent=e:t.styleSheet.cssText=e,e=document.getElementsByTagName("head")[0],n&&n.prepend?e.insertBefore(t,e.childNodes[0]):e.appendChild(t))}},{}],3:[function(e,n,t){n.exports='/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\n\ncode[class*="language-"],\npre[class*="language-"] {\n    color: #393A34;\n    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    font-size: 0.95em;\n    line-height: 1.2em;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n}\n\npre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,\ncode[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {\n    background: #b3d4fc;\n}\n\npre[class*="language-"]::selection, pre[class*="language-"] ::selection,\ncode[class*="language-"]::selection, code[class*="language-"] ::selection {\n    background: #b3d4fc;\n}\n\n/* Code blocks */\npre[class*="language-"] {\n    padding: 1em;\n    margin: .5em 0;\n    overflow: auto;\n    border: 1px solid #dddddd;\n    background-color: white;\n}\n\n:not(pre) > code[class*="language-"],\npre[class*="language-"] {\n}\n\n/* Inline code */\n:not(pre) > code[class*="language-"] {\n    padding: .2em;\n    padding-top: 1px; padding-bottom: 1px;\n    background: #f8f8f8;\n    border: 1px solid #dddddd;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n    color: #999988; font-style: italic;\n}\n\n.token.namespace {\n    opacity: .7;\n}\n\n.token.string,\n.token.attr-value {\n    color: #e3116c;\n}\n.token.punctuation,\n.token.operator {\n    color: #393A34; /* no highlight */\n}\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n    color: #36acaa;\n}\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n    color: #00a4db;\n}\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n    color: #9a050f;\n}\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n    color: #00009f;\n}\n\n.token.important,\n.token.function,\n.token.bold {\n    font-weight: bold;\n}\n\n.token.italic {\n    font-style: italic;\n}'},{}],4:[function(e,n,t){function o(e){this.defaults=i({},e)}function l(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}var i;"undefined"!=typeof self&&self.Prism&&self.document&&(i=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e},o.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e)},normalize:function(e,n){for(var t in n=i(this.defaults,n)){var o=t.replace(/-(\w)/g,function(e,n){return n.toUpperCase()});"normalize"!==t&&"setDefaults"!==o&&n[t]&&this[o]&&(e=this[o].call(this,e,n[t]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length&&(n.sort(function(e,n){return e.length-n.length}),n[0].length)?e.replace(new RegExp("^"+n[0],"gm"),""):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0!==n&&0|n||80;for(var t=e.split("\n"),o=0;o<t.length;++o)if(!(l(t[o])<=n)){for(var i=t[o].split(/(\s+)/g),r=0,a=0;a<i.length;++a){var s=l(i[a]);n<(r+=s)&&(i[a]="\n"+i[a],r=s)}t[o]=i.join("")}return t.join("\n")}},Prism.plugins.NormalizeWhitespace=new o({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-highlight",function(e){var n=e.element.parentNode,t=/\bno-whitespace-normalization\b/;if(!(!e.code||!n||"pre"!==n.nodeName.toLowerCase()||e.settings&&!1===e.settings["whitespace-normalization"]||t.test(n.className)||t.test(e.element.className))){for(var o,i=n.childNodes,r="",a="",s=!1,t=Prism.plugins.NormalizeWhitespace,l=0;l<i.length;++l){var c=i[l];c==e.element?s=!0:"#text"===c.nodeName&&(s?a+=c.nodeValue:r+=c.nodeValue,n.removeChild(c),--l)}e.element.children.length&&Prism.plugins.KeepMarkup?(o=r+e.element.innerHTML+a,e.element.innerHTML=t.normalize(o,e.settings),e.code=e.element.textContent):(e.code=r+e.code+a,e.code=t.normalize(e.code,e.settings))}}))},{}],5:[function(e,n,t){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.languages.markup&&(Prism.plugins.UnescapedMarkup=!0,Prism.hooks.add("before-highlightall",function(e){e.selector+=", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain'], script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup"}),Prism.hooks.add("before-sanity-check",function(e){var n,t;"markup"==e.language&&(e.element.matches("script[type='text/plain']")?(n=document.createElement("code"),(t=document.createElement("pre")).className=n.className=e.element.className,e.code=e.code.replace(/&lt;\/script(>|&gt;)/gi,"<\/script>"),n.textContent=e.code,t.appendChild(n),e.element.parentNode.replaceChild(t,e.element),e.element=n):(t=e.element.parentNode,!e.code&&t&&"pre"==t.nodeName.toLowerCase()&&e.element.childNodes.length&&"#comment"==e.element.childNodes[0].nodeName&&(e.element.textContent=e.code=e.element.childNodes[0].textContent)))}))},{}],6:[function(e,o,n){!function(e){var n,s,t,E,a,l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},c=(s=/\blang(?:uage)?-(\w+)\b/i,t=0,E=l.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,E.util.encode(e.content),e.alias):"Array"===E.util.type(e)?e.map(E.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(E.util.type(e)){case"Object":var n,t={};for(n in e)e.hasOwnProperty(n)&&(t[n]=E.util.clone(e[n]));return t;case"Array":return e.map&&e.map(function(e){return E.util.clone(e)})}return e}},languages:{extend:function(e,n){var t,o=E.util.clone(E.languages[e]);for(t in n)o[t]=n[t];return o},insertBefore:function(t,e,n,o){var i=(o=o||E.languages)[t];if(2==arguments.length){for(var r in n=e)n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var a,s={};for(a in i)if(i.hasOwnProperty(a)){if(a==e)for(var r in n)n.hasOwnProperty(r)&&(s[r]=n[r]);s[a]=i[a]}return E.languages.DFS(E.languages,function(e,n){n===o[t]&&e!=t&&(this[e]=s)}),o[t]=s},DFS:function(e,n,t,o){for(var i in o=o||{},e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],t||i),"Object"!==E.util.type(e[i])||o[E.util.objId(e[i])]?"Array"!==E.util.type(e[i])||o[E.util.objId(e[i])]||(o[E.util.objId(e[i])]=!0,E.languages.DFS(e[i],n,i,o)):(o[E.util.objId(e[i])]=!0,E.languages.DFS(e[i],n,null,o)))}},plugins:{},highlightAll:function(e,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};E.hooks.run("before-highlightall",t);for(var o,i=t.elements||document.querySelectorAll(t.selector),r=0;o=i[r++];)E.highlightElement(o,!0===e,t.callback)},highlightElement:function(e,n,t){for(var o,i=e;i&&!s.test(i.className);)i=i.parentNode;i&&(r=(i.className.match(s)||[,""])[1].toLowerCase(),o=E.languages[r]),e.className=e.className.replace(s,"").replace(/\s+/g," ")+" language-"+r,i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(s,"").replace(/\s+/g," ")+" language-"+r);var r,a={element:e,language:r,grammar:o,code:e.textContent};E.hooks.run("before-sanity-check",a),a.code&&a.grammar?(E.hooks.run("before-highlight",a),n&&l.Worker?((r=new Worker(E.filename)).onmessage=function(e){a.highlightedCode=e.data,E.hooks.run("before-insert",a),a.element.innerHTML=a.highlightedCode,t&&t.call(a.element),E.hooks.run("after-highlight",a),E.hooks.run("complete",a)},r.postMessage(JSON.stringify({language:a.language,code:a.code,immediateClose:!0}))):(a.highlightedCode=E.highlight(a.code,a.grammar,a.language),E.hooks.run("before-insert",a),a.element.innerHTML=a.highlightedCode,t&&t.call(e),E.hooks.run("after-highlight",a),E.hooks.run("complete",a))):E.hooks.run("complete",a)},highlight:function(e,n,t){e=E.tokenize(e,n);return a.stringify(E.util.encode(e),t)},tokenize:function(e,n,t){var o=E.Token,i=[e],r=n.rest;if(r){for(var a in r)n[a]=r[a];delete n.rest}e:for(var a in n)if(n.hasOwnProperty(a)&&n[a])for(var s=n[a],s="Array"===E.util.type(s)?s:[s],l=0;l<s.length;++l)for(var c=(m=s[l]).inside,u=!!m.lookbehind,d=!!m.greedy,p=0,f=m.alias,m=m.pattern||m,g=0;g<i.length;g++){var h=i[g];if(i.length>e.length)break e;if(!(h instanceof o)){m.lastIndex=0;var v=m.exec(h),b=1;if(!v&&d&&g!=i.length-1){var y,k=i[g+1].matchedStr||i[g+1],w=h+k;if(g<i.length-2&&(w+=i[g+2].matchedStr||i[g+2]),m.lastIndex=0,!(v=m.exec(w)))continue;if((y=v.index+(u?v[1].length:0))>=h.length)continue;var x=v.index+v[0].length,k=h.length+k.length,b=3;if(x<=k){if(i[g+1].greedy)continue;b=2,w=w.slice(0,k)}h=w}v&&(u&&(p=v[1].length),x=(y=v.index+p)+(v=v[0].slice(p)).length,k=h.slice(0,y),w=h.slice(x),h=[g,b],k&&h.push(k),b=new o(a,c?E.tokenize(v,c):v,f,v,d),h.push(b),w&&h.push(w),Array.prototype.splice.apply(i,h))}}return i},hooks:{all:{},add:function(e,n){var t=E.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=E.hooks.all[e];if(t&&t.length)for(var o,i=0;o=t[i++];)o(n)}}},(a=E.Token=function(e,n,t,o,i){this.type=e,this.content=n,this.alias=t,this.matchedStr=o||null,this.greedy=!!i}).stringify=function(n,t,e){if("string"==typeof n)return n;if("Array"===E.util.type(n))return n.map(function(e){return a.stringify(e,t,n)}).join("");var o,i={type:n.type,content:a.stringify(n.content,t,e),tag:"span",classes:["token",n.type],attributes:{},language:t,parent:e},r=("comment"==i.type&&(i.attributes.spellcheck="true"),n.alias&&(e="Array"===E.util.type(n.alias)?n.alias:[n.alias],Array.prototype.push.apply(i.classes,e)),E.hooks.run("wrap",i),"");for(o in i.attributes)r+=(r?" ":"")+o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+r+">"+i.content+"</"+i.tag+">"},l.document?(n=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop())&&(E.filename=n.src,document.addEventListener)&&!n.hasAttribute("data-manual")&&("loading"!==document.readyState?requestAnimationFrame(E.highlightAll,0):document.addEventListener("DOMContentLoaded",E.highlightAll)):l.addEventListener&&l.addEventListener("message",function(e){var e=JSON.parse(e.data),n=e.language,t=e.code,e=e.immediateClose;l.postMessage(E.highlight(t,E.languages[n],n)),e&&l.close()},!1),l.Prism);void 0!==o&&o.exports&&(o.exports=c),void 0!==e&&(e.Prism=c),c.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),c.languages.xml=c.languages.markup,c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,c.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},c.languages.css.atrule.inside.rest=c.util.clone(c.languages.css),c.languages.markup&&(c.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:c.languages.css,alias:"language-css"}}),c.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:c.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:c.languages.css}},alias:"language-css"}},c.languages.markup.tag)),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),c.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),c.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:c.languages.javascript,alias:"language-javascript"}}),c.languages.js=c.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){for(var n,t,o=e.getAttribute("data-src"),i=e,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!r.test(i.className);)i=i.parentNode;(t=i?(e.className.match(r)||[,""])[1]:t)||(n=(o.match(/\.(\w+)$/)||[,""])[1],t=l[n]||n);var a=document.createElement("code"),s=(a.className="language-"+t,e.textContent="",a.textContent="Loading…",e.appendChild(a),new XMLHttpRequest);s.open("GET",o,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(a.textContent=s.responseText,c.highlightElement(a)):400<=s.status?a.textContent="✖ Error "+s.status+" while fetching file: "+s.statusText:a.textContent="✖ Error: File does not exist or is empty")},s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)})},{}],11:[function(e,n,t){n.exports=function(u){return function(e){function n(){var e=o.offsetWidth/a,n=o.offsetHeight/r;s.forEach(c.bind(null,Math.min(e,n)))}var t,o=e.parent,i=e.slides[0],r=i.offsetHeight,a=i.offsetWidth,i="zoom"===u||"zoom"in o.style&&"transform"!==u,s=i?e.slides:e.slides.map(function(e){var n=document.createElement("div");return n.className="bespoke-scale-parent",e.parentNode.insertBefore(n,e),n.appendChild(e),n}),l=(t="Transform","Moz Webkit O ms".split(" ").reduce(function(e,n){return n+t in o.style?n+t:e},t.toLowerCase())),c=i?function(e,n){n.style.zoom=e}:function(e,n){n.style[l]="scale("+e+")"};window.addEventListener("resize",n),n()}}},{}],12:[function(e,n,t){n.exports={from:function(e,n){function o(e,n){a[e]&&(c("deactivate",u(s,n)),s=a[e],c("activate",u(s,n)))}function t(e,n){var t=a.indexOf(s)+e;c(0<e?"next":"prev",u(s,n))&&o(t,n)}function i(e,n){l[e]=(l[e]||[]).filter(function(e){return e!==n})}var r=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),a=[].filter.call("string"==typeof e.slides?r.querySelectorAll(e.slides):e.slides||r.children,function(e){return"SCRIPT"!==e.nodeName}),s=a[0],l={},c=function(e,t){return(l[e]||[]).reduce(function(e,n){return e&&!1!==n(t)},!0)},u=function(e,n){return(n=n||{}).index=a.indexOf(e),n.slide=e,n},d={on:function(e,n){return(l[e]||(l[e]=[])).push(n),i.bind(null,e,n)},off:i,fire:c,slide:function(e,n){if(!arguments.length)return a.indexOf(s);c("slide",u(a[e],n))&&o(e,n)},next:t.bind(null,1),prev:t.bind(null,-1),parent:r,slides:a};return(n||[]).forEach(function(e){e(d)}),o(0),d}}},{}],13:[function(e,n,t){var o="webkitAppearance"in document.documentElement.style?"zoom":"transform",i=e("bespoke"),r=e("bespoke-classes"),a=e("bespoke-nav"),s=e("bespoke-fullscreen"),l=e("bespoke-scale"),c=e("bespoke-overview"),u=e("bespoke-bullets"),d=e("bespoke-hash"),p=e("bespoke-prism"),e=e("bespoke-extern");i.from({parent:"article.deck",slides:"section"},[r(),a(),s(),l(o),c({columns:4}),u(".build, .build-items > *:not(.build-items)"),d(),p(),e(i)])},{bespoke:12,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-extern":3,"bespoke-fullscreen":4,"bespoke-hash":5,"bespoke-nav":8,"bespoke-overview":9,"bespoke-prism":10,"bespoke-scale":11}]},{},[13]);