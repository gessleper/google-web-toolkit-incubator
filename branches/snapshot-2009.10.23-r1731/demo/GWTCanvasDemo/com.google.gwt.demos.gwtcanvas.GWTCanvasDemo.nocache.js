function com_google_gwt_demos_gwtcanvas_GWTCanvasDemo(){var l='',D='" for "gwt:onLoadErrorFn"',B='" for "gwt:onPropertyErrorFn"',n='"><\/script>',p='/',rb='0934F360CF388797C1C293709E1B3B07.cache.html',tb='164A76F34869714D358FB1AE72AEF7A4.cache.html',qb='6D35CE6CB145456A7E163CA4A3BBED93.cache.html',sb='94EDE376B5AA16BFB51E0FD305394EEA.cache.html',Db='<script defer="defer">com_google_gwt_demos_gwtcanvas_GWTCanvasDemo.onInjectionDone(\'com.google.gwt.demos.gwtcanvas.GWTCanvasDemo\')<\/script>',bc='<script id="',y='=',A='Bad handler "',Cb='DOMContentLoaded',ub='E2A53014E7A4FAA05B888209B842FA31.cache.html',vb='GWTCanvasDemo.css',o='SCRIPT',ac='__gwt_marker_com.google.gwt.demos.gwtcanvas.GWTCanvasDemo',q='base',nb='begin',cb='bootstrap',s='clear.cache.gif',m='com.google.gwt.demos.gwtcanvas.GWTCanvasDemo',w='content',Fb='end',jb='gecko',kb='gecko1_8',yb='gwt.hybrid',C='gwt:onLoadErrorFn',z='gwt:onPropertyErrorFn',v='gwt:property',Bb='head',pb='hosted.html?com_google_gwt_demos_gwtcanvas_GWTCanvasDemo',Ab='href',ib='ie6',E='iframe',r='img',F="javascript:''",wb='link',mb='loadExternalRefs',t='meta',bb='moduleRequested',Eb='moduleStartup',hb='msie',u='name',eb='opera',ab='position:absolute;width:0;height:0;border:none',xb='rel',gb='safari',ob='selectingPermutation',x='startup',zb='stylesheet',lb='unknown',db='user.agent',fb='webkit';var dc=window,k=document,cc=dc.__gwtStatsEvent?function(a){return dc.__gwtStatsEvent(a)}:null,xc,nc,ic,hc=l,qc={},Ac=[],wc=[],gc=[],tc,vc;cc&&cc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!dc.__gwt_stylesLoaded){dc.__gwt_stylesLoaded={}}if(!dc.__gwt_scriptsLoaded){dc.__gwt_scriptsLoaded={}}function mc(){try{return dc.external&&(dc.external.gwtOnLoad&&dc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function pc(){if(xc&&nc){var c=k.getElementById(m);var b=c.contentWindow;b.__gwt_initHandlers=com_google_gwt_demos_gwtcanvas_GWTCanvasDemo.__gwt_initHandlers;if(mc()){b.__gwt_getProperty=function(a){return jc(a)}}com_google_gwt_demos_gwtcanvas_GWTCanvasDemo=null;b.gwtOnLoad(tc,m,hc);cc&&cc({moduleName:m,subSystem:x,evtGroup:Eb,millis:(new Date()).getTime(),type:Fb})}}
function kc(){var j,h=ac,i;k.write(bc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function d(b){var a=b.lastIndexOf(p);return a>=0?b.substring(0,a+1):l}
;if(j&&j.src){hc=d(j.src)}if(hc==l){var c=k.getElementsByTagName(q);if(c.length>0){hc=c[c.length-1].href}else{var g=k.location;var e=g.href;hc=d(e.substr(0,e.length-g.hash.length))}}else if(hc.match(/^\w+:\/\//)){}else{var f=k.createElement(r);f.src=hc+s;hc=d(f.src)}if(i){i.parentNode.removeChild(i)}}
function uc(){var f=document.getElementsByTagName(t);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(u),b;if(h){if(h==v){b=e.getAttribute(w);if(b){var i,c=b.indexOf(y);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}qc[h]=i}}else if(h==z){b=e.getAttribute(w);if(b){try{vc=eval(b)}catch(a){alert(A+b+B)}}}else if(h==C){b=e.getAttribute(w);if(b){try{tc=eval(b)}catch(a){alert(A+b+D)}}}}}}
function zc(d,e){var a=gc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function jc(d){var e=wc[d](),b=Ac[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(vc){vc(d,a,e)}throw null}
var lc;function oc(){if(!lc){lc=true;var a=k.createElement(E);a.src=F;a.id=m;a.style.cssText=ab;a.tabIndex=-1;k.body.appendChild(a);cc&&cc({moduleName:m,subSystem:x,evtGroup:Eb,millis:(new Date()).getTime(),type:bb});a.contentWindow.location.replace(hc+yc)}}
wc[db]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(eb)!=-1){return eb}else if(d.indexOf(fb)!=-1){return gb}else if(d.indexOf(hb)!=-1){var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=6000){return ib}}}else if(d.indexOf(jb)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return kb}return jb}return lb};Ac[db]={gecko:0,gecko1_8:1,ie6:2,opera:3,safari:4};com_google_gwt_demos_gwtcanvas_GWTCanvasDemo.onScriptLoad=function(){if(lc){nc=true;pc()}};com_google_gwt_demos_gwtcanvas_GWTCanvasDemo.onInjectionDone=function(){xc=true;cc&&cc({moduleName:m,subSystem:x,evtGroup:mb,millis:(new Date()).getTime(),type:Fb});pc()};kc();uc();cc&&cc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:ob});var yc;if(mc()){yc=pb}else{try{zc([eb],qb);zc([gb],rb);zc([kb],sb);zc([jb],tb);zc([ib],ub);yc=gc[jc(db)]}catch(a){return}}var sc;function rc(){if(!ic){ic=true;if(!__gwt_stylesLoaded[vb]){var a=k.createElement(wb);__gwt_stylesLoaded[vb]=a;a.setAttribute(xb,zb);a.setAttribute(Ab,hc+vb);k.getElementsByTagName(Bb)[0].appendChild(a)}pc();if(k.removeEventListener){k.removeEventListener(Cb,rc,false)}if(sc){clearInterval(sc)}}}
if(k.addEventListener){k.addEventListener(Cb,function(){oc();rc()},false)}var sc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){oc();rc()}},50);cc&&cc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:Fb});cc&&cc({moduleName:m,subSystem:x,evtGroup:mb,millis:(new Date()).getTime(),type:nb});k.write(Db)}
com_google_gwt_demos_gwtcanvas_GWTCanvasDemo.__gwt_initHandlers=function(i,e,j){var d=window,g=d.onresize,f=d.onbeforeunload,h=d.onunload;d.onresize=function(a){try{i()}finally{g&&g(a)}};d.onbeforeunload=function(a){var c,b;try{c=e()}finally{b=f&&f(a)}if(c!=null){return c}if(b!=null){return b}};d.onunload=function(a){try{j()}finally{h&&h(a);d.onresize=null;d.onbeforeunload=null;d.onunload=null}}};com_google_gwt_demos_gwtcanvas_GWTCanvasDemo();