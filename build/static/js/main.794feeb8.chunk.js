(this.webpackJsonplab10=this.webpackJsonplab10||[]).push([[0],[,,,,,,,,function(e,n,o){e.exports=o(16)},,,,,function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var t=o(0),i=o.n(t),a=o(7),c=o.n(a),r=(o(13),o(1)),l=o(2),s=o(4),u=o(3),f=o(5),d=(o(14),o(15),function(e){function n(e){return Object(r.a)(this,n),Object(s.a)(this,Object(u.a)(n).call(this,e))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){if("geolocation"in navigator){console.log("has geolocation");var e=function(e){console.log("success",e)},n=function(e){console.log("error",e)};navigator.geolocation.getCurrentPosition(e,n,{maximumAge:1e6,timeout:1e3,enableHighAccurancy:!0}),navigator.geolocation.watchPosition(e,n,{maximumAge:0,enableHighAccurancy:!0})}else console.log("doesnt have geolocation")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"radar"},i.a.createElement("div",{className:"sweep"})))}}]),n}(t.Component)),g=function(e){function n(){return Object(r.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement(d,null)))}}]),n}(i.a.Component),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");h?(!function(e,n){fetch(e).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.794feeb8.chunk.js.map