webpackJsonp([23],{220:function(t,s,i){var a=i(137)(i(675),i(678),null,null);a.options.__file="d:\\FDS_OPENCPS\\front-end-v2.1\\frontend-opencps-v2.1\\onegate_21_fe\\src\\components\\form_xu_ly\\ThongTinCoBanHoSo.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] ThongTinCoBanHoSo.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},675:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{detailDossier:{type:Object,default:function(){}}},watch:{detailDossier:function(t){this.thongTinChiTietHoSo=t}},components:{},data:function(){return{thongTinChiTietHoSo:{},showContactDetail:!1}},computed:{loading:function(){return this.$store.getters.loading},originality:function(){return this.getOriginality()}},created:function(){var t=this;t.thongTinChiTietHoSo=t.detailDossier},mounted:function(){var t=this;t.thongTinChiTietHoSo=t.detailDossier},methods:{initData:function(t){var s=this;s.$store.dispatch("getDetailDossier",t).then(function(t){s.thongTinChiTietHoSo=t})},goBack:function(){window.history.back()},durationText:function(t,s){var i;if(1===t&&s>8){var a=Math.floor(s/8)+" ngày",o=void 0;o=s%8!=0?8*(s/8-Math.floor(s/8))+" giờ":"",i=a+" "+o}else 0===t?i=s+" ngày":1===t&&s<=8&&(i=s+" giờ");return i}},filters:{dateTimeView:function(t){if(t){var s=new Date(t);return s.getDate().toString().padStart(2,"0")+"/"+(s.getMonth()+1).toString().padStart(2,"0")+"/"+s.getFullYear()+" | "+s.getHours().toString().padStart(2,"0")+":"+s.getMinutes().toString().padStart(2,"0")}return""}}}},678:function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-expansion-panel",{staticClass:"expansion-pl ext__form"},[i("v-expansion-panel-content",{attrs:{"hide-actions":"",value:"1"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"background-triangle-small"},[i("v-icon",{attrs:{size:"18",color:"white"}},[t._v("star_rate")])],1),t._v("Thông tin chung hồ sơ")]),t._v(" "),i("v-card",[i("v-card-text",{staticClass:"py-0"},[i("v-layout",{staticClass:"px-2 py-2",attrs:{wrap:""}},[1!==t.originality?i("v-flex",{staticClass:"pr-3",attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Chủ hồ sơ: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold"},[t._v(" "+t._s(t.thongTinChiTietHoSo.applicantName))])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1 overHidden"},[i("span",{staticClass:"pr-2"},[t._v("Địa chỉ: ")]),t._v(" "),i("v-tooltip",{attrs:{top:""}},[i("span",{staticClass:"text-bold ",attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(t.thongTinChiTietHoSo.address)+" "+t._s(t.thongTinChiTietHoSo.wardName)+", "+t._s(t.thongTinChiTietHoSo.districtName)+", "+t._s(t.thongTinChiTietHoSo.cityName))]),t._v(" "),i("span",{staticClass:"pl-0"},[t._v(" "+t._s(t.thongTinChiTietHoSo.address)+" "+t._s(t.thongTinChiTietHoSo.wardName)+", "+t._s(t.thongTinChiTietHoSo.districtName)+", "+t._s(t.thongTinChiTietHoSo.cityName))])])],1),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pl-0"},[t._v("Thư điện tử: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.contactEmail)+" ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Điện thoại: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.contactTelNo)+" ")])])]):t._e(),t._v(" "),1===t.originality?i("v-flex",{staticClass:"pr-3",attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Mã hồ sơ: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.thongTinChiTietHoSo.dossierNo)+" ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Cơ quan: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.thongTinChiTietHoSo.govAgencyName)+" ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Trạng thái: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.dossierStatusText)+" ")])])]):t._e(),t._v(" "),1!==t.originality?i("v-flex",{attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Ngày gửi trực tuyến: ")]),t._v(" "),t.thongTinChiTietHoSo.online?i("span",{staticClass:"pl-0 text-bold"},[t._v(" "+t._s(t.thongTinChiTietHoSo.submitDate)+" ")]):i("span",{staticClass:"pl-0 text-bold"},[t._v(" Một cửa ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Ngày tiếp nhận: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.receiveDate))])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Thời hạn giải quyết: ")]),t._v(" "),t.thongTinChiTietHoSo.durationCount>0?i("span",{staticClass:"pl-0 text-bold "},[t._v(" \n                "+t._s(t.durationText(t.thongTinChiTietHoSo.durationUnit,t.thongTinChiTietHoSo.durationCount))+" làm việc \n              ")]):i("span",{staticClass:"pl-0 text-bold "},[t._v("\n                Không quy định\n              ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Ngày hẹn trả: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.dueDate))])])]):i("v-flex",{attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Ngày gửi: ")]),t._v(" "),t.thongTinChiTietHoSo.online?i("span",{staticClass:"pl-0 text-bold"},[t._v(" "+t._s(t.thongTinChiTietHoSo.submitDate)+" ")]):i("span",{staticClass:"pl-0 text-bold"},[t._v(" Một cửa ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Ngày tiếp nhận: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.receiveDate))])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Ngày hẹn trả: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.dueDate))])])]),t._v(" "),1!==t.originality?i("v-flex",{attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Mã hồ sơ: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v("  "+t._s(t.thongTinChiTietHoSo.dossierNo)+" ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pr-2"},[t._v("Trạng thái: ")]),t._v(" "),i("span",{staticClass:"pl-0 text-bold "},[t._v(" "+t._s(t.thongTinChiTietHoSo.dossierStatusText)+" ")])]),t._v(" "),i("div",{staticClass:"xs12 sm12 pb-1 overHidden"},[i("span",{staticClass:"pr-2"},[t._v("Nội dung: ")]),t._v(" "),t.thongTinChiTietHoSo.briefNote?i("v-tooltip",{attrs:{top:""}},[i("span",{staticClass:"text-bold ",attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(t.thongTinChiTietHoSo.briefNote))]),t._v(" "),i("span",{staticClass:"pl-0"},[t._v(t._s(t.thongTinChiTietHoSo.briefNote)+" ")])]):t._e()],1)]):i("v-flex",{attrs:{xs12:"",sm4:""}},[i("div",{staticClass:"xs12 sm12 pb-1",staticStyle:{color:"#0b72ba"}},[t._v("Ghi chú:")]),t._v(" "),t.thongTinChiTietHoSo.dossierNote&&"null"!==t.thongTinChiTietHoSo.dossierNote?i("div",{staticClass:"xs12 sm12 pb-1 overHidden"},[i("v-tooltip",{attrs:{top:""}},[i("span",{staticClass:"text-bold ",attrs:{slot:"activator"},slot:"activator"},[t._v(t._s(t.thongTinChiTietHoSo.dossierNote)+" ")]),t._v(" "),i("span",{staticClass:"pl-0"},[t._v(" "+t._s(t.thongTinChiTietHoSo.dossierNote)+" ")])])],1):t._e(),t._v(" "),t.thongTinChiTietHoSo.extendDate?i("div",{staticClass:"xs12 sm12 pb-1"},[i("span",{staticClass:"pl-0 text-bold"},[t._v("Hẹn lại: "+t._s(t.thongTinChiTietHoSo.extendDate))])]):t._e()])],1)],1)],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});
//# sourceMappingURL=23.4ab0a1c16b73af6126f5.js.map