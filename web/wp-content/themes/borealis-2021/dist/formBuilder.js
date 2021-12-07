!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=319)}({319:function(e,t){function i(e,t,i,s,n,r,a){try{var u=e[r](a),o=u.value}catch(e){return void i(e)}u.done?t(o):Promise.resolve(o).then(s,n)}function s(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function r(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.requiredFields=[],this.errors=[],this.url=ajaxInfo.ajaxUrl,this.nonce=ajaxInfo.emailSecurity,this.destination=this.form.dataset.destination,this.action="send_email",this.checkbox=null,this.success=null,this.failure=null,this.toggleSuccessVisibility=this.toggleSuccessVisibility.bind(this),this.toggleFailureVisibility=this.toggleFailureVisibility.bind(this),this.handleWindowResize=this.handleWindowResize.bind(this),this.handleDestinationChange=this.handleDestinationChange.bind(this)}var t,n,a,u,o;return t=e,(n=[{key:"setState",value:function(e,t){this[e]=t}},{key:"getRequiredFields",value:function(){var e=s(this.form.elements).filter((function(e){return e.required}));return e.length?(this.requiredFields=e,e):[]}},{key:"checkRequiredFields",value:function(){var e=this;this.requiredFields.forEach((function(t){t.value&&""!==t.value&&null!==t.value||(e.errors.push(t.name),t.setAttribute("aria-invalid",!0))}))}},{key:"handleFocus",value:function(e){var t=e.name,i=this.errors.indexOf(t);i>-1&&(this.errors.splice(i,1),e.setAttribute("aria-invalid",!1))}},{key:"submitForm",value:(u=regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.fetch(this.url,{method:"POST",credentials:"same-origin",body:t});case 3:return i=e.sent,e.next=6,i.json();case 6:if(!(i=e.sent).success){e.next=10;break}return this.toggleSuccessVisibility(),e.abrupt("return");case 10:this.toggleFailureVisibility(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.toggleFailureVisibility();case 16:case"end":return e.stop()}}),e,this,[[0,13]])})),o=function(){var e=this,t=arguments;return new Promise((function(s,n){var r=u.apply(e,t);function a(e){i(r,s,n,a,o,"next",e)}function o(e){i(r,s,n,a,o,"throw",e)}a(void 0)}))},function(e){return o.apply(this,arguments)})},{key:"toggleFailureVisibility",value:function(){if(this.failure.classList.contains("custom-form__failure--active"))return this.failure.style.maxHeight="0",this.failure.style.overflow="hidden",void this.failure.classList.remove("custom-form__failure--active");this.failure.style.maxHeight="unset";var e=this.failure.offsetHeight;this.failure.style.maxHeight="".concat(e,"px"),this.failure.style.overflow="visible",this.failure.classList.add("custom-form__failure--active")}},{key:"toggleSuccessVisibility",value:function(){if(this.success.classList.contains("custom-form__success--active"))return this.success.style.maxHeight="0",this.success.style.overflow="hidden",void this.success.classList.remove("custom-form__success--active");this.success.style.maxHeight="unset";var e=this.success.offsetHeight;this.success.style.maxHeight="".concat(e,"px"),this.success.style.overflow="visible",this.success.classList.add("custom-form__success--active")}},{key:"getDataFields",value:function(e){var t=this;return["destination","site","title"].forEach((function(i){var s=t.form.dataset[i];e.append(i,s)})),e}},{key:"getFields",value:function(e){var t=this;return["action","nonce"].forEach((function(i){t[i]&&e.append(i,t[i])})),e}},{key:"getData",value:function(){var e=new FormData(this.form);e=this.getDataFields(e),e=this.getFields(e),this.submitForm(e)}},{key:"getSuccessState",value:function(){var e=this.form.id,t=document.getElementById("".concat(e,"-success"));t&&(this.setState("success",t),this.addSuccessDismissHandler(),window.addEventListener("resize",this.handleWindowResize))}},{key:"getFailureState",value:function(){var e=this.form.id,t=document.getElementById("".concat(e,"-failure"));t&&(this.setState("failure",t),this.addFailureDismissHandler())}},{key:"handleSubmit",value:function(){this.getRequiredFields(),this.checkRequiredFields(),this.errors.length>0||this.getData()}},{key:"handleWindowResize",value:function(){if(this.success.classList.contains("custom-form__success--active")){this.success.style.maxHeight="unset";var e=this.success.offsetHeight;this.success.style.maxHeight="".concat(e,"px")}if(this.failure.classList.contains("custom-form__failure--active")){this.failure.style.maxHeight="unset";var t=this.failure.offsetHeight;this.failure.style.maxHeight="".concat(t,"px")}}},{key:"handleChange",value:function(e,t){var i=t.target;if("radio"!==t.target.getAttribute("type")){var s=i.checked;i.setAttribute("aria-checked",s)}else e.forEach((function(e){var t=e.checked;e.setAttribute("aria-checked",t)}))}},{key:"addSuccessDismissHandler",value:function(){this.success.querySelector(".dismiss-button").addEventListener("click",this.toggleSuccessVisibility)}},{key:"addFailureDismissHandler",value:function(){this.failure.querySelector(".dismiss-button").addEventListener("click",this.toggleFailureVisibility)}},{key:"addChangeListener",value:function(e){var t=this;e&&e.length&&e.forEach((function(i){i.addEventListener("change",t.handleChange.bind(t,e))}))}},{key:"changeListener",value:function(){var e=s(this.form.querySelectorAll("input[type=checkbox]")),t=s(this.form.querySelectorAll("input[type=radio]"));this.addChangeListener(e),this.addChangeListener(t)}},{key:"handleDestinationChange",value:function(e){e.target.value&&""!==e.target.value?this.form.dataset.destination=e.target.value:this.form.dataset.destination=this.destination}},{key:"destinationHandler",value:function(){var e=this.form.querySelector(".custom-form__destination select");e&&e.addEventListener("change",this.handleDestinationChange)}},{key:"init",value:function(){this.changeListener(),this.destinationHandler(),this.getSuccessState(),this.getFailureState()}}])&&r(t.prototype,n),a&&r(t,a),e}(),u=document.querySelectorAll(".custom-form");u.length&&u.forEach((function(e){var t=new a(e);t.init(),function(e,t){e.addEventListener("submit",(function(e){e.preventDefault(),t.handleSubmit()}),!1)}(e,t),function(e){var t=e.getRequiredFields();t.length&&t.forEach((function(t){t.addEventListener("focus",(function(){e.handleFocus(t)}))}))}(t)}))}});