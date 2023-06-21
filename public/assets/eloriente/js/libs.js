
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
	return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
	void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,function(t,p){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var e="transitionend";function n(t){var e=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(e)},t),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=p(t).css("transition-duration"),n=p(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){p(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?m.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};p.fn.emulateTransitionEnd=n,p.event.special[m.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(p(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=p.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},u="alert",f="fade",d="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){p.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=m.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=p(t).closest("."+u)[0]),n},t._triggerCloseEvent=function(t){var e=p.Event(h.CLOSE);return p(t).trigger(e),e},t._removeElement=function(e){var n=this;if(p(e).removeClass(d),p(e).hasClass(f)){var t=m.getTransitionDurationFromElement(e);p(e).one(m.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){p(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),p.fn[o]=g._jQueryInterface,p.fn[o].Constructor=g,p.fn[o].noConflict=function(){return p.fn[o]=c,g._jQueryInterface};var _="button",v="bs.button",y="."+v,E=".data-api",b=p.fn[_],w="active",C="btn",T="focus",S='[data-toggle^="button"]',D='[data-toggle="buttons"]',I='input:not([type="hidden"])',A=".active",O=".btn",N={CLICK_DATA_API:"click"+y+E,FOCUS_BLUR_DATA_API:"focus"+y+E+" blur"+y+E},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=this._element.querySelector(I);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(w))t=!1;else{var o=n.querySelector(A);o&&p(o).removeClass(w)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(w),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(w)),t&&p(this._element).toggleClass(w)},t.dispose=function(){p.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(v);t||(t=new n(this),p(this).data(v,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();p(document).on(N.CLICK_DATA_API,S,function(t){t.preventDefault();var e=t.target;p(e).hasClass(C)||(e=p(e).closest(O)),k._jQueryInterface.call(p(e),"toggle")}).on(N.FOCUS_BLUR_DATA_API,S,function(t){var e=p(t.target).closest(O)[0];p(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),p.fn[_]=k._jQueryInterface,p.fn[_].Constructor=k,p.fn[_].noConflict=function(){return p.fn[_]=b,k._jQueryInterface};var L="carousel",x="bs.carousel",P="."+x,H=".data-api",j=p.fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},F={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},M="next",W="prev",U="left",B="right",q={SLIDE:"slide"+P,SLID:"slid"+P,KEYDOWN:"keydown"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P,TOUCHSTART:"touchstart"+P,TOUCHMOVE:"touchmove"+P,TOUCHEND:"touchend"+P,POINTERDOWN:"pointerdown"+P,POINTERUP:"pointerup"+P,DRAG_START:"dragstart"+P,LOAD_DATA_API:"load"+P+H,CLICK_DATA_API:"click"+P+H},K="carousel",Q="active",V="slide",Y="carousel-item-right",z="carousel-item-left",X="carousel-item-next",G="carousel-item-prev",$="pointer-event",J=".active",Z=".active.carousel-item",tt=".carousel-item",et=".carousel-item img",nt=".carousel-item-next, .carousel-item-prev",it=".carousel-indicators",ot="[data-slide], [data-slide-to]",rt='[data-ride="carousel"]',st={TOUCH:"touch",PEN:"pen"},at=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(it),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(M)},t.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(W)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(nt)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(Z);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)p(this._element).one(q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?M:W;this._slide(i,this._items[t])}},t.dispose=function(){p(this._element).off(P),p.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},R,t),m.typeCheckConfig(L,t,F),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&p(this._element).on(q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&p(this._element).on(q.MOUSEENTER,function(t){return e.pause(t)}).on(q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&st[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};p(this._element.querySelectorAll(et)).on(q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(p(this._element).on(q.POINTERDOWN,function(t){return e(t)}),p(this._element).on(q.POINTERUP,function(t){return i(t)}),this._element.classList.add($)):(p(this._element).on(q.TOUCHSTART,function(t){return e(t)}),p(this._element).on(q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),p(this._element).on(q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(tt)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===M,i=t===W,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===W?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(Z)),o=p.Event(q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return p(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(J));p(e).removeClass(Q);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&p(n).addClass(Q)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(Z),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===M?(n=z,i=X,U):(n=Y,i=G,B),l&&p(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(V)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(Q),p(s).removeClass(Q+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(Q),p(l).addClass(Q),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=p(this).data(x),e=l({},R,p(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),p(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=m.getSelectorFromElement(this);if(e){var n=p(e)[0];if(n&&p(n).hasClass(K)){var i=l({},p(n).data(),p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return R}}]),r}();p(document).on(q.CLICK_DATA_API,ot,at._dataApiClickHandler),p(window).on(q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(rt)),e=0,n=t.length;e<n;e++){var i=p(t[e]);at._jQueryInterface.call(i,i.data())}}),p.fn[L]=at._jQueryInterface,p.fn[L].Constructor=at,p.fn[L].noConflict=function(){return p.fn[L]=j,at._jQueryInterface};var lt="collapse",ct="bs.collapse",ht="."+ct,ut=p.fn[lt],ft={toggle:!0,parent:""},dt={toggle:"boolean",parent:"(string|element)"},pt={SHOW:"show"+ht,SHOWN:"shown"+ht,HIDE:"hide"+ht,HIDDEN:"hidden"+ht,CLICK_DATA_API:"click"+ht+".data-api"},mt="show",gt="collapse",_t="collapsing",vt="collapsed",yt="width",Et="height",bt=".show, .collapsing",wt='[data-toggle="collapse"]',Ct=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(wt)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){p(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(bt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(gt)})).length&&(t=null),!(t&&(e=p(t).not(this._selector).data(ct))&&e._isTransitioning))){var i=p.Event(pt.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(p(t).not(this._selector),"hide"),e||p(t).data(ct,null));var o=this._getDimension();p(this._element).removeClass(gt).addClass(_t),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(vt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(_t).addClass(gt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(pt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&p(this._element).hasClass(mt)){var e=p.Event(pt.HIDE);if(p(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(_t).removeClass(gt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(mt)||p(r).addClass(vt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){t.setTransitioning(!1),p(t._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){p.removeData(this._element,ct),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},ft,t)).toggle=Boolean(t.toggle),m.typeCheckConfig(lt,t,dt),t},t._getDimension=function(){return p(this._element).hasClass(yt)?yt:Et},t._getParent=function(){var t,n=this;m.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return p(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=p(t).hasClass(mt);e.length&&p(e).toggleClass(vt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=m.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=p(this),e=t.data(ct),n=l({},ft,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ct,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ft}}]),a}();p(document).on(pt.CLICK_DATA_API,wt,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=p(this),e=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));p(i).each(function(){var t=p(this),e=t.data(ct)?"toggle":n.data();Ct._jQueryInterface.call(t,e)})}),p.fn[lt]=Ct._jQueryInterface,p.fn[lt].Constructor=Ct,p.fn[lt].noConflict=function(){return p.fn[lt]=ut,Ct._jQueryInterface};for(var Tt="undefined"!=typeof window&&"undefined"!=typeof document,St=["Edge","Trident","Firefox"],Dt=0,It=0;It<St.length;It+=1)if(Tt&&0<=navigator.userAgent.indexOf(St[It])){Dt=1;break}var At=Tt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Dt))}};function Ot(t){return t&&"[object Function]"==={}.toString.call(t)}function Nt(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function kt(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function Lt(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Nt(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:Lt(kt(t))}var xt=Tt&&!(!window.MSInputMethodContext||!document.documentMode),Pt=Tt&&/MSIE 10/.test(navigator.userAgent);function Ht(t){return 11===t?xt:10===t?Pt:xt||Pt}function jt(t){if(!t)return document.documentElement;for(var e=Ht(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===Nt(n,"position")?jt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Rt(t){return null!==t.parentNode?Rt(t.parentNode):t}function Ft(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s,a,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&jt(s.firstElementChild)!==s?jt(l):l;var c=Rt(t);return c.host?Ft(c.host,e):Ft(t,Rt(e).host)}function Mt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"!==n&&"HTML"!==n)return t[e];var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}function Wt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Ut(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Ht(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Bt(t){var e=t.body,n=t.documentElement,i=Ht(10)&&getComputedStyle(n);return{height:Ut("Height",e,n,i),width:Ut("Width",e,n,i)}}var qt=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Kt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Vt(t){return Qt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Yt(t){var e={};try{if(Ht(10)){e=t.getBoundingClientRect();var n=Mt(t,"top"),i=Mt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?Bt(t.ownerDocument):{},s=r.width||t.clientWidth||o.right-o.left,a=r.height||t.clientHeight||o.bottom-o.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=Nt(t);l-=Wt(h,"x"),c-=Wt(h,"y"),o.width-=l,o.height-=c}return Vt(o)}function zt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Ht(10),o="HTML"===e.nodeName,r=Yt(t),s=Yt(e),a=Lt(t),l=Nt(e),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=Vt({top:r.top-s.top-c,left:r.left-s.left-h,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!i&&o){var f=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);u.top-=c-f,u.bottom-=c-f,u.left-=h-d,u.right-=h-d,u.marginTop=f,u.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(u=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=Mt(e,"top"),o=Mt(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}(u,e)),u}function Xt(t){if(!t||!t.parentElement||Ht())return document.documentElement;for(var e=t.parentElement;e&&"none"===Nt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var o=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Xt(t):Ft(t,e);if("viewport"===i)r=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=zt(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:Mt(n),a=e?0:Mt(n,"left");return Vt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r})}(s,o);else{var a=void 0;"scrollParent"===i?"BODY"===(a=Lt(kt(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=zt(a,s,o);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===Nt(e,"position"))return!0;var i=kt(e);return!!i&&t(i)}(s))r=l;else{var c=Bt(t.ownerDocument),h=c.height,u=c.width;r.top+=l.top-l.marginTop,r.bottom=h+l.top,r.left+=l.left-l.marginLeft,r.right=u+l.left}}var f="number"==typeof(n=n||0);return r.left+=f?n:n.left||0,r.top+=f?n:n.top||0,r.right-=f?n:n.right||0,r.bottom-=f?n:n.bottom||0,r}function $t(t,e,i,n,o){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(i,n,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Qt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),h=0<c.length?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function Jt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return zt(n,i?Xt(e):Ft(e,n),i)}function Zt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function te(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function ee(t,e,n){n=n.split("-")[0];var i=Zt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[te(a)],o}function ne(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function ie(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=ne(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&Ot(e)&&(n.offsets.popper=Vt(n.offsets.popper),n.offsets.reference=Vt(n.offsets.reference),n=e(n,t))}),n}function oe(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function re(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function se(t){var e=t.ownerDocument;return e?e.defaultView:window}function ae(t,e,n,i){n.updateBound=i,se(t).addEventListener("resize",n.updateBound,{passive:!0});var o=Lt(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),r||t(Lt(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function le(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,se(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function ce(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function he(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&ce(i[t])&&(e="px"),n.style[t]=i[t]+e})}var ue=Tt&&/Firefox/i.test(navigator.userAgent);function fe(t,e,n){var i=ne(t,function(t){return t.name===e}),o=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!o){var r="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var de=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],pe=de.slice(3);function me(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=pe.indexOf(t),i=pe.slice(n+1).concat(pe.slice(0,n));return e?i.reverse():i}var ge="flip",_e="clockwise",ve="counterclockwise";function ye(t,o,r,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf(ne(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Vt(a)[e]/100*r}(t,n,o,r)})})).forEach(function(n,i){n.forEach(function(t,e){ce(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var Ee={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Kt({},l,r[l]),end:Kt({},l,r[l]+r[c]-s[c])};t.offsets.popper=Qt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ce(+n)?[+n,0]:ye(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||jt(t.instance.popper);t.instance.reference===e&&(e=jt(e));var n=re("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Gt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=t.offsets.popper,u={primary:function(t){var e=h[t];return h[t]<l[t]&&!i.escapeWithReference&&(e=Math.max(h[t],l[t])),Kt({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=h[e];return h[t]>l[t]&&!i.escapeWithReference&&(n=Math.min(h[e],l[t]-("right"===t?h.width:h.height))),Kt({},e,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Qt({},h,u[e](t))}),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!fe(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=Zt(i)[c];a[d]-p<s[u]&&(t.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(t.offsets.popper[u]+=a[u]+p-s[d]),t.offsets.popper=Vt(t.offsets.popper);var m=a[u]+a[c]/2-p/2,g=Nt(t.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-t.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),t.arrowElement=i,t.offsets.arrow=(Kt(n={},u,Math.round(y)),Kt(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,m){if(oe(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var g=Gt(p.instance.popper,p.instance.reference,m.padding,m.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=te(_),y=p.placement.split("-")[1]||"",E=[];switch(m.behavior){case ge:E=[_,v];break;case _e:E=me(_);break;case ve:E=me(_,!0);break;default:E=m.behavior}return E.forEach(function(t,e){if(_!==t||E.length===e+1)return p;_=p.placement.split("-")[0],v=te(_);var n,i=p.offsets.popper,o=p.offsets.reference,r=Math.floor,s="left"===_&&r(i.right)>r(o.left)||"right"===_&&r(i.left)<r(o.right)||"top"===_&&r(i.bottom)>r(o.top)||"bottom"===_&&r(i.top)<r(o.bottom),a=r(i.left)<r(g.left),l=r(i.right)>r(g.right),c=r(i.top)<r(g.top),h=r(i.bottom)>r(g.bottom),u="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&h,f=-1!==["top","bottom"].indexOf(_),d=!!m.flipVariations&&(f&&"start"===y&&a||f&&"end"===y&&l||!f&&"start"===y&&c||!f&&"end"===y&&h);(s||u||d)&&(p.flipped=!0,(s||u)&&(_=E[e+1]),d&&(y="end"===(n=y)?"start":"start"===n?"end":n),p.placement=_+(y?"-"+y:""),p.offsets.popper=Qt({},p.offsets.popper,ee(p.instance.popper,p.offsets.reference,p.placement)),p=ie(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=te(e),t.offsets.popper=Vt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!fe(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=ne(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=ne(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l,c,h,u,f,d,p,m,g,_,v,y,E=void 0!==r?r:e.gpuAcceleration,b=jt(t.instance.popper),w=Yt(b),C={position:o.position},T=(s=t,a=window.devicePixelRatio<2||!ue,l=s.offsets,c=l.popper,h=l.reference,u=Math.round,f=Math.floor,d=function(t){return t},p=u(h.width),m=u(c.width),g=-1!==["left","right"].indexOf(s.placement),_=-1!==s.placement.indexOf("-"),y=a?u:d,{left:(v=a?g||_||p%2==m%2?u:f:d)(p%2==1&&m%2==1&&!_&&a?c.left-1:c.left),top:y(c.top),bottom:y(c.bottom),right:v(c.right)}),S="bottom"===n?"top":"bottom",D="right"===i?"left":"right",I=re("transform"),A=void 0,O=void 0;if(O="bottom"===S?"HTML"===b.nodeName?-b.clientHeight+T.bottom:-w.height+T.bottom:T.top,A="right"===D?"HTML"===b.nodeName?-b.clientWidth+T.right:-w.width+T.right:T.left,E&&I)C[I]="translate3d("+A+"px, "+O+"px, 0)",C[S]=0,C[D]=0,C.willChange="transform";else{var N="bottom"===S?-1:1,k="right"===D?-1:1;C[S]=O*N,C[D]=A*k,C.willChange=S+", "+D}var L={"x-placement":t.placement};return t.attributes=Qt({},L,t.attributes),t.styles=Qt({},C,t.styles),t.arrowStyles=Qt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return he(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&he(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=Jt(o,e,t,n.positionFixed),s=$t(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),he(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},be=function(){function r(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=At(this.update.bind(this)),this.options=Qt({},r.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Qt({},r.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Qt({},r.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Qt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&Ot(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return qt(r,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Jt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=$t(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=ee(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=ie(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,oe(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[re("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ae(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return le.call(this)}}]),r}();be.Utils=("undefined"!=typeof window?window:global).PopperUtils,be.placements=de,be.Defaults=Ee;var we="dropdown",Ce="bs.dropdown",Te="."+Ce,Se=".data-api",De=p.fn[we],Ie=new RegExp("38|40|27"),Ae={HIDE:"hide"+Te,HIDDEN:"hidden"+Te,SHOW:"show"+Te,SHOWN:"shown"+Te,CLICK:"click"+Te,CLICK_DATA_API:"click"+Te+Se,KEYDOWN_DATA_API:"keydown"+Te+Se,KEYUP_DATA_API:"keyup"+Te+Se},Oe="disabled",Ne="show",ke="dropup",Le="dropright",xe="dropleft",Pe="dropdown-menu-right",He="position-static",je='[data-toggle="dropdown"]',Re=".dropdown form",Fe=".dropdown-menu",Me=".navbar-nav",We=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ue="top-start",Be="top-end",qe="bottom-start",Ke="bottom-end",Qe="right-start",Ve="left-start",Ye={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},ze={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Xe=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)){var t=c._getParentFromElement(this._element),e=p(this._menu).hasClass(Ne);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=p.Event(Ae.SHOW,n);if(p(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof be)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(t).addClass(He),this._popper=new be(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(t).closest(Me).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(Ne),p(t).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||p(this._element).hasClass(Oe)||p(this._menu).hasClass(Ne))){var t={relatedTarget:this._element},e=p.Event(Ae.SHOW,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(Oe)&&p(this._menu).hasClass(Ne)){var t={relatedTarget:this._element},e=p.Event(Ae.HIDE,t),n=c._getParentFromElement(this._element);p(n).trigger(e),e.isDefaultPrevented()||(p(this._menu).toggleClass(Ne),p(n).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN,t)))}},t.dispose=function(){p.removeData(this._element,Ce),p(this._element).off(Te),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;p(this._element).on(Ae.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,p(this._element).data(),t),m.typeCheckConfig(we,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Fe))}return this._menu},t._getPlacement=function(){var t=p(this._element.parentNode),e=qe;return t.hasClass(ke)?(e=Ue,p(this._menu).hasClass(Pe)&&(e=Be)):t.hasClass(Le)?e=Qe:t.hasClass(xe)?e=Ve:p(this._menu).hasClass(Pe)&&(e=Ke),e},t._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(Ce);if(t||(t=new c(this,"object"==typeof e?e:null),p(this).data(Ce,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(je)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=p(e[n]).data(Ce),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(p(o).hasClass(Ne)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&p.contains(o,t.target))){var l=p.Event(Ae.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),e[n].setAttribute("aria-expanded","false"),p(a).removeClass(Ne),p(o).removeClass(Ne).trigger(p.Event(Ae.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=m.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||p(t.target).closest(Fe).length)):Ie.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!p(this).hasClass(Oe))){var e=c._getParentFromElement(this),n=p(e).hasClass(Ne);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(We));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(je);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Ye}},{key:"DefaultType",get:function(){return ze}}]),c}();p(document).on(Ae.KEYDOWN_DATA_API,je,Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API,Fe,Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API+" "+Ae.KEYUP_DATA_API,Xe._clearMenus).on(Ae.CLICK_DATA_API,je,function(t){t.preventDefault(),t.stopPropagation(),Xe._jQueryInterface.call(p(this),"toggle")}).on(Ae.CLICK_DATA_API,Re,function(t){t.stopPropagation()}),p.fn[we]=Xe._jQueryInterface,p.fn[we].Constructor=Xe,p.fn[we].noConflict=function(){return p.fn[we]=De,Xe._jQueryInterface};var Ge="modal",$e="bs.modal",Je="."+$e,Ze=p.fn[Ge],tn={backdrop:!0,keyboard:!0,focus:!0,show:!0},en={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},nn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,FOCUSIN:"focusin"+Je,RESIZE:"resize"+Je,CLICK_DISMISS:"click.dismiss"+Je,KEYDOWN_DISMISS:"keydown.dismiss"+Je,MOUSEUP_DISMISS:"mouseup.dismiss"+Je,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Je,CLICK_DATA_API:"click"+Je+".data-api"},on="modal-dialog-scrollable",rn="modal-scrollbar-measure",sn="modal-backdrop",an="modal-open",ln="fade",cn="show",hn=".modal-dialog",un=".modal-body",fn='[data-toggle="modal"]',dn='[data-dismiss="modal"]',pn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",mn=".sticky-top",gn=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(hn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(ln)&&(this._isTransitioning=!0);var n=p.Event(nn.SHOW,{relatedTarget:t});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(nn.CLICK_DISMISS,dn,function(t){return e.hide(t)}),p(this._dialog).on(nn.MOUSEDOWN_DISMISS,function(){p(e._element).one(nn.MOUSEUP_DISMISS,function(t){p(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(nn.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(ln);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(nn.FOCUSIN),p(this._element).removeClass(cn),p(this._element).off(nn.CLICK_DISMISS),p(this._dialog).off(nn.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return p(t).off(Je)}),p(document).off(nn.FOCUSIN),p.removeData(this._element,$e),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},tn,t),m.typeCheckConfig(Ge,t,en),t},t._showElement=function(t){var e=this,n=p(this._element).hasClass(ln);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(on)?this._dialog.querySelector(un).scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(cn),this._config.focus&&this._enforceFocus();var i=p.Event(nn.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,p(e._element).trigger(i)};if(n){var r=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;p(document).off(nn.FOCUSIN).on(nn.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===p(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?p(this._element).on(nn.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||p(this._element).off(nn.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?p(window).on(nn.RESIZE,function(t){return e.handleUpdate(t)}):p(window).off(nn.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(an),t._resetAdjustments(),t._resetScrollbar(),p(t._element).trigger(nn.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=p(this._element).hasClass(ln)?ln:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=sn,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(nn.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(cn),!t)return;if(!n)return void t();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(cn);var o=function(){e._removeBackdrop(),t&&t()};if(p(this._element).hasClass(ln)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(pn)),e=[].slice.call(document.querySelectorAll(mn));p(t).each(function(t,e){var n=e.style.paddingRight,i=p(e).css("padding-right");p(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(e).each(function(t,e){var n=e.style.marginRight,i=p(e).css("margin-right");p(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(an)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(pn));p(t).each(function(t,e){var n=p(e).data("padding-right");p(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+mn));p(e).each(function(t,e){var n=p(e).data("margin-right");"undefined"!=typeof n&&p(e).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=rn,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=p(this).data($e),e=l({},tn,p(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),p(this).data($e,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return tn}}]),o}();p(document).on(nn.CLICK_DATA_API,fn,function(t){var e,n=this,i=m.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=p(e).data($e)?"toggle":l({},p(e).data(),p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=p(e).one(nn.SHOW,function(t){t.isDefaultPrevented()||r.one(nn.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});gn._jQueryInterface.call(p(e),o,this)}),p.fn[Ge]=gn._jQueryInterface,p.fn[Ge].Constructor=gn,p.fn[Ge].noConflict=function(){return p.fn[Ge]=Ze,gn._jQueryInterface};var _n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],vn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},yn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,En=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function bn(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===_n.indexOf(n)||Boolean(t.nodeValue.match(yn)||t.nodeValue.match(En));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var wn="tooltip",Cn="bs.tooltip",Tn="."+Cn,Sn=p.fn[wn],Dn="bs-tooltip",In=new RegExp("(^|\\s)"+Dn+"\\S+","g"),An=["sanitize","whiteList","sanitizeFn"],On={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Nn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},kn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:vn},Ln="show",xn="out",Pn={HIDE:"hide"+Tn,HIDDEN:"hidden"+Tn,SHOW:"show"+Tn,SHOWN:"shown"+Tn,INSERTED:"inserted"+Tn,CLICK:"click"+Tn,FOCUSIN:"focusin"+Tn,FOCUSOUT:"focusout"+Tn,MOUSEENTER:"mouseenter"+Tn,MOUSELEAVE:"mouseleave"+Tn},Hn="fade",jn="show",Rn=".tooltip-inner",Fn=".arrow",Mn="hover",Wn="focus",Un="click",Bn="manual",qn=function(){function i(t,e){if("undefined"==typeof be)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=p(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(jn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var t=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(t);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Hn);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new be(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Fn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),p(o).addClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,p(e.element).trigger(e.constructor.Event.SHOWN),t===xn&&e._leave(null,e)};if(p(this.tip).hasClass(Hn)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=p.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==Ln&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),p(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(p(this.element).trigger(i),!i.isDefaultPrevented()){if(p(n).removeClass(jn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Un]=!1,this._activeTrigger[Wn]=!1,this._activeTrigger[Mn]=!1,p(this.tip).hasClass(Hn)){var r=m.getTransitionDurationFromElement(n);p(n).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){p(this.getTipElement()).addClass(Dn+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(p(t.querySelectorAll(Rn)),this.getTitle()),p(t).removeClass(Hn+" "+jn)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=bn(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?p(e).parent().is(t)||t.empty().append(e):t.text(p(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},t._getAttachment=function(t){return Nn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Bn){var e=t===Mn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Mn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),p(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Wn:Mn]=!0),p(e.getTipElement()).hasClass(jn)||e._hoverState===Ln?e._hoverState=Ln:(clearTimeout(e._timeout),e._hoverState=Ln,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Ln&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||p(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),p(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Wn:Mn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=xn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===xn&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=p(this.element).data();return Object.keys(e).forEach(function(t){-1!==An.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),m.typeCheckConfig(wn,t,this.constructor.DefaultType),t.sanitize&&(t.template=bn(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(In);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(p(t).removeClass(Hn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Cn),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Cn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return kn}},{key:"NAME",get:function(){return wn}},{key:"DATA_KEY",get:function(){return Cn}},{key:"Event",get:function(){return Pn}},{key:"EVENT_KEY",get:function(){return Tn}},{key:"DefaultType",get:function(){return On}}]),i}();p.fn[wn]=qn._jQueryInterface,p.fn[wn].Constructor=qn,p.fn[wn].noConflict=function(){return p.fn[wn]=Sn,qn._jQueryInterface};var Kn="popover",Qn="bs.popover",Vn="."+Qn,Yn=p.fn[Kn],zn="bs-popover",Xn=new RegExp("(^|\\s)"+zn+"\\S+","g"),Gn=l({},qn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),$n=l({},qn.DefaultType,{content:"(string|element|function)"}),Jn="fade",Zn="show",ti=".popover-header",ei=".popover-body",ni={HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn,INSERTED:"inserted"+Vn,CLICK:"click"+Vn,FOCUSIN:"focusin"+Vn,FOCUSOUT:"focusout"+Vn,MOUSEENTER:"mouseenter"+Vn,MOUSELEAVE:"mouseleave"+Vn},ii=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){p(this.getTipElement()).addClass(zn+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},o.setContent=function(){var t=p(this.getTipElement());this.setElementContent(t.find(ti),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ei),e),t.removeClass(Jn+" "+Zn)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=p(this.getTipElement()),e=t.attr("class").match(Xn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=p(this).data(Qn),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),p(this).data(Qn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Gn}},{key:"NAME",get:function(){return Kn}},{key:"DATA_KEY",get:function(){return Qn}},{key:"Event",get:function(){return ni}},{key:"EVENT_KEY",get:function(){return Vn}},{key:"DefaultType",get:function(){return $n}}]),i}(qn);p.fn[Kn]=ii._jQueryInterface,p.fn[Kn].Constructor=ii,p.fn[Kn].noConflict=function(){return p.fn[Kn]=Yn,ii._jQueryInterface};var oi="scrollspy",ri="bs.scrollspy",si="."+ri,ai=p.fn[oi],li={offset:10,method:"auto",target:""},ci={offset:"number",method:"string",target:"(string|element)"},hi={ACTIVATE:"activate"+si,SCROLL:"scroll"+si,LOAD_DATA_API:"load"+si+".data-api"},ui="dropdown-item",fi="active",di='[data-spy="scroll"]',pi=".nav, .list-group",mi=".nav-link",gi=".nav-item",_i=".list-group-item",vi=".dropdown",yi=".dropdown-item",Ei=".dropdown-toggle",bi="offset",wi="position",Ci=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+mi+","+this._config.target+" "+_i+","+this._config.target+" "+yi,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(hi.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bi:wi,o="auto"===this._config.method?t:this._config.method,r=o===wi?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=m.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[p(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){p.removeData(this._element,ri),p(this._scrollElement).off(si),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},li,"object"==typeof t&&t?t:{})).target){var e=p(t.target).attr("id");e||(e=m.getUID(oi),p(t.target).attr("id",e)),t.target="#"+e}return m.typeCheckConfig(oi,t,ci),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=p([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(ui)?(n.closest(vi).find(Ei).addClass(fi),n.addClass(fi)):(n.addClass(fi),n.parents(pi).prev(mi+", "+_i).addClass(fi),n.parents(pi).prev(gi).children(mi).addClass(fi)),p(this._scrollElement).trigger(hi.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(fi)}).forEach(function(t){return t.classList.remove(fi)})},n._jQueryInterface=function(e){return this.each(function(){var t=p(this).data(ri);if(t||(t=new n(this,"object"==typeof e&&e),p(this).data(ri,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return li}}]),n}();p(window).on(hi.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(di)),e=t.length;e--;){var n=p(t[e]);Ci._jQueryInterface.call(n,n.data())}}),p.fn[oi]=Ci._jQueryInterface,p.fn[oi].Constructor=Ci,p.fn[oi].noConflict=function(){return p.fn[oi]=ai,Ci._jQueryInterface};var Ti="bs.tab",Si="."+Ti,Di=p.fn.tab,Ii={HIDE:"hide"+Si,HIDDEN:"hidden"+Si,SHOW:"show"+Si,SHOWN:"shown"+Si,CLICK_DATA_API:"click"+Si+".data-api"},Ai="dropdown-menu",Oi="active",Ni="disabled",ki="fade",Li="show",xi=".dropdown",Pi=".nav, .list-group",Hi=".active",ji="> li > .active",Ri='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Fi=".dropdown-toggle",Mi="> .dropdown-menu .active",Wi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(Oi)||p(this._element).hasClass(Ni))){var t,i,e=p(this._element).closest(Pi)[0],o=m.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?ji:Hi;i=(i=p.makeArray(p(e).find(r)))[i.length-1]}var s=p.Event(Ii.HIDE,{relatedTarget:this._element}),a=p.Event(Ii.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=p.Event(Ii.HIDDEN,{relatedTarget:n._element}),e=p.Event(Ii.SHOWN,{relatedTarget:i});p(i).trigger(t),p(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){p.removeData(this._element,Ti),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?p(e).children(Hi):p(e).find(ji))[0],r=n&&o&&p(o).hasClass(ki),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=m.getTransitionDurationFromElement(o);p(o).removeClass(Li).one(m.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){p(e).removeClass(Oi);var i=p(e.parentNode).find(Mi)[0];i&&p(i).removeClass(Oi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(p(t).addClass(Oi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),m.reflow(t),t.classList.contains(ki)&&t.classList.add(Li),t.parentNode&&p(t.parentNode).hasClass(Ai)){var o=p(t).closest(xi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Fi));p(r).addClass(Oi)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Ti);if(e||(e=new i(this),t.data(Ti,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(Ii.CLICK_DATA_API,Ri,function(t){t.preventDefault(),Wi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Wi._jQueryInterface,p.fn.tab.Constructor=Wi,p.fn.tab.noConflict=function(){return p.fn.tab=Di,Wi._jQueryInterface};var Ui="toast",Bi="bs.toast",qi="."+Bi,Ki=p.fn[Ui],Qi={CLICK_DISMISS:"click.dismiss"+qi,HIDE:"hide"+qi,HIDDEN:"hidden"+qi,SHOW:"show"+qi,SHOWN:"shown"+qi},Vi="fade",Yi="hide",zi="show",Xi="showing",Gi={animation:"boolean",autohide:"boolean",delay:"number"},$i={animation:!0,autohide:!0,delay:500},Ji='[data-dismiss="toast"]',Zi=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;p(this._element).trigger(Qi.SHOW),this._config.animation&&this._element.classList.add(Vi);var e=function(){t._element.classList.remove(Xi),t._element.classList.add(zi),p(t._element).trigger(Qi.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Yi),this._element.classList.add(Xi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(zi)&&(p(this._element).trigger(Qi.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(zi)&&this._element.classList.remove(zi),p(this._element).off(Qi.CLICK_DISMISS),p.removeData(this._element,Bi),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},$i,p(this._element).data(),"object"==typeof t&&t?t:{}),m.typeCheckConfig(Ui,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;p(this._element).on(Qi.CLICK_DISMISS,Ji,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add(Yi),p(t._element).trigger(Qi.HIDDEN)};if(this._element.classList.remove(zi),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=p(this),e=t.data(Bi);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bi,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Gi}},{key:"Default",get:function(){return $i}}]),i}();p.fn[Ui]=Zi._jQueryInterface,p.fn[Ui].Constructor=Zi,p.fn[Ui].noConflict=function(){return p.fn[Ui]=Ki,Zi._jQueryInterface},function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=p.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=m,t.Alert=g,t.Button=k,t.Carousel=at,t.Collapse=Ct,t.Dropdown=Xe,t.Modal=gn,t.Popover=ii,t.Scrollspy=Ci,t.Tab=Wi,t.Toast=Zi,t.Tooltip=qn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map


/*! WOW - v0.1.6 - 2014-03-19
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),this.WOW=function(){function c(a){null==a&&(a={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.start=b(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults)}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},c.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},c.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},c.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},c.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},c.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},c.prototype.util=function(){return this._util||(this._util=new a)},c.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},c}()}).call(this);

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);


/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
	"use strict";
  
	window.console = window.console || {
	  info: function (stuff) {}
	};
  
	// If there's no jQuery, fancyBox can't work
	// =========================================
  
	if (!$) {
	  return;
	}
  
	// Check if fancyBox is already initialized
	// ========================================
  
	if ($.fn.fancybox) {
	  console.info("fancyBox already initialized");
  
	  return;
	}
  
	// Private default settings
	// ========================
  
	var defaults = {
	  // Close existing modals
	  // Set this to false if you do not need to stack multiple instances
	  closeExisting: false,
  
	  // Enable infinite gallery navigation
	  loop: false,
  
	  // Horizontal space between slides
	  gutter: 50,
  
	  // Enable keyboard navigation
	  keyboard: true,
  
	  // Should allow caption to overlap the content
	  preventCaptionOverlap: true,
  
	  // Should display navigation arrows at the screen edges
	  arrows: true,
  
	  // Should display counter at the top left corner
	  infobar: true,
  
	  // Should display close button (using `btnTpl.smallBtn` template) over the content
	  // Can be true, false, "auto"
	  // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
	  smallBtn: "auto",
  
	  // Should display toolbar (buttons at the top)
	  // Can be true, false, "auto"
	  // If "auto" - will be automatically hidden if "smallBtn" is enabled
	  toolbar: "auto",
  
	  // What buttons should appear in the top right corner.
	  // Buttons will be created using templates from `btnTpl` option
	  // and they will be placed into toolbar (class="fancybox-toolbar"` element)
	  buttons: [
		"zoom",
		//"share",
		"slideShow",
		//"fullScreen",
		//"download",
		"thumbs",
		"close"
	  ],
  
	  // Detect "idle" time in seconds
	  idleTime: 3,
  
	  // Disable right-click and use simple image protection for images
	  protect: false,
  
	  // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
	  modal: false,
  
	  image: {
		// Wait for images to load before displaying
		//   true  - wait for image to load and then display;
		//   false - display thumbnail and load the full-sized image over top,
		//           requires predefined image dimensions (`data-width` and `data-height` attributes)
		preload: false
	  },
  
	  ajax: {
		// Object containing settings for ajax request
		settings: {
		  // This helps to indicate that request comes from the modal
		  // Feel free to change naming
		  data: {
			fancybox: true
		  }
		}
	  },
  
	  iframe: {
		// Iframe template
		tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
  
		// Preload iframe before displaying it
		// This allows to calculate iframe content width and height
		// (note: Due to "Same Origin Policy", you can't get cross domain data).
		preload: true,
  
		// Custom CSS styling for iframe wrapping element
		// You can use this to set custom iframe dimensions
		css: {},
  
		// Iframe tag attributes
		attr: {
		  scrolling: "auto"
		}
	  },
  
	  // For HTML5 video only
	  video: {
		tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
		  '<source src="{{src}}" type="{{format}}" />' +
		  'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
		  "</video>",
		format: "", // custom video format
		autoStart: true
	  },
  
	  // Default content type if cannot be detected automatically
	  defaultType: "image",
  
	  // Open/close animation type
	  // Possible values:
	  //   false            - disable
	  //   "zoom"           - zoom images from/to thumbnail
	  //   "fade"
	  //   "zoom-in-out"
	  //
	  animationEffect: "zoom",
  
	  // Duration in ms for open/close animation
	  animationDuration: 366,
  
	  // Should image change opacity while zooming
	  // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
	  zoomOpacity: "auto",
  
	  // Transition effect between slides
	  //
	  // Possible values:
	  //   false            - disable
	  //   "fade'
	  //   "slide'
	  //   "circular'
	  //   "tube'
	  //   "zoom-in-out'
	  //   "rotate'
	  //
	  transitionEffect: "fade",
  
	  // Duration in ms for transition animation
	  transitionDuration: 366,
  
	  // Custom CSS class for slide element
	  slideClass: "",
  
	  // Custom CSS class for layout
	  baseClass: "",
  
	  // Base template for layout
	  baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
		'<div class="fancybox-bg"></div>' +
		'<div class="fancybox-inner">' +
		'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
		'<div class="fancybox-toolbar">{{buttons}}</div>' +
		'<div class="fancybox-navigation">{{arrows}}</div>' +
		'<div class="fancybox-stage"></div>' +
		'<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
		"</div>" +
		"</div>",
  
	  // Loading indicator template
	  spinnerTpl: '<div class="fancybox-loading"></div>',
  
	  // Error message template
	  errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
  
	  btnTpl: {
		download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
		  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
		  "</a>",
  
		zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
		  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
		  "</button>",
  
		close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
		  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
		  "</button>",
  
		// Arrows
		arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
		  '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
		  "</button>",
  
		arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
		  '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
		  "</button>",
  
		// This small close button will be appended to your html/inline/ajax content by default,
		// if "smallBtn" option is not set to false
		smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
		  '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
		  "</button>"
	  },
  
	  // Container is injected into this element
	  parentEl: "body",
  
	  // Hide browser vertical scrollbars; use at your own risk
	  hideScrollbar: true,
  
	  // Focus handling
	  // ==============
  
	  // Try to focus on the first focusable element after opening
	  autoFocus: true,
  
	  // Put focus back to active element after closing
	  backFocus: true,
  
	  // Do not let user to focus on element outside modal content
	  trapFocus: true,
  
	  // Module specific options
	  // =======================
  
	  fullScreen: {
		autoStart: false
	  },
  
	  // Set `touch: false` to disable panning/swiping
	  touch: {
		vertical: true, // Allow to drag content vertically
		momentum: true // Continue movement after releasing mouse/touch when panning
	  },
  
	  // Hash value when initializing manually,
	  // set `false` to disable hash change
	  hash: null,
  
	  // Customize or add new media types
	  // Example:
	  /*
		media : {
		  youtube : {
			params : {
			  autoplay : 0
			}
		  }
		}
	  */
	  media: {},
  
	  slideShow: {
		autoStart: false,
		speed: 3000
	  },
  
	  thumbs: {
		autoStart: false, // Display thumbnails on opening
		hideOnClose: true, // Hide thumbnail grid when closing animation starts
		parentEl: ".fancybox-container", // Container is injected into this element
		axis: "y" // Vertical (y) or horizontal (x) scrolling
	  },
  
	  // Use mousewheel to navigate gallery
	  // If 'auto' - enabled for images only
	  wheel: "auto",
  
	  // Callbacks
	  //==========
  
	  // See Documentation/API/Events for more information
	  // Example:
	  /*
		afterShow: function( instance, current ) {
		  console.info( 'Clicked element:' );
		  console.info( current.opts.$orig );
		}
	  */
  
	  onInit: $.noop, // When instance has been initialized
  
	  beforeLoad: $.noop, // Before the content of a slide is being loaded
	  afterLoad: $.noop, // When the content of a slide is done loading
  
	  beforeShow: $.noop, // Before open animation starts
	  afterShow: $.noop, // When content is done loading and animating
  
	  beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
	  afterClose: $.noop, // After instance has been closed
  
	  onActivate: $.noop, // When instance is brought to front
	  onDeactivate: $.noop, // When other instance has been activated
  
	  // Interaction
	  // ===========
  
	  // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
	  // each option can be string or method that returns value.
	  //
	  // Possible values:
	  //   "close"           - close instance
	  //   "next"            - move to next gallery item
	  //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
	  //   "toggleControls"  - show/hide controls
	  //   "zoom"            - zoom image (if loaded)
	  //   false             - do nothing
  
	  // Clicked on the content
	  clickContent: function (current, event) {
		return current.type === "image" ? "zoom" : false;
	  },
  
	  // Clicked on the slide
	  clickSlide: "close",
  
	  // Clicked on the background (backdrop) element;
	  // if you have not changed the layout, then most likely you need to use `clickSlide` option
	  clickOutside: "close",
  
	  // Same as previous two, but for double click
	  dblclickContent: false,
	  dblclickSlide: false,
	  dblclickOutside: false,
  
	  // Custom options when mobile device is detected
	  // =============================================
  
	  mobile: {
		preventCaptionOverlap: false,
		idleTime: false,
		clickContent: function (current, event) {
		  return current.type === "image" ? "toggleControls" : false;
		},
		clickSlide: function (current, event) {
		  return current.type === "image" ? "toggleControls" : "close";
		},
		dblclickContent: function (current, event) {
		  return current.type === "image" ? "zoom" : false;
		},
		dblclickSlide: function (current, event) {
		  return current.type === "image" ? "zoom" : false;
		}
	  },
  
	  // Internationalization
	  // ====================
  
	  lang: "en",
	  i18n: {
		en: {
		  CLOSE: "Close",
		  NEXT: "Next",
		  PREV: "Previous",
		  ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
		  PLAY_START: "Start slideshow",
		  PLAY_STOP: "Pause slideshow",
		  FULL_SCREEN: "Full screen",
		  THUMBS: "Thumbnails",
		  DOWNLOAD: "Download",
		  SHARE: "Share",
		  ZOOM: "Zoom"
		},
		de: {
		  CLOSE: "Schlie&szlig;en",
		  NEXT: "Weiter",
		  PREV: "Zur&uuml;ck",
		  ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
		  PLAY_START: "Diaschau starten",
		  PLAY_STOP: "Diaschau beenden",
		  FULL_SCREEN: "Vollbild",
		  THUMBS: "Vorschaubilder",
		  DOWNLOAD: "Herunterladen",
		  SHARE: "Teilen",
		  ZOOM: "Vergr&ouml;&szlig;ern"
		}
	  }
	};
  
	// Few useful variables and methods
	// ================================
  
	var $W = $(window);
	var $D = $(document);
  
	var called = 0;
  
	// Check if an object is a jQuery object and not a native JavaScript object
	// ========================================================================
	var isQuery = function (obj) {
	  return obj && obj.hasOwnProperty && obj instanceof $;
	};
  
	// Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
	// ===============================================================================
	var requestAFrame = (function () {
	  return (
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		// if all else fails, use setTimeout
		function (callback) {
		  return window.setTimeout(callback, 1000 / 60);
		}
	  );
	})();
  
	var cancelAFrame = (function () {
	  return (
		window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function (id) {
		  window.clearTimeout(id);
		}
	  );
	})();
  
	// Detect the supported transition-end event property name
	// =======================================================
	var transitionEnd = (function () {
	  var el = document.createElement("fakeelement"),
		t;
  
	  var transitions = {
		transition: "transitionend",
		OTransition: "oTransitionEnd",
		MozTransition: "transitionend",
		WebkitTransition: "webkitTransitionEnd"
	  };
  
	  for (t in transitions) {
		if (el.style[t] !== undefined) {
		  return transitions[t];
		}
	  }
  
	  return "transitionend";
	})();
  
	// Force redraw on an element.
	// This helps in cases where the browser doesn't redraw an updated element properly
	// ================================================================================
	var forceRedraw = function ($el) {
	  return $el && $el.length && $el[0].offsetHeight;
	};
  
	// Exclude array (`buttons`) options from deep merging
	// ===================================================
	var mergeOpts = function (opts1, opts2) {
	  var rez = $.extend(true, {}, opts1, opts2);
  
	  $.each(opts2, function (key, value) {
		if ($.isArray(value)) {
		  rez[key] = value;
		}
	  });
  
	  return rez;
	};
  
	// How much of an element is visible in viewport
	// =============================================
  
	var inViewport = function (elem) {
	  var elemCenter, rez;
  
	  if (!elem || elem.ownerDocument !== document) {
		return false;
	  }
  
	  $(".fancybox-container").css("pointer-events", "none");
  
	  elemCenter = {
		x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
		y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
	  };
  
	  rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
  
	  $(".fancybox-container").css("pointer-events", "");
  
	  return rez;
	};
  
	// Class definition
	// ================
  
	var FancyBox = function (content, opts, index) {
	  var self = this;
  
	  self.opts = mergeOpts({
		index: index
	  }, $.fancybox.defaults);
  
	  if ($.isPlainObject(opts)) {
		self.opts = mergeOpts(self.opts, opts);
	  }
  
	  if ($.fancybox.isMobile) {
		self.opts = mergeOpts(self.opts, self.opts.mobile);
	  }
  
	  self.id = self.opts.id || ++called;
  
	  self.currIndex = parseInt(self.opts.index, 10) || 0;
	  self.prevIndex = null;
  
	  self.prevPos = null;
	  self.currPos = 0;
  
	  self.firstRun = true;
  
	  // All group items
	  self.group = [];
  
	  // Existing slides (for current, next and previous gallery items)
	  self.slides = {};
  
	  // Create group elements
	  self.addContent(content);
  
	  if (!self.group.length) {
		return;
	  }
  
	  self.init();
	};
  
	$.extend(FancyBox.prototype, {
	  // Create DOM structure
	  // ====================
  
	  init: function () {
		var self = this,
		  firstItem = self.group[self.currIndex],
		  firstItemOpts = firstItem.opts,
		  $container,
		  buttonStr;
  
		if (firstItemOpts.closeExisting) {
		  $.fancybox.close(true);
		}
  
		// Hide scrollbars
		// ===============
  
		$("body").addClass("fancybox-active");
  
		if (
		  !$.fancybox.getInstance() &&
		  firstItemOpts.hideScrollbar !== false &&
		  !$.fancybox.isMobile &&
		  document.body.scrollHeight > window.innerHeight
		) {
		  $("head").append(
			'<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
			(window.innerWidth - document.documentElement.clientWidth) +
			"px;}</style>"
		  );
  
		  $("body").addClass("compensate-for-scrollbar");
		}
  
		// Build html markup and set references
		// ====================================
  
		// Build html code for buttons and insert into main template
		buttonStr = "";
  
		$.each(firstItemOpts.buttons, function (index, value) {
		  buttonStr += firstItemOpts.btnTpl[value] || "";
		});
  
		// Create markup from base template, it will be initially hidden to
		// avoid unnecessary work like painting while initializing is not complete
		$container = $(
			self.translate(
			  self,
			  firstItemOpts.baseTpl
			  .replace("{{buttons}}", buttonStr)
			  .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
			)
		  )
		  .attr("id", "fancybox-container-" + self.id)
		  .addClass(firstItemOpts.baseClass)
		  .data("FancyBox", self)
		  .appendTo(firstItemOpts.parentEl);
  
		// Create object holding references to jQuery wrapped nodes
		self.$refs = {
		  container: $container
		};
  
		["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
		  self.$refs[item] = $container.find(".fancybox-" + item);
		});
  
		self.trigger("onInit");
  
		// Enable events, deactive previous instances
		self.activate();
  
		// Build slides, load and reveal content
		self.jumpTo(self.currIndex);
	  },
  
	  // Simple i18n support - replaces object keys found in template
	  // with corresponding values
	  // ============================================================
  
	  translate: function (obj, str) {
		var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
  
		return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
		  return arr[n] === undefined ? match : arr[n];
		});
	  },
  
	  // Populate current group with fresh content
	  // Check if each object has valid type and content
	  // ===============================================
  
	  addContent: function (content) {
		var self = this,
		  items = $.makeArray(content),
		  thumbs;
  
		$.each(items, function (i, item) {
		  var obj = {},
			opts = {},
			$item,
			type,
			found,
			src,
			srcParts;
  
		  // Step 1 - Make sure we have an object
		  // ====================================
  
		  if ($.isPlainObject(item)) {
			// We probably have manual usage here, something like
			// $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
  
			obj = item;
			opts = item.opts || item;
		  } else if ($.type(item) === "object" && $(item).length) {
			// Here we probably have jQuery collection returned by some selector
			$item = $(item);
  
			// Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
			opts = $item.data() || {};
			opts = $.extend(true, {}, opts, opts.options);
  
			// Here we store clicked element
			opts.$orig = $item;
  
			obj.src = self.opts.src || opts.src || $item.attr("href");
  
			// Assume that simple syntax is used, for example:
			//   `$.fancybox.open( $("#test"), {} );`
			if (!obj.type && !obj.src) {
			  obj.type = "inline";
			  obj.src = item;
			}
		  } else {
			// Assume we have a simple html code, for example:
			//   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
			obj = {
			  type: "html",
			  src: item + ""
			};
		  }
  
		  // Each gallery object has full collection of options
		  obj.opts = $.extend(true, {}, self.opts, opts);
  
		  // Do not merge buttons array
		  if ($.isArray(opts.buttons)) {
			obj.opts.buttons = opts.buttons;
		  }
  
		  if ($.fancybox.isMobile && obj.opts.mobile) {
			obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
		  }
  
		  // Step 2 - Make sure we have content type, if not - try to guess
		  // ==============================================================
  
		  type = obj.type || obj.opts.type;
		  src = obj.src || "";
  
		  if (!type && src) {
			if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
			  type = "video";
  
			  if (!obj.opts.video.format) {
				obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
			  }
			} else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
			  type = "image";
			} else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
			  type = "iframe";
			  obj = $.extend(true, obj, {
				contentType: "pdf",
				opts: {
				  iframe: {
					preload: false
				  }
				}
			  });
			} else if (src.charAt(0) === "#") {
			  type = "inline";
			}
		  }
  
		  if (type) {
			obj.type = type;
		  } else {
			self.trigger("objectNeedsType", obj);
		  }
  
		  if (!obj.contentType) {
			obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
		  }
  
		  // Step 3 - Some adjustments
		  // =========================
  
		  obj.index = self.group.length;
  
		  if (obj.opts.smallBtn == "auto") {
			obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
		  }
  
		  if (obj.opts.toolbar === "auto") {
			obj.opts.toolbar = !obj.opts.smallBtn;
		  }
  
		  // Find thumbnail image, check if exists and if is in the viewport
		  obj.$thumb = obj.opts.$thumb || null;
  
		  if (obj.opts.$trigger && obj.index === self.opts.index) {
			obj.$thumb = obj.opts.$trigger.find("img:first");
  
			if (obj.$thumb.length) {
			  obj.opts.$orig = obj.opts.$trigger;
			}
		  }
  
		  if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
			obj.$thumb = obj.opts.$orig.find("img:first");
		  }
  
		  if (obj.$thumb && !obj.$thumb.length) {
			obj.$thumb = null;
		  }
  
		  obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);
  
		  // "caption" is a "special" option, it can be used to customize caption per gallery item
		  if ($.type(obj.opts.caption) === "function") {
			obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
		  }
  
		  if ($.type(self.opts.caption) === "function") {
			obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
		  }
  
		  // Make sure we have caption as a string or jQuery object
		  if (!(obj.opts.caption instanceof $)) {
			obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
		  }
  
		  // Check if url contains "filter" used to filter the content
		  // Example: "ajax.html #something"
		  if (obj.type === "ajax") {
			srcParts = src.split(/\s+/, 2);
  
			if (srcParts.length > 1) {
			  obj.src = srcParts.shift();
  
			  obj.opts.filter = srcParts.shift();
			}
		  }
  
		  // Hide all buttons and disable interactivity for modal items
		  if (obj.opts.modal) {
			obj.opts = $.extend(true, obj.opts, {
			  trapFocus: true,
			  // Remove buttons
			  infobar: 0,
			  toolbar: 0,
  
			  smallBtn: 0,
  
			  // Disable keyboard navigation
			  keyboard: 0,
  
			  // Disable some modules
			  slideShow: 0,
			  fullScreen: 0,
			  thumbs: 0,
			  touch: 0,
  
			  // Disable click event handlers
			  clickContent: false,
			  clickSlide: false,
			  clickOutside: false,
			  dblclickContent: false,
			  dblclickSlide: false,
			  dblclickOutside: false
			});
		  }
  
		  // Step 4 - Add processed object to group
		  // ======================================
  
		  self.group.push(obj);
		});
  
		// Update controls if gallery is already opened
		if (Object.keys(self.slides).length) {
		  self.updateControls();
  
		  // Update thumbnails, if needed
		  thumbs = self.Thumbs;
  
		  if (thumbs && thumbs.isActive) {
			thumbs.create();
  
			thumbs.focus();
		  }
		}
	  },
  
	  // Attach an event handler functions for:
	  //   - navigation buttons
	  //   - browser scrolling, resizing;
	  //   - focusing
	  //   - keyboard
	  //   - detecting inactivity
	  // ======================================
  
	  addEvents: function () {
		var self = this;
  
		self.removeEvents();
  
		// Make navigation elements clickable
		// ==================================
  
		self.$refs.container
		  .on("click.fb-close", "[data-fancybox-close]", function (e) {
			e.stopPropagation();
			e.preventDefault();
  
			self.close(e);
		  })
		  .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
			e.stopPropagation();
			e.preventDefault();
  
			self.previous();
		  })
		  .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
			e.stopPropagation();
			e.preventDefault();
  
			self.next();
		  })
		  .on("click.fb", "[data-fancybox-zoom]", function (e) {
			// Click handler for zoom button
			self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
		  });
  
		// Handle page scrolling and browser resizing
		// ==========================================
  
		$W.on("orientationchange.fb resize.fb", function (e) {
		  if (e && e.originalEvent && e.originalEvent.type === "resize") {
			if (self.requestId) {
			  cancelAFrame(self.requestId);
			}
  
			self.requestId = requestAFrame(function () {
			  self.update(e);
			});
		  } else {
			if (self.current && self.current.type === "iframe") {
			  self.$refs.stage.hide();
			}
  
			setTimeout(
			  function () {
				self.$refs.stage.show();
  
				self.update(e);
			  },
			  $.fancybox.isMobile ? 600 : 250
			);
		  }
		});
  
		$D.on("keydown.fb", function (e) {
		  var instance = $.fancybox ? $.fancybox.getInstance() : null,
			current = instance.current,
			keycode = e.keyCode || e.which;
  
		  // Trap keyboard focus inside of the modal
		  // =======================================
  
		  if (keycode == 9) {
			if (current.opts.trapFocus) {
			  self.focus(e);
			}
  
			return;
		  }
  
		  // Enable keyboard navigation
		  // ==========================
  
		  if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
			return;
		  }
  
		  // Backspace and Esc keys
		  if (keycode === 8 || keycode === 27) {
			e.preventDefault();
  
			self.close(e);
  
			return;
		  }
  
		  // Left arrow and Up arrow
		  if (keycode === 37 || keycode === 38) {
			e.preventDefault();
  
			self.previous();
  
			return;
		  }
  
		  // Righ arrow and Down arrow
		  if (keycode === 39 || keycode === 40) {
			e.preventDefault();
  
			self.next();
  
			return;
		  }
  
		  self.trigger("afterKeydown", e, keycode);
		});
  
		// Hide controls after some inactivity period
		if (self.group[self.currIndex].opts.idleTime) {
		  self.idleSecondsCounter = 0;
  
		  $D.on(
			"mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
			function (e) {
			  self.idleSecondsCounter = 0;
  
			  if (self.isIdle) {
				self.showControls();
			  }
  
			  self.isIdle = false;
			}
		  );
  
		  self.idleInterval = window.setInterval(function () {
			self.idleSecondsCounter++;
  
			if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
			  self.isIdle = true;
			  self.idleSecondsCounter = 0;
  
			  self.hideControls();
			}
		  }, 1000);
		}
	  },
  
	  // Remove events added by the core
	  // ===============================
  
	  removeEvents: function () {
		var self = this;
  
		$W.off("orientationchange.fb resize.fb");
		$D.off("keydown.fb .fb-idle");
  
		this.$refs.container.off(".fb-close .fb-prev .fb-next");
  
		if (self.idleInterval) {
		  window.clearInterval(self.idleInterval);
  
		  self.idleInterval = null;
		}
	  },
  
	  // Change to previous gallery item
	  // ===============================
  
	  previous: function (duration) {
		return this.jumpTo(this.currPos - 1, duration);
	  },
  
	  // Change to next gallery item
	  // ===========================
  
	  next: function (duration) {
		return this.jumpTo(this.currPos + 1, duration);
	  },
  
	  // Switch to selected gallery item
	  // ===============================
  
	  jumpTo: function (pos, duration) {
		var self = this,
		  groupLen = self.group.length,
		  firstRun,
		  isMoved,
		  loop,
		  current,
		  previous,
		  slidePos,
		  stagePos,
		  prop,
		  diff;
  
		if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
		  return;
		}
  
		// Should loop?
		pos = parseInt(pos, 10);
		loop = self.current ? self.current.opts.loop : self.opts.loop;
  
		if (!loop && (pos < 0 || pos >= groupLen)) {
		  return false;
		}
  
		// Check if opening for the first time; this helps to speed things up
		firstRun = self.firstRun = !Object.keys(self.slides).length;
  
		// Create slides
		previous = self.current;
  
		self.prevIndex = self.currIndex;
		self.prevPos = self.currPos;
  
		current = self.createSlide(pos);
  
		if (groupLen > 1) {
		  if (loop || current.index < groupLen - 1) {
			self.createSlide(pos + 1);
		  }
  
		  if (loop || current.index > 0) {
			self.createSlide(pos - 1);
		  }
		}
  
		self.current = current;
		self.currIndex = current.index;
		self.currPos = current.pos;
  
		self.trigger("beforeShow", firstRun);
  
		self.updateControls();
  
		// Validate duration length
		current.forcedDuration = undefined;
  
		if ($.isNumeric(duration)) {
		  current.forcedDuration = duration;
		} else {
		  duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
		}
  
		duration = parseInt(duration, 10);
  
		// Check if user has swiped the slides or if still animating
		isMoved = self.isMoved(current);
  
		// Make sure current slide is visible
		current.$slide.addClass("fancybox-slide--current");
  
		// Fresh start - reveal container, current slide and start loading content
		if (firstRun) {
		  if (current.opts.animationEffect && duration) {
			self.$refs.container.css("transition-duration", duration + "ms");
		  }
  
		  self.$refs.container.addClass("fancybox-is-open").trigger("focus");
  
		  // Attempt to load content into slide
		  // This will later call `afterLoad` -> `revealContent`
		  self.loadSlide(current);
  
		  self.preload("image");
  
		  return;
		}
  
		// Get actual slide/stage positions (before cleaning up)
		slidePos = $.fancybox.getTranslate(previous.$slide);
		stagePos = $.fancybox.getTranslate(self.$refs.stage);
  
		// Clean up all slides
		$.each(self.slides, function (index, slide) {
		  $.fancybox.stop(slide.$slide, true);
		});
  
		if (previous.pos !== current.pos) {
		  previous.isComplete = false;
		}
  
		previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
  
		// If slides are out of place, then animate them to correct position
		if (isMoved) {
		  // Calculate horizontal swipe distance
		  diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
  
		  $.each(self.slides, function (index, slide) {
			slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
			  return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
			});
  
			// Make sure that each slide is in equal distance
			// This is mostly needed for freshly added slides, because they are not yet positioned
			var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
  
			$.fancybox.setTranslate(slide.$slide, {
			  top: 0,
			  left: leftPos - stagePos.left + diff
			});
  
			if (slide.pos !== current.pos) {
			  slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
			}
  
			// Redraw to make sure that transition will start
			forceRedraw(slide.$slide);
  
			// Animate the slide
			$.fancybox.animate(
			  slide.$slide, {
				top: 0,
				left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
			  },
			  duration,
			  function () {
				slide.$slide
				  .css({
					transform: "",
					opacity: ""
				  })
				  .removeClass("fancybox-slide--next fancybox-slide--previous");
  
				if (slide.pos === self.currPos) {
				  self.complete();
				}
			  }
			);
		  });
		} else if (duration && current.opts.transitionEffect) {
		  // Set transition effect for previously active slide
		  prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
  
		  previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
  
		  $.fancybox.animate(
			previous.$slide,
			prop,
			duration,
			function () {
			  previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
			},
			false
		  );
		}
  
		if (current.isLoaded) {
		  self.revealContent(current);
		} else {
		  self.loadSlide(current);
		}
  
		self.preload("image");
	  },
  
	  // Create new "slide" element
	  // These are gallery items  that are actually added to DOM
	  // =======================================================
  
	  createSlide: function (pos) {
		var self = this,
		  $slide,
		  index;
  
		index = pos % self.group.length;
		index = index < 0 ? self.group.length + index : index;
  
		if (!self.slides[pos] && self.group[index]) {
		  $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
  
		  self.slides[pos] = $.extend(true, {}, self.group[index], {
			pos: pos,
			$slide: $slide,
			isLoaded: false
		  });
  
		  self.updateSlide(self.slides[pos]);
		}
  
		return self.slides[pos];
	  },
  
	  // Scale image to the actual size of the image;
	  // x and y values should be relative to the slide
	  // ==============================================
  
	  scaleToActual: function (x, y, duration) {
		var self = this,
		  current = self.current,
		  $content = current.$content,
		  canvasWidth = $.fancybox.getTranslate(current.$slide).width,
		  canvasHeight = $.fancybox.getTranslate(current.$slide).height,
		  newImgWidth = current.width,
		  newImgHeight = current.height,
		  imgPos,
		  posX,
		  posY,
		  scaleX,
		  scaleY;
  
		if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
		  return;
		}
  
		self.isAnimating = true;
  
		$.fancybox.stop($content);
  
		x = x === undefined ? canvasWidth * 0.5 : x;
		y = y === undefined ? canvasHeight * 0.5 : y;
  
		imgPos = $.fancybox.getTranslate($content);
  
		imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
		imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
  
		scaleX = newImgWidth / imgPos.width;
		scaleY = newImgHeight / imgPos.height;
  
		// Get center position for original image
		posX = canvasWidth * 0.5 - newImgWidth * 0.5;
		posY = canvasHeight * 0.5 - newImgHeight * 0.5;
  
		// Make sure image does not move away from edges
		if (newImgWidth > canvasWidth) {
		  posX = imgPos.left * scaleX - (x * scaleX - x);
  
		  if (posX > 0) {
			posX = 0;
		  }
  
		  if (posX < canvasWidth - newImgWidth) {
			posX = canvasWidth - newImgWidth;
		  }
		}
  
		if (newImgHeight > canvasHeight) {
		  posY = imgPos.top * scaleY - (y * scaleY - y);
  
		  if (posY > 0) {
			posY = 0;
		  }
  
		  if (posY < canvasHeight - newImgHeight) {
			posY = canvasHeight - newImgHeight;
		  }
		}
  
		self.updateCursor(newImgWidth, newImgHeight);
  
		$.fancybox.animate(
		  $content, {
			top: posY,
			left: posX,
			scaleX: scaleX,
			scaleY: scaleY
		  },
		  duration || 366,
		  function () {
			self.isAnimating = false;
		  }
		);
  
		// Stop slideshow
		if (self.SlideShow && self.SlideShow.isActive) {
		  self.SlideShow.stop();
		}
	  },
  
	  // Scale image to fit inside parent element
	  // ========================================
  
	  scaleToFit: function (duration) {
		var self = this,
		  current = self.current,
		  $content = current.$content,
		  end;
  
		if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
		  return;
		}
  
		self.isAnimating = true;
  
		$.fancybox.stop($content);
  
		end = self.getFitPos(current);
  
		self.updateCursor(end.width, end.height);
  
		$.fancybox.animate(
		  $content, {
			top: end.top,
			left: end.left,
			scaleX: end.width / $content.width(),
			scaleY: end.height / $content.height()
		  },
		  duration || 366,
		  function () {
			self.isAnimating = false;
		  }
		);
	  },
  
	  // Calculate image size to fit inside viewport
	  // ===========================================
  
	  getFitPos: function (slide) {
		var self = this,
		  $content = slide.$content,
		  $slide = slide.$slide,
		  width = slide.width || slide.opts.width,
		  height = slide.height || slide.opts.height,
		  maxWidth,
		  maxHeight,
		  minRatio,
		  aspectRatio,
		  rez = {};
  
		if (!slide.isLoaded || !$content || !$content.length) {
		  return false;
		}
  
		maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
		maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
  
		maxWidth -=
		  parseFloat($slide.css("paddingLeft")) +
		  parseFloat($slide.css("paddingRight")) +
		  parseFloat($content.css("marginLeft")) +
		  parseFloat($content.css("marginRight"));
  
		maxHeight -=
		  parseFloat($slide.css("paddingTop")) +
		  parseFloat($slide.css("paddingBottom")) +
		  parseFloat($content.css("marginTop")) +
		  parseFloat($content.css("marginBottom"));
  
		if (!width || !height) {
		  width = maxWidth;
		  height = maxHeight;
		}
  
		minRatio = Math.min(1, maxWidth / width, maxHeight / height);
  
		width = minRatio * width;
		height = minRatio * height;
  
		// Adjust width/height to precisely fit into container
		if (width > maxWidth - 0.5) {
		  width = maxWidth;
		}
  
		if (height > maxHeight - 0.5) {
		  height = maxHeight;
		}
  
		if (slide.type === "image") {
		  rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
		  rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
		} else if (slide.contentType === "video") {
		  // Force aspect ratio for the video
		  // "I say the whole world must learn of our peaceful ways… by force!"
		  aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
  
		  if (height > width / aspectRatio) {
			height = width / aspectRatio;
		  } else if (width > height * aspectRatio) {
			width = height * aspectRatio;
		  }
		}
  
		rez.width = width;
		rez.height = height;
  
		return rez;
	  },
  
	  // Update content size and position for all slides
	  // ==============================================
  
	  update: function (e) {
		var self = this;
  
		$.each(self.slides, function (key, slide) {
		  self.updateSlide(slide, e);
		});
	  },
  
	  // Update slide content position and size
	  // ======================================
  
	  updateSlide: function (slide, e) {
		var self = this,
		  $content = slide && slide.$content,
		  width = slide.width || slide.opts.width,
		  height = slide.height || slide.opts.height,
		  $slide = slide.$slide;
  
		// First, prevent caption overlap, if needed
		self.adjustCaption(slide);
  
		// Then resize content to fit inside the slide
		if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
		  $.fancybox.stop($content);
  
		  $.fancybox.setTranslate($content, self.getFitPos(slide));
  
		  if (slide.pos === self.currPos) {
			self.isAnimating = false;
  
			self.updateCursor();
		  }
		}
  
		// Then some adjustments
		self.adjustLayout(slide);
  
		if ($slide.length) {
		  $slide.trigger("refresh");
  
		  if (slide.pos === self.currPos) {
			self.$refs.toolbar
			  .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
			  .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
		  }
		}
  
		self.trigger("onUpdate", slide, e);
	  },
  
	  // Horizontally center slide
	  // =========================
  
	  centerSlide: function (duration) {
		var self = this,
		  current = self.current,
		  $slide = current.$slide;
  
		if (self.isClosing || !current) {
		  return;
		}
  
		$slide.siblings().css({
		  transform: "",
		  opacity: ""
		});
  
		$slide
		  .parent()
		  .children()
		  .removeClass("fancybox-slide--previous fancybox-slide--next");
  
		$.fancybox.animate(
		  $slide, {
			top: 0,
			left: 0,
			opacity: 1
		  },
		  duration === undefined ? 0 : duration,
		  function () {
			// Clean up
			$slide.css({
			  transform: "",
			  opacity: ""
			});
  
			if (!current.isComplete) {
			  self.complete();
			}
		  },
		  false
		);
	  },
  
	  // Check if current slide is moved (swiped)
	  // ========================================
  
	  isMoved: function (slide) {
		var current = slide || this.current,
		  slidePos,
		  stagePos;
  
		if (!current) {
		  return false;
		}
  
		stagePos = $.fancybox.getTranslate(this.$refs.stage);
		slidePos = $.fancybox.getTranslate(current.$slide);
  
		return (
		  !current.$slide.hasClass("fancybox-animated") &&
		  (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
		);
	  },
  
	  // Update cursor style depending if content can be zoomed
	  // ======================================================
  
	  updateCursor: function (nextWidth, nextHeight) {
		var self = this,
		  current = self.current,
		  $container = self.$refs.container,
		  canPan,
		  isZoomable;
  
		if (!current || self.isClosing || !self.Guestures) {
		  return;
		}
  
		$container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
  
		canPan = self.canPan(nextWidth, nextHeight);
  
		isZoomable = canPan ? true : self.isZoomable();
  
		$container.toggleClass("fancybox-is-zoomable", isZoomable);
  
		$("[data-fancybox-zoom]").prop("disabled", !isZoomable);
  
		if (canPan) {
		  $container.addClass("fancybox-can-pan");
		} else if (
		  isZoomable &&
		  (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
		) {
		  $container.addClass("fancybox-can-zoomIn");
		} else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
		  $container.addClass("fancybox-can-swipe");
		}
	  },
  
	  // Check if current slide is zoomable
	  // ==================================
  
	  isZoomable: function () {
		var self = this,
		  current = self.current,
		  fitPos;
  
		// Assume that slide is zoomable if:
		//   - image is still loading
		//   - actual size of the image is smaller than available area
		if (current && !self.isClosing && current.type === "image" && !current.hasError) {
		  if (!current.isLoaded) {
			return true;
		  }
  
		  fitPos = self.getFitPos(current);
  
		  if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
			return true;
		  }
		}
  
		return false;
	  },
  
	  // Check if current image dimensions are smaller than actual
	  // =========================================================
  
	  isScaledDown: function (nextWidth, nextHeight) {
		var self = this,
		  rez = false,
		  current = self.current,
		  $content = current.$content;
  
		if (nextWidth !== undefined && nextHeight !== undefined) {
		  rez = nextWidth < current.width && nextHeight < current.height;
		} else if ($content) {
		  rez = $.fancybox.getTranslate($content);
		  rez = rez.width < current.width && rez.height < current.height;
		}
  
		return rez;
	  },
  
	  // Check if image dimensions exceed parent element
	  // ===============================================
  
	  canPan: function (nextWidth, nextHeight) {
		var self = this,
		  current = self.current,
		  pos = null,
		  rez = false;
  
		if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
		  rez = self.getFitPos(current);
  
		  if (nextWidth !== undefined && nextHeight !== undefined) {
			pos = {
			  width: nextWidth,
			  height: nextHeight
			};
		  } else if (current.isComplete) {
			pos = $.fancybox.getTranslate(current.$content);
		  }
  
		  if (pos && rez) {
			rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
		  }
		}
  
		return rez;
	  },
  
	  // Load content into the slide
	  // ===========================
  
	  loadSlide: function (slide) {
		var self = this,
		  type,
		  $slide,
		  ajaxLoad;
  
		if (slide.isLoading || slide.isLoaded) {
		  return;
		}
  
		slide.isLoading = true;
  
		if (self.trigger("beforeLoad", slide) === false) {
		  slide.isLoading = false;
  
		  return false;
		}
  
		type = slide.type;
		$slide = slide.$slide;
  
		$slide
		  .off("refresh")
		  .trigger("onReset")
		  .addClass(slide.opts.slideClass);
  
		// Create content depending on the type
		switch (type) {
		  case "image":
			self.setImage(slide);
  
			break;
  
		  case "iframe":
			self.setIframe(slide);
  
			break;
  
		  case "html":
			self.setContent(slide, slide.src || slide.content);
  
			break;
  
		  case "video":
			self.setContent(
			  slide,
			  slide.opts.video.tpl
			  .replace(/\{\{src\}\}/gi, slide.src)
			  .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
			  .replace("{{poster}}", slide.thumb || "")
			);
  
			break;
  
		  case "inline":
			if ($(slide.src).length) {
			  self.setContent(slide, $(slide.src));
			} else {
			  self.setError(slide);
			}
  
			break;
  
		  case "ajax":
			self.showLoading(slide);
  
			ajaxLoad = $.ajax(
			  $.extend({}, slide.opts.ajax.settings, {
				url: slide.src,
				success: function (data, textStatus) {
				  if (textStatus === "success") {
					self.setContent(slide, data);
				  }
				},
				error: function (jqXHR, textStatus) {
				  if (jqXHR && textStatus !== "abort") {
					self.setError(slide);
				  }
				}
			  })
			);
  
			$slide.one("onReset", function () {
			  ajaxLoad.abort();
			});
  
			break;
  
		  default:
			self.setError(slide);
  
			break;
		}
  
		return true;
	  },
  
	  // Use thumbnail image, if possible
	  // ================================
  
	  setImage: function (slide) {
		var self = this,
		  ghost;
  
		// Check if need to show loading icon
		setTimeout(function () {
		  var $img = slide.$image;
  
		  if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
			self.showLoading(slide);
		  }
		}, 50);
  
		//Check if image has srcset
		self.checkSrcset(slide);
  
		// This will be wrapper containing both ghost and actual image
		slide.$content = $('<div class="fancybox-content"></div>')
		  .addClass("fancybox-is-hidden")
		  .appendTo(slide.$slide.addClass("fancybox-slide--image"));
  
		// If we have a thumbnail, we can display it while actual image is loading
		// Users will not stare at black screen and actual image will appear gradually
		if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
		  slide.width = slide.opts.width;
		  slide.height = slide.opts.height;
  
		  ghost = document.createElement("img");
  
		  ghost.onerror = function () {
			$(this).remove();
  
			slide.$ghost = null;
		  };
  
		  ghost.onload = function () {
			self.afterLoad(slide);
		  };
  
		  slide.$ghost = $(ghost)
			.addClass("fancybox-image")
			.appendTo(slide.$content)
			.attr("src", slide.thumb);
		}
  
		// Start loading actual image
		self.setBigImage(slide);
	  },
  
	  // Check if image has srcset and get the source
	  // ============================================
	  checkSrcset: function (slide) {
		var srcset = slide.opts.srcset || slide.opts.image.srcset,
		  found,
		  temp,
		  pxRatio,
		  windowWidth;
  
		// If we have "srcset", then we need to find first matching "src" value.
		// This is necessary, because when you set an src attribute, the browser will preload the image
		// before any javascript or even CSS is applied.
		if (srcset) {
		  pxRatio = window.devicePixelRatio || 1;
		  windowWidth = window.innerWidth * pxRatio;
  
		  temp = srcset.split(",").map(function (el) {
			var ret = {};
  
			el.trim()
			  .split(/\s+/)
			  .forEach(function (el, i) {
				var value = parseInt(el.substring(0, el.length - 1), 10);
  
				if (i === 0) {
				  return (ret.url = el);
				}
  
				if (value) {
				  ret.value = value;
				  ret.postfix = el[el.length - 1];
				}
			  });
  
			return ret;
		  });
  
		  // Sort by value
		  temp.sort(function (a, b) {
			return a.value - b.value;
		  });
  
		  // Ok, now we have an array of all srcset values
		  for (var j = 0; j < temp.length; j++) {
			var el = temp[j];
  
			if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
			  found = el;
			  break;
			}
		  }
  
		  // If not found, take the last one
		  if (!found && temp.length) {
			found = temp[temp.length - 1];
		  }
  
		  if (found) {
			slide.src = found.url;
  
			// If we have default width/height values, we can calculate height for matching source
			if (slide.width && slide.height && found.postfix == "w") {
			  slide.height = (slide.width / slide.height) * found.value;
			  slide.width = found.value;
			}
  
			slide.opts.srcset = srcset;
		  }
		}
	  },
  
	  // Create full-size image
	  // ======================
  
	  setBigImage: function (slide) {
		var self = this,
		  img = document.createElement("img"),
		  $img = $(img);
  
		slide.$image = $img
		  .one("error", function () {
			self.setError(slide);
		  })
		  .one("load", function () {
			var sizes;
  
			if (!slide.$ghost) {
			  self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
  
			  self.afterLoad(slide);
			}
  
			if (self.isClosing) {
			  return;
			}
  
			if (slide.opts.srcset) {
			  sizes = slide.opts.sizes;
  
			  if (!sizes || sizes === "auto") {
				sizes =
				  (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
				  "vw";
			  }
  
			  $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
			}
  
			// Hide temporary image after some delay
			if (slide.$ghost) {
			  setTimeout(function () {
				if (slide.$ghost && !self.isClosing) {
				  slide.$ghost.hide();
				}
			  }, Math.min(300, Math.max(1000, slide.height / 1600)));
			}
  
			self.hideLoading(slide);
		  })
		  .addClass("fancybox-image")
		  .attr("src", slide.src)
		  .appendTo(slide.$content);
  
		if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
		  $img.trigger("load");
		} else if (img.error) {
		  $img.trigger("error");
		}
	  },
  
	  // Computes the slide size from image size and maxWidth/maxHeight
	  // ==============================================================
  
	  resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
		var maxWidth = parseInt(slide.opts.width, 10),
		  maxHeight = parseInt(slide.opts.height, 10);
  
		// Sets the default values from the image
		slide.width = imgWidth;
		slide.height = imgHeight;
  
		if (maxWidth > 0) {
		  slide.width = maxWidth;
		  slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
		}
  
		if (maxHeight > 0) {
		  slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
		  slide.height = maxHeight;
		}
	  },
  
	  // Create iframe wrapper, iframe and bindings
	  // ==========================================
  
	  setIframe: function (slide) {
		var self = this,
		  opts = slide.opts.iframe,
		  $slide = slide.$slide,
		  $iframe;
  
		slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
		  .css(opts.css)
		  .appendTo($slide);
  
		$slide.addClass("fancybox-slide--" + slide.contentType);
  
		slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
		  .attr(opts.attr)
		  .appendTo(slide.$content);
  
		if (opts.preload) {
		  self.showLoading(slide);
  
		  // Unfortunately, it is not always possible to determine if iframe is successfully loaded
		  // (due to browser security policy)
  
		  $iframe.on("load.fb error.fb", function (e) {
			this.isReady = 1;
  
			slide.$slide.trigger("refresh");
  
			self.afterLoad(slide);
		  });
  
		  // Recalculate iframe content size
		  // ===============================
  
		  $slide.on("refresh.fb", function () {
			var $content = slide.$content,
			  frameWidth = opts.css.width,
			  frameHeight = opts.css.height,
			  $contents,
			  $body;
  
			if ($iframe[0].isReady !== 1) {
			  return;
			}
  
			try {
			  $contents = $iframe.contents();
			  $body = $contents.find("body");
			} catch (ignore) {}
  
			// Calculate content dimensions, if it is accessible
			if ($body && $body.length && $body.children().length) {
			  // Avoid scrolling to top (if multiple instances)
			  $slide.css("overflow", "visible");
  
			  $content.css({
				width: "100%",
				"max-width": "100%",
				height: "9999px"
			  });
  
			  if (frameWidth === undefined) {
				frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
			  }
  
			  $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
  
			  if (frameHeight === undefined) {
				frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
			  }
  
			  $content.css("height", frameHeight ? frameHeight : "");
  
			  $slide.css("overflow", "auto");
			}
  
			$content.removeClass("fancybox-is-hidden");
		  });
		} else {
		  self.afterLoad(slide);
		}
  
		$iframe.attr("src", slide.src);
  
		// Remove iframe if closing or changing gallery item
		$slide.one("onReset", function () {
		  // This helps IE not to throw errors when closing
		  try {
			$(this)
			  .find("iframe")
			  .hide()
			  .unbind()
			  .attr("src", "//about:blank");
		  } catch (ignore) {}
  
		  $(this)
			.off("refresh.fb")
			.empty();
  
		  slide.isLoaded = false;
		  slide.isRevealed = false;
		});
	  },
  
	  // Wrap and append content to the slide
	  // ======================================
  
	  setContent: function (slide, content) {
		var self = this;
  
		if (self.isClosing) {
		  return;
		}
  
		self.hideLoading(slide);
  
		if (slide.$content) {
		  $.fancybox.stop(slide.$content);
		}
  
		slide.$slide.empty();
  
		// If content is a jQuery object, then it will be moved to the slide.
		// The placeholder is created so we will know where to put it back.
		if (isQuery(content) && content.parent().length) {
		  // Make sure content is not already moved to fancyBox
		  if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
			content.parents(".fancybox-slide").trigger("onReset");
		  }
  
		  // Create temporary element marking original place of the content
		  slide.$placeholder = $("<div>")
			.hide()
			.insertAfter(content);
  
		  // Make sure content is visible
		  content.css("display", "inline-block");
		} else if (!slide.hasError) {
		  // If content is just a plain text, try to convert it to html
		  if ($.type(content) === "string") {
			content = $("<div>")
			  .append($.trim(content))
			  .contents();
		  }
  
		  // If "filter" option is provided, then filter content
		  if (slide.opts.filter) {
			content = $("<div>")
			  .html(content)
			  .find(slide.opts.filter);
		  }
		}
  
		slide.$slide.one("onReset", function () {
		  // Pause all html5 video/audio
		  $(this)
			.find("video,audio")
			.trigger("pause");
  
		  // Put content back
		  if (slide.$placeholder) {
			slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
  
			slide.$placeholder = null;
		  }
  
		  // Remove custom close button
		  if (slide.$smallBtn) {
			slide.$smallBtn.remove();
  
			slide.$smallBtn = null;
		  }
  
		  // Remove content and mark slide as not loaded
		  if (!slide.hasError) {
			$(this).empty();
  
			slide.isLoaded = false;
			slide.isRevealed = false;
		  }
		});
  
		$(content).appendTo(slide.$slide);
  
		if ($(content).is("video,audio")) {
		  $(content).addClass("fancybox-video");
  
		  $(content).wrap("<div></div>");
  
		  slide.contentType = "video";
  
		  slide.opts.width = slide.opts.width || $(content).attr("width");
		  slide.opts.height = slide.opts.height || $(content).attr("height");
		}
  
		slide.$content = slide.$slide
		  .children()
		  .filter("div,form,main,video,audio,article,.fancybox-content")
		  .first();
  
		slide.$content.siblings().hide();
  
		// Re-check if there is a valid content
		// (in some cases, ajax response can contain various elements or plain text)
		if (!slide.$content.length) {
		  slide.$content = slide.$slide
			.wrapInner("<div></div>")
			.children()
			.first();
		}
  
		slide.$content.addClass("fancybox-content");
  
		slide.$slide.addClass("fancybox-slide--" + slide.contentType);
  
		self.afterLoad(slide);
	  },
  
	  // Display error message
	  // =====================
  
	  setError: function (slide) {
		slide.hasError = true;
  
		slide.$slide
		  .trigger("onReset")
		  .removeClass("fancybox-slide--" + slide.contentType)
		  .addClass("fancybox-slide--error");
  
		slide.contentType = "html";
  
		this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
  
		if (slide.pos === this.currPos) {
		  this.isAnimating = false;
		}
	  },
  
	  // Show loading icon inside the slide
	  // ==================================
  
	  showLoading: function (slide) {
		var self = this;
  
		slide = slide || self.current;
  
		if (slide && !slide.$spinner) {
		  slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
			.appendTo(slide.$slide)
			.hide()
			.fadeIn("fast");
		}
	  },
  
	  // Remove loading icon from the slide
	  // ==================================
  
	  hideLoading: function (slide) {
		var self = this;
  
		slide = slide || self.current;
  
		if (slide && slide.$spinner) {
		  slide.$spinner.stop().remove();
  
		  delete slide.$spinner;
		}
	  },
  
	  // Adjustments after slide content has been loaded
	  // ===============================================
  
	  afterLoad: function (slide) {
		var self = this;
  
		if (self.isClosing) {
		  return;
		}
  
		slide.isLoading = false;
		slide.isLoaded = true;
  
		self.trigger("afterLoad", slide);
  
		self.hideLoading(slide);
  
		// Add small close button
		if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
		  slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
		}
  
		// Disable right click
		if (slide.opts.protect && slide.$content && !slide.hasError) {
		  slide.$content.on("contextmenu.fb", function (e) {
			if (e.button == 2) {
			  e.preventDefault();
			}
  
			return true;
		  });
  
		  // Add fake element on top of the image
		  // This makes a bit harder for user to select image
		  if (slide.type === "image") {
			$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
		  }
		}
  
		self.adjustCaption(slide);
  
		self.adjustLayout(slide);
  
		if (slide.pos === self.currPos) {
		  self.updateCursor();
		}
  
		self.revealContent(slide);
	  },
  
	  // Prevent caption overlap,
	  // fix css inconsistency across browsers
	  // =====================================
  
	  adjustCaption: function (slide) {
		var self = this,
		  current = slide || self.current,
		  caption = current.opts.caption,
		  preventOverlap = current.opts.preventCaptionOverlap,
		  $caption = self.$refs.caption,
		  $clone,
		  captionH = false;
  
		$caption.toggleClass("fancybox-caption--separate", preventOverlap);
  
		if (preventOverlap && caption && caption.length) {
		  if (current.pos !== self.currPos) {
			$clone = $caption.clone().appendTo($caption.parent());
  
			$clone
			  .children()
			  .eq(0)
			  .empty()
			  .html(caption);
  
			captionH = $clone.outerHeight(true);
  
			$clone.empty().remove();
		  } else if (self.$caption) {
			captionH = self.$caption.outerHeight(true);
		  }
  
		  current.$slide.css("padding-bottom", captionH || "");
		}
	  },
  
	  // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
	  // ====================================================================================
  
	  adjustLayout: function (slide) {
		var self = this,
		  current = slide || self.current,
		  scrollHeight,
		  marginBottom,
		  inlinePadding,
		  actualPadding;
  
		if (current.isLoaded && current.opts.disableLayoutFix !== true) {
		  current.$content.css("margin-bottom", "");
  
		  // If we would always set margin-bottom for the content,
		  // then it would potentially break vertical align
		  if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
			inlinePadding = current.$slide[0].style["padding-bottom"];
			actualPadding = current.$slide.css("padding-bottom");
  
			if (parseFloat(actualPadding) > 0) {
			  scrollHeight = current.$slide[0].scrollHeight;
  
			  current.$slide.css("padding-bottom", 0);
  
			  if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
				marginBottom = actualPadding;
			  }
  
			  current.$slide.css("padding-bottom", inlinePadding);
			}
		  }
  
		  current.$content.css("margin-bottom", marginBottom);
		}
	  },
  
	  // Make content visible
	  // This method is called right after content has been loaded or
	  // user navigates gallery and transition should start
	  // ============================================================
  
	  revealContent: function (slide) {
		var self = this,
		  $slide = slide.$slide,
		  end = false,
		  start = false,
		  isMoved = self.isMoved(slide),
		  isRevealed = slide.isRevealed,
		  effect,
		  effectClassName,
		  duration,
		  opacity;
  
		slide.isRevealed = true;
  
		effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
		duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
  
		duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
  
		if (isMoved || slide.pos !== self.currPos || !duration) {
		  effect = false;
		}
  
		// Check if can zoom
		if (effect === "zoom") {
		  if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
			end = self.getFitPos(slide);
		  } else {
			effect = "fade";
		  }
		}
  
		// Zoom animation
		// ==============
		if (effect === "zoom") {
		  self.isAnimating = true;
  
		  end.scaleX = end.width / start.width;
		  end.scaleY = end.height / start.height;
  
		  // Check if we need to animate opacity
		  opacity = slide.opts.zoomOpacity;
  
		  if (opacity == "auto") {
			opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
		  }
  
		  if (opacity) {
			start.opacity = 0.1;
			end.opacity = 1;
		  }
  
		  // Draw image at start position
		  $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
  
		  forceRedraw(slide.$content);
  
		  // Start animation
		  $.fancybox.animate(slide.$content, end, duration, function () {
			self.isAnimating = false;
  
			self.complete();
		  });
  
		  return;
		}
  
		self.updateSlide(slide);
  
		// Simply show content if no effect
		// ================================
		if (!effect) {
		  slide.$content.removeClass("fancybox-is-hidden");
  
		  if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
			slide.$content.hide().fadeIn("fast");
		  }
  
		  if (slide.pos === self.currPos) {
			self.complete();
		  }
  
		  return;
		}
  
		// Prepare for CSS transiton
		// =========================
		$.fancybox.stop($slide);
  
		//effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
		effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
  
		$slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);
  
		slide.$content.removeClass("fancybox-is-hidden");
  
		// Force reflow
		forceRedraw($slide);
  
		if (slide.type !== "image") {
		  slide.$content.hide().show(0);
		}
  
		$.fancybox.animate(
		  $slide,
		  "fancybox-slide--current",
		  duration,
		  function () {
			$slide.removeClass(effectClassName).css({
			  transform: "",
			  opacity: ""
			});
  
			if (slide.pos === self.currPos) {
			  self.complete();
			}
		  },
		  true
		);
	  },
  
	  // Check if we can and have to zoom from thumbnail
	  //================================================
  
	  getThumbPos: function (slide) {
		var rez = false,
		  $thumb = slide.$thumb,
		  thumbPos,
		  btw,
		  brw,
		  bbw,
		  blw;
  
		if (!$thumb || !inViewport($thumb[0])) {
		  return false;
		}
  
		thumbPos = $.fancybox.getTranslate($thumb);
  
		btw = parseFloat($thumb.css("border-top-width") || 0);
		brw = parseFloat($thumb.css("border-right-width") || 0);
		bbw = parseFloat($thumb.css("border-bottom-width") || 0);
		blw = parseFloat($thumb.css("border-left-width") || 0);
  
		rez = {
		  top: thumbPos.top + btw,
		  left: thumbPos.left + blw,
		  width: thumbPos.width - brw - blw,
		  height: thumbPos.height - btw - bbw,
		  scaleX: 1,
		  scaleY: 1
		};
  
		return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
	  },
  
	  // Final adjustments after current gallery item is moved to position
	  // and it`s content is loaded
	  // ==================================================================
  
	  complete: function () {
		var self = this,
		  current = self.current,
		  slides = {},
		  $el;
  
		if (self.isMoved() || !current.isLoaded) {
		  return;
		}
  
		if (!current.isComplete) {
		  current.isComplete = true;
  
		  current.$slide.siblings().trigger("onReset");
  
		  self.preload("inline");
  
		  // Trigger any CSS transiton inside the slide
		  forceRedraw(current.$slide);
  
		  current.$slide.addClass("fancybox-slide--complete");
  
		  // Remove unnecessary slides
		  $.each(self.slides, function (key, slide) {
			if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
			  slides[slide.pos] = slide;
			} else if (slide) {
			  $.fancybox.stop(slide.$slide);
  
			  slide.$slide.off().remove();
			}
		  });
  
		  self.slides = slides;
		}
  
		self.isAnimating = false;
  
		self.updateCursor();
  
		self.trigger("afterShow");
  
		// Autoplay first html5 video/audio
		if (!!current.opts.video.autoStart) {
		  current.$slide
			.find("video,audio")
			.filter(":visible:first")
			.trigger("play")
			.one("ended", function () {
			  if (Document.exitFullscreen) {
				Document.exitFullscreen();
			  } else if (this.webkitExitFullscreen) {
				this.webkitExitFullscreen();
			  }
  
			  self.next();
			});
		}
  
		// Try to focus on the first focusable element
		if (current.opts.autoFocus && current.contentType === "html") {
		  // Look for the first input with autofocus attribute
		  $el = current.$content.find("input[autofocus]:enabled:visible:first");
  
		  if ($el.length) {
			$el.trigger("focus");
		  } else {
			self.focus(null, true);
		  }
		}
  
		// Avoid jumping
		current.$slide.scrollTop(0).scrollLeft(0);
	  },
  
	  // Preload next and previous slides
	  // ================================
  
	  preload: function (type) {
		var self = this,
		  prev,
		  next;
  
		if (self.group.length < 2) {
		  return;
		}
  
		next = self.slides[self.currPos + 1];
		prev = self.slides[self.currPos - 1];
  
		if (prev && prev.type === type) {
		  self.loadSlide(prev);
		}
  
		if (next && next.type === type) {
		  self.loadSlide(next);
		}
	  },
  
	  // Try to find and focus on the first focusable element
	  // ====================================================
  
	  focus: function (e, firstRun) {
		var self = this,
		  focusableStr = [
			"a[href]",
			"area[href]",
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			"select:not([disabled]):not([aria-hidden])",
			"textarea:not([disabled]):not([aria-hidden])",
			"button:not([disabled]):not([aria-hidden])",
			"iframe",
			"object",
			"embed",
			"video",
			"audio",
			"[contenteditable]",
			'[tabindex]:not([tabindex^="-"])'
		  ].join(","),
		  focusableItems,
		  focusedItemIndex;
  
		if (self.isClosing) {
		  return;
		}
  
		if (e || !self.current || !self.current.isComplete) {
		  // Focus on any element inside fancybox
		  focusableItems = self.$refs.container.find("*:visible");
		} else {
		  // Focus inside current slide
		  focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
		}
  
		focusableItems = focusableItems.filter(focusableStr).filter(function () {
		  return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
		});
  
		if (focusableItems.length) {
		  focusedItemIndex = focusableItems.index(document.activeElement);
  
		  if (e && e.shiftKey) {
			// Back tab
			if (focusedItemIndex < 0 || focusedItemIndex == 0) {
			  e.preventDefault();
  
			  focusableItems.eq(focusableItems.length - 1).trigger("focus");
			}
		  } else {
			// Outside or Forward tab
			if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
			  if (e) {
				e.preventDefault();
			  }
  
			  focusableItems.eq(0).trigger("focus");
			}
		  }
		} else {
		  self.$refs.container.trigger("focus");
		}
	  },
  
	  // Activates current instance - brings container to the front and enables keyboard,
	  // notifies other instances about deactivating
	  // =================================================================================
  
	  activate: function () {
		var self = this;
  
		// Deactivate all instances
		$(".fancybox-container").each(function () {
		  var instance = $(this).data("FancyBox");
  
		  // Skip self and closing instances
		  if (instance && instance.id !== self.id && !instance.isClosing) {
			instance.trigger("onDeactivate");
  
			instance.removeEvents();
  
			instance.isVisible = false;
		  }
		});
  
		self.isVisible = true;
  
		if (self.current || self.isIdle) {
		  self.update();
  
		  self.updateControls();
		}
  
		self.trigger("onActivate");
  
		self.addEvents();
	  },
  
	  // Start closing procedure
	  // This will start "zoom-out" animation if needed and clean everything up afterwards
	  // =================================================================================
  
	  close: function (e, d) {
		var self = this,
		  current = self.current,
		  effect,
		  duration,
		  $content,
		  domRect,
		  opacity,
		  start,
		  end;
  
		var done = function () {
		  self.cleanUp(e);
		};
  
		if (self.isClosing) {
		  return false;
		}
  
		self.isClosing = true;
  
		// If beforeClose callback prevents closing, make sure content is centered
		if (self.trigger("beforeClose", e) === false) {
		  self.isClosing = false;
  
		  requestAFrame(function () {
			self.update();
		  });
  
		  return false;
		}
  
		// Remove all events
		// If there are multiple instances, they will be set again by "activate" method
		self.removeEvents();
  
		$content = current.$content;
		effect = current.opts.animationEffect;
		duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
  
		current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
  
		if (e !== true) {
		  $.fancybox.stop(current.$slide);
		} else {
		  effect = false;
		}
  
		// Remove other slides
		current.$slide
		  .siblings()
		  .trigger("onReset")
		  .remove();
  
		// Trigger animations
		if (duration) {
		  self.$refs.container
			.removeClass("fancybox-is-open")
			.addClass("fancybox-is-closing")
			.css("transition-duration", duration + "ms");
		}
  
		// Clean up
		self.hideLoading(current);
  
		self.hideControls(true);
  
		self.updateCursor();
  
		// Check if possible to zoom-out
		if (
		  effect === "zoom" &&
		  !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
		) {
		  effect = "fade";
		}
  
		if (effect === "zoom") {
		  $.fancybox.stop($content);
  
		  domRect = $.fancybox.getTranslate($content);
  
		  start = {
			top: domRect.top,
			left: domRect.left,
			scaleX: domRect.width / end.width,
			scaleY: domRect.height / end.height,
			width: end.width,
			height: end.height
		  };
  
		  // Check if we need to animate opacity
		  opacity = current.opts.zoomOpacity;
  
		  if (opacity == "auto") {
			opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
		  }
  
		  if (opacity) {
			end.opacity = 0;
		  }
  
		  $.fancybox.setTranslate($content, start);
  
		  forceRedraw($content);
  
		  $.fancybox.animate($content, end, duration, done);
  
		  return true;
		}
  
		if (effect && duration) {
		  $.fancybox.animate(
			current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
			"fancybox-animated fancybox-fx-" + effect,
			duration,
			done
		  );
		} else {
		  // If skip animation
		  if (e === true) {
			setTimeout(done, duration);
		  } else {
			done();
		  }
		}
  
		return true;
	  },
  
	  // Final adjustments after removing the instance
	  // =============================================
  
	  cleanUp: function (e) {
		var self = this,
		  instance,
		  $focus = self.current.opts.$orig,
		  x,
		  y;
  
		self.current.$slide.trigger("onReset");
  
		self.$refs.container.empty().remove();
  
		self.trigger("afterClose", e);
  
		// Place back focus
		if (!!self.current.opts.backFocus) {
		  if (!$focus || !$focus.length || !$focus.is(":visible")) {
			$focus = self.$trigger;
		  }
  
		  if ($focus && $focus.length) {
			x = window.scrollX;
			y = window.scrollY;
  
			$focus.trigger("focus");
  
			$("html, body")
			  .scrollTop(y)
			  .scrollLeft(x);
		  }
		}
  
		self.current = null;
  
		// Check if there are other instances
		instance = $.fancybox.getInstance();
  
		if (instance) {
		  instance.activate();
		} else {
		  $("body").removeClass("fancybox-active compensate-for-scrollbar");
  
		  $("#fancybox-style-noscroll").remove();
		}
	  },
  
	  // Call callback and trigger an event
	  // ==================================
  
	  trigger: function (name, slide) {
		var args = Array.prototype.slice.call(arguments, 1),
		  self = this,
		  obj = slide && slide.opts ? slide : self.current,
		  rez;
  
		if (obj) {
		  args.unshift(obj);
		} else {
		  obj = self;
		}
  
		args.unshift(self);
  
		if ($.isFunction(obj.opts[name])) {
		  rez = obj.opts[name].apply(obj, args);
		}
  
		if (rez === false) {
		  return rez;
		}
  
		if (name === "afterClose" || !self.$refs) {
		  $D.trigger(name + ".fb", args);
		} else {
		  self.$refs.container.trigger(name + ".fb", args);
		}
	  },
  
	  // Update infobar values, navigation button states and reveal caption
	  // ==================================================================
  
	  updateControls: function () {
		var self = this,
		  current = self.current,
		  index = current.index,
		  $container = self.$refs.container,
		  $caption = self.$refs.caption,
		  caption = current.opts.caption;
  
		// Recalculate content dimensions
		current.$slide.trigger("refresh");
  
		// Set caption
		if (caption && caption.length) {
		  self.$caption = $caption;
  
		  $caption
			.children()
			.eq(0)
			.html(caption);
		} else {
		  self.$caption = null;
		}
  
		if (!self.hasHiddenControls && !self.isIdle) {
		  self.showControls();
		}
  
		// Update info and navigation elements
		$container.find("[data-fancybox-count]").html(self.group.length);
		$container.find("[data-fancybox-index]").html(index + 1);
  
		$container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
		$container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
  
		if (current.type === "image") {
		  // Re-enable buttons; update download button source
		  $container
			.find("[data-fancybox-zoom]")
			.show()
			.end()
			.find("[data-fancybox-download]")
			.attr("href", current.opts.image.src || current.src)
			.show();
		} else if (current.opts.toolbar) {
		  $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
		}
  
		// Make sure focus is not on disabled button/element
		if ($(document.activeElement).is(":hidden,[disabled]")) {
		  self.$refs.container.trigger("focus");
		}
	  },
  
	  // Hide toolbar and caption
	  // ========================
  
	  hideControls: function (andCaption) {
		var self = this,
		  arr = ["infobar", "toolbar", "nav"];
  
		if (andCaption || !self.current.opts.preventCaptionOverlap) {
		  arr.push("caption");
		}
  
		this.$refs.container.removeClass(
		  arr
		  .map(function (i) {
			return "fancybox-show-" + i;
		  })
		  .join(" ")
		);
  
		this.hasHiddenControls = true;
	  },
  
	  showControls: function () {
		var self = this,
		  opts = self.current ? self.current.opts : self.opts,
		  $container = self.$refs.container;
  
		self.hasHiddenControls = false;
		self.idleSecondsCounter = 0;
  
		$container
		  .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
		  .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
		  .toggleClass("fancybox-show-caption", !!self.$caption)
		  .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
		  .toggleClass("fancybox-is-modal", !!opts.modal);
	  },
  
	  // Toggle toolbar and caption
	  // ==========================
  
	  toggleControls: function () {
		if (this.hasHiddenControls) {
		  this.showControls();
		} else {
		  this.hideControls();
		}
	  }
	});
  
	$.fancybox = {
	  version: "3.5.7",
	  defaults: defaults,
  
	  // Get current instance and execute a command.
	  //
	  // Examples of usage:
	  //
	  //   $instance = $.fancybox.getInstance();
	  //   $.fancybox.getInstance().jumpTo( 1 );
	  //   $.fancybox.getInstance( 'jumpTo', 1 );
	  //   $.fancybox.getInstance( function() {
	  //       console.info( this.currIndex );
	  //   });
	  // ======================================================
  
	  getInstance: function (command) {
		var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
		  args = Array.prototype.slice.call(arguments, 1);
  
		if (instance instanceof FancyBox) {
		  if ($.type(command) === "string") {
			instance[command].apply(instance, args);
		  } else if ($.type(command) === "function") {
			command.apply(instance, args);
		  }
  
		  return instance;
		}
  
		return false;
	  },
  
	  // Create new instance
	  // ===================
  
	  open: function (items, opts, index) {
		return new FancyBox(items, opts, index);
	  },
  
	  // Close current or all instances
	  // ==============================
  
	  close: function (all) {
		var instance = this.getInstance();
  
		if (instance) {
		  instance.close();
  
		  // Try to find and close next instance
		  if (all === true) {
			this.close(all);
		  }
		}
	  },
  
	  // Close all instances and unbind all events
	  // =========================================
  
	  destroy: function () {
		this.close(true);
  
		$D.add("body").off("click.fb-start", "**");
	  },
  
	  // Try to detect mobile devices
	  // ============================
  
	  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  
	  // Detect if 'translate3d' support is available
	  // ============================================
  
	  use3d: (function () {
		var div = document.createElement("div");
  
		return (
		  window.getComputedStyle &&
		  window.getComputedStyle(div) &&
		  window.getComputedStyle(div).getPropertyValue("transform") &&
		  !(document.documentMode && document.documentMode < 11)
		);
	  })(),
  
	  // Helper function to get current visual state of an element
	  // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
	  // =====================================================================
  
	  getTranslate: function ($el) {
		var domRect;
  
		if (!$el || !$el.length) {
		  return false;
		}
  
		domRect = $el[0].getBoundingClientRect();
  
		return {
		  top: domRect.top || 0,
		  left: domRect.left || 0,
		  width: domRect.width,
		  height: domRect.height,
		  opacity: parseFloat($el.css("opacity"))
		};
	  },
  
	  // Shortcut for setting "translate3d" properties for element
	  // Can set be used to set opacity, too
	  // ========================================================
  
	  setTranslate: function ($el, props) {
		var str = "",
		  css = {};
  
		if (!$el || !props) {
		  return;
		}
  
		if (props.left !== undefined || props.top !== undefined) {
		  str =
			(props.left === undefined ? $el.position().left : props.left) +
			"px, " +
			(props.top === undefined ? $el.position().top : props.top) +
			"px";
  
		  if (this.use3d) {
			str = "translate3d(" + str + ", 0px)";
		  } else {
			str = "translate(" + str + ")";
		  }
		}
  
		if (props.scaleX !== undefined && props.scaleY !== undefined) {
		  str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
		} else if (props.scaleX !== undefined) {
		  str += " scaleX(" + props.scaleX + ")";
		}
  
		if (str.length) {
		  css.transform = str;
		}
  
		if (props.opacity !== undefined) {
		  css.opacity = props.opacity;
		}
  
		if (props.width !== undefined) {
		  css.width = props.width;
		}
  
		if (props.height !== undefined) {
		  css.height = props.height;
		}
  
		return $el.css(css);
	  },
  
	  // Simple CSS transition handler
	  // =============================
  
	  animate: function ($el, to, duration, callback, leaveAnimationName) {
		var self = this,
		  from;
  
		if ($.isFunction(duration)) {
		  callback = duration;
		  duration = null;
		}
  
		self.stop($el);
  
		from = self.getTranslate($el);
  
		$el.on(transitionEnd, function (e) {
		  // Skip events from child elements and z-index change
		  if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
			return;
		  }
  
		  self.stop($el);
  
		  if ($.isNumeric(duration)) {
			$el.css("transition-duration", "");
		  }
  
		  if ($.isPlainObject(to)) {
			if (to.scaleX !== undefined && to.scaleY !== undefined) {
			  self.setTranslate($el, {
				top: to.top,
				left: to.left,
				width: from.width * to.scaleX,
				height: from.height * to.scaleY,
				scaleX: 1,
				scaleY: 1
			  });
			}
		  } else if (leaveAnimationName !== true) {
			$el.removeClass(to);
		  }
  
		  if ($.isFunction(callback)) {
			callback(e);
		  }
		});
  
		if ($.isNumeric(duration)) {
		  $el.css("transition-duration", duration + "ms");
		}
  
		// Start animation by changing CSS properties or class name
		if ($.isPlainObject(to)) {
		  if (to.scaleX !== undefined && to.scaleY !== undefined) {
			delete to.width;
			delete to.height;
  
			if ($el.parent().hasClass("fancybox-slide--image")) {
			  $el.parent().addClass("fancybox-is-scaling");
			}
		  }
  
		  $.fancybox.setTranslate($el, to);
		} else {
		  $el.addClass(to);
		}
  
		// Make sure that `transitionend` callback gets fired
		$el.data(
		  "timer",
		  setTimeout(function () {
			$el.trigger(transitionEnd);
		  }, duration + 33)
		);
	  },
  
	  stop: function ($el, callCallback) {
		if ($el && $el.length) {
		  clearTimeout($el.data("timer"));
  
		  if (callCallback) {
			$el.trigger(transitionEnd);
		  }
  
		  $el.off(transitionEnd).css("transition-duration", "");
  
		  $el.parent().removeClass("fancybox-is-scaling");
		}
	  }
	};
  
	// Default click handler for "fancyboxed" links
	// ============================================
  
	function _run(e, opts) {
	  var items = [],
		index = 0,
		$target,
		value,
		instance;
  
	  // Avoid opening multiple times
	  if (e && e.isDefaultPrevented()) {
		return;
	  }
  
	  e.preventDefault();
  
	  opts = opts || {};
  
	  if (e && e.data) {
		opts = mergeOpts(e.data.options, opts);
	  }
  
	  $target = opts.$target || $(e.currentTarget).trigger("blur");
	  instance = $.fancybox.getInstance();
  
	  if (instance && instance.$trigger && instance.$trigger.is($target)) {
		return;
	  }
  
	  if (opts.selector) {
		items = $(opts.selector);
	  } else {
		// Get all related items and find index for clicked one
		value = $target.attr("data-fancybox") || "";
  
		if (value) {
		  items = e.data ? e.data.items : [];
		  items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
		} else {
		  items = [$target];
		}
	  }
  
	  index = $(items).index($target);
  
	  // Sometimes current item can not be found
	  if (index < 0) {
		index = 0;
	  }
  
	  instance = $.fancybox.open(items, opts, index);
  
	  // Save last active element
	  instance.$trigger = $target;
	}
  
	// Create a jQuery plugin
	// ======================
  
	$.fn.fancybox = function (options) {
	  var selector;
  
	  options = options || {};
	  selector = options.selector || false;
  
	  if (selector) {
		// Use body element instead of document so it executes first
		$("body")
		  .off("click.fb-start", selector)
		  .on("click.fb-start", selector, {
			options: options
		  }, _run);
	  } else {
		this.off("click.fb-start").on(
		  "click.fb-start", {
			items: this,
			options: options
		  },
		  _run
		);
	  }
  
	  return this;
	};
  
	// Self initializing plugin for all elements having `data-fancybox` attribute
	// ==========================================================================
  
	$D.on("click.fb-start", "[data-fancybox]", _run);
  
	// Enable "trigger elements"
	// =========================
  
	$D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
	  $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
		.eq($(this).attr("data-fancybox-index") || 0)
		.trigger("click.fb-start", {
		  $trigger: $(this)
		});
	});
  
	// Track focus event for better accessibility styling
	// ==================================================
	(function () {
	  var buttonStr = ".fancybox-button",
		focusStr = "fancybox-focus",
		$pressed = null;
  
	  $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
		switch (e.type) {
		  case "mousedown":
			$pressed = $(this);
			break;
		  case "mouseup":
			$pressed = null;
			break;
		  case "focusin":
			$(buttonStr).removeClass(focusStr);
  
			if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
			  $(this).addClass(focusStr);
			}
			break;
		  case "focusout":
			$(buttonStr).removeClass(focusStr);
			break;
		}
	  });
	})();
  })(window, document, jQuery);
  // ==========================================================================
  //
  // Media
  // Adds additional media type support
  //
  // ==========================================================================
  (function ($) {
	"use strict";
  
	// Object containing properties for each media type
	var defaults = {
	  youtube: {
		matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
		params: {
		  autoplay: 1,
		  autohide: 1,
		  fs: 1,
		  rel: 0,
		  hd: 1,
		  wmode: "transparent",
		  enablejsapi: 1,
		  html5: 1
		},
		paramPlace: 8,
		type: "iframe",
		url: "https://www.youtube-nocookie.com/embed/$4",
		thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
	  },
  
	  vimeo: {
		matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
		params: {
		  autoplay: 1,
		  hd: 1,
		  show_title: 1,
		  show_byline: 1,
		  show_portrait: 0,
		  fullscreen: 1
		},
		paramPlace: 3,
		type: "iframe",
		url: "//player.vimeo.com/video/$2"
	  },
  
	  instagram: {
		matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
		type: "image",
		url: "//$1/p/$2/media/?size=l"
	  },
  
	  // Examples:
	  // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
	  // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
	  // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
	  // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
	  gmap_place: {
		matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
		type: "iframe",
		url: function (rez) {
		  return (
			"//maps.google." +
			rez[2] +
			"/?ll=" +
			(rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
			"&output=" +
			(rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
		  );
		}
	  },
  
	  // Examples:
	  // https://www.google.com/maps/search/Empire+State+Building/
	  // https://www.google.com/maps/search/?api=1&query=centurylink+field
	  // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
	  gmap_search: {
		matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
		type: "iframe",
		url: function (rez) {
		  return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
		}
	  }
	};
  
	// Formats matching url to final form
	var format = function (url, rez, params) {
	  if (!url) {
		return;
	  }
  
	  params = params || "";
  
	  if ($.type(params) === "object") {
		params = $.param(params, true);
	  }
  
	  $.each(rez, function (key, value) {
		url = url.replace("$" + key, value || "");
	  });
  
	  if (params.length) {
		url += (url.indexOf("?") > 0 ? "&" : "?") + params;
	  }
  
	  return url;
	};
  
	$(document).on("objectNeedsType.fb", function (e, instance, item) {
	  var url = item.src || "",
		type = false,
		media,
		thumb,
		rez,
		params,
		urlParams,
		paramObj,
		provider;
  
	  media = $.extend(true, {}, defaults, item.opts.media);
  
	  // Look for any matching media type
	  $.each(media, function (providerName, providerOpts) {
		rez = url.match(providerOpts.matcher);
  
		if (!rez) {
		  return;
		}
  
		type = providerOpts.type;
		provider = providerName;
		paramObj = {};
  
		if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
		  urlParams = rez[providerOpts.paramPlace];
  
		  if (urlParams[0] == "?") {
			urlParams = urlParams.substring(1);
		  }
  
		  urlParams = urlParams.split("&");
  
		  for (var m = 0; m < urlParams.length; ++m) {
			var p = urlParams[m].split("=", 2);
  
			if (p.length == 2) {
			  paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
			}
		  }
		}
  
		params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
  
		url =
		  $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
  
		thumb =
		  $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
  
		if (providerName === "youtube") {
		  url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
			return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
		  });
		} else if (providerName === "vimeo") {
		  url = url.replace("&%23", "#");
		}
  
		return false;
	  });
  
	  // If it is found, then change content type and update the url
  
	  if (type) {
		if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
		  item.opts.thumb = thumb;
		}
  
		if (type === "iframe") {
		  item.opts = $.extend(true, item.opts, {
			iframe: {
			  preload: false,
			  attr: {
				scrolling: "no"
			  }
			}
		  });
		}
  
		$.extend(item, {
		  type: type,
		  src: url,
		  origSrc: item.src,
		  contentSource: provider,
		  contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
		});
	  } else if (url) {
		item.type = item.opts.defaultType;
	  }
	});
  
	// Load YouTube/Video API on request to detect when video finished playing
	var VideoAPILoader = {
	  youtube: {
		src: "https://www.youtube.com/iframe_api",
		class: "YT",
		loading: false,
		loaded: false
	  },
  
	  vimeo: {
		src: "https://player.vimeo.com/api/player.js",
		class: "Vimeo",
		loading: false,
		loaded: false
	  },
  
	  load: function (vendor) {
		var _this = this,
		  script;
  
		if (this[vendor].loaded) {
		  setTimeout(function () {
			_this.done(vendor);
		  });
		  return;
		}
  
		if (this[vendor].loading) {
		  return;
		}
  
		this[vendor].loading = true;
  
		script = document.createElement("script");
		script.type = "text/javascript";
		script.src = this[vendor].src;
  
		if (vendor === "youtube") {
		  window.onYouTubeIframeAPIReady = function () {
			_this[vendor].loaded = true;
			_this.done(vendor);
		  };
		} else {
		  script.onload = function () {
			_this[vendor].loaded = true;
			_this.done(vendor);
		  };
		}
  
		document.body.appendChild(script);
	  },
	  done: function (vendor) {
		var instance, $el, player;
  
		if (vendor === "youtube") {
		  delete window.onYouTubeIframeAPIReady;
		}
  
		instance = $.fancybox.getInstance();
  
		if (instance) {
		  $el = instance.current.$content.find("iframe");
  
		  if (vendor === "youtube" && YT !== undefined && YT) {
			player = new YT.Player($el.attr("id"), {
			  events: {
				onStateChange: function (e) {
				  if (e.data == 0) {
					instance.next();
				  }
				}
			  }
			});
		  } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
			player = new Vimeo.Player($el);
  
			player.on("ended", function () {
			  instance.next();
			});
		  }
		}
	  }
	};
  
	$(document).on({
	  "afterShow.fb": function (e, instance, current) {
		if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
		  VideoAPILoader.load(current.contentSource);
		}
	  }
	});
  })(jQuery);
  // ==========================================================================
  //
  // Guestures
  // Adds touch guestures, handles click and tap events
  //
  // ==========================================================================
  (function (window, document, $) {
	"use strict";
  
	var requestAFrame = (function () {
	  return (
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		// if all else fails, use setTimeout
		function (callback) {
		  return window.setTimeout(callback, 1000 / 60);
		}
	  );
	})();
  
	var cancelAFrame = (function () {
	  return (
		window.cancelAnimationFrame ||
		window.webkitCancelAnimationFrame ||
		window.mozCancelAnimationFrame ||
		window.oCancelAnimationFrame ||
		function (id) {
		  window.clearTimeout(id);
		}
	  );
	})();
  
	var getPointerXY = function (e) {
	  var result = [];
  
	  e = e.originalEvent || e || window.e;
	  e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
  
	  for (var key in e) {
		if (e[key].pageX) {
		  result.push({
			x: e[key].pageX,
			y: e[key].pageY
		  });
		} else if (e[key].clientX) {
		  result.push({
			x: e[key].clientX,
			y: e[key].clientY
		  });
		}
	  }
  
	  return result;
	};
  
	var distance = function (point2, point1, what) {
	  if (!point1 || !point2) {
		return 0;
	  }
  
	  if (what === "x") {
		return point2.x - point1.x;
	  } else if (what === "y") {
		return point2.y - point1.y;
	  }
  
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	};
  
	var isClickable = function ($el) {
	  if (
		$el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
		$.isFunction($el.get(0).onclick) ||
		$el.data("selectable")
	  ) {
		return true;
	  }
  
	  // Check for attributes like data-fancybox-next or data-fancybox-close
	  for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
		if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
		  return true;
		}
	  }
  
	  return false;
	};
  
	var hasScrollbars = function (el) {
	  var overflowY = window.getComputedStyle(el)["overflow-y"],
		overflowX = window.getComputedStyle(el)["overflow-x"],
		vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
		horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
  
	  return vertical || horizontal;
	};
  
	var isScrollable = function ($el) {
	  var rez = false;
  
	  while (true) {
		rez = hasScrollbars($el.get(0));
  
		if (rez) {
		  break;
		}
  
		$el = $el.parent();
  
		if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
		  break;
		}
	  }
  
	  return rez;
	};
  
	var Guestures = function (instance) {
	  var self = this;
  
	  self.instance = instance;
  
	  self.$bg = instance.$refs.bg;
	  self.$stage = instance.$refs.stage;
	  self.$container = instance.$refs.container;
  
	  self.destroy();
  
	  self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
	};
  
	Guestures.prototype.destroy = function () {
	  var self = this;
  
	  self.$container.off(".fb.touch");
  
	  $(document).off(".fb.touch");
  
	  if (self.requestId) {
		cancelAFrame(self.requestId);
		self.requestId = null;
	  }
  
	  if (self.tapped) {
		clearTimeout(self.tapped);
		self.tapped = null;
	  }
	};
  
	Guestures.prototype.ontouchstart = function (e) {
	  var self = this,
		$target = $(e.target),
		instance = self.instance,
		current = instance.current,
		$slide = current.$slide,
		$content = current.$content,
		isTouchDevice = e.type == "touchstart";
  
	  // Do not respond to both (touch and mouse) events
	  if (isTouchDevice) {
		self.$container.off("mousedown.fb.touch");
	  }
  
	  // Ignore right click
	  if (e.originalEvent && e.originalEvent.button == 2) {
		return;
	  }
  
	  // Ignore taping on links, buttons, input elements
	  if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
		return;
	  }
	  // Ignore clicks on the scrollbar
	  if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
		return;
	  }
  
	  // Ignore clicks while zooming or closing
	  if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
		e.stopPropagation();
		e.preventDefault();
  
		return;
	  }
  
	  self.realPoints = self.startPoints = getPointerXY(e);
  
	  if (!self.startPoints.length) {
		return;
	  }
  
	  // Allow other scripts to catch touch event if "touch" is set to false
	  if (current.touch) {
		e.stopPropagation();
	  }
  
	  self.startEvent = e;
  
	  self.canTap = true;
	  self.$target = $target;
	  self.$content = $content;
	  self.opts = current.opts.touch;
  
	  self.isPanning = false;
	  self.isSwiping = false;
	  self.isZooming = false;
	  self.isScrolling = false;
	  self.canPan = instance.canPan();
  
	  self.startTime = new Date().getTime();
	  self.distanceX = self.distanceY = self.distance = 0;
  
	  self.canvasWidth = Math.round($slide[0].clientWidth);
	  self.canvasHeight = Math.round($slide[0].clientHeight);
  
	  self.contentLastPos = null;
	  self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
		top: 0,
		left: 0
	  };
	  self.sliderStartPos = $.fancybox.getTranslate($slide);
  
	  // Since position will be absolute, but we need to make it relative to the stage
	  self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
  
	  self.sliderStartPos.top -= self.stagePos.top;
	  self.sliderStartPos.left -= self.stagePos.left;
  
	  self.contentStartPos.top -= self.stagePos.top;
	  self.contentStartPos.left -= self.stagePos.left;
  
	  $(document)
		.off(".fb.touch")
		.on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
		.on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
  
	  if ($.fancybox.isMobile) {
		document.addEventListener("scroll", self.onscroll, true);
	  }
  
	  // Skip if clicked outside the sliding area
	  if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
		if ($target.is(".fancybox-image")) {
		  e.preventDefault();
		}
  
		if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
		  return;
		}
	  }
  
	  self.isScrollable = isScrollable($target) || isScrollable($target.parent());
  
	  // Check if element is scrollable and try to prevent default behavior (scrolling)
	  if (!($.fancybox.isMobile && self.isScrollable)) {
		e.preventDefault();
	  }
  
	  // One finger or mouse click - swipe or pan an image
	  if (self.startPoints.length === 1 || current.hasError) {
		if (self.canPan) {
		  $.fancybox.stop(self.$content);
  
		  self.isPanning = true;
		} else {
		  self.isSwiping = true;
		}
  
		self.$container.addClass("fancybox-is-grabbing");
	  }
  
	  // Two fingers - zoom image
	  if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
		self.canTap = false;
		self.isSwiping = false;
		self.isPanning = false;
  
		self.isZooming = true;
  
		$.fancybox.stop(self.$content);
  
		self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
		self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
  
		self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
		self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
  
		self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
	  }
	};
  
	Guestures.prototype.onscroll = function (e) {
	  var self = this;
  
	  self.isScrolling = true;
  
	  document.removeEventListener("scroll", self.onscroll, true);
	};
  
	Guestures.prototype.ontouchmove = function (e) {
	  var self = this;
  
	  // Make sure user has not released over iframe or disabled element
	  if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
		self.ontouchend(e);
		return;
	  }
  
	  if (self.isScrolling) {
		self.canTap = false;
		return;
	  }
  
	  self.newPoints = getPointerXY(e);
  
	  if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
		return;
	  }
  
	  if (!(self.isSwiping && self.isSwiping === true)) {
		e.preventDefault();
	  }
  
	  self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
	  self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
  
	  self.distance = distance(self.newPoints[0], self.startPoints[0]);
  
	  // Skip false ontouchmove events (Chrome)
	  if (self.distance > 0) {
		if (self.isSwiping) {
		  self.onSwipe(e);
		} else if (self.isPanning) {
		  self.onPan();
		} else if (self.isZooming) {
		  self.onZoom();
		}
	  }
	};
  
	Guestures.prototype.onSwipe = function (e) {
	  var self = this,
		instance = self.instance,
		swiping = self.isSwiping,
		left = self.sliderStartPos.left || 0,
		angle;
  
	  // If direction is not yet determined
	  if (swiping === true) {
		// We need at least 10px distance to correctly calculate an angle
		if (Math.abs(self.distance) > 10) {
		  self.canTap = false;
  
		  if (instance.group.length < 2 && self.opts.vertical) {
			self.isSwiping = "y";
		  } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
			self.isSwiping = "x";
		  } else {
			angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);
  
			self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
		  }
  
		  if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
			self.isScrolling = true;
  
			return;
		  }
  
		  instance.isDragging = self.isSwiping;
  
		  // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
		  self.startPoints = self.newPoints;
  
		  $.each(instance.slides, function (index, slide) {
			var slidePos, stagePos;
  
			$.fancybox.stop(slide.$slide);
  
			slidePos = $.fancybox.getTranslate(slide.$slide);
			stagePos = $.fancybox.getTranslate(instance.$refs.stage);
  
			slide.$slide
			  .css({
				transform: "",
				opacity: "",
				"transition-duration": ""
			  })
			  .removeClass("fancybox-animated")
			  .removeClass(function (index, className) {
				return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
			  });
  
			if (slide.pos === instance.current.pos) {
			  self.sliderStartPos.top = slidePos.top - stagePos.top;
			  self.sliderStartPos.left = slidePos.left - stagePos.left;
			}
  
			$.fancybox.setTranslate(slide.$slide, {
			  top: slidePos.top - stagePos.top,
			  left: slidePos.left - stagePos.left
			});
		  });
  
		  // Stop slideshow
		  if (instance.SlideShow && instance.SlideShow.isActive) {
			instance.SlideShow.stop();
		  }
		}
  
		return;
	  }
  
	  // Sticky edges
	  if (swiping == "x") {
		if (
		  self.distanceX > 0 &&
		  (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
		) {
		  left = left + Math.pow(self.distanceX, 0.8);
		} else if (
		  self.distanceX < 0 &&
		  (self.instance.group.length < 2 ||
			(self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
		) {
		  left = left - Math.pow(-self.distanceX, 0.8);
		} else {
		  left = left + self.distanceX;
		}
	  }
  
	  self.sliderLastPos = {
		top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
		left: left
	  };
  
	  if (self.requestId) {
		cancelAFrame(self.requestId);
  
		self.requestId = null;
	  }
  
	  self.requestId = requestAFrame(function () {
		if (self.sliderLastPos) {
		  $.each(self.instance.slides, function (index, slide) {
			var pos = slide.pos - self.instance.currPos;
  
			$.fancybox.setTranslate(slide.$slide, {
			  top: self.sliderLastPos.top,
			  left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
			});
		  });
  
		  self.$container.addClass("fancybox-is-sliding");
		}
	  });
	};
  
	Guestures.prototype.onPan = function () {
	  var self = this;
  
	  // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
	  if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
		self.startPoints = self.newPoints;
		return;
	  }
  
	  self.canTap = false;
  
	  self.contentLastPos = self.limitMovement();
  
	  if (self.requestId) {
		cancelAFrame(self.requestId);
	  }
  
	  self.requestId = requestAFrame(function () {
		$.fancybox.setTranslate(self.$content, self.contentLastPos);
	  });
	};
  
	// Make panning sticky to the edges
	Guestures.prototype.limitMovement = function () {
	  var self = this;
  
	  var canvasWidth = self.canvasWidth;
	  var canvasHeight = self.canvasHeight;
  
	  var distanceX = self.distanceX;
	  var distanceY = self.distanceY;
  
	  var contentStartPos = self.contentStartPos;
  
	  var currentOffsetX = contentStartPos.left;
	  var currentOffsetY = contentStartPos.top;
  
	  var currentWidth = contentStartPos.width;
	  var currentHeight = contentStartPos.height;
  
	  var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
  
	  if (currentWidth > canvasWidth) {
		newOffsetX = currentOffsetX + distanceX;
	  } else {
		newOffsetX = currentOffsetX;
	  }
  
	  newOffsetY = currentOffsetY + distanceY;
  
	  // Slow down proportionally to traveled distance
	  minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
	  minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
  
	  maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
	  maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);
  
	  //   ->
	  if (distanceX > 0 && newOffsetX > minTranslateX) {
		newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
	  }
  
	  //    <-
	  if (distanceX < 0 && newOffsetX < maxTranslateX) {
		newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
	  }
  
	  //   \/
	  if (distanceY > 0 && newOffsetY > minTranslateY) {
		newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
	  }
  
	  //   /\
	  if (distanceY < 0 && newOffsetY < maxTranslateY) {
		newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
	  }
  
	  return {
		top: newOffsetY,
		left: newOffsetX
	  };
	};
  
	Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
	  var self = this;
  
	  var canvasWidth = self.canvasWidth;
	  var canvasHeight = self.canvasHeight;
  
	  if (newWidth > canvasWidth) {
		newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
		newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
	  } else {
		// Center horizontally
		newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
	  }
  
	  if (newHeight > canvasHeight) {
		newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
		newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
	  } else {
		// Center vertically
		newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
	  }
  
	  return {
		top: newOffsetY,
		left: newOffsetX
	  };
	};
  
	Guestures.prototype.onZoom = function () {
	  var self = this;
  
	  // Calculate current distance between points to get pinch ratio and new width and height
	  var contentStartPos = self.contentStartPos;
  
	  var currentWidth = contentStartPos.width;
	  var currentHeight = contentStartPos.height;
  
	  var currentOffsetX = contentStartPos.left;
	  var currentOffsetY = contentStartPos.top;
  
	  var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
  
	  var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
  
	  var newWidth = Math.floor(currentWidth * pinchRatio);
	  var newHeight = Math.floor(currentHeight * pinchRatio);
  
	  // This is the translation due to pinch-zooming
	  var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
	  var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;
  
	  // Point between the two touches
	  var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
	  var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();
  
	  // And this is the translation due to translation of the centerpoint
	  // between the two fingers
	  var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
	  var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;
  
	  // The new offset is the old/current one plus the total translation
	  var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
	  var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
  
	  var newPos = {
		top: newOffsetY,
		left: newOffsetX,
		scaleX: pinchRatio,
		scaleY: pinchRatio
	  };
  
	  self.canTap = false;
  
	  self.newWidth = newWidth;
	  self.newHeight = newHeight;
  
	  self.contentLastPos = newPos;
  
	  if (self.requestId) {
		cancelAFrame(self.requestId);
	  }
  
	  self.requestId = requestAFrame(function () {
		$.fancybox.setTranslate(self.$content, self.contentLastPos);
	  });
	};
  
	Guestures.prototype.ontouchend = function (e) {
	  var self = this;
  
	  var swiping = self.isSwiping;
	  var panning = self.isPanning;
	  var zooming = self.isZooming;
	  var scrolling = self.isScrolling;
  
	  self.endPoints = getPointerXY(e);
	  self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
  
	  self.$container.removeClass("fancybox-is-grabbing");
  
	  $(document).off(".fb.touch");
  
	  document.removeEventListener("scroll", self.onscroll, true);
  
	  if (self.requestId) {
		cancelAFrame(self.requestId);
  
		self.requestId = null;
	  }
  
	  self.isSwiping = false;
	  self.isPanning = false;
	  self.isZooming = false;
	  self.isScrolling = false;
  
	  self.instance.isDragging = false;
  
	  if (self.canTap) {
		return self.onTap(e);
	  }
  
	  self.speed = 100;
  
	  // Speed in px/ms
	  self.velocityX = (self.distanceX / self.dMs) * 0.5;
	  self.velocityY = (self.distanceY / self.dMs) * 0.5;
  
	  if (panning) {
		self.endPanning();
	  } else if (zooming) {
		self.endZooming();
	  } else {
		self.endSwiping(swiping, scrolling);
	  }
  
	  return;
	};
  
	Guestures.prototype.endSwiping = function (swiping, scrolling) {
	  var self = this,
		ret = false,
		len = self.instance.group.length,
		distanceX = Math.abs(self.distanceX),
		canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
		speedX = 300;
  
	  self.sliderLastPos = null;
  
	  // Close if swiped vertically / navigate if horizontally
	  if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
		// Continue vertical movement
		$.fancybox.animate(
		  self.instance.current.$slide, {
			top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
			opacity: 0
		  },
		  200
		);
		ret = self.instance.close(true, 250);
	  } else if (canAdvance && self.distanceX > 0) {
		ret = self.instance.previous(speedX);
	  } else if (canAdvance && self.distanceX < 0) {
		ret = self.instance.next(speedX);
	  }
  
	  if (ret === false && (swiping == "x" || swiping == "y")) {
		self.instance.centerSlide(200);
	  }
  
	  self.$container.removeClass("fancybox-is-sliding");
	};
  
	// Limit panning from edges
	// ========================
	Guestures.prototype.endPanning = function () {
	  var self = this,
		newOffsetX,
		newOffsetY,
		newPos;
  
	  if (!self.contentLastPos) {
		return;
	  }
  
	  if (self.opts.momentum === false || self.dMs > 350) {
		newOffsetX = self.contentLastPos.left;
		newOffsetY = self.contentLastPos.top;
	  } else {
		// Continue movement
		newOffsetX = self.contentLastPos.left + self.velocityX * 500;
		newOffsetY = self.contentLastPos.top + self.velocityY * 500;
	  }
  
	  newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
  
	  newPos.width = self.contentStartPos.width;
	  newPos.height = self.contentStartPos.height;
  
	  $.fancybox.animate(self.$content, newPos, 366);
	};
  
	Guestures.prototype.endZooming = function () {
	  var self = this;
  
	  var current = self.instance.current;
  
	  var newOffsetX, newOffsetY, newPos, reset;
  
	  var newWidth = self.newWidth;
	  var newHeight = self.newHeight;
  
	  if (!self.contentLastPos) {
		return;
	  }
  
	  newOffsetX = self.contentLastPos.left;
	  newOffsetY = self.contentLastPos.top;
  
	  reset = {
		top: newOffsetY,
		left: newOffsetX,
		width: newWidth,
		height: newHeight,
		scaleX: 1,
		scaleY: 1
	  };
  
	  // Reset scalex/scaleY values; this helps for perfomance and does not break animation
	  $.fancybox.setTranslate(self.$content, reset);
  
	  if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
		self.instance.scaleToFit(150);
	  } else if (newWidth > current.width || newHeight > current.height) {
		self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
	  } else {
		newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
  
		$.fancybox.animate(self.$content, newPos, 150);
	  }
	};
  
	Guestures.prototype.onTap = function (e) {
	  var self = this;
	  var $target = $(e.target);
  
	  var instance = self.instance;
	  var current = instance.current;
  
	  var endPoints = (e && getPointerXY(e)) || self.startPoints;
  
	  var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
	  var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
  
	  var where;
  
	  var process = function (prefix) {
		var action = current.opts[prefix];
  
		if ($.isFunction(action)) {
		  action = action.apply(instance, [current, e]);
		}
  
		if (!action) {
		  return;
		}
  
		switch (action) {
		  case "close":
			instance.close(self.startEvent);
  
			break;
  
		  case "toggleControls":
			instance.toggleControls();
  
			break;
  
		  case "next":
			instance.next();
  
			break;
  
		  case "nextOrClose":
			if (instance.group.length > 1) {
			  instance.next();
			} else {
			  instance.close(self.startEvent);
			}
  
			break;
  
		  case "zoom":
			if (current.type == "image" && (current.isLoaded || current.$ghost)) {
			  if (instance.canPan()) {
				instance.scaleToFit();
			  } else if (instance.isScaledDown()) {
				instance.scaleToActual(tapX, tapY);
			  } else if (instance.group.length < 2) {
				instance.close(self.startEvent);
			  }
			}
  
			break;
		}
	  };
  
	  // Ignore right click
	  if (e.originalEvent && e.originalEvent.button == 2) {
		return;
	  }
  
	  // Skip if clicked on the scrollbar
	  if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
		return;
	  }
  
	  // Check where is clicked
	  if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
		where = "Outside";
	  } else if ($target.is(".fancybox-slide")) {
		where = "Slide";
	  } else if (
		instance.current.$content &&
		instance.current.$content
		.find($target)
		.addBack()
		.filter($target).length
	  ) {
		where = "Content";
	  } else {
		return;
	  }
  
	  // Check if this is a double tap
	  if (self.tapped) {
		// Stop previously created single tap
		clearTimeout(self.tapped);
		self.tapped = null;
  
		// Skip if distance between taps is too big
		if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
		  return this;
		}
  
		// OK, now we assume that this is a double-tap
		process("dblclick" + where);
	  } else {
		// Single tap will be processed if user has not clicked second time within 300ms
		// or there is no need to wait for double-tap
		self.tapX = tapX;
		self.tapY = tapY;
  
		if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
		  self.tapped = setTimeout(function () {
			self.tapped = null;
  
			if (!instance.isAnimating) {
			  process("click" + where);
			}
		  }, 500);
		} else {
		  process("click" + where);
		}
	  }
  
	  return this;
	};
  
	$(document)
	  .on("onActivate.fb", function (e, instance) {
		if (instance && !instance.Guestures) {
		  instance.Guestures = new Guestures(instance);
		}
	  })
	  .on("beforeClose.fb", function (e, instance) {
		if (instance && instance.Guestures) {
		  instance.Guestures.destroy();
		}
	  });
  })(window, document, jQuery);
  // ==========================================================================
  //
  // SlideShow
  // Enables slideshow functionality
  //
  // Example of usage:
  // $.fancybox.getInstance().SlideShow.start()
  //
  // ==========================================================================
  (function (document, $) {
	"use strict";
  
	$.extend(true, $.fancybox.defaults, {
	  btnTpl: {
		slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
		  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
		  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
		  "</button>"
	  },
	  slideShow: {
		autoStart: false,
		speed: 3000,
		progress: true
	  }
	});
  
	var SlideShow = function (instance) {
	  this.instance = instance;
	  this.init();
	};
  
	$.extend(SlideShow.prototype, {
	  timer: null,
	  isActive: false,
	  $button: null,
  
	  init: function () {
		var self = this,
		  instance = self.instance,
		  opts = instance.group[instance.currIndex].opts.slideShow;
  
		self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
		  self.toggle();
		});
  
		if (instance.group.length < 2 || !opts) {
		  self.$button.hide();
		} else if (opts.progress) {
		  self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
		}
	  },
  
	  set: function (force) {
		var self = this,
		  instance = self.instance,
		  current = instance.current;
  
		// Check if reached last element
		if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
		  if (self.isActive && current.contentType !== "video") {
			if (self.$progress) {
			  $.fancybox.animate(self.$progress.show(), {
				scaleX: 1
			  }, current.opts.slideShow.speed);
			}
  
			self.timer = setTimeout(function () {
			  if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
				instance.jumpTo(0);
			  } else {
				instance.next();
			  }
			}, current.opts.slideShow.speed);
		  }
		} else {
		  self.stop();
		  instance.idleSecondsCounter = 0;
		  instance.showControls();
		}
	  },
  
	  clear: function () {
		var self = this;
  
		clearTimeout(self.timer);
  
		self.timer = null;
  
		if (self.$progress) {
		  self.$progress.removeAttr("style").hide();
		}
	  },
  
	  start: function () {
		var self = this,
		  current = self.instance.current;
  
		if (current) {
		  self.$button
			.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
			.removeClass("fancybox-button--play")
			.addClass("fancybox-button--pause");
  
		  self.isActive = true;
  
		  if (current.isComplete) {
			self.set(true);
		  }
  
		  self.instance.trigger("onSlideShowChange", true);
		}
	  },
  
	  stop: function () {
		var self = this,
		  current = self.instance.current;
  
		self.clear();
  
		self.$button
		  .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
		  .removeClass("fancybox-button--pause")
		  .addClass("fancybox-button--play");
  
		self.isActive = false;
  
		self.instance.trigger("onSlideShowChange", false);
  
		if (self.$progress) {
		  self.$progress.removeAttr("style").hide();
		}
	  },
  
	  toggle: function () {
		var self = this;
  
		if (self.isActive) {
		  self.stop();
		} else {
		  self.start();
		}
	  }
	});
  
	$(document).on({
	  "onInit.fb": function (e, instance) {
		if (instance && !instance.SlideShow) {
		  instance.SlideShow = new SlideShow(instance);
		}
	  },
  
	  "beforeShow.fb": function (e, instance, current, firstRun) {
		var SlideShow = instance && instance.SlideShow;
  
		if (firstRun) {
		  if (SlideShow && current.opts.slideShow.autoStart) {
			SlideShow.start();
		  }
		} else if (SlideShow && SlideShow.isActive) {
		  SlideShow.clear();
		}
	  },
  
	  "afterShow.fb": function (e, instance, current) {
		var SlideShow = instance && instance.SlideShow;
  
		if (SlideShow && SlideShow.isActive) {
		  SlideShow.set();
		}
	  },
  
	  "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
		var SlideShow = instance && instance.SlideShow;
  
		// "P" or Spacebar
		if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
		  keypress.preventDefault();
  
		  SlideShow.toggle();
		}
	  },
  
	  "beforeClose.fb onDeactivate.fb": function (e, instance) {
		var SlideShow = instance && instance.SlideShow;
  
		if (SlideShow) {
		  SlideShow.stop();
		}
	  }
	});
  
	// Page Visibility API to pause slideshow when window is not active
	$(document).on("visibilitychange", function () {
	  var instance = $.fancybox.getInstance(),
		SlideShow = instance && instance.SlideShow;
  
	  if (SlideShow && SlideShow.isActive) {
		if (document.hidden) {
		  SlideShow.clear();
		} else {
		  SlideShow.set();
		}
	  }
	});
  })(document, jQuery);
  // ==========================================================================
  //
  // FullScreen
  // Adds fullscreen functionality
  //
  // ==========================================================================
  (function (document, $) {
	"use strict";
  
	// Collection of methods supported by user browser
	var fn = (function () {
	  var fnMap = [
		["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
		// new WebKit
		[
		  "webkitRequestFullscreen",
		  "webkitExitFullscreen",
		  "webkitFullscreenElement",
		  "webkitFullscreenEnabled",
		  "webkitfullscreenchange",
		  "webkitfullscreenerror"
		],
		// old WebKit (Safari 5.1)
		[
		  "webkitRequestFullScreen",
		  "webkitCancelFullScreen",
		  "webkitCurrentFullScreenElement",
		  "webkitCancelFullScreen",
		  "webkitfullscreenchange",
		  "webkitfullscreenerror"
		],
		[
		  "mozRequestFullScreen",
		  "mozCancelFullScreen",
		  "mozFullScreenElement",
		  "mozFullScreenEnabled",
		  "mozfullscreenchange",
		  "mozfullscreenerror"
		],
		["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
	  ];
  
	  var ret = {};
  
	  for (var i = 0; i < fnMap.length; i++) {
		var val = fnMap[i];
  
		if (val && val[1] in document) {
		  for (var j = 0; j < val.length; j++) {
			ret[fnMap[0][j]] = val[j];
		  }
  
		  return ret;
		}
	  }
  
	  return false;
	})();
  
	if (fn) {
	  var FullScreen = {
		request: function (elem) {
		  elem = elem || document.documentElement;
  
		  elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
		},
		exit: function () {
		  document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
		  elem = elem || document.documentElement;
  
		  if (this.isFullscreen()) {
			this.exit();
		  } else {
			this.request(elem);
		  }
		},
		isFullscreen: function () {
		  return Boolean(document[fn.fullscreenElement]);
		},
		enabled: function () {
		  return Boolean(document[fn.fullscreenEnabled]);
		}
	  };
  
	  $.extend(true, $.fancybox.defaults, {
		btnTpl: {
		  fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
			"</button>"
		},
		fullScreen: {
		  autoStart: false
		}
	  });
  
	  $(document).on(fn.fullscreenchange, function () {
		var isFullscreen = FullScreen.isFullscreen(),
		  instance = $.fancybox.getInstance();
  
		if (instance) {
		  // If image is zooming, then force to stop and reposition properly
		  if (instance.current && instance.current.type === "image" && instance.isAnimating) {
			instance.isAnimating = false;
  
			instance.update(true, true, 0);
  
			if (!instance.isComplete) {
			  instance.complete();
			}
		  }
  
		  instance.trigger("onFullscreenChange", isFullscreen);
  
		  instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
  
		  instance.$refs.toolbar
			.find("[data-fancybox-fullscreen]")
			.toggleClass("fancybox-button--fsenter", !isFullscreen)
			.toggleClass("fancybox-button--fsexit", isFullscreen);
		}
	  });
	}
  
	$(document).on({
	  "onInit.fb": function (e, instance) {
		var $container;
  
		if (!fn) {
		  instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
  
		  return;
		}
  
		if (instance && instance.group[instance.currIndex].opts.fullScreen) {
		  $container = instance.$refs.container;
  
		  $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
			e.stopPropagation();
			e.preventDefault();
  
			FullScreen.toggle();
		  });
  
		  if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
			FullScreen.request();
		  }
  
		  // Expose API
		  instance.FullScreen = FullScreen;
		} else if (instance) {
		  instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
		}
	  },
  
	  "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
		// "F"
		if (instance && instance.FullScreen && keycode === 70) {
		  keypress.preventDefault();
  
		  instance.FullScreen.toggle();
		}
	  },
  
	  "beforeClose.fb": function (e, instance) {
		if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
		  FullScreen.exit();
		}
	  }
	});
  })(document, jQuery);
  // ==========================================================================
  //
  // Thumbs
  // Displays thumbnails in a grid
  //
  // ==========================================================================
  (function (document, $) {
	"use strict";
  
	var CLASS = "fancybox-thumbs",
	  CLASS_ACTIVE = CLASS + "-active";
  
	// Make sure there are default values
	$.fancybox.defaults = $.extend(
	  true, {
		btnTpl: {
		  thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
			"</button>"
		},
		thumbs: {
		  autoStart: false, // Display thumbnails on opening
		  hideOnClose: true, // Hide thumbnail grid when closing animation starts
		  parentEl: ".fancybox-container", // Container is injected into this element
		  axis: "y" // Vertical (y) or horizontal (x) scrolling
		}
	  },
	  $.fancybox.defaults
	);
  
	var FancyThumbs = function (instance) {
	  this.init(instance);
	};
  
	$.extend(FancyThumbs.prototype, {
	  $button: null,
	  $grid: null,
	  $list: null,
	  isVisible: false,
	  isActive: false,
  
	  init: function (instance) {
		var self = this,
		  group = instance.group,
		  enabled = 0;
  
		self.instance = instance;
		self.opts = group[instance.currIndex].opts.thumbs;
  
		instance.Thumbs = self;
  
		self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");
  
		// Enable thumbs if at least two group items have thumbnails
		for (var i = 0, len = group.length; i < len; i++) {
		  if (group[i].thumb) {
			enabled++;
		  }
  
		  if (enabled > 1) {
			break;
		  }
		}
  
		if (enabled > 1 && !!self.opts) {
		  self.$button.removeAttr("style").on("click", function () {
			self.toggle();
		  });
  
		  self.isActive = true;
		} else {
		  self.$button.hide();
		}
	  },
  
	  create: function () {
		var self = this,
		  instance = self.instance,
		  parentEl = self.opts.parentEl,
		  list = [],
		  src;
  
		if (!self.$grid) {
		  // Create main element
		  self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
			instance.$refs.container
			.find(parentEl)
			.addBack()
			.filter(parentEl)
		  );
  
		  // Add "click" event that performs gallery navigation
		  self.$grid.on("click", "a", function () {
			instance.jumpTo($(this).attr("data-index"));
		  });
		}
  
		// Build the list
		if (!self.$list) {
		  self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
		}
  
		$.each(instance.group, function (i, item) {
		  src = item.thumb;
  
		  if (!src && item.type === "image") {
			src = item.src;
		  }
  
		  list.push(
			'<a href="javascript:;" tabindex="0" data-index="' +
			i +
			'"' +
			(src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
			"></a>"
		  );
		});
  
		self.$list[0].innerHTML = list.join("");
  
		if (self.opts.axis === "x") {
		  // Set fixed width for list element to enable horizontal scrolling
		  self.$list.width(
			parseInt(self.$grid.css("padding-right"), 10) +
			instance.group.length *
			self.$list
			.children()
			.eq(0)
			.outerWidth(true)
		  );
		}
	  },
  
	  focus: function (duration) {
		var self = this,
		  $list = self.$list,
		  $grid = self.$grid,
		  thumb,
		  thumbPos;
  
		if (!self.instance.current) {
		  return;
		}
  
		thumb = $list
		  .children()
		  .removeClass(CLASS_ACTIVE)
		  .filter('[data-index="' + self.instance.current.index + '"]')
		  .addClass(CLASS_ACTIVE);
  
		thumbPos = thumb.position();
  
		// Check if need to scroll to make current thumb visible
		if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
		  $list.stop().animate({
			  scrollTop: $list.scrollTop() + thumbPos.top
			},
			duration
		  );
		} else if (
		  self.opts.axis === "x" &&
		  (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
		) {
		  $list
			.parent()
			.stop()
			.animate({
				scrollLeft: thumbPos.left
			  },
			  duration
			);
		}
	  },
  
	  update: function () {
		var that = this;
		that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
  
		if (that.isVisible) {
		  if (!that.$grid) {
			that.create();
		  }
  
		  that.instance.trigger("onThumbsShow");
  
		  that.focus(0);
		} else if (that.$grid) {
		  that.instance.trigger("onThumbsHide");
		}
  
		// Update content position
		that.instance.update();
	  },
  
	  hide: function () {
		this.isVisible = false;
		this.update();
	  },
  
	  show: function () {
		this.isVisible = true;
		this.update();
	  },
  
	  toggle: function () {
		this.isVisible = !this.isVisible;
		this.update();
	  }
	});
  
	$(document).on({
	  "onInit.fb": function (e, instance) {
		var Thumbs;
  
		if (instance && !instance.Thumbs) {
		  Thumbs = new FancyThumbs(instance);
  
		  if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
			Thumbs.show();
		  }
		}
	  },
  
	  "beforeShow.fb": function (e, instance, item, firstRun) {
		var Thumbs = instance && instance.Thumbs;
  
		if (Thumbs && Thumbs.isVisible) {
		  Thumbs.focus(firstRun ? 0 : 250);
		}
	  },
  
	  "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
		var Thumbs = instance && instance.Thumbs;
  
		// "G"
		if (Thumbs && Thumbs.isActive && keycode === 71) {
		  keypress.preventDefault();
  
		  Thumbs.toggle();
		}
	  },
  
	  "beforeClose.fb": function (e, instance) {
		var Thumbs = instance && instance.Thumbs;
  
		if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
		  Thumbs.$grid.hide();
		}
	  }
	});
  })(document, jQuery);
  //// ==========================================================================
  //
  // Share
  // Displays simple form for sharing current url
  //
  // ==========================================================================
  (function (document, $) {
	"use strict";
  
	$.extend(true, $.fancybox.defaults, {
	  btnTpl: {
		share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
		  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
		  "</button>"
	  },
	  share: {
		url: function (instance, item) {
		  return (
			(!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
		  );
		},
		tpl: '<div class="fancybox-share">' +
		  "<h1>{{SHARE}}</h1>" +
		  "<p>" +
		  '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
		  '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
		  "<span>Facebook</span>" +
		  "</a>" +
		  '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
		  '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
		  "<span>Twitter</span>" +
		  "</a>" +
		  '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
		  '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
		  "<span>Pinterest</span>" +
		  "</a>" +
		  "</p>" +
		  '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
		  "</div>"
	  }
	});
  
	function escapeHtml(string) {
	  var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"/": "&#x2F;",
		"`": "&#x60;",
		"=": "&#x3D;"
	  };
  
	  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
		return entityMap[s];
	  });
	}
  
	$(document).on("click", "[data-fancybox-share]", function () {
	  var instance = $.fancybox.getInstance(),
		current = instance.current || null,
		url,
		tpl;
  
	  if (!current) {
		return;
	  }
  
	  if ($.type(current.opts.share.url) === "function") {
		url = current.opts.share.url.apply(current, [instance, current]);
	  }
  
	  tpl = current.opts.share.tpl
		.replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
		.replace(/\{\{url\}\}/g, encodeURIComponent(url))
		.replace(/\{\{url_raw\}\}/g, escapeHtml(url))
		.replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
  
	  $.fancybox.open({
		src: instance.translate(instance, tpl),
		type: "html",
		opts: {
		  touch: false,
		  animationEffect: false,
		  afterLoad: function (shareInstance, shareCurrent) {
			// Close self if parent instance is closing
			instance.$refs.container.one("beforeClose.fb", function () {
			  shareInstance.close(null, 0);
			});
  
			// Opening links in a popup window
			shareCurrent.$content.find(".fancybox-share__button").click(function () {
			  window.open(this.href, "Share", "width=550, height=450");
			  return false;
			});
		  },
		  mobile: {
			autoFocus: false
		  }
		}
	  });
	});
  })(document, jQuery);
  // ==========================================================================
  //
  // Hash
  // Enables linking to each modal
  //
  // ==========================================================================
  (function (window, document, $) {
	"use strict";
  
	// Simple $.escapeSelector polyfill (for jQuery prior v3)
	if (!$.escapeSelector) {
	  $.escapeSelector = function (sel) {
		var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
		var fcssescape = function (ch, asCodePoint) {
		  if (asCodePoint) {
			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if (ch === "\0") {
			  return "\uFFFD";
			}
  
			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
		  }
  
		  // Other potentially-special ASCII characters get backslash-escaped
		  return "\\" + ch;
		};
  
		return (sel + "").replace(rcssescape, fcssescape);
	  };
	}
  
	// Get info about gallery name and current index from url
	function parseUrl() {
	  var hash = window.location.hash.substr(1),
		rez = hash.split("-"),
		index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
		gallery = rez.join("-");
  
	  return {
		hash: hash,
		/* Index is starting from 1 */
		index: index < 1 ? 1 : index,
		gallery: gallery
	  };
	}
  
	// Trigger click evnt on links to open new fancyBox instance
	function triggerFromUrl(url) {
	  if (url.gallery !== "") {
		// If we can find element matching 'data-fancybox' atribute,
		// then triggering click event should start fancyBox
		$("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
		  .eq(url.index - 1)
		  .focus()
		  .trigger("click.fb-start");
	  }
	}
  
	// Get gallery name from current instance
	function getGalleryID(instance) {
	  var opts, ret;
  
	  if (!instance) {
		return false;
	  }
  
	  opts = instance.current ? instance.current.opts : instance.opts;
	  ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
  
	  return ret === "" ? false : ret;
	}
  
	// Start when DOM becomes ready
	$(function () {
	  // Check if user has disabled this module
	  if ($.fancybox.defaults.hash === false) {
		return;
	  }
  
	  // Update hash when opening/closing fancyBox
	  $(document).on({
		"onInit.fb": function (e, instance) {
		  var url, gallery;
  
		  if (instance.group[instance.currIndex].opts.hash === false) {
			return;
		  }
  
		  url = parseUrl();
		  gallery = getGalleryID(instance);
  
		  // Make sure gallery start index matches index from hash
		  if (gallery && url.gallery && gallery == url.gallery) {
			instance.currIndex = url.index - 1;
		  }
		},
  
		"beforeShow.fb": function (e, instance, current, firstRun) {
		  var gallery;
  
		  if (!current || current.opts.hash === false) {
			return;
		  }
  
		  // Check if need to update window hash
		  gallery = getGalleryID(instance);
  
		  if (!gallery) {
			return;
		  }
  
		  // Variable containing last hash value set by fancyBox
		  // It will be used to determine if fancyBox needs to close after hash change is detected
		  instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");
  
		  // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
		  if (window.location.hash === "#" + instance.currentHash) {
			return;
		  }
  
		  if (firstRun && !instance.origHash) {
			instance.origHash = window.location.hash;
		  }
  
		  if (instance.hashTimer) {
			clearTimeout(instance.hashTimer);
		  }
  
		  // Update hash
		  instance.hashTimer = setTimeout(function () {
			if ("replaceState" in window.history) {
			  window.history[firstRun ? "pushState" : "replaceState"]({},
				document.title,
				window.location.pathname + window.location.search + "#" + instance.currentHash
			  );
  
			  if (firstRun) {
				instance.hasCreatedHistory = true;
			  }
			} else {
			  window.location.hash = instance.currentHash;
			}
  
			instance.hashTimer = null;
		  }, 300);
		},
  
		"beforeClose.fb": function (e, instance, current) {
		  if (!current || current.opts.hash === false) {
			return;
		  }
  
		  clearTimeout(instance.hashTimer);
  
		  // Goto previous history entry
		  if (instance.currentHash && instance.hasCreatedHistory) {
			window.history.back();
		  } else if (instance.currentHash) {
			if ("replaceState" in window.history) {
			  window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
			} else {
			  window.location.hash = instance.origHash;
			}
		  }
  
		  instance.currentHash = null;
		}
	  });
  
	  // Check if need to start/close after url has changed
	  $(window).on("hashchange.fb", function () {
		var url = parseUrl(),
		  fb = null;
  
		// Find last fancyBox instance that has "hash"
		$.each(
		  $(".fancybox-container")
		  .get()
		  .reverse(),
		  function (index, value) {
			var tmp = $(value).data("FancyBox");
  
			if (tmp && tmp.currentHash) {
			  fb = tmp;
			  return false;
			}
		  }
		);
  
		if (fb) {
		  // Now, compare hash values
		  if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
			fb.currentHash = null;
  
			fb.close();
		  }
		} else if (url.gallery !== "") {
		  triggerFromUrl(url);
		}
	  });
  
	  // Check current hash and trigger click event on matching element to start fancyBox, if needed
	  setTimeout(function () {
		if (!$.fancybox.getInstance()) {
		  triggerFromUrl(parseUrl());
		}
	  }, 50);
	});
  })(window, document, jQuery);
  // ==========================================================================
  //
  // Wheel
  // Basic mouse weheel support for gallery navigation
  //
  // ==========================================================================
  (function (document, $) {
	"use strict";
  
	var prevTime = new Date().getTime();
  
	$(document).on({
	  "onInit.fb": function (e, instance, current) {
		instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
		  var current = instance.current,
			currTime = new Date().getTime();
  
		  if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
			return;
		  }
  
		  e.preventDefault();
		  e.stopPropagation();
  
		  if (current.$slide.hasClass("fancybox-animated")) {
			return;
		  }
  
		  e = e.originalEvent || e;
  
		  if (currTime - prevTime < 250) {
			return;
		  }
  
		  prevTime = currTime;
  
		  instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
		});
	  }
	});
  })(document, jQuery);