webpackJsonp([33],{247:function(t,e,r){var n=r(137)(r(734),r(747),null,null);n.options.__file="d:\\FDS_OPENCPS\\front-end-v2.1\\frontend-opencps-v2.1\\onegate_21_fe\\src\\components\\App_dvc.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] App_dvc.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},734:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(37);e.default={data:function(){return{isCallBack:!0,trangThaiHoSoList:[],loading:!0,currentStep:"0",counterData:[],detailState:0}},computed:{currentIndex:function(){return this.$store.getters.index}},created:function(){var t=this;t.$nextTick(function(){t.loading=!0,t.$store.dispatch("loadMenuConfigToDo").then(function(e){t.trangThaiHoSoList=e;var r=t.$router.history.current.params;r.hasOwnProperty("index")?t.trangThaiHoSoList[r.index].active=!0:(t.trangThaiHoSoList[0].active=!0,n.a.push({path:"/danh-sach-ho-so/0",query:{q:t.trangThaiHoSoList[0].queryParams}})),t.loadingCounter(),t.loading=!1})})},updated:function(){var t=this;t.$nextTick(function(){var e=t.$router.history.current.params;e.hasOwnProperty("index")&&t.isCallBack&&(t.isCallBack=!1,t.$store.commit("setIndex",e.index),e.hasOwnProperty("id")?t.detailState=1:t.detailState=0)})},watch:{$route:function(t,e){var r=this,n=t.params,o=t.query;o.hasOwnProperty("step")?r.currentStep=String(o.step):r.currentStep="0",o.hasOwnProperty("recount")&&r.loadingCounter(),n.hasOwnProperty("id")?r.detailState=1:r.detailState=0}},methods:{toTableIndexing:function(t,e){this.$store.commit("setIndex",e),n.a.push({path:"/danh-sach-ho-so/"+e,query:{renew:Math.floor(100*Math.random())+1,q:t.queryParams}})},filterSteps:function(t){var e=this.$router.history.current.query,r=this.$router.history.current.params,o=this.trangThaiHoSoList[r.index].queryParams;if(null!==e&&void 0!==e&&e.hasOwnProperty("q")){var a=o.lastIndexOf("=");a>0&&(o=o.substr(0,a+1))}this.currentStep=String(t.stepCode),n.a.push({path:"/danh-sach-ho-so/"+r.index,query:{renew:Math.floor(100*Math.random())+1,q:o+t.stepCode,step:t.stepCode}})},loadingCounter:function(){var t=this,e={originality:t.getOriginality()};t.$store.dispatch("loadingCounterHoSo",e).then(function(e){t.counterData=e.data;for(var r in t.trangThaiHoSoList)if(t.trangThaiHoSoList[r].counter=0,t.trangThaiHoSoList[r].hasOwnProperty("items")){var n=0;for(var o in t.trangThaiHoSoList[r].items){t.trangThaiHoSoList[r].items[o].counter=0;for(var a in t.counterData)if(String(t.counterData[a].stepCode)===String(t.trangThaiHoSoList[r].items[o].stepCode)){var i=t.counterData[a].totalCount;t.trangThaiHoSoList[r].items[o].counter=i,n+=i;break}}t.trangThaiHoSoList[r].counter=n}t.loading=!1})}}}},747:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{class:{detail_state:0!==t.detailState},attrs:{app:"",clipped:"",floating:"",width:"240"}},[r("v-btn",{attrs:{color:"primary"}},[t._v("Thêm hồ sơ")]),t._v(" "),t.loading?r("content-placeholders",{staticClass:"mt-3"},[r("content-placeholders-text",{attrs:{lines:7}})],1):r("v-list",{staticClass:"py-0 nav_trang_thai_ho_so"},t._l(t.trangThaiHoSoList,function(e,n){return r("v-list-group",{key:n,ref:"listGroupCustom",refInFor:!0,attrs:{"prepend-icon":"description","append-icon":(e.hasOwnProperty("items"),""),"no-action":""},model:{value:e.active,callback:function(r){t.$set(e,"active",r)},expression:"item.active"}},[r("v-list-tile",{attrs:{slot:"activator"},on:{click:function(r){t.toTableIndexing(e,n)}},slot:"activator"},[r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),e.hasOwnProperty("counter")&&e.counter>-1?r("span",{staticClass:"status__counter_group status__counter"},[t._v("\n              "+t._s(e.counter)+"\n            ")]):r("span",{staticClass:"status__counter_group status__counter"},[r("v-progress-circular",{attrs:{width:1,size:16,indeterminate:"",color:"red"}})],1)],1)],1),t._v(" "),t._l(e.items,function(e){return r("v-list-tile",{key:e.stepCode,class:{"list__tile--active":String(t.currentStep)===String(e.stepCode)},nativeOn:{click:function(r){t.filterSteps(e)}}},[r("v-list-tile-action",[String(t.currentStep)===String(e.stepCode)?r("v-icon",{attrs:{color:"primary"}},[t._v("play_arrow")]):t._e()],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.menuStepName))]),t._v(" "),e.hasOwnProperty("counter")&&e.counter>-1?r("span",{staticClass:"status__counter"},[t._v("\n              "+t._s(e.counter)+"\n            ")]):r("span",{staticClass:"status__counter"},[r("v-progress-circular",{attrs:{width:1,size:16,indeterminate:"",color:"red"}})],1)],1)],1)})],2)}))],1),t._v(" "),r("v-content",[r("router-view")],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});
//# sourceMappingURL=33.0776339742c834912690.js.map