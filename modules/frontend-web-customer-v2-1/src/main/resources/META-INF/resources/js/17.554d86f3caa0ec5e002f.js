webpackJsonp([17],{253:function(e,t,n){var r=n(137)(n(740),n(745),null,null);r.options.__file="d:\\FDS_OPENCPS\\front-end-v2.1\\frontend-opencps-v2.1\\onegate_21_fe\\src\\components\\TiepNhan\\TiepNhanHoSo_LePhi.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] TiepNhanHoSo_LePhi.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},648:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var r=n(2),i=n(5),o=n(0);t.a=function(e,t){if(t.value){var a=n.i(i.a)(o.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");1!==u.length||(e=u[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,a),t=Math.max(t,a.suffix.length),t=e.value.length-t,t=Math.max(t,a.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-a.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;"number"==typeof e&&(e=e.toFixed(a(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=o(e),i=s(r,t.precision),u=f(i).split("."),d=u[0],p=u[1];return d=c(d,t.thousands),t.prefix+n+l(d,p,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=o(e),i=s(r,t);return parseFloat(i)*n}function o(e){return f(e).replace(/\D+/g,"")||"0"}function a(e){return u(0,e,20)}function u(e,t,n){return Math.max(e,Math.min(t,n))}function s(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(a(t))}function c(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function l(e,t,n){return t?e+n+t:e}function f(e){return e?e.toString():""}function d(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function p(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var v=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return p})},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){u.a[e]=t[e]}),e.directive("money",a.a),e.component("money",o.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),o=n.n(i),a=n(1),u=n(0);n.d(t,"Money",function(){return o.a}),n.d(t,"VMoney",function(){return a.a}),n.d(t,"options",function(){return u.a}),n.d(t,"VERSION",function(){return s});var s="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(o.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(o.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:i,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])})},740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(648);n.n(r);t.default={data:function(){return{money:{decimal:"",thousands:".",prefix:"",suffix:"",precision:0,masked:!1},lePhi:{}}},directives:{money:r.VMoney},computed:{loading:function(){return this.$store.getters.loading}},methods:{clearTotalMoney:function(){},initData:function(e){this.lePhi=e}},filters:{currency:function(e){}}}},745:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-subheader",{staticClass:"pl-0 text-right"},[e._v("Tổng tiền: ")])],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-text-field",{directives:[{name:"money",rawName:"v-money",value:e.money,expression:"money"}],model:{value:e.lePhi.paymentFee,callback:function(t){e.$set(e.lePhi,"paymentFee",t)},expression:"lePhi.paymentFee"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}}),e._v(" "),n("v-flex",{attrs:{xs12:"",sm2:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):n("v-subheader",{staticClass:"pl-0 text-right"},[e._v("Ghi chú: ")])],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm10:""}},[e.loading?n("content-placeholders",{staticClass:"mt-1"},[n("content-placeholders-text",{attrs:{lines:1}})],1):e._e(),e._v(" "),e.lePhi.editable?n("v-text-field",{directives:[{name:"else",rawName:"v-else"}],attrs:{"multi-line":"",rows:"2"},model:{value:e.lePhi.paymentNote,callback:function(t){e.$set(e.lePhi,"paymentNote",t)},expression:"lePhi.paymentNote"}}):n("span",[e._v(e._s(e.lePhi.paymentNote))])],1)],1)],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=17.554d86f3caa0ec5e002f.js.map