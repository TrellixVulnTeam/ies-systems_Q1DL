!function(){function n(n,i,e){return i in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function i(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function e(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function t(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}(self.webpackChunkies_systems_dash=self.webpackChunkies_systems_dash||[]).push([[3087],{5931:function(e,r,o){"use strict";o.r(r),o.d(r,{ion_infinite_scroll:function(){return d},ion_infinite_scroll_content:function(){return f}});var s=o(6304),l=o(3150),c=o(7585),a=o(6575),d=function(){function e(n){var t=this;i(this,e),(0,l.r)(this,n),this.ionInfinite=(0,l.e)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=t.scrollEl;if(!n||!t.canStart())return 1;var i=t.el.offsetHeight;if(0===i)return 2;var e=n.scrollTop,r=n.offsetHeight,o=0!==t.thrPc?r*t.thrPc:t.thrPx;if(("bottom"===t.position?n.scrollHeight-i-e-o-r:e-i-o)<0){if(!t.didFire)return t.isLoading=!0,t.didFire=!0,t.ionInfinite.emit(),3}else t.didFire=!1;return 4}}return t(e,[{key:"thresholdChanged",value:function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)}},{key:"disabledChanged",value:function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)}},{key:"connectedCallback",value:function(){var n=this;return(0,s.Z)(regeneratorRuntime.mark(function i(){var e;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(e=n.el.closest("ion-content"))){i.next=10;break}return i.next=4,e.getScrollElement();case 4:n.scrollEl=i.sent,n.thresholdChanged(),n.disabledChanged(),"top"===n.position&&(0,l.c)(function(){n.scrollEl&&(n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight)}),i.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return i.stop()}},i)}))()}},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:function(){var n=this;return(0,s.Z)(regeneratorRuntime.mark(function i(){var e,t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:e=n.scrollEl,n.isLoading&&e&&(n.isLoading=!1,"top"===n.position)&&(n.isBusy=!0,t=e.scrollHeight-e.scrollTop,requestAnimationFrame(function(){(0,l.f)(function(){var i=e.scrollHeight-t;requestAnimationFrame(function(){(0,l.c)(function(){e.scrollTop=i,n.isBusy=!1})})})}));case 2:case"end":return i.stop()}},i)}))()}},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var i,e=(0,c.b)(this);return(0,l.h)(l.H,{class:(i={},n(i,e,!0),n(i,"infinite-scroll-loading",this.isLoading),n(i,"infinite-scroll-enabled",!this.disabled),i)})}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),e}();d.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var f=function(){function e(n){i(this,e),(0,l.r)(this,n)}return t(e,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var n=(0,c.b)(this);this.loadingSpinner=c.c.get("infiniteLoadingSpinner",c.c.get("spinner","ios"===n?"lines":"crescent"))}}},{key:"render",value:function(){var i,e=(0,c.b)(this);return(0,l.h)(l.H,{class:(i={},n(i,e,!0),n(i,"infinite-scroll-content-".concat(e),!0),i)},(0,l.h)("div",{class:"infinite-loading"},this.loadingSpinner&&(0,l.h)("div",{class:"infinite-loading-spinner"},(0,l.h)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&(0,l.h)("div",{class:"infinite-loading-text",innerHTML:(0,a.s)(this.loadingText)})))}}]),e}();f.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}])}();