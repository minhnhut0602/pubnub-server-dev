function w(){return function(){}}
window.JSON&&window.JSON.stringify||function(){function s(h){return h<10?"0"+h:h}function B(h){y.lastIndex=0;return y.test(h)?'"'+h.replace(y,function(p){var g=D[p];return typeof g==="string"?g:"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+h+'"'}function n(h,p){var g,l,j,z,x=f,k,d=p[h];if(d&&typeof d==="object"&&typeof d.toJSON==="function")d=d.toJSON(h);if(typeof r==="function")d=r.call(p,h,d);switch(typeof d){case "string":return B(d);case "number":return isFinite(d)?String(d):
"null";case "boolean":case "null":return String(d);case "object":if(!d)return"null";f+=A;k=[];if(Object.prototype.toString.apply(d)==="[object Array]"){z=d.length;for(g=0;g<z;g+=1)k[g]=n(g,d)||"null";j=k.length===0?"[]":f?"[\n"+f+k.join(",\n"+f)+"\n"+x+"]":"["+k.join(",")+"]";f=x;return j}if(r&&typeof r==="object"){z=r.length;for(g=0;g<z;g+=1){l=r[g];if(typeof l==="string")if(j=n(l,d))k.push(B(l)+(f?": ":":")+j)}}else for(l in d)if(Object.hasOwnProperty.call(d,l))if(j=n(l,d))k.push(B(l)+(f?": ":":")+
j);j=k.length===0?"{}":f?"{\n"+f+k.join(",\n"+f)+"\n"+x+"}":"{"+k.join(",")+"}";f=x;return j}}window.JSON||(window.JSON={});if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+s(this.getUTCMonth()+1)+"-"+s(this.getUTCDate())+"T"+s(this.getUTCHours())+":"+s(this.getUTCMinutes())+":"+s(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var y=
/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f,A,D={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},r;if(typeof JSON.stringify!=="function")JSON.stringify=function(h,p,g){var l;A=f="";if(typeof g==="number")for(l=0;l<g;l+=1)A+=" ";else if(typeof g==="string")A=g;if((r=p)&&typeof p!=="function"&&(typeof p!=="object"||typeof p.length!=="number"))throw Error("JSON.stringify");return n("",
{"":h})};if(typeof JSON.parse!=="function")JSON.parse=function(h){return eval("("+h+")")}}();
window.PUBNUB||function(){window.console||(window.console=window.console||{});console.log||(console.log=(window.opera||{}).postError||w());function s(){return++B+""+ +new Date}var B=1;function n(a){console.log(a)}function y(a){var b=[];f(a.split(/\s+/),function(c){f(document.getElementsByTagName(c),function(e){b.push(e)})});return b}function f(a,b){if(a&&b)if(typeof a[0]!="undefined")for(var c=0,e=a.length;c<e;)b.call(a[c],a[c],c++);else for(c in a)a.hasOwnProperty&&a.hasOwnProperty(c)&&b.call(a[c],
c,a[c])}function A(a,b){b.call(a,a);for(a=a.firstChild;a;){A(a,b);a=a.nextSibling}}var D=/\$?{([\w\-]+)}/g;function r(a,b,c){f(a.split(","),function(e){function o(i){if(!i)i=window.event;if(!c(i)){i.cancelBubble=true;i.returnValue=false;i.preventDefault&&i.preventDefault();i.stopPropagation&&i.stopPropagation()}}if(b.addEventListener)b.addEventListener(e,o,false);else if(b.attachEvent)b.attachEvent("on"+e,o);else b["on"+e]=o})}function h(){return y("head")[0]}function p(a,b){if(!a)return"";var c=
[],e="";for(e in a)c.push(escape(e)+"="+escape(a[e]));return(b.indexOf("?")===-1?"?":"&")+c.join("&")}function g(a){return document.createElement(a)}var l=0;function j(a){if(l)return x(a);var b=g("script"),c="x"+s(),e=100,o=setTimeout(function(){C("timeout")},a.timeout||3E4),i=a.url,m=a.data||{},q=a.c||w(),v=a.b||w();function t(){setTimeout(function(){e*=2;try{var u=h(),E=u.firstChild;E?u.insertBefore(b,E):u.appendChild(b)}catch(F){t()}},e)}function C(u){clearTimeout(o);if(b){u&&q.call(u,b,unescape(b.src));
b.onerror=null;try{h().removeChild(b)}catch(E){}}}b.async="async";window[c]=function(u){if(!u)return C("no data");v.call(b,u);window[c]=null;C(0)};r("error",b,function(){C("error")});m.unique=c;b.src=i+p(m,i);t();return C}var z=/^window\[[^\]]+\]\((.+?)\)$/;function x(a){var b=window.ActiveXObject?new window.ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest,c=a.c||w(),e=a.b||w(),o=0,i=a.data||{},m=a.url,q=setInterval(function(){if(b&&b.readyState==4&&!o){var t=b.status;o=1;if(q){clearInterval(q);
q=null}t>=200&&t<300||t==304||t==1223?e(JSON.parse(b.responseText.replace(z,"$1"))):c(b);b=null}},14);i.unique="x"+s();try{b.open("GET",m+p(i,m),true);b.send()}catch(v){l=0;return j(a)}return function(){o=1;b&&b.abort&&b.abort()}}var k="http://127.0.0.1:8080/",d={history:function(a,b){b=b||w();a.limit=a.limit||100;if(!a.channel)return n("Must Specify a Channel");a.channel=d.d+"/"+a.channel;j({url:k+"pubnub-history",data:a,b:function(c){b(c.messages)},c:function(c){n(c)}})},time:function(a){j({url:k+"pubnub-time",
b:function(b){a(b.time)},c:function(){a(0)}})},uuid:function(a){j({url:k+"pubnub-uuid",b:function(b){a(b.uuid)},c:function(){a(0)}})},publish:function(a,b){b=b||w()||a.callback;var c=a.message;if(!c)return n("Must Specify a Message");if(!a.channel)return n("Must Specify a Channel");c=JSON.stringify(c);if(c.length>1700)return n("Message exceeded limit 1700");if(!d.g)return n("Missing Publish Key");a.publish_key=d.g;a.channel=d.d+"/"+a.channel;a.message=c;j({url:k+"pubnub-publish",data:a,b:function(e){b(e)},
c:function(e){b(e)}})},unsubscribe:function(a){a=d.d+"/"+a.channel;if(a in d.a){d.a[a].disabled=1;d.a[a].e=0;d.a[a].f&&d.a[a].f(0)}},h:0,i:[],subscribe:function(a,b){function c(){setTimeout(function(){i*=2;j({url:k+"pubnub-subscribe",data:a,b:function(q){q&&q.server?e(q.server):c()},c:function(){c()}})},i)}function e(q){if(!(m in d.a&&d.a[m].disabled))d.a[m].f=j({url:"http://"+q+"/",data:{channel:m,timetoken:o},b:function(v){o=v.timetoken;e(q);v.messages[0]!="xdr.timeout"&&f(v.messages,function(t){b(t)})},
c:function(v){v=="timeout"?e(q):c()}})}if(!d.h)return d.i.push([a,b]);if(!a.channel)return n("Must Specify a Channel");b=b||a.callback;delete a.callback;if(!b)return n("Must Specify a Callback");if(!d.d)return n("Missing Subscribe Key");var o=0,i=100,m=a.channel=d.d+"/"+a.channel;m in d.a||(d.a[m]={});if(d.a[m].e)return n("Already Connected to this Channel: "+m);d.a[m].disabled=0;d.a[m].e=1;c()},g:"7795f1ac-fa60-414e-b01a-0d5ec643b4cb",d:"752a4eb0-b502-11df-a256-2f52a4db9804",j:"",a:{},xdr:j,each:f,map:function(a,b){var c=[];f(a||[],function(e,
o){c.push(b(e,o))});return c},css:function(a,b){for(var c in b)if(b.hasOwnProperty(c))try{a.style[c]=b[c]+("|width|height|top|left|".indexOf(c)>0?"px":"")}catch(e){}},$:function(a){return document.getElementById(a)},create:g,bind:r,supplant:function(a,b){return a.replace(D,function(c,e){return""+b[e]||""})},head:h,search:y,attr:function(a,b,c){if(c)a.setAttribute(b,c);else return a&&a.getAttribute&&a.getAttribute(b)},now:s};x({url:k+"pubnub-x-origin",b:function(a){if(a["x-origin"])l=1}});r("load",
window,function(){setTimeout(function(){d.h=1;f(d.i,function(a){d.subscribe(a[0],a[1])})},100)});window.jQuery&&(window.jQuery.PUBNUB=d);window.PUBNUB=d}();