webpackJsonp([19],{238:function(t,s,a){var e=a(138)(a(565),a(573),null,null);t.exports=e.exports},565:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={components:{},data:function(){return{thongTinChiTietHoSo:{dossierIdCTN:"182CB683",receiveDate:1529409276e3,applicantName:"Lê việt Đức",dossierId:"67501",address:"Phường Tân Hồng, Thị xã Từ Sơn, Tỉnh Bắc Ninh",releaseDate:1529409276e3,dossierStatusText:"Đang xử lý",durationDate:3,delegateName:"Lê việt Đức",applicantIdNo:"123456778",fee:"1.000.000.000"}}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;t.$nextTick(function(){console.log(t.index)})},watch:{},methods:{initData:function(t){var s=this;s.$store.dispatch("getDetailDossier",t).then(function(t){console.log(s.$refs)}).catch(function(t){})},luuHoSo:function(){},tiepNhanHoSo:function(){},boSungHoSo:function(){},goBack:function(){window.history.back()}}}},573:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.loading?a("content-placeholders",{staticClass:"mt-3"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("div",{staticClass:"row-header",staticStyle:{"margin-top":"6px"}},[a("div",{staticClass:"background-triangle-big"},[t._v(" TIẾP NHẬN HỒ SƠ TRỰC TUYẾN ")]),t._v(" "),a("div",{staticClass:"layout row wrap header_tools row-blue"},[a("div",{staticClass:"flex solo text-ellipsis"}),t._v(" "),a("div",{staticClass:"flex text-right",staticStyle:{"margin-left":"auto"}},[a("v-btn",{staticClass:"my-0 mx-0 btn-border-left",attrs:{flat:"","active-class":"temp_active"},on:{click:t.goBack}},[t._v("\n          Quay lại  \n          "),a("v-icon",{attrs:{size:"16"}},[t._v("undo")])],1)],1)])]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-card",{staticClass:"mb-2"},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm6:""}},[a("span",[t._v("Loại hồ sơ: ")])]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-chip",{staticClass:"pl-0",attrs:{small:""}},[t._v("\n                Hồ sơ trực tuyến\n              ")])],1),t._v(" "),a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm6:""}},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("span",[t._v("Mã hồ sơ: "+t._s(t.thongTinChiTietHoSo.dossierIdCTN))])],1),t._v(" "),a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm6:""}},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("span",[t._v("Ngày tiếp nhận: "+t._s(t._f("dateTimeView")(t.thongTinChiTietHoSo.receiveDate)))])],1),t._v(" "),a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm6:""}},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("span",[t._v("Chủ hồ sơ: "+t._s(t.thongTinChiTietHoSo.applicantName))])],1),t._v(" "),a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm12:""}},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("span",[t._v("Địa chỉ: "+t._s(t.thongTinChiTietHoSo.address))])],1),t._v(" "),a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm6:""}},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("span",[t._v("Người nộp: "+t._s(t.thongTinChiTietHoSo.delegateName))])],1),t._v(" "),a("v-flex",{staticClass:"mb-2",attrs:{xs12:"",sm6:""}},[t.loading?a("content-placeholders",{staticClass:"mt-1"},[a("content-placeholders-text",{attrs:{lines:1}})],1):a("span",[t._v("Số CMND: "+t._s(t.thongTinChiTietHoSo.applicantIdNo))])],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("div",{staticClass:"text-right mt-2"},[a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(s){return t.daTra(s)}}},[t._v("\n                  Đồng ý  \n                  "),a("v-icon",[t._v("save")])],1),t._v(" "),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(s){return t.daTra(s)}}},[t._v("\n                  Không đồng ý  \n                  "),a("v-icon",[t._v("save")])],1),t._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:t.goBack}},[t._v("\n                  Quay lại  \n                  "),a("v-icon",[t._v("undo")])],1)],1)])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=19.750033110ecdd852934d.js.map