webpackJsonp([6],{463:function(t,i,s){var a=s(184)(s(476),s(484),null,null);a.options.__file="d:\\FDS_OPENCPS\\front-end-v2.1\\frontend-opencps-v2.1\\onegate_21_kios\\src\\components\\HoSoKetQua.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] HoSoKetQua.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},476:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s(80),e=s(60),o=(s.n(e),s(185)),n=s.n(o);i.default={props:[],components:{},data:function(){return{loading:!1,loadingAction:!1,dossierList:[],dossierItemTotal:0,validateTracuu:!1,dialogCheckPass:!1,dialogError:!1,dossierDetail:"",valid:!1,validPass:!0,passCheck:"",visible:!1,layout:"normal",input:null,options:{useKbEvents:!1}}},computed:{},created:function(){var t=this;t.$nextTick(function(){t.doLoadingDataHoSo()})},watch:{},methods:{doLoadingDataHoSo:function(){var t=this;t.dossierList=[],t.loading=!0;var i=null;i={},t.$store.dispatch("loadingDataHoSoKQ",i).then(function(i){t.loading=!1,t.dossierList=i.data,t.dossierItemTotal=i.total}).catch(function(i){t.loading=!1,t.dossierList=[],t.dossierItemTotal=0})},viewDetail:function(t){var i=this;i.dossierDetail=t,i.dialogCheckPass=!0},submitViewDetail:function(){var t=this;if(""!==n()("#passCheck").val()){t.validPass=!0,t.loading=!0;var i={password:n()("#passCheck").val(),dossierId:t.dossierDetail.dossierId};t.$store.dispatch("getDossierDetailPass",i).then(function(i){t.loading=!1,t.dialogCheckPass=!1,t.clearDialog(),i.status&&"203"===i.status.toString()?t.dialogError=!0:i.status&&"200"===i.status.toString()&&a.a.push("/ho-so/"+t.dossierDetail.dossierId)}).catch(function(i){t.loading=!1,console.log("reject",i)})}else t.validPass=!1},clearDialog:function(){n()("#passCheck").val(""),this.validPass=!0,this.visible=!1},clear:function(t){n()("#"+t).val("")},accept:function(t){this.hide()},show:function(t){this.validPass=!0,this.input=t.target,this.visible||(this.visible=!0),this.bindClick()},hide:function(){this.visible=!1},next:function(){var t=this,i=document.querySelectorAll("input"),s=!1;[].forEach.call(i,function(a,e){!s&&a===t.input&&e<i.length-1&&(s=!0,t.$nextTick(function(){i[e+1].focus()}))}),s||(this.input.blur(),this.hide())},bindClick:function(){var t=this;setTimeout(function(){n()(".keyboard .line:nth-child(3) .key:last-child").unbind("click"),n()(".keyboard .line:nth-child(3) .key:last-child").bind("click",function(){t.submitViewDetail()})},300)}}}},484:function(t,i,s){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"px-2 py-0"},[s("div",[t.loading?s("content-placeholders",{staticClass:"mt-3"},[s("content-placeholders-text",{attrs:{lines:10}})],1):s("v-card",[s("div",{class:t.visible?"overlayActive":"",staticStyle:{"background-color":"#ffffff"}},[s("div",{staticClass:"mt-3 pt-2 text-center total-result-search-blue"},[s("span",[t._v("DANH SÁCH HỒ SƠ CÓ KẾT QUẢ   ("+t._s(t.dossierItemTotal)+")")])]),t._v(" "),s("div",{staticClass:"dossierList"},[s("div",{staticClass:"wrap-list",style:{color:t.activeColor}},t._l(t.dossierList,function(i,a){return s("v-layout",{key:i.dossierId,staticClass:"wrap",class:a%2==1?"active":""},[s("v-flex",{staticClass:"px-3 py-2",staticStyle:{width:"250px"}},[s("span",[t._v(t._s(i.dossierNo))])]),t._v(" "),s("v-flex",{staticClass:"px-3 py-2",staticStyle:{width:"calc(100% - 450px)"}},[s("span",[t._v(" "+t._s(i.applicantName))])]),t._v(" "),s("v-flex",{staticClass:"px-3 py-2 text-right",staticStyle:{width:"200px"}},[s("span",[t._v(t._s(i.dueDate))])])],1)}))])]),t._v(" "),t.visible?s("div",{staticClass:"virtual-keyboard"},[t.visible?s("vue-touch-keyboard",{attrs:{layout:t.layout,cancel:t.hide,accept:t.accept,input:t.input,next:t.next,options:t.options}}):t._e()],1):t._e()]),t._v(" "),s("v-dialog",{attrs:{"content-class":"dialog-keyboard",persistent:"","max-width":"500px"},model:{value:t.dialogCheckPass,callback:function(i){t.dialogCheckPass=i},expression:"dialogCheckPass"}},[s("v-form",{ref:"form",model:{value:t.valid,callback:function(i){t.valid=i},expression:"valid"}},[s("v-card",[s("v-card-title",{staticStyle:{color:"#fff","background-color":"#0b72ba"}},[s("span",{staticClass:"headline"},[t._v("Mã bí mật truy cập hồ sơ")])]),t._v(" "),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"input-group input-group--placeholder input-group--text-field primary--text"},[s("div",{staticClass:"input-group__input"},[s("input",{attrs:{id:"passCheck","data-layout":"normal","aria-label":"Số hồ sơ",placeholder:"Nhập mã bí mật đã được cấp",type:"text"},on:{focus:t.show}}),t._v(" "),t.visible?s("i",{staticClass:"icon material-icons input-group__append-icon input-group__icon-cb input-group__icon-clearable",attrs:{"aria-hidden":"true"},on:{click:function(i){t.clear("passCheck")}}},[t._v("clear")]):t._e()]),t._v(" "),s("div",{staticClass:"input-group__details"},[t.validPass?t._e():s("div",{staticClass:"input-group__messages",staticStyle:{color:"red"}},[t._v("* Mã bí mật là bắt buộc")])])])])],1)],1)],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"primary",flat:"flat",loading:t.loading,disabled:t.loading},nativeOn:{click:function(i){return t.submitViewDetail(i)}}},[s("v-icon",[t._v("save")]),t._v(" \n              Truy cập hồ sơ\n              "),s("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])],1),t._v(" "),s("v-btn",{attrs:{color:"red darken-3",flat:"flat",loading:t.loading,disabled:t.loading},on:{click:t.clearDialog},nativeOn:{click:function(i){t.dialogCheckPass=!1}}},[s("v-icon",[t._v("undo")]),t._v(" \n              Thoát\n              "),s("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])],1)],1)],1)],1)],1),t._v(" "),s("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogError,callback:function(i){t.dialogError=i},expression:"dialogError"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("Bạn không có quyền truy cập hồ sơ \n          "),s("span",[t._v(t._s(t.dossierDetail.dossierNo))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(i){t.dialogError=!1}}},[t._v("Đồng ý")])],1)],1)],1)],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});
//# sourceMappingURL=6.127164fb81dae2aef9dc.js.map