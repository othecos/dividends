function asyncGeneratorStep(e,r,n,t,i,a,o){try{var u=e[a](o),s=u.value}catch(c){return void n(c)}u.done?r(s):Promise.resolve(s).then(t,i)}function _asyncToGenerator(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var a=e.apply(r,n);function o(e){asyncGeneratorStep(a,t,i,o,u,"next",e)}function u(e){asyncGeneratorStep(a,t,i,o,u,"throw",e)}o(void 0)}))}}function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,r,n){"use strict";n.d(r,"a",(function(){return t}));var t={bubbles:{dur:1e3,circles:9,fn:function(e,r,n){var t="".concat(e*r/n-e,"ms"),i=2*Math.PI*r/n;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:function(e,r,n){var t=r/n,i="".concat(e*t-e,"ms"),a=2*Math.PI*t;return{r:5,style:{top:"".concat(9*Math.sin(a),"px"),left:"".concat(9*Math.cos(a),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,r){return{r:6,style:{left:"".concat(9-9*r,"px"),"animation-delay":-110*r+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,r,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(e*r/n-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,r,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*r+(r<6?180:-180),"deg)"),"animation-delay":"".concat(e*r/n-e,"ms")}}}}}},"9ans":function(e,r,n){"use strict";n.d(r,"a",(function(){return u}));var t=n("mrSG"),i=n("Xq/2"),a=n("JL6k"),o=n("8Y7J"),u=function(){var e=function(){function e(r,n){_classCallCheck(this,e),this.firebaseUser=r,this.firebase=n}return _createClass(e,[{key:"signIn",value:function(e,r){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.firebase.signIn(e,r);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n,this)})))}},{key:"signInWithProvider",value:function(e){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.firebase.signInWithProvider(e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})))}},{key:"signUp",value:function(e,r,n,i){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.firebase.signUp(e,r,n,i);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})))}},{key:"signUpWithProvider",value:function(e){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.firebase.signUpWithProvider(e);case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r,this)})))}},{key:"logout",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firebase.logout();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"passwordRecovery",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firebase.passwordRecovery();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}},{key:"getCurrentUser",value:function(){return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.firebaseUser.getCurrentUser();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})))}}]),e}();return e.ngInjectableDef=o.Ob({factory:function(){return new e(o.Pb(a.a),o.Pb(i.a))},token:e,providedIn:"root"}),e}()},GQlY:function(e,r,n){"use strict";n.d(r,"a",(function(){return o}));var t=n("mrSG"),i=n("8Y7J"),a=n("sZkV"),o=function(){var e=function(){function e(r,n){_classCallCheck(this,e),this.alertController=r,this.loadingController=n,this.isLoadingPresent=!1}return _createClass(e,[{key:"presentAlert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Alert",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"This is an alert message",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Ok";return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:e,subHeader:r,message:n,buttons:[i]});case 2:return a=t.sent,t.next=5,a.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"presentLoading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Please wait...";return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.loadingController.create({message:e});case 2:return n=r.sent,r.next=5,n.present();case 5:this.isLoadingPresent=!0;case 6:case"end":return r.stop()}}),r,this)})))}},{key:"dismissLoading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function r(){var n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.isLoadingPresent){r.next=4;break}return r.next=3,this.loadingController.dismiss();case 3:return r.abrupt("return",void(this.isLoadingPresent=!1));case 4:setTimeout((function(){n.dismissLoading(e+1)}));case 5:case"end":return r.stop()}}),r,this)})))}}]),e}();return e.ngInjectableDef=i.Ob({factory:function(){return new e(i.Pb(a.a),i.Pb(a.Cb))},token:e,providedIn:"root"}),e}()},KwJk:function(e,r,n){"use strict";n.d(r,"a",(function(){return i})),n.d(r,"b",(function(){return a})),n.d(r,"c",(function(){return t})),n.d(r,"d",(function(){return u}));var t=function(e,r){return null!==r.closest(e)},i=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},a=function(e){var r={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return r[e]=!0})),r},o=/^[a-z][a-z0-9+\-.]*:/,u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(r,n,t){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==r||"#"===r[0]||o.test(r)){e.next=4;break}if(!(i=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),i.push(r,t)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}()},NqGI:function(e,r,n){"use strict";n.d(r,"a",(function(){return t})),n.d(r,"b",(function(){return i}));var t=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(r,n,t,i,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return",r.attachViewToDom(n,t,a,i));case 2:if("string"==typeof t||t instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t,i&&i.forEach((function(e){return o.classList.add(e)})),a&&Object.assign(o,a),n.appendChild(o),e.t0=o.componentOnReady,!e.t0){e.next=12;break}return e.next=12,o.componentOnReady();case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(r,n,t,i,a){return e.apply(this,arguments)}}(),i=function(e,r){if(r){if(e)return e.removeViewFromDom(r.parentElement,r);r.remove()}return Promise.resolve()}},Uwmq:function(e,r,n){"use strict";n.d(r,"a",(function(){return t}));var t=function(e){try{if("string"!=typeof e||""===e)return e;var r=document.createDocumentFragment(),n=document.createElement("div");r.appendChild(n),n.innerHTML=e,u.forEach((function(e){for(var n=r.querySelectorAll(e),t=n.length-1;t>=0;t--){var o=n[t];o.parentNode?o.parentNode.removeChild(o):r.removeChild(o);for(var u=a(o),s=0;s<u.length;s++)i(u[s])}}));for(var t=a(r),o=0;o<t.length;o++)i(t[o]);var s=document.createElement("div");s.appendChild(r);var c=s.querySelector("div");return null!==c?c.innerHTML:s.innerHTML}catch(f){return console.error(f),""}},i=function e(r){if(!r.nodeType||1===r.nodeType){for(var n=r.attributes.length-1;n>=0;n--){var t=r.attributes.item(n),i=t.name;if(o.includes(i.toLowerCase())){var u=t.value;null!=u&&u.toLowerCase().includes("javascript:")&&r.removeAttribute(i)}else r.removeAttribute(i)}for(var s=a(r),c=0;c<s.length;c++)e(s[c])}},a=function(e){return null!=e.children?e.children:e.childNodes},o=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,r,n){"use strict";n.d(r,"a",(function(){return i})),n.d(r,"b",(function(){return a})),n.d(r,"c",(function(){return o})),n.d(r,"d",(function(){return t}));var t=function(){var e=window.TapticEngine;e&&e.selection()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);