webpackJsonp([21],{479:function(t,e,o){var a=o(195)(o(527),o(552),null,null);t.exports=a.exports},527:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(125),s=o.n(a);e.default={data:function(){return{valid_thongtinchuhoso:!1,citys:[],delegateDistricts:[],districts:[],delegateWards:[],wards:[],labelSwitch:{true:{cmtnd:"CMND/ Hộ chiếu",nguoi_nop:"Họ và tên"},false:{cmtnd:"Mã số thuế",nguoi_nop:"Tên tổ chức/ cá nhân"}},thongTinChuHoSo:{userType:!0,cityCode:"",districtCode:"",wardCode:"",applicantNote:"",applicantIdNo:"",contactEmail:"",contactName:"",address:"",applicantName:""},thongTinNguoiNopHoSo:{sameUser:!0,delegateName:"",delegateCityCode:"",delegateAddress:"",delegateDistrictCode:"",delegateWardCode:"",delegateEmail:"",delegateTelNo:"",delegateIdNo:""}}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){},watch:{thongTinChuHoSo:{handler:function(t){var e=this,o={delegateName:t.applicantName,delegateCityCode:t.cityCode,delegateAddress:t.address,delegateDistrictCode:t.districtCode,delegateWardCode:t.wardCode,delegateEmail:t.contactEmail,delegateTelNo:t.contactTelNo,delegateIdNo:t.applicantIdNo};e.thongTinNguoiNopHoSo.sameUser&&(e.thongTinNguoiNopHoSo=s()(e.thongTinNguoiNopHoSo,o))},deep:!0},thongTinNguoiNopHoSo:{handler:function(t){var e=this,o=e.thongTinChuHoSo;if(t.sameUser){var a={delegateName:o.applicantName,delegateCityCode:o.cityCode,delegateAddress:o.address,delegateDistrictCode:o.districtCode,delegateWardCode:o.wardCode,delegateEmail:o.contactEmail,delegateTelNo:o.contactTelNo,delegateIdNo:o.applicantIdNo};e.thongTinNguoiNopHoSo=s()(e.thongTinNguoiNopHoSo,a)}else this.$store.dispatch("resetThongTinNguoiNopHoSo")},deep:!0}},methods:{initData:function(t){var e=this,o={delegateName:t.delegateName,delegateCityCode:t.delegateCityCode,delegateAddress:t.delegateAddress,delegateDistrictCode:t.delegateDistrictCode,delegateWardCode:t.delegateWardCode,delegateEmail:t.delegateEmail,delegateTelNo:t.delegateTelNo,delegateIdNo:t.delegateIdNo},a=s()(e.thongTinNguoiNopHoSo,o);console.log("thongTinNguoiNopHoSoTemp-----------",a),e.thongTinNguoiNopHoSo=a;var n=!0;"business"===t.applicantIdType&&(n=!1);var l={userType:n,cityCode:t.cityCode,districtCode:t.districtCode,wardCode:t.wardCode,applicantNote:t.applicantNote,applicantIdNo:t.applicantIdNo,contactEmail:t.contactEmail,contactName:t.contactName,address:t.address,applicantName:t.applicantName},i=s()(e.thongTinChuHoSo,l);e.thongTinChuHoSo=i,console.log("thongtinchuhoso",e.thongTinChuHoSo),console.log("thongtinnguoinophoso",e.thongTinNguoiNopHoSo),e.$nextTick(function(){var o={collectionCode:"ADMINISTRATIVE_REGION",level:0,parent:0};e.$store.getters.getDictItems(o).then(function(t){e.citys=t.data}),setTimeout(function(){t.cityCode&&e.$store.getters.getDictItems({collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t.cityCode}).then(function(t){e.districts=t.data}),console.log("districtCode-----------",t.districtCode),t.districtCode&&e.$store.getters.getDictItems({collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t.districtCode}).then(function(t){e.wards=t.data}),t.delegateCityCode&&e.$store.getters.getDictItems({collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t.delegateCityCode}).then(function(t){e.delegateDistricts=t.data}),t.delegateDistrictCode&&e.$store.getters.getDictItems({collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t.delegateDistrictCode}).then(function(t){e.delegateWards=t.data})},200)})},onChangeCity:function(t){var e=this,o={collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t};e.$store.commit("setCityVal",t),e.$store.getters.getDictItems(o).then(function(t){e.districts=t.data,e.wards=[],e.thongTinNguoiNopHoSo.sameUser&&(e.delegateDistricts=t.data,e.wards=[])})},onChangeDistrict:function(t){var e=this,o={collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t};e.$store.commit("setDistrictVal",t),e.$store.getters.getDictItems(o).then(function(t){e.wards=t.data,e.thongTinNguoiNopHoSo.sameUser&&(e.delegateWards=t.data)})},onChangeWard:function(t){this.$store.commit("setWardVal",t)},onChangeApplicantIdNo:function(t){},onChangeDelegateCity:function(t){var e=this,o={collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t};e.$store.getters.getDictItems(o).then(function(t){e.delegateDistricts=t.data,e.thongTinNguoiNopHoSo.sameUser&&(e.districts=t.data)})},showValid:function(){return this.$refs.formChuHoSo.validate()},onChangeDelegateDistrict:function(t){var e=this,o={collectionCode:"ADMINISTRATIVE_REGION",level:1,parent:t};e.$store.getters.getDictItems(o).then(function(t){e.delegateWards=t.data,e.thongTinNguoiNopHoSo.sameUser&&(e.wards=t.data)})}}}},552:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"formChuHoSo",attrs:{"lazy-validation":""},model:{value:t.valid_thongtinchuhoso,callback:function(e){t.valid_thongtinchuhoso=e},expression:"valid_thongtinchuhoso"}},[o("div",[o("div",{staticStyle:{position:"relative"}},[o("v-expansion-panel",{staticClass:"expansion-pl"},[o("v-expansion-panel-content",{attrs:{"hide-actions":"",value:"1"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"background-triangle-small"},[t._v(" II. ")]),t._v(" THÔNG TIN CHỦ HỒ SƠ")]),t._v(" "),o("v-card",[o("v-card-text",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v(" "+t._s(t.labelSwitch[t.thongTinChuHoSo.userType].cmtnd)+": ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{on:{change:t.onChangeApplicantIdNo},model:{value:t.thongTinChuHoSo.applicantIdNo,callback:function(e){t.$set(t.thongTinChuHoSo,"applicantIdNo",e)},expression:"thongTinChuHoSo.applicantIdNo"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v(" "+t._s(t.labelSwitch[t.thongTinChuHoSo.userType].nguoi_nop)+": ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{model:{value:t.thongTinChuHoSo.applicantName,callback:function(e){t.$set(t.thongTinChuHoSo,"applicantName",e)},expression:"thongTinChuHoSo.applicantName"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Địa chỉ: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm10:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{attrs:{"multi-line":"",rows:"2"},model:{value:t.thongTinChuHoSo.address,callback:function(e){t.$set(t.thongTinChuHoSo,"address",e)},expression:"thongTinChuHoSo.address"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Tỉnh/Thành phố: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-select",{attrs:{items:t.citys,"item-text":"itemName","item-value":"itemCode",autocomplete:"",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},on:{change:t.onChangeCity},model:{value:t.thongTinChuHoSo.cityCode,callback:function(e){t.$set(t.thongTinChuHoSo,"cityCode",e)},expression:"thongTinChuHoSo.cityCode"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Quận/Huyện: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-select",{attrs:{items:t.districts,"item-text":"itemName","item-value":"itemCode",autocomplete:"",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},on:{change:t.onChangeDistrict},model:{value:t.thongTinChuHoSo.districtCode,callback:function(e){t.$set(t.thongTinChuHoSo,"districtCode",e)},expression:"thongTinChuHoSo.districtCode"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Xã/Phường: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-select",{attrs:{items:t.wards,"item-text":"itemName","item-value":"itemCode",autocomplete:"",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},on:{change:t.onChangeWard},model:{value:t.thongTinChuHoSo.wardCode,callback:function(e){t.$set(t.thongTinChuHoSo,"wardCode",e)},expression:"thongTinChuHoSo.wardCode"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Số điện thoại: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{attrs:{"append-icon":"phone"},model:{value:t.thongTinChuHoSo.contactTelNo,callback:function(e){t.$set(t.thongTinChuHoSo,"contactTelNo",e)},expression:"thongTinChuHoSo.contactTelNo"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Địa chỉ E-mail: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{model:{value:t.thongTinChuHoSo.contactEmail,callback:function(e){t.$set(t.thongTinChuHoSo,"contactEmail",e)},expression:"thongTinChuHoSo.contactEmail"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"absolute__btn",staticStyle:{width:"270px","margin-top":"4px"}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-radio-group",{attrs:{row:""},model:{value:t.thongTinChuHoSo.userType,callback:function(e){t.$set(t.thongTinChuHoSo,"userType",e)},expression:"thongTinChuHoSo.userType"}},[o("v-radio",{attrs:{label:"Công Dân",value:!0}}),t._v(" "),o("v-radio",{attrs:{label:"Doanh Nghiệp",value:!1}})],1)],1),t._v(" "),o("div",{staticStyle:{position:"relative"}},[o("v-expansion-panel",{staticClass:"expansion-pl"},[o("v-expansion-panel-content",{attrs:{"hide-actions":"",value:"1"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"background-triangle-small"},[t._v(" III. ")]),t._v(" THÔNG TIN NGƯỜI NỘP HỒ SƠ")]),t._v(" "),o("v-card",[o("v-card-text",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("CMND/Hộ chiếu: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{model:{value:t.thongTinNguoiNopHoSo.delegateIdNo,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateIdNo",e)},expression:"thongTinNguoiNopHoSo.delegateIdNo"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Tên tổ chức cá nhân: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{model:{value:t.thongTinNguoiNopHoSo.delegateName,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateName",e)},expression:"thongTinNguoiNopHoSo.delegateName"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Địa chỉ: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm10:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{attrs:{"multi-line":"",rows:"2"},model:{value:t.thongTinNguoiNopHoSo.delegateAddress,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateAddress",e)},expression:"thongTinNguoiNopHoSo.delegateAddress"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Tỉnh/Thành phố: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-select",{attrs:{items:t.citys,"item-text":"itemName","item-value":"itemCode",autocomplete:"",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},on:{change:t.onChangeDelegateCity},model:{value:t.thongTinNguoiNopHoSo.delegateCityCode,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateCityCode",e)},expression:"thongTinNguoiNopHoSo.delegateCityCode"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Quận/Huyện: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-select",{attrs:{items:t.delegateDistricts,"item-text":"itemName","item-value":"itemCode",autocomplete:"",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},on:{change:t.onChangeDelegateDistrict},model:{value:t.thongTinNguoiNopHoSo.delegateDistrictCode,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateDistrictCode",e)},expression:"thongTinNguoiNopHoSo.delegateDistrictCode"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Xã/Phường: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-select",{attrs:{items:t.delegateWards,"item-text":"itemName","item-value":"itemCode",autocomplete:"",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},model:{value:t.thongTinNguoiNopHoSo.delegateWardCode,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateWardCode",e)},expression:"thongTinNguoiNopHoSo.delegateWardCode"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Số điện thoại: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{attrs:{"append-icon":"phone"},model:{value:t.thongTinNguoiNopHoSo.delegateTelNo,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateTelNo",e)},expression:"thongTinNguoiNopHoSo.delegateTelNo"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm2:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-subheader",{staticClass:"pl-0"},[t._v("Email: ")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-text-field",{model:{value:t.thongTinNguoiNopHoSo.delegateEmail,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"delegateEmail",e)},expression:"thongTinNguoiNopHoSo.delegateEmail"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"absolute__btn",staticStyle:{width:"150px","margin-top":"4px"}},[t.loading?o("content-placeholders",{staticClass:"mt-1"},[o("content-placeholders-text",{attrs:{lines:1}})],1):o("v-checkbox",{attrs:{label:"Giống chủ hồ sơ"},model:{value:t.thongTinNguoiNopHoSo.sameUser,callback:function(e){t.$set(t.thongTinNguoiNopHoSo,"sameUser",e)},expression:"thongTinNguoiNopHoSo.sameUser"}})],1)],1)],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=21.3124bc771d7d5e2628be.js.map