(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var o=i(n("q1tI")),u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,i=void 0!==r&&r,o=t.hasQuery;return n||i&&(void 0!==o&&o)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"23aj":function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),i=n.n(r),o=n("0iUn"),u=n("sLSF"),a=n("MI3g"),c=n("a7VT"),s=n("Tit0"),f=n("q1tI"),l=n.n(f),d=n("8Kt/"),p=n.n(d),v=n("obcq"),h=n("/MKj"),m=n("XmQT"),_=l.a.createElement,y=function(){var t=Object(v.b)().count,e=Object(h.b)();return _(l.a.Fragment,null,_("h2",{className:"subtitle"},t),_("div",{className:"buttons"},_("button",{className:"button",onClick:function(){return e(m.a.actions.increment())}},"+1"),_("button",{className:"button",onClick:function(){return e(m.a.actions.setCount(0))}},"Reset"),_("button",{className:"button is-warning",onClick:function(){return e(Object(m.b)())}},"Async +1")))},w=l.a.createElement,b=function(){return w(l.a.Fragment,null,w("section",{className:"section"},w("h1",{className:"title"},"next-example-app"),w(y,null)))},g=l.a.createElement,k=function(t){function e(){return Object(o.a)(this,e),Object(a.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(s.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return g(l.a.Fragment,null,g(p.a,null,g("title",null,this.props.title)),g(b,null))}}],[{key:"getInitialProps",value:function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{title:"Hello world"});case 1:case"end":return t.stop()}}))}}]),e}(l.a.Component);e.default=k},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var u=o(n("q1tI")),a=o(n("Xuae")),c=n("lwAK"),s=n("FYa8"),f=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var p=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,i={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var f=p[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=o.props[f],d=i[f]||new r;d.has(l)?u=!1:(d.add(l),i[f]=d)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var h=a.default();function m(t){var e=t.children;return u.default.createElement(c.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:f.isInAmpMode(t)},e)}))}))}m.rewind=h.rewind,e.default=m},"8iia":function(t,e,n){var r=n("QMMT"),i=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),i=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},PQJW:function(t,e,n){var r=n("d04V"),i=n("yLu3");t.exports=function(t){if(i(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TbGu:function(t,e,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");t.exports=function(t){return r(t)||i(t)||o()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),u=n("sNwI"),a=n("NwJ3"),c=n("tEej"),s=n("IP1Z"),f=n("fNZA");i(i.S+i.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,l,d=o(t),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,_=0,y=f(d);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&a(y))for(n=new p(e=c(d.length));e>_;_++)s(n,_,m?h(d[_],_):d[_]);else for(l=y.call(d),n=new p;!(i=l.next()).done;_++)s(n,_,m?u(l,h,[i.value,_],!0):i.value);return n.length=_,n}})},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),u=n("2GTP"),a=n("EXMj"),c=n("oioR"),s=n("MPFp"),f=n("UO39"),l=n("TJWN"),d=n("jmDH"),p=n("6/1s").fastKey,v=n("n3ko"),h=d?"_s":"size",m=function(t,e){var n,r=p(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var f=t((function(t,r){a(t,f,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&c(r,n,t[s],t)}));return o(f.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=v(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[h]--}return!!r},forEach:function(t){v(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(v(this,e),t)}}),d&&r(f.prototype,"size",{get:function(){return v(this,e)[h]}}),f},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=p(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[h]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?f(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,f(1))}),n?"entries":"values",!n,!0),l(e)}}},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),u=n("K47E"),a=n("WaGi"),c=n("N9n2"),s=n("TbGu"),f=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),d=!1;e.default=function(){var t,e=new f;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function f(t){var a;return r(this,f),a=i(this,o(f).call(this,t)),d&&(e.add(u(a)),n(u(a))),a}return c(f,s),a(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(l.Component)}},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var o=i(n("q1tI"));e.AmpStateContext=o.createContext({})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}},[["/EDR",1,2,0,3]]]);