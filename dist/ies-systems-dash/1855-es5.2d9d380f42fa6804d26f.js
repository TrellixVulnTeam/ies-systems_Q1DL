!function(){function e(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function o(e,o){for(var a=0;a<o.length;a++){var t=o[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(self.webpackChunkies_systems_dash=self.webpackChunkies_systems_dash||[]).push([[1855],{1855:function(a,t,r){"use strict";r.r(t),r.d(t,{ion_modal:function(){return v}});var i=r(6304),n=r(3150),s=r(7585),d=r(7330),l=r(7053),c=r(1269),m=r(4001),p=r(4086),h=r(7807),f=r(7279),u=r(2377);r(960);var b=function(e,o){var a=(0,p.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t=(0,p.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=(0,p.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(t);if(o){var i=window.innerWidth<768,n="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,s=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(i){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c="translateY(".concat(n?"-10px":l,") scale(0.93)");s.afterStyles({transform:c}).beforeAddWrite(function(){return d.style.setProperty("background-color","black")}).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:c,borderRadius:"10px 10px 0 0"}]),r.addAnimation(s)}else if(r.addAnimation(a),n){var m="translateY(-10px) scale(".concat(n?.93:1,")");s.afterStyles({transform:m}).addElement(o.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:m}]);var h=(0,p.c)().afterStyles({transform:m}).addElement(o.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:m}]);r.addAnimation([s,h])}else t.fromTo("opacity","0","1")}else r.addAnimation(a);return r},x=function(e,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,t=(0,p.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=(0,p.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),i=(0,p.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(a).addAnimation(r);if(o){var n=window.innerWidth<768,s="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,d=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(function(e){1===e&&(o.style.setProperty("overflow",""),Array.from(l.querySelectorAll("ion-modal")).filter(function(e){return void 0!==e.presentingElement}).length<=1&&l.style.setProperty("background-color",""))}),l=document.body;if(n){var c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",m="translateY(".concat(s?"-10px":c,") scale(0.93)");d.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),i.addAnimation(d)}else if(i.addAnimation(t),s){var h="translateY(-10px) scale(".concat(s?.93:1,")");d.addElement(o.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:h},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var f=(0,p.c)().addElement(o.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:h},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([d,f])}else r.fromTo("opacity","1","0")}else i.addAnimation(t);return i},w=function(e){var o=(0,p.c)(),a=(0,p.c)(),t=(0,p.c)();return a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),t.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),o.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,t])},y=function(e){var o=(0,p.c)(),a=(0,p.c)(),t=(0,p.c)(),r=e.querySelector(".modal-wrapper");return a.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),t.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),o.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,t])},v=function(){function a(e){var o=this;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,a),(0,n.r)(this,e),this.didPresent=(0,n.e)(this,"ionModalDidPresent",7),this.willPresent=(0,n.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,n.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){o.dismiss(void 0,l.B)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onLifecycle=function(e){var a=o.usersElement,t=g[e.type];if(a&&t){var r=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});a.dispatchEvent(r)}}}var t,r,p;return t=a,p=[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}],(r=[{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){(0,l.e)(this.el)}},{key:"present",value:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark(function o(){var a,t;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.presented){o.next=2;break}return o.abrupt("return");case 2:if(a=e.el.querySelector(".modal-wrapper")){o.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),o.next=8,(0,d.a)(e.delegate,a,e.component,["ion-page"],t);case 8:return e.usersElement=o.sent,o.next=11,(0,m.e)(e.usersElement);case 11:return(0,n.c)(function(){return e.el.classList.add("show-modal")}),o.next=14,(0,l.d)(e,"modalEnter",b,w,e.presentingElement);case 14:e.swipeToClose&&e.initSwipeToClose();case 15:case"end":return o.stop()}},o)}))()}},{key:"initSwipeToClose",value:function(){var e=this,o=this;if("ios"===(0,s.b)(this)){var a,t,r,n,d,l=this.leaveAnimation||s.c.get("modalLeave",x),c=this.animation=l(this.el,this.presentingElement);this.gesture=(a=this.el,t=c,r=a.offsetHeight,n=!1,d=(0,f.createGesture)({el:a,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var o=e.event.target;return null===o||!o.closest||null===o.closest("ion-content, ion-footer")},onStart:function(){t.progressStart(!0,n?1:0)},onMove:function(e){var o=(0,u.j)(1e-4,e.deltaY/r,.9999);t.progressStep(o)},onEnd:function(a){var s=a.velocityY,l=(0,u.j)(1e-4,a.deltaY/r,.9999),c=(a.deltaY+1e3*s)/r>=.5,m=c?-.001:.001;c?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),m+=(0,h.g)([0,0],[.32,.72],[0,1],[1,1],l)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),m+=(0,h.g)([0,0],[1,0],[.68,.28],[1,1],l)[0]);var p=function(e,o){return(0,u.j)(400,e/Math.abs(1.1*o),500)}(c?l*r:(1-l)*r,s);n=c,d.enable(!1),t.onFinish(function(){c||d.enable(!0)}).progressEnd(c?1:0,m,p),c&&(e.gestureAnimationDismissing=!0,e.animation.onFinish((0,i.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.dismiss(void 0,"gesture");case 2:o.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}},e)}))))}})),this.gesture.enable(!0)}}},{key:"dismiss",value:function(e,o){var a=this;return(0,i.Z)(regeneratorRuntime.mark(function t(){var r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.gestureAnimationDismissing||"gesture"===o){t.next=2;break}return t.abrupt("return",!1);case 2:return r=l.h.get(a)||[],t.next=5,(0,l.f)(a,e,o,"modalLeave",x,y,a.presentingElement);case 5:if(i=t.sent,t.t0=i,!t.t0){t.next=12;break}return t.next=10,(0,d.d)(a.delegate,a.usersElement);case 10:a.animation&&a.animation.destroy(),r.forEach(function(e){return e.destroy()});case 12:return a.animation=void 0,t.abrupt("return",i);case 14:case"end":return t.stop()}},t)}))()}},{key:"onDidDismiss",value:function(){return(0,l.g)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,l.g)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var o,a=(0,s.b)(this);return(0,n.h)(n.H,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign((o={},e(o,a,!0),e(o,"modal-card",void 0!==this.presentingElement&&"ios"===a),o),(0,c.g)(this.cssClass)),style:{zIndex:"".concat(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},(0,n.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===a&&(0,n.h)("div",{class:"modal-shadow"}),(0,n.h)("div",{tabindex:"0"}),(0,n.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,n.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,n.i)(this)}}])&&o(t.prototype,r),p&&o(t,p),a}(),g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};v.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}])}();