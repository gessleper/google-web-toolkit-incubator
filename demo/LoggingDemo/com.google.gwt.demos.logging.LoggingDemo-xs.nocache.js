var ab='',kb='" for "gwt:onLoadErrorFn"',ib='" for "gwt:onPropertyErrorFn"',bc='"><\/script>',Cb='.cache.js',dc='/',wb='698993A8F0A87CCA2A2FF5E2CA96A97F',yb='7CE07B9352641168EE0418BD806C6B93',zb='8F49CEAC011DCEBF9F6C73B436F54705',Eb='<link rel="stylesheet" href="',xb='<script id="__gwt_marker_com.google.gwt.demos.logging.LoggingDemo"><\/script>',ac='<script src="',fb='=',hb='Bad handler "',vb='DOMContentLoaded',Ab='ED21A4DDCCB476260ED98ACFE7B1174F',Bb='F748733B6DEA58CD92A0AAAF7B924CB4',Db='LoggingDemo.css',Fb='LoggingDemo.css">',cc='__gwt_marker_com.google.gwt.demos.logging.LoggingDemo',ec='base',gc='clear.cache.gif',mb='com.google.gwt.demos.logging.LoggingDemo',eb='content',sb='gecko',tb='gecko1_8',bb='gwt.hybrid',jb='gwt:onLoadErrorFn',gb='gwt:onPropertyErrorFn',db='gwt:property',rb='ie6',fc='img',hc='meta',qb='msie',cb='name',nb='opera',pb='safari',ub='unknown',lb='user.agent',ob='webkit';function com_google_gwt_demos_logging_LoggingDemo(){var k=window,j=document,s=k.external,t,p,o=ab,w={},F=[],C=[],n=[],z,B;if(!k.__gwt_stylesLoaded){k.__gwt_stylesLoaded={};}if(!k.__gwt_scriptsLoaded){k.__gwt_scriptsLoaded={};}function u(){try{return s&&(s.gwtOnLoad&&k.location.search.indexOf(bb)==-1);}catch(a){return false;}}
function v(){if(t&&p){t(z,mb,o);}}
function r(){var i,h;j.write(xb);h=j.getElementById(cc);if(h){i=h.previousSibling;}function d(b){var a=b.lastIndexOf(dc);return a>=0?b.substring(0,a+1):ab;}
;if(i&&i.src){o=d(i.src);}if(o==ab){var c=j.getElementsByTagName(ec);if(c.length>0){o=c[c.length-1].href;}else{var g=j.location;var e=g.href;o=d(e.substr(0,e.length-g.hash.length));}}else if(o.match(/^\w+:\/\//)){}else{var f=j.createElement(fc);f.src=o+gc;o=d(f.src);}if(h){h.parentNode.removeChild(h);}}
function A(){var f=document.getElementsByTagName(hc);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(cb),b;if(h){if(h==db){b=e.getAttribute(eb);if(b){var i,c=b.indexOf(fb);if(c>=0){h=b.substring(0,c);i=b.substring(c+1);}else{h=b;i=ab;}w[h]=i;}}else if(h==gb){b=e.getAttribute(eb);if(b){try{B=eval(b);}catch(a){alert(hb+b+ib);}}}else if(h==jb){b=e.getAttribute(eb);if(b){try{z=eval(b);}catch(a){alert(hb+b+kb);}}}}}}
function m(a,b){return b in F[a];}
function l(a){var b=w[a];return b==null?null:b;}
function E(d,e){var a=n;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[]);}a[d[c]]=e;}
function q(d){var e=C[d](),b=F[d];if(e in b){return e;}var a=[];for(var c in b){a[b[c]]=c;}if(B){B(d,a,e);}throw null;}
C[lb]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2]);};if(d.indexOf(nb)!=-1){return nb;}else if(d.indexOf(ob)!=-1){return pb;}else if(d.indexOf(qb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return rb;}}}else if(d.indexOf(sb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return tb;}return sb;}return ub;};F[lb]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};com_google_gwt_demos_logging_LoggingDemo.onScriptLoad=function(a){com_google_gwt_demos_logging_LoggingDemo=null;t=a;v();};r();A();var y;function x(){if(!p){p=true;v();if(j.removeEventListener){j.removeEventListener(vb,x,false);}if(y){clearInterval(y);}}}
if(j.addEventListener){j.addEventListener(vb,x,false);}var y=setInterval(function(){if(/loaded|complete/.test(j.readyState)){x();}},50);var D;try{E([tb],wb);E([sb],yb);E([rb],zb);E([nb],Ab);E([pb],Bb);D=n[q(lb)];}catch(a){return;}D+=Cb;if(!__gwt_stylesLoaded[Db]){__gwt_stylesLoaded[Db]=true;document.write(Eb+o+Fb);}j.write(ac+o+D+bc);}
com_google_gwt_demos_logging_LoggingDemo.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i();}finally{g&&g(a);}};d.onbeforeunload=function(a){var c,b;try{c=e();}finally{b=f&&f(a);}if(c!=null){return c;}if(b!=null){return b;}};d.onunload=function(a){try{j();}finally{h&&h(a);}};};com_google_gwt_demos_logging_LoggingDemo();