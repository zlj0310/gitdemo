webpackJsonp([0],{0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},CJFh:function(e,t){},EsDq:function(e,t,n){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("Jmof"));n("czis");var o=n("s0Ck");t.About=function(){var e=r.useState(""),t=e[0],n=e[1],a=r.useState(""),i=a[0],c=a[1],u=r.useState(""),s=u[0],l=u[1],d=r.useState(""),f=d[0],m=d[1],p=r.useState(""),h=p[0],v=p[1],b=[{key:0,id:"broadcastChannel",name:"Broadcast Channel",data:t},{key:1,id:"localStorage",name:"Local Storage",data:i},{key:2,id:"serviceWorker",name:"Service Worker",data:f},{key:3,id:"sharedWorker",name:"Shared Worker",data:h},{key:4,id:"indexDB",name:"IndexDB",data:s}];return r.useEffect(function(){new BroadcastChannel("broadCast").onmessage=function(e){n(e.data)},window.addEventListener("storage",function(e){if("localStorageData"===e.key){var t=JSON.parse(e.newValue);c(t.data)}}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",function(e){m(e.data)});var e=new SharedWorker("https://webtest.huijieapp.com/xindaijia-web/entries/boilerplate/util.shared.js","ctc");document.addEventListener("visibilitychange",function(){document.hidden||(console.log("--visibilitychange--"),e.port.postMessage({get:!0}))}),e.port.addEventListener("message",function(e){v(e.data)},!1),e.port.start(),o.publicStore.openStore().then(function(e){return o.publicStore.saveData(e,null)}).then(function(e){setInterval(function(){o.publicStore.query(e).then(function(e){e&&e.data&&l(e.data)})},1e3)})},[]),r.default.createElement("div",{className:"home--wrapper"},b.map(function(e){return r.default.createElement("div",{className:"item",key:e.id},r.default.createElement("h2",null,e.name),r.default.createElement("p",null,r.default.createElement("em",null,"接收到的消息："),e.data))}))}},FOiH:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("Jmof")),o=n("KC3J"),i=n("GxRd"),c=n("EsDq");t.App=function(){return r.default.createElement(o.HashRouter,null,r.default.createElement("section",{className:"App"},r.default.createElement(o.Route,{exact:!0,path:"/",component:i.Index}),r.default.createElement(o.Route,{exact:!0,path:"/about",component:c.About})))}},GxRd:function(e,t,n){"use strict";var a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("Jmof"));n("czis");var i=n("s0Ck");t.Index=function(){var e=o.useState({}),t=e[0],n=e[1],r=i.publicStore.getUrlParams().key,c=new SharedWorker("https://webtest.huijieapp.com/xindaijia-web/entries/boilerplate/util.shared.js","ctc"),u=[{key:0,id:"broadcastChannel",name:"Broadcast Channel",handleClick:function(e){new BroadcastChannel("broadCast").postMessage(t[e])}},{key:1,id:"localStorage",name:"Local Storage",handleClick:function(e){window.localStorage.setItem("localStorageData",JSON.stringify({data:t[e],timeStamp:+new Date}))}},{key:2,id:"serviceWorker",name:"Service Worker",handleClick:function(e){navigator.serviceWorker&&navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage(t[e])}},{key:3,id:"sharedWorker",name:"Shared Worker",handleClick:function(e){c.port.postMessage(t[e])}},{key:4,id:"indexDB",name:"IndexDB",handleClick:function(e){i.publicStore.openStore().then(function(e){return i.publicStore.saveData(e,null)}).then(function(n){return i.publicStore.saveData(n,t[e])})}}];return o.default.createElement("div",{className:"home--wrapper"},r?u.filter(function(e){return e.key===r}).map(function(e){return o.default.createElement("div",{className:"item",key:e.id},o.default.createElement("h2",null,e.name),o.default.createElement("input",{placeholder:"input message",onChange:function(r){var o;return n(a({},t,(o={},o[e.id]=r.target.value,o)))}}),o.default.createElement("button",{onClick:function(){return e.handleClick(e.id)}},"发送消息"))}):u.map(function(e){return o.default.createElement("div",{className:"item",key:e.id},o.default.createElement("h2",null,e.name),o.default.createElement("input",{placeholder:"input message",onChange:function(r){var o;return n(a({},t,(o={},o[e.id]=r.target.value,o)))}}),o.default.createElement("button",{onClick:function(){return e.handleClick(e.id)}},"发送消息"))}))}},Jmof:function(e,t){e.exports=React},KC3J:function(e,t){e.exports=ReactRouterDOM},czis:function(e,t){},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Jmof"),r=n.n(a),o=n("wLXD"),i=(n.n(o),n("CJFh")),c=(n.n(i),n("FOiH"));n.n(c);Object(o.render)(r.a.createElement(c.App,null),document.querySelector("#app"))},s0Ck:function(e,t,n){"use strict";var a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("OAwv")),i=function(){function e(){var e=this;this.dbInfo={storeName:"testDB1",version:2,tagName:"ctc_data1"},this.getUrlParams=function(){var e=o.default.parse(window.location.search.split("?")[1]),t=window.location.hash.indexOf("?"),n=o.default.parse(window.location.hash.substr(t).split("?")[1]);return a({},e,n)},this.openStore=function(){return new Promise(function(t,n){if(!("indexedDB"in window))return n("don't support indexedDB");var a=indexedDB.open(e.dbInfo.storeName,e.dbInfo.version||1);a.onerror=n,a.onsuccess=function(e){t(e.target.result)},a.onupgradeneeded=function(t){var n=t.srcElement.result;if(0===t.oldVersion&&!n.objectStoreNames.contains(e.dbInfo.storeName)){n.createObjectStore(e.dbInfo.storeName,{keyPath:"tag"}).createIndex(e.dbInfo.storeName+"Index","tag",{unique:!1})}}})},this.saveData=function(t,n){return new Promise(function(a,r){var o=t.transaction(e.dbInfo.storeName,"readwrite"),i=o.objectStore(e.dbInfo.storeName),c=i.put({tag:e.dbInfo.tagName,data:n});c.onsuccess=function(){return a(t)},c.onerror=r})},this.query=function(t){return new Promise(function(n,a){try{var r=t.transaction(e.dbInfo.storeName,"readonly"),o=r.objectStore(e.dbInfo.storeName),i=o.get(e.dbInfo.tagName);i.onsuccess=function(e){return n(e.target.result)},i.onerror=a}catch(e){a(e)}})}}return e}();t.publicStore=new i},wLXD:function(e,t){e.exports=ReactDOM}},[0]);
//# sourceMappingURL=app.dacaca74.js.map