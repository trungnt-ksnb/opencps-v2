webpackJsonp([9],{478:function(e,t,n){var i=n(195)(n(526),n(553),null,null);e.exports=i.exports},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(550);n.n(i);t.default={data:function(){return{money:{decimal:"",thousands:".",prefix:"",suffix:"",precision:0,masked:!1},lePhi:{paymentFee:"",paymentNote:""}}},directives:{money:i.VMoney},computed:{loading:function(){return this.$store.getters.loading}},methods:{clearTotalMoney:function(){var e=this;console.log(e.lePhi.fee)},initData:function(e){var t=this,n={dossierId:e.dossierId};t.$store.dispatch("loadDossierPayments",n).then(function(n){t.lePhi=n,t.lePhi.dossierId=e.dossierId})}},filters:{currency:function(e){}}}},550:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var i=n(2),r=n(5),o=n(0);t.a=function(e,t){if(t.value){var a=n.i(r.a)(o.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");1!==u.length||(e=u[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(i.a)(e.value,a),t=Math.max(t,a.suffix.length),t=e.value.length-t,t=Math.max(t,a.prefix.length+1),n.i(i.b)(e,t),e.dispatchEvent(n.i(i.c)("change"))},e.onfocus=function(){n.i(i.b)(e,e.value.length-a.suffix.length)},e.oninput(),e.dispatchEvent(n.i(i.c)("input"))}}},function(e,t,n){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(a(t.precision)));var n=e.indexOf("-")>=0?"-":"",i=o(e),r=s(i,t.precision),u=f(r).split("."),d=u[0],p=u[1];return d=c(d,t.thousands),t.prefix+n+l(d,p,t.decimal)+t.suffix}function r(e,t){var n=e.indexOf("-")>=0?-1:1,i=o(e),r=s(i,t);return parseFloat(r)*n}function o(e){return f(e).replace(/\D+/g,"")||"0"}function a(e){return u(0,e,20)}function u(e,t,n){return Math.max(e,Math.min(t,n))}function s(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(a(t))}function c(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function l(e,t,n){return t?e+n+t:e}function f(e){return e?e.toString():""}function d(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function p(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return p})},function(e,t,n){"use strict";function i(e,t){t&&Object.keys(t).map(function(e){u.a[e]=t[e]}),e.directive("money",a.a),e.component("money",o.a)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o=n.n(r),a=n(1),u=n(0);n.d(t,"Money",function(){return o.a}),n.d(t,"VMoney",function(){return a.a}),n.d(t,"options",function(){return u.a}),n.d(t,"VERSION",function(){return s});var s="0.8.1";t.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(0),o=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return r.a.precision}},decimal:{type:String,default:function(){return r.a.decimal}},thousands:{type:String,default:function(){return r.a.thousands}},prefix:{type:String,default:function(){return r.a.prefix}},suffix:{type:String,default:function(){return r.a.suffix}}},directives:{money:i.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var i=n.i(o.a)(e,this.$props);i!==this.formattedValue&&(this.formattedValue=i)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(o.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,i){return n[i]=void 0===t[i]?e[i]:t[i],n},{})}},function(e,t,n){var i=n(7)(n(4),n(8),null,null);e.exports=i.exports},function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),i){var s=u.computed||(u.computed={});Object.keys(i).forEach(function(e){var t=i[e];s[e]=function(){return t}})}return{esModule:r,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])})},553:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-subheader",{staticClass:"pl-0 text-right"},[e._v("Tổng tiền: ")])],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-text-field",{directives:[{name:"money",rawName:"v-money",value:e.money,expression:"money"}],model:{value:e.lePhi.paymentFee,callback:function(t){e.$set(e.lePhi,"paymentFee",t)},expression:"lePhi.paymentFee"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}}),e._v(" "),n("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-subheader",{staticClass:"pl-0 text-right"},[e._v("Ghi chú: ")])],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm10:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-text-field",{attrs:{"multi-line":"",rows:"2"},model:{value:e.lePhi.paymentNote,callback:function(t){e.$set(e.lePhi,"paymentNote",t)},expression:"lePhi.paymentNote"}})],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.19bd39dcef3d2c4b64d2.js.map