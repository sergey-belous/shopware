"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["swag-paypal.express-checkout"],{857:t=>{var e=function(t){var e;return!!t&&"object"==typeof t&&"[object RegExp]"!==(e=Object.prototype.toString.call(t))&&"[object Date]"!==e&&t.$$typeof!==r},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(t,e){return!1!==e.clone&&e.isMergeableObject(t)?a(Array.isArray(t)?[]:{},t,e):t}function i(t,e,r){return t.concat(e).map(function(t){return n(t,r)})}function o(t){return Object.keys(t).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[])}function s(t,e){try{return e in t}catch(t){return!1}}function a(t,r,l){(l=l||{}).arrayMerge=l.arrayMerge||i,l.isMergeableObject=l.isMergeableObject||e,l.cloneUnlessOtherwiseSpecified=n;var c,d,u=Array.isArray(r);return u!==Array.isArray(t)?n(r,l):u?l.arrayMerge(t,r,l):(d={},(c=l).isMergeableObject(t)&&o(t).forEach(function(e){d[e]=n(t[e],c)}),o(r).forEach(function(e){(!s(t,e)||Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))&&(s(t,e)&&c.isMergeableObject(r[e])?d[e]=(function(t,e){if(!e.customMerge)return a;var r=e.customMerge(t);return"function"==typeof r?r:a})(e,c)(t[e],r[e],c):d[e]=n(r[e],c))}),d)}a.all=function(t,e){if(!Array.isArray(t))throw Error("first argument should be an array");return t.reduce(function(t,r){return a(t,r,e)},{})},t.exports=a},49:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(140);class i{static isNode(t){return"object"==typeof t&&null!==t&&(t===document||t===window||t instanceof Node)}static hasAttribute(t,e){if(!i.isNode(t))throw Error("The element must be a valid HTML Node!");return"function"==typeof t.hasAttribute&&t.hasAttribute(e)}static getAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!1===i.hasAttribute(t,e))throw Error('The required property "'.concat(e,'" does not exist!'));if("function"!=typeof t.getAttribute){if(r)throw Error("This node doesn't support the getAttribute function!");return}return t.getAttribute(e)}static getDataAttribute(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=e.replace(/^data(|-)/,""),s=n.Z.toLowerCamelCase(o,"-");if(!i.isNode(t)){if(r)throw Error("The passed node is not a valid HTML Node!");return}if(void 0===t.dataset){if(r)throw Error("This node doesn't support the dataset attribute!");return}let a=t.dataset[s];if(void 0===a){if(r)throw Error('The required data attribute "'.concat(e,'" does not exist on ').concat(t,"!"));return a}return n.Z.parsePrimitive(a)}static querySelector(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!i.isNode(t))throw Error("The parent node is not a valid HTML Node!");let n=t.querySelector(e)||!1;if(r&&!1===n)throw Error('The required element "'.concat(e,'" does not exist in parent node!'));return n}static querySelectorAll(t,e){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(r&&!i.isNode(t))throw Error("The parent node is not a valid HTML Node!");let n=t.querySelectorAll(e);if(0===n.length&&(n=!1),r&&!1===n)throw Error('At least one item of "'.concat(e,'" must exist in parent node!'));return n}static getFocusableElements(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return t.querySelectorAll('\n            input:not([tabindex^="-"]):not([disabled]):not([type="hidden"]),\n            select:not([tabindex^="-"]):not([disabled]),\n            textarea:not([tabindex^="-"]):not([disabled]),\n            button:not([tabindex^="-"]):not([disabled]),\n            a[href]:not([tabindex^="-"]):not([disabled]),\n            [tabindex]:not([tabindex^="-"]):not([disabled])\n        ')}static getFirstFocusableElement(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return this.getFocusableElements(t)[0]}static getLastFocusableElement(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=this.getFocusableElements(t);return e[e.length-1]}}},266:(t,e,r)=>{r.d(e,{Z:()=>n});class n{static iterate(t,e){if(t instanceof Map||Array.isArray(t))return t.forEach(e);if(t instanceof FormData){for(var r of t.entries())e(r[1],r[0]);return}if(t instanceof NodeList)return t.forEach(e);if(t instanceof HTMLCollection)return Array.from(t).forEach(e);if(t instanceof Object)return Object.keys(t).forEach(r=>{e(t[r],r)});throw Error("The element type ".concat(typeof t," is not iterable!"))}}},140:(t,e,r)=>{r.d(e,{Z:()=>n});class n{static ucFirst(t){return t.charAt(0).toUpperCase()+t.slice(1)}static lcFirst(t){return t.charAt(0).toLowerCase()+t.slice(1)}static toDashCase(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()}static toLowerCamelCase(t,e){let r=n.toUpperCamelCase(t,e);return n.lcFirst(r)}static toUpperCamelCase(t,e){return e?t.split(e).map(t=>n.ucFirst(t.toLowerCase())).join(""):n.ucFirst(t.toLowerCase())}static parsePrimitive(t){try{return/^\d+(.|,)\d+$/.test(t)&&(t=t.replace(",",".")),JSON.parse(t)}catch(e){return t.toString()}}}},293:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(857),i=r.n(n),o=r(49),s=r(140);class a{publish(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=new CustomEvent(t,{detail:e,cancelable:r});return this.el.dispatchEvent(n),n}subscribe(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this,i=t.split("."),o=r.scope?e.bind(r.scope):e;if(r.once&&!0===r.once){let e=o;o=function(r){n.unsubscribe(t),e(r)}}return this.el.addEventListener(i[0],o),this.listeners.push({splitEventName:i,opts:r,cb:o}),!0}unsubscribe(t){let e=t.split(".");return this.listeners=this.listeners.reduce((t,r)=>([...r.splitEventName].sort().toString()===e.sort().toString()?this.el.removeEventListener(r.splitEventName[0],r.cb):t.push(r),t),[]),!0}reset(){return this.listeners.forEach(t=>{this.el.removeEventListener(t.splitEventName[0],t.cb)}),this.listeners=[],!0}get el(){return this._el}set el(t){this._el=t}get listeners(){return this._listeners}set listeners(t){this._listeners=t}constructor(t=document){this._el=t,t.$emitter=this,this._listeners=[]}}class l{init(){throw Error('The "init" method for the plugin "'.concat(this._pluginName,'" is not defined.'))}update(){}_init(){this._initialized||(this.init(),this._initialized=!0)}_update(){this._initialized&&this.update()}_mergeOptions(t){let e=s.Z.toDashCase(this._pluginName),r=o.Z.getDataAttribute(this.el,"data-".concat(e,"-config"),!1),n=o.Z.getAttribute(this.el,"data-".concat(e,"-options"),!1),a=[this.constructor.options,this.options,t];r&&a.push(window.PluginConfigManager.get(this._pluginName,r));try{n&&a.push(JSON.parse(n))}catch(t){throw console.error(this.el),Error('The data attribute "data-'.concat(e,'-options" could not be parsed to json: ').concat(t.message))}return i().all(a.filter(t=>t instanceof Object&&!(t instanceof Array)).map(t=>t||{}))}_registerInstance(){window.PluginManager.getPluginInstancesFromElement(this.el).set(this._pluginName,this),window.PluginManager.getPlugin(this._pluginName,!1).get("instances").push(this)}_getPluginName(t){return t||(t=this.constructor.name),t}constructor(t,e={},r=!1){if(!o.Z.isNode(t))throw Error("There is no valid element given.");this.el=t,this.$emitter=new a(this.el),this._pluginName=this._getPluginName(r),this.options=this._mergeOptions(e),this._initialized=!1,this._registerInstance(),this._init()}}},107:(t,e,r)=>{r.d(e,{Z:()=>n});class n{get(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json",n=this._createPreparedRequest("GET",t,r);return this._sendRequest(n,null,e)}post(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(e,n);let i=this._createPreparedRequest("POST",t,n);return this._sendRequest(i,e,r)}delete(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(e,n);let i=this._createPreparedRequest("DELETE",t,n);return this._sendRequest(i,e,r)}patch(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";n=this._getContentType(e,n);let i=this._createPreparedRequest("PATCH",t,n);return this._sendRequest(i,e,r)}abort(){if(this._request)return this._request.abort()}setErrorHandlingInternal(t){this._errorHandlingInternal=t}_registerOnLoaded(t,e){e&&(!0===this._errorHandlingInternal?(t.addEventListener("load",()=>{e(t.responseText,t)}),t.addEventListener("abort",()=>{console.warn("the request to ".concat(t.responseURL," was aborted"))}),t.addEventListener("error",()=>{console.warn("the request to ".concat(t.responseURL," failed with status ").concat(t.status))}),t.addEventListener("timeout",()=>{console.warn("the request to ".concat(t.responseURL," timed out"))})):t.addEventListener("loadend",()=>{e(t.responseText,t)}))}_sendRequest(t,e,r){return this._registerOnLoaded(t,r),t.send(e),t}_getContentType(t,e){return t instanceof FormData&&(e=!1),e}_createPreparedRequest(t,e,r){return this._request=new XMLHttpRequest,this._request.open(t,e),this._request.setRequestHeader("X-Requested-With","XMLHttpRequest"),r&&this._request.setRequestHeader("Content-type",r),this._request}constructor(){this._request=null,this._errorHandlingInternal=!1}}},327:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(363);let i="element-loader-backdrop";class o extends n.Z{static create(t){t.classList.add("has-element-loader"),o.exists(t)||(o.appendLoader(t),setTimeout(()=>{let e=t.querySelector(".".concat(i));e&&e.classList.add("element-loader-backdrop-open")},1))}static remove(t){t.classList.remove("has-element-loader");let e=t.querySelector(".".concat(i));e&&e.remove()}static exists(t){return t.querySelectorAll(".".concat(i)).length>0}static getTemplate(){return'\n        <div class="'.concat(i,'">\n            <div class="loader" role="status">\n                <span class="').concat("visually-hidden",'">Loading...</span>\n            </div>\n        </div>\n        ')}static appendLoader(t){t.insertAdjacentHTML("beforeend",o.getTemplate())}}},363:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(266);let i="loader",o={BEFORE:"before",INNER:"inner"};class s{create(){if(!this.exists()){if(this.position===o.INNER){this.parent.innerHTML=s.getTemplate();return}this.parent.insertAdjacentHTML(this._getPosition(),s.getTemplate())}}remove(){let t=this.parent.querySelectorAll(".".concat(i));n.Z.iterate(t,t=>t.remove())}exists(){return this.parent.querySelectorAll(".".concat(i)).length>0}_getPosition(){return this.position===o.BEFORE?"afterbegin":"beforeend"}static getTemplate(){return'<div class="'.concat(i,'" role="status">\n                    <span class="').concat("visually-hidden",'">Loading...</span>\n                </div>')}static SELECTOR_CLASS(){return i}constructor(t,e=o.BEFORE){this.parent=t instanceof Element?t:document.body.querySelector(t),this.position=e}}},159:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var n=r(107),i=r(49),o=r(327),s=r(475),a=r(212);function l(t,e,r){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r||t):i.value}})(t,e,r||t)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}class d extends s.Z{init(){this._client=new n.Z,this.createButton()}createButton(){this.createScript(t=>{this.renderButton(t)})}renderButton(t){this.options.fundingSources.forEach(e=>{let r=t.Buttons(this.getButtonConfig(e));r.isEligible()&&r.render(this.el)})}getBuyButtonState(){if(!this.options.addProductToCart)return{element:null,disabled:!1};let t=i.Z.querySelector(this.el.closest("form"),this.options.buyButtonSelector);return{element:t,disabled:t.disabled}}observeBuyButton(t,e,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{attributes:!0},i=new MutationObserver(t=>{t.forEach(t=>{if("disabled"===t.attributeName){let{disabled:t}=this.getBuyButtonState();if(t){r();return}e()}})});return i.observe(t,n),i}getButtonConfig(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"paypal",e=this.el,{element:r,disabled:n}=this.getBuyButtonState();return{fundingSource:t,onInit:(t,i)=>{if(!this.options.addProductToCart)return;let o=()=>{i.enable(),e.classList.remove(this.options.disabledClass)},s=()=>{i.disable(),e.classList.add(this.options.disabledClass)};if(this.observeBuyButton(r,o,s),n){s();return}o()},style:{size:this.options.buttonSize,shape:this.options.buttonShape,color:this.options.buttonColor,tagline:this.options.tagline,layout:"vertical",label:"checkout",height:40},createOrder:this.createOrder.bind(this),onApprove:this.onApprove.bind(this),onCancel:this.onCancel.bind(this),onError:this.onError.bind(this)}}createOrder(){let t={paymentMethodId:this.options.payPalPaymentMethodId,deleteCart:this.options.addProductToCart};return new Promise((e,r)=>{this._client.post(this.options.contextSwitchUrl,JSON.stringify(t),(t,n)=>(n.status>=400&&r(t),Promise.resolve().then(()=>this.options.addProductToCart?this.addProductToCart():Promise.resolve()).then(()=>this._createOrder()).then(t=>{e(t)}).catch(t=>{r(t)})))})}_createOrder(){return new Promise((t,e)=>{this._client.post(this.options.createOrderUrl,new FormData,(r,n)=>{n.status>=400&&e(r);try{let e=JSON.parse(r);t(e.token)}catch(t){e(t)}})})}addProductToCart(){let t=this.el.closest("form"),e=i.Z.querySelector(t,this.options.buyButtonSelector),r=window.PluginManager.getPluginInstanceFromElement(t,"AddToCart");return new Promise(t=>{r.$emitter.subscribe("openOffCanvasCart",()=>{t()}),e.click()})}onApprove(t,e){let r={token:t.orderID};o.Z.create(document.body),this._client.post(this.options.prepareCheckoutUrl,JSON.stringify(r),(t,r)=>r.status<400?e.redirect(this.options.checkoutConfirmUrl):this.onError())}onErrorHandled(t,e,r){t===this.GENERIC_ERROR||t===this.USER_CANCELLED?(window.scrollTo(0,0),window.location=this.options.cancelRedirectUrl):super.onErrorHandled(t,e,r)}constructor(...t){super(...t),this.GENERIC_ERROR="SWAG_PAYPAL__EXPRESS_GENERIC_ERROR",this.USER_CANCELLED="SWAG_PAYPAL__EXPRESS_USER_CANCELLED"}}d.scriptLoading=new a.Z,d.options={...l(c(d),"options",d),disabledClass:"is-disabled",buyButtonSelector:".btn-buy",buttonColor:"gold",buttonShape:"sharp",buttonSize:"small",tagline:!1,addProductToCart:!1,contextSwitchUrl:"",payPalPaymentMethodId:"",createOrderUrl:"",deleteCartUrl:"",prepareCheckoutUrl:"",checkoutConfirmUrl:"",addErrorUrl:"",cancelRedirectUrl:"",showPayLater:!0,fundingSources:[],useAlternativePaymentMethods:!0,commit:!1,scriptAwaitVisibility:!0,partOfDomContentLoading:!1}},475:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(293);function i(t,e){void 0===e&&(e={});var r=document.createElement("script");return r.src=t,Object.keys(e).forEach(function(t){r.setAttribute(t,e[t]),"data-csp-nonce"===t&&r.setAttribute("nonce",e["data-csp-nonce"])}),r}function o(t,e){if("object"!=typeof t||null===t)throw Error("Expected an options object.");if(void 0!==e&&"function"!=typeof e)throw Error("Expected PromisePonyfill to be a function.")}var s=r(212);let a=["card","bancontact","blik","eps","giropay","ideal","mybank","p24","sepa","sofort","venmo"];class l extends n.Z{_init(){this.options.partOfDomContentLoading||"complete"===document.readyState?super._init():window.addEventListener("load",()=>{super._init()})}get scriptOptionsHash(){return JSON.stringify(this.getScriptOptions())}async createScript(t){var e,r,n;(n=(e=l.scriptPromises)[r=this.scriptOptionsHash])!==null&&void 0!==n||(e[r]=this._loadScript());let i=async()=>{t(await l.scriptPromises[this.scriptOptionsHash])};this.options.scriptAwaitVisibility?await this._awaitVisibility(i):await i(),this._createScriptLegacy(t)}async _awaitVisibility(t){let e=new IntersectionObserver(r=>{let[n]=r;n.isIntersecting&&(e.disconnect(),t())},{rootMargin:"200px"});e.observe(this.el)}async _loadScript(){return await function(t,e){if(void 0===e&&(e=Promise),o(t,e),"undefined"==typeof document)return e.resolve(null);var r,n,s,a,l,c=(n="https://www.paypal.com/sdk/js",t.sdkBaseUrl&&(n=t.sdkBaseUrl,delete t.sdkBaseUrl),a=(s=Object.keys(t).filter(function(e){return void 0!==t[e]&&null!==t[e]&&""!==t[e]}).reduce(function(e,r){var n=t[r].toString();return"data"===(r=r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(t,e){return(e?"-":"")+t.toLowerCase()})).substring(0,4)||"crossorigin"===r?e.attributes[r]=n:e.queryParams[r]=n,e},{queryParams:{},attributes:{}})).queryParams,l=s.attributes,a["merchant-id"]&&-1!==a["merchant-id"].indexOf(",")&&(l["data-merchant-id"]=a["merchant-id"],a["merchant-id"]="*"),{url:"".concat(n,"?").concat((r="",Object.keys(a).forEach(function(t){0!==r.length&&(r+="&"),r+=t+"="+a[t]}),r)),attributes:l}),d=c.url,u=c.attributes,h=u["data-namespace"]||"paypal",p=window[h];return(u["data-js-sdk-library"]||(u["data-js-sdk-library"]="paypal-js"),/*!
 * paypal-js v8.0.5 (2024-04-16T22:14:11.318Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e){var r=document.querySelector('script[src="'.concat(t,'"]'));if(null===r)return null;var n=i(t,e),o=r.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(n.dataset).length)return null;var s=!0;return Object.keys(o.dataset).forEach(function(t){o.dataset[t]!==n.dataset[t]&&(s=!1)}),s?r:null}(d,u)&&p)?e.resolve(p):(function(t,e){void 0===e&&(e=Promise),o(t,e);var r=t.url,n=t.attributes;if("string"!=typeof r||0===r.length)throw Error("Invalid url.");if(void 0!==n&&"object"!=typeof n)throw Error("Expected attributes to be an object.");return new e(function(t,e){var o,s,a,l,c,d;if("undefined"==typeof document)return t();s=(o={url:r,attributes:n,onSuccess:function(){return t()},onError:function(){return e(Error('The script "'.concat(r,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.')))}}).url,a=o.attributes,l=o.onSuccess,c=o.onError,(d=i(s,a)).onerror=c,d.onload=l,document.head.insertBefore(d,document.head.firstElementChild)})})({url:d,attributes:u},e).then(function(){var t=window[h];if(t)return t;throw Error("The window.".concat(h," global variable is not available."))})}(this.getScriptOptions()),l.paypal[this.scriptOptionsHash]=window.paypal,delete window.paypal,l.paypal[this.scriptOptionsHash]}getScriptOptions(){let t={components:"buttons,messages,card-fields,funding-eligibility,applepay,googlepay","client-id":this.options.clientId,commit:!!this.options.commit,locale:this.options.languageIso,currency:this.options.currency,intent:this.options.intent,"enable-funding":"paylater,venmo"};return(this.options.disablePayLater||!1===this.options.showPayLater)&&(t["enable-funding"]="venmo"),!1===this.options.useAlternativePaymentMethods?t["disable-funding"]=a.join(","):Array.isArray(this.options.disabledAlternativePaymentMethods)&&(t["disable-funding"]=this.options.disabledAlternativePaymentMethods.join(",")),this.options.merchantPayerId&&(t["merchant-id"]=this.options.merchantPayerId),this.options.clientToken&&(t["data-client-token"]=this.options.clientToken),this.options.userIdToken&&(t["data-user-id-token"]=this.options.userIdToken),this.options.partnerAttributionId&&(t["data-partner-attribution-id"]=this.options.partnerAttributionId),t}callCallbacks(){this.constructor.scriptLoading.callbacks.forEach(t=>{l.scriptPromises[this.scriptOptionsHash].then(e=>t.call(this,e))})}_createScriptLegacy(t){this.constructor.scriptLoading.callbacks.push(t)}}function c(t,e,r){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(r||t):i.value}})(t,e,r||t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}l.scriptLoading=new s.Z,l.options={clientId:"",merchantPayerId:"",partnerAttributionId:"",currency:"EUR",intent:"capture",commit:!0,languageIso:"en_GB",scriptAwaitVisibility:!1,partOfDomContentLoading:!0},l.scriptPromises={},l.paypal={};class u extends l{handleError(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;r&&"string"!=typeof r&&(r=String(r));let n=this._extractErrorCode(r);if(n&&(t=n),!this.options.handleErrorUrl){console.error("PayPal ".concat(e?"fatal ":"","error occurred: ").concat(t," - ").concat(String(null!=r?r:"")));return}this._client.post(this.options.handleErrorUrl,JSON.stringify({code:t,error:r,fatal:e}),()=>{this.onErrorHandled(t,e,r)})}onErrorHandled(t,e,r){window.scrollTo(0,0),window.location.reload()}onFatalError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.GENERIC_ERROR,!0,t)}onError(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.GENERIC_ERROR,!1,t)}onCancel(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.handleError(this.USER_CANCELLED,!1,t)}createError(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=this.options.addErrorUrl;if(this.options.accountOrderEditCancelledUrl&&this.options.accountOrderEditFailedUrl){window.location="cancel"===t?this.options.accountOrderEditCancelledUrl:this.options.accountOrderEditFailedUrl;return}e&&"string"!=typeof e&&(e=String(e)),this._client.post(n,JSON.stringify({error:e,type:t}),()=>{if(r){window.location=r;return}window.onbeforeunload=()=>{window.scrollTo(0,0)},window.location.reload()})}_extractErrorCode(t){try{var e;let r=(e=JSON.parse(t))===null||void 0===e?void 0:e.errors;if(!Array.isArray(r))return null;for(let t of r)if("object"==typeof t&&"string"==typeof t.code)return t.code}catch(t){}return null}constructor(...t){super(...t),this.GENERIC_ERROR="SWAG_PAYPAL__GENERIC_ERROR",this.NOT_ELIGIBLE="SWAG_PAYPAL__NOT_ELIGIBLE",this.USER_CANCELLED="SWAG_PAYPAL__USER_CANCELLED",this.BROWSER_UNSUPPORTED="SWAG_PAYPAL__BROWSER_UNSUPPORTED"}}u.options={...c(d(u),"options",u),addErrorUrl:"",handleErrorUrl:""}},212:(t,e,r)=>{r.d(e,{Z:()=>n});class n{constructor(){this.loadingScript=!1,this.paypal=null,this.callbacks=[]}}}}]);