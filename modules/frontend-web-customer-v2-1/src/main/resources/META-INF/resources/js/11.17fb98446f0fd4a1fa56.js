webpackJsonp([11],{216:function(e,t,n){var a=n(138)(n(518),n(523),null,null);e.exports=a.exports},518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{user_note:{type:Number,required:!0}},data:function(){return{ykien:"",valid:!0}},methods:{initData:function(e){var t=this;t.$store.dispatch("getDetailDossier",e).then(function(e){t.thongTinChiTietHoSo=e})},doValidate:function(){var e=this,t=!1;return e.$refs.userNoteForm.validate()&&(t=!0),t}}}},523:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panel",{staticClass:"expansion-pl ext__form"},[n("v-expansion-panel-content",{attrs:{"hide-actions":"",value:"1"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"background-triangle-small"},[n("v-icon",{attrs:{size:"18",color:"white"}},[e._v("star_rate")])],1),e._v("\n    Ý kiến cán bộ "),2===e.user_note?n("span",{staticClass:"red--text text--darken-3"},[e._v("*")]):e._e()]),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"py-2 px-2"},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-form",{ref:"userNoteForm",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{textarea:"",rows:2,rules:2===e.user_note?[function(e){return!!e||"lý do bắt buộc phải nhập"}]:[]},model:{value:e.ykien,callback:function(t){e.ykien=t},expression:"ykien"}})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.17fb98446f0fd4a1fa56.js.map