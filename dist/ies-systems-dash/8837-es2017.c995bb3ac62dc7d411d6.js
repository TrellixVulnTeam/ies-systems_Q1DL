(self.webpackChunkies_systems_dash=self.webpackChunkies_systems_dash||[]).push([[8837],{8837:function(t,e,i){"use strict";i.r(e),i.d(e,{ion_datetime:function(){return q},ion_picker:function(){return Q},ion_picker_column:function(){return it}});var o=i(6304),r=i(3150),n=i(7585),a=i(2377),s=i(7053),l=i(1269),d=i(4086),c=i(2954);const h=(t,e,i,o)=>{if(t!==I&&t!==T){if(t===$)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===j)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===z||t===N||t===E||t===O||t===A||t===V)return M(e);if(t===S)return C(e);if(t===F)return(o.monthNames?o.monthNames:_)[e-1];if(t===Y)return(o.monthShortNames?o.monthShortNames:L)[e-1];if(t===H||t===P){if(0===e)return"12";if(e>12&&(e-=12),t===H&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===I?(o.dayNames?o.dayNames:B)[e]:(o.dayShortNames?o.dayShortNames:Z)[e]}catch(r){}},p=(t,e,i,o=0,r=0)=>parseInt(`1${C(t)}${M(e)}${M(i)}${M(o)}${M(r)}`,10),m=t=>p(t.year,t.month,t.day,t.hour,t.minute),u=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,g=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,f=t=>{let e=null;if(null!=t&&""!==t&&(e=g.exec(t),e?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=u.exec(t)),null===e)return;for(let o=1;o<8;o++)e[o]=void 0!==e[o]?parseInt(e[o],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}},b=(t,e)=>{const i=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),o=new Date(t.toLocaleString("en-US",{timeZone:e}));return i.getTime()-o.getTime()},k=(t,e)=>e===$||e===j?t.hour<12?"am":"pm":e===H||e===P?t.hour>12?t.hour-12:0===t.hour?12:t.hour:t[v(e)],v=t=>{for(const e in W)if(W[e].f===t)return W[e].k},x=t=>{let e="";return void 0!==t.year?(e=C(t.year),void 0!==t.month&&(e+="-"+M(t.month),void 0!==t.day&&(e+="-"+M(t.day),void 0!==t.hour&&(e+=`T${M(t.hour)}:${M(t.minute)}:${M(t.second)}`,t.millisecond>0&&(e+="."+D(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+M(Math.floor(Math.abs(t.tzOffset/60)))+":"+M(t.tzOffset%60))))):void 0!==t.hour&&(e=M(t.hour)+":"+M(t.minute),void 0!==t.second&&(e+=":"+M(t.second),void 0!==t.millisecond&&(e+="."+D(t.millisecond)))),e},y=(t,e)=>{if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i},w=(t,e)=>{let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t],0===i.length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i},M=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),D=t=>("00"+(void 0!==t?Math.abs(t):"0")).slice(-3),C=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),S="YYYY",z="YY",F="MMMM",Y="MMM",N="MM",I="DDDD",T="DDD",E="DD",O="HH",H="hh",P="h",A="mm",V="ss",$="A",j="a",W=[{f:S,k:"year"},{f:F,k:"month"},{f:I,k:"day"},{f:Y,k:"month"},{f:T,k:"day"},{f:z,k:"year"},{f:N,k:"month"},{f:E,k:"day"},{f:O,k:"hour"},{f:H,k:"hour"},{f:A,k:"minute"},{f:V,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:P,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:$,k:"ampm"},{f:j,k:"ampm"}],B=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Z=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_=["January","February","March","April","May","June","July","August","September","October","November","December"],L=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],J=[H,P,A,"m",V,"s"],q=class{constructor(t){(0,r.r)(this,t),this.ionCancel=(0,r.e)(this,"ionCancel",7),this.ionChange=(0,r.e)(this,"ionChange",7),this.ionFocus=(0,r.e)(this,"ionFocus",7),this.ionBlur=(0,r.e)(this,"ionBlur",7),this.ionStyle=(0,r.e)(this,"ionStyle",7),this.inputId="ion-dt-"+R++,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onClick=()=>{this.setFocus(),this.open()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:y(this.monthNames,"monthNames"),monthShortNames:y(this.monthShortNames,"monthShortNames"),dayNames:y(this.dayNames,"dayNames"),dayShortNames:y(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}open(){var t=this;return(0,o.Z)(function*(){if(t.disabled||t.isExpanded)return;const e=t.generatePickerOptions(),i=yield s.p.create(e);t.isExpanded=!0,i.onDidDismiss().then(()=>{t.isExpanded=!1,t.setFocus()}),(0,a.a)(i,"ionPickerColChange",function(){var e=(0,o.Z)(function*(e){const o=e.detail,r={};r[o.name]={value:o.options[o.selectedIndex].value},"ampm"!==o.name&&void 0!==t.datetimeValue.ampm&&(r.ampm={value:t.datetimeValue.ampm}),t.updateDatetimeValue(r),i.columns=t.generateColumns()});return function(t){return e.apply(this,arguments)}}()),yield i.present()})()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){((t,e,i)=>{if(!e||"string"==typeof e){const t=((t="",e="")=>{null==t&&(t=""),10!==t.length&&7!==t.length&&4!==t.length||(t+=" ");const i="string"==typeof t&&t.length>0?new Date(t):new Date,o=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return e&&e.length>0?new Date(i.getTime()-b(o,e)):o})(e,this.displayTimezone);Number.isNaN(t.getTime())||(e=t.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=f(e))return Object.assign(t,e),!0}else{if(e.year||e.hour||e.month||e.day||e.minute||e.second){void 0!==e.ampm&&void 0!==e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}if(e.ampm)return e.hour={value:e.hour?e.hour.value:"pm"===e.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=e.hour.value,t.ampm=e.ampm.value,!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const o in t)t.hasOwnProperty(o)&&delete t[o]})(this.datetimeValue,t)}generatePickerOptions(){const t=(0,n.b)(this);this.locale={monthNames:y(this.monthNames,"monthNames"),monthShortNames:y(this.monthShortNames,"monthShortNames"),dayNames:y(this.dayNames,"dayNames"),dayShortNames:y(this.dayShortNames,"dayShortNames")};const e=Object.assign(Object.assign({mode:t},this.pickerOptions),{columns:this.generateColumns()}),i=e.buttons;return i&&0!==i.length||(e.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t);const e=new Date(x(this.datetimeValue));this.datetimeValue.tzOffset=void 0!==this.displayTimezone&&this.displayTimezone.length>0?b(e,this.displayTimezone)/1e3/60*-1:-1*e.getTimezoneOffset(),this.value=x(this.datetimeValue)}}]),e}generateColumns(){let t=this.pickerFormat||this.displayFormat||G;if(0===t.length)return[];this.calcMinMax(),t=t.replace("DDDD","{~}").replace("DDD","{~}"),-1===t.indexOf("D")&&(t=t.replace("{~}","D")),t=t.replace(/{~}/g,"");const e=(t=>{const e=[];t=t.replace(/[^\w\s]/gi," "),W.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,o)=>{W.forEach(r=>{if(t===r.f){if((t===$||t===j)&&(e.indexOf(P)<0&&e.indexOf(H)<0||-1===J.indexOf(i[o-1])))return;e.push(t)}})}),e})(t).map(t=>{const e=v(t);let i;i=this[e+"Values"]?w(this[e+"Values"],e):((t,e,i)=>{const o=[];if(t===S||t===z){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)o.push(t)}else if(t===F||t===Y||t===N||"M"===t||t===H||t===P)for(let r=1;r<13;r++)o.push(r);else if(t===I||t===T||t===E||"D"===t)for(let r=1;r<32;r++)o.push(r);else if(t===O||"H"===t)for(let r=0;r<24;r++)o.push(r);else if(t===A||"m"===t)for(let r=0;r<60;r++)o.push(r);else if(t===V||"s"===t)for(let r=0;r<60;r++)o.push(r);else t!==$&&t!==j||o.push("am","pm");return o})(t,this.datetimeMin,this.datetimeMax);const o=i.map(e=>({value:e,text:h(t,e,void 0,this.locale)})),r=((t,e)=>{const i=k(t,e);if(void 0!==i)return e!==$&&e!==j||(t.ampm=i),i;const o=f((new Date).toISOString());return k(o,e)})(this.datetimeValue,t),n=o.findIndex(t=>t.value===r);return{name:e,selectedIndex:n>=0?n:0,options:o}}),i=this.datetimeMin,o=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,o[t]=0}),this.validateColumns(U(e))}validateColumns(t){const e=new Date,i=m(this.datetimeMin),o=m(this.datetimeMax),r=t.find(t=>"year"===t.name);let n=e.getFullYear();if(r){r.options.find(t=>t.value===e.getFullYear())||(n=r.options[0].value);const t=r.selectedIndex;if(void 0!==t){const e=r.options[t];e&&(n=e.value)}}const a=this.validateColumn(t,"month",1,i,o,[n,0,0,0,0],[n,12,31,23,59]),s=4===(d=a)||6===d||9===d||11===d?30:2===d?(l=n)%4==0&&l%100!=0||l%400==0?29:28:31;var l,d;const c=this.validateColumn(t,"day",2,i,o,[n,a,0,0,0],[n,a,s,23,59]),h=this.validateColumn(t,"hour",3,i,o,[n,a,c,0,0],[n,a,c,23,59]);return this.validateColumn(t,"minute",4,i,o,[n,a,c,h,0],[n,a,c,h,59]),t}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=w(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=f(this.min),i=this.datetimeMax=f(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=void 0===i.hour?23:i.hour,e.minute=e.minute||0,i.minute=void 0===i.minute?59:i.minute,e.second=e.second||0,i.second=void 0===i.second?59:i.second,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}validateColumn(t,e,i,o,r,n,s){const l=t.find(t=>t.name===e);if(!l)return 0;const d=n.slice(),c=s.slice(),h=l.options;let m=h.length-1,u=0;for(let a=0;a<h.length;a++){const t=h[a],e=t.value;d[i]=t.value,c[i]=t.value,(t.disabled=e<n[i]||e>s[i]||p(c[0],c[1],c[2],c[3],c[4])<o||p(d[0],d[1],d[2],d[3],d[4])>r)||(m=Math.min(m,a),u=Math.max(u,a))}const g=l.selectedIndex=(0,a.j)(m,l.selectedIndex,u),f=l.options[g];return f?f.value:0}get text(){if(null!=this.value&&0!==this.value.length)return((t,e,i)=>{if(void 0===e)return;const o=[];let r=!1;if(W.forEach((n,a)=>{if(t.indexOf(n.f)>-1){const s="{"+a+"}",l=h(n.f,e[n.k],e,i);r||void 0===l||null==e[n.k]||(r=!0),o.push(s,l||""),t=t.replace(n.f,s)}}),r){for(let e=0;e<o.length;e+=2)t=t.replace(o[e],o[e+1]);return t}})(this.displayFormat||this.pickerFormat||G,this.datetimeValue,this.locale)}hasValue(){return void 0!==this.text}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,text:e,disabled:i,readonly:o,isExpanded:s,el:d,placeholder:c}=this,h=(0,n.b)(this),p=t+"-lbl",m=(0,a.h)(d),u=void 0===e&&null!=c,g=void 0===e?null!=c?c:"":e,f=void 0===e?null!=c?"placeholder":void 0:"text";return m&&(m.id=p),(0,a.e)(!0,d,this.name,this.value,this.disabled),(0,r.h)(r.H,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-expanded":`${s}`,"aria-haspopup":"true","aria-labelledby":m?p:null,class:{[h]:!0,"datetime-disabled":i,"datetime-readonly":o,"datetime-placeholder":u,"in-item":(0,l.h)("ion-item",d)}},(0,r.h)("div",{class:"datetime-text",part:f},g),(0,r.h)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return(0,r.i)(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}},U=t=>{const e=[];let i,o;for(let r=0;r<t.length;r++){i=t[r],e.push(0);for(const t of i.options)o=t.text.length,o>e[r]&&(e[r]=o)}return 2===e.length?(o=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*o+"px"):3===e.length&&(o=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=17*e[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*o+"px",t[2].align="left"),t},G="MMM D, YYYY";let R=0;q.style={ios:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400, #999999);--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}",md:":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:0.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}[dir=rtl] .datetime-text,:host-context([dir=rtl]) .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"};const X=t=>{const e=(0,d.c)(),i=(0,d.c)(),o=(0,d.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(t.querySelector(".picker-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,o])},K=t=>{const e=(0,d.c)(),i=(0,d.c)(),o=(0,d.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",.01),o.addElement(t.querySelector(".picker-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([i,o])},Q=class{constructor(t){(0,r.r)(this,t),this.didPresent=(0,r.e)(this,"ionPickerDidPresent",7),this.willPresent=(0,r.e)(this,"ionPickerWillPresent",7),this.willDismiss=(0,r.e)(this,"ionPickerWillDismiss",7),this.didDismiss=(0,r.e)(this,"ionPickerDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,s.B)},this.dispatchCancelHandler=t=>{if((0,s.i)(t.detail.role)){const t=this.buttons.find(t=>"cancel"===t.role);this.callButtonHandler(t)}}}connectedCallback(){(0,s.e)(this.el)}present(){var t=this;return(0,o.Z)(function*(){yield(0,s.d)(t,"pickerEnter",X,X,void 0),t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(),t.duration))})()}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,s.f)(this,t,e,"pickerLeave",K,K)}onDidDismiss(){return(0,s.g)(this.el,"ionPickerDidDismiss")}onWillDismiss(){return(0,s.g)(this.el,"ionPickerWillDismiss")}getColumn(t){return Promise.resolve(this.columns.find(e=>e.name===t))}buttonClick(t){var e=this;return(0,o.Z)(function*(){const i=t.role;return(0,s.i)(i)?e.dismiss(void 0,i):(yield e.callButtonHandler(t))?e.dismiss(e.getSelected(),t.role):Promise.resolve()})()}callButtonHandler(t){var e=this;return(0,o.Z)(function*(){return!t||!1!==(yield(0,s.s)(t.handler,e.getSelected()))})()}getSelected(){const t={};return this.columns.forEach((e,i)=>{const o=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:o?o.text:void 0,value:o?o.value:void 0,columnIndex:i}}),t}render(){const t=(0,n.b)(this);return(0,r.h)(r.H,{"aria-modal":"true",tabindex:"-1",class:Object.assign({[t]:!0,[`picker-${t}`]:!0},(0,l.g)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonPickerWillDismiss:this.dispatchCancelHandler},(0,r.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,r.h)("div",{tabindex:"0"}),(0,r.h)("div",{class:"picker-wrapper ion-overlay-wrapper",role:"dialog"},(0,r.h)("div",{class:"picker-toolbar"},this.buttons.map(t=>(0,r.h)("div",{class:tt(t)},(0,r.h)("button",{type:"button",onClick:()=>this.buttonClick(t),class:et(t)},t.text)))),(0,r.h)("div",{class:"picker-columns"},(0,r.h)("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(t=>(0,r.h)("ion-picker-column",{col:t})),(0,r.h)("div",{class:"picker-below-highlight"}))),(0,r.h)("div",{tabindex:"0"}))}get el(){return(0,r.i)(this)}},tt=t=>({[`picker-toolbar-${t.role}`]:void 0!==t.role,"picker-toolbar-button":!0}),et=t=>Object.assign({"picker-button":!0,"ion-activatable":!0},(0,l.g)(t.cssClass));Q.style={ios:".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios,[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}",md:".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md,[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}"};const it=class{constructor(t){(0,r.r)(this,t),this.ionPickerColChange=(0,r.e)(this,"ionPickerColChange",7),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}colChanged(){this.refresh()}connectedCallback(){var t=this;return(0,o.Z)(function*(){let e=0,o=.81;"ios"===(0,n.b)(t)&&(e=-.46,o=1),t.rotateFactor=e,t.scaleFactor=o,t.gesture=(yield Promise.resolve().then(i.bind(i,7279))).createGesture({el:t.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:e=>t.onStart(e),onMove:e=>t.onMove(e),onEnd:e=>t.onEnd(e)}),t.gesture.enable(),t.tmrId=setTimeout(()=>{t.noAnimate=!1,t.refresh(!0)},250)})()}componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh()}disconnectedCallback(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,e){const i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0),this.emitColChange()}update(t,e,i){if(!this.optsEl)return;let o=0,r=0;const{col:n,rotateFactor:a}=this,s=n.selectedIndex=this.indexForY(-t),l=0===e?"":e+"ms",d=`scale(${this.scaleFactor})`,h=this.optsEl.children;for(let c=0;c<h.length;c++){const i=h[c],p=n.options[c],m=c*this.optHeight+t;let u="";if(0!==a){const t=m*a;Math.abs(t)<=90?(o=0,r=90,u=`rotateX(${t}deg) `):o=-9999}else r=0,o=m;const g=s===c;u+=`translate3d(0px,${o}px,${r}px) `,1===this.scaleFactor||g||(u+=d),this.noAnimate?(p.duration=0,i.style.transitionDuration=""):e!==p.duration&&(p.duration=e,i.style.transitionDuration=l),u!==p.transform&&(p.transform=u,i.style.transform=u),g!==p.selected&&(p.selected=g,g?i.classList.add(ot):i.classList.remove(ot))}this.col.prevSelected=s,i&&(this.y=t),this.lastIndex!==s&&((0,c.b)(),this.lastIndex=s)}decelerate(){if(0!==this.velocity){this.velocity*=rt,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange(),(0,c.h)())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation(),(0,c.a)(),cancelAnimationFrame(this.rafId);const e=this.col.options;let i=e.length-1,o=0;for(let r=0;r<e.length;r++)e[r].disabled||(i=Math.min(i,r),o=Math.max(o,r));this.minY=-i*this.optHeight,this.maxY=-o*this.optHeight}onMove(t){t.event.cancelable&&t.event.preventDefault(),t.event.stopPropagation();let e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=(0,a.j)(-nt,23*t.velocityY,nt),0===this.velocity&&0===t.deltaY){const e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),at)}else{if(this.y+=t.deltaY,Math.abs(t.velocityY)<.05){const e=t.deltaY>0,i=Math.abs(this.y)%this.optHeight/this.optHeight;e&&i>.5?this.velocity=-1*Math.abs(this.velocity):!e&&i<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(t){let e=this.col.options.length-1,i=0;const o=this.col.options;for(let n=0;n<o.length;n++)o[n].disabled||(e=Math.min(e,n),i=Math.max(i,n));if(0!==this.velocity)return;const r=(0,a.j)(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==r||t){const t=r*this.optHeight*-1;this.velocity=0,this.update(t,at,!0)}}render(){const t=this.col,e=(0,n.b)(this);return(0,r.h)(r.H,{class:{[e]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}},t.prefix&&(0,r.h)("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),(0,r.h)("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:t=>this.optsEl=t},t.options.map((t,e)=>(0,r.h)("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":e},t.text))),t.suffix&&(0,r.h)("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix))}get el(){return(0,r.i)(this)}static get watchers(){return{col:["colChanged"]}}},ot="picker-opt-selected",rt=.97,nt=90,at=150;it.style={ios:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}",md:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"}}}]);