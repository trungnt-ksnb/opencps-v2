webpackJsonp([5],{174:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var o=t(205),i=t.n(o),a=t(60),r=t.n(a),u=t(450),c=t(183),s=t.n(c),d=t(452),l=t.n(d);r.a.use(u.a);var p=new u.a.Store({state:{initData:null,agencyGroups:null,loading:!1,index:0},actions:{loadInitResource:function(n){var e=n.commit,t=n.state;return null==t.initData?new i.a(function(n,t){var o={},i=window.location.href,a=window.location.href.lastIndexOf("#/");a>0&&(i=window.location.href.substr(0,a)),s.a.get(i+l.a.renderURLInit,o).then(function(t){var o=t.data;e("setInitData",o),n(o)}).catch(function(n){console.log(n),t(n)})}):new i.a(function(n,e){n(t.initData)})},getAgencyReportLists:function(n,e){n.commit,n.state;return new i.a(function(n,t){p.dispatch("loadInitResource").then(function(o){var i={headers:{groupId:1,Accept:"application/json"},params:{year:e.year,month:e.month,group:e.group,reporting:!0}};s.a.get("/o/rest/statistics",i).then(function(e){var t=e.data;if(t.data){var o=t.data;n(o)}else n(null)}).catch(function(n){console.log(n),t(n)})})})},getAgencyGroups:function(n,e){var t=n.commit,o=n.state;return null==o.agencyGroups?new i.a(function(n,e){p.dispatch("loadInitResource").then(function(i){var a={headers:{groupId:o.initData.groupId}};s.a.get("/o/rest/v2/dictcollections/GOVERNMENT_AGENCY/dictgroups",a).then(function(e){var o=e.data;if(o.data){var i=o.data;t("setAgencyGroups",i),n(i)}else n(null)}).catch(function(n){console.log(n),e(n)})})}):new i.a(function(n,e){n(o.agencyGroups)})}},mutations:{setLoading:function(n,e){n.loading=e},setMenuConfigToDo:function(n,e){n.trangThaiHoSoList=e},setIndex:function(n,e){n.index=e},setInitData:function(n,e){n.initData=e},setAgencyGroups:function(n,e){n.agencyGroups=e}},getters:{loading:function(n){return n.loading},index:function(n){return n.index},loadingMenuConfigToDo:function(n){return l.a.trangThaiHoSoList}}})},176:function(n,e){},177:function(n,e){},178:function(n,e){},180:function(n,e,t){var o=t(182)(t(202),t(447),null,null);n.exports=o.exports},201:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(177),i=(t.n(o),t(176)),a=(t.n(i),t(178)),r=(t.n(a),t(60)),u=t.n(r),c=t(180),s=t.n(c),d=t(80),l=t(181),p=t.n(l),f=t(174),g=t(179),C=t(175);t.n(C);u.a.use(g.default),u.a.use(p.a),u.a.config.productionTip=!1,new u.a({el:"#app",router:d.a,store:f.a,render:function(n){return n(s.a)}})},202:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(80);e.default={data:function(){return{isCallBack:!0,danhSachBaoCao:[]}},computed:{currentIndex:function(){return this.$store.getters.index},loadingMenuConfigToDo:function(){return this.$store.getters.loadingMenuConfigToDo}},created:function(){var n=this;n.$nextTick(function(){n.danhSachBaoCao=n.loadingMenuConfigToDo})},updated:function(){var n=this;n.$nextTick(function(){var e=n.$router.history.current.params;if(n.isCallBack){n.isCallBack=!1,n.danhSachBaoCao=n.loadingMenuConfigToDo;var t=0;e.hasOwnProperty("index")&&(t=e.index),n.danhSachBaoCao[t].active=!0,o.a.push({path:"/bao-cao/"+t})}})},watch:{$route:function(n,e){n.params,n.query}},methods:{toTableIndexing:function(n,e){this.$store.commit("setIndex",e),o.a.push({path:"/bao-cao/"+e,query:{renew:Math.floor(100*Math.random())+1,q:n.queryParams}})},filterSteps:function(n){}}}},443:function(n,e){},447:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",[t("v-content",[t("router-view")],1)],1)},staticRenderFns:[]}},451:function(n,e,t){function o(n){var e=i[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var i={"./BarChartReport.vue":[453,2],"./Landing.vue":[455,0],"./NotFound.vue":[456,3],"./PieChartReport.vue":[454,1]};o.keys=function(){return Object.keys(i)},n.exports=o,o.id=451},452:function(n,e){n.exports={renderURLInit:"?p_p_id=FrontendWebChartjs&p_p_lifecycle=2&p_p_state=exclusive&p_p_mode=view&p_p_resource_id=renderURLInit",trangThaiHoSoList:[{code:"0",active:!1,type:"thong_ke",title:"TÌNH HÌNH GIẢI QUYẾT TTHC"},{code:"1",active:!1,type:"dossier",title:"TỔNG HỢP TIẾP NHẬN HỒ SƠ"},{code:"2",active:!1,type:"dossier",title:"CHI TIẾT TIẾP NHẬN HỒ SƠ"},{code:"3",active:!1,type:"dossier",title:"TỔNG HỢP TRẢ KẾT QUẢ"},{code:"4",active:!1,type:"dossier",title:"CHI TIẾT TRẢ KẾT QUẢ"},{code:"5",active:!1,type:"thong_ke",title:"TỔNG HỢP HỒ SƠ DVC MỨC ĐỘ 3"},{code:"6",active:!1,type:"tai_chinh",title:"TỔNG HỢP PHÍ, LỆ PHÍ"},{code:"7",active:!1,type:"tai_chinh",title:"TỔNG HỢP PHÍ, LỆ PHÍ THEO TTHC"},{code:"8",active:!1,type:"dossier",title:"CHI TIẾT HỒ SƠ ĐÃ GIẢI QUYẾT"},{code:"9",active:!1,type:"dossier",title:"CHI TIẾT HỒ SƠ ĐANG XỬ LÝ"}],fakeReport:[{betimesCount:22,cancelledCount:10,deniedCount:50,domainCode:"YTE ",domainName:"Y Tế ",doneCount:40,govAgencyCode:"TPT",govAgencyName:"UBND Tỉnh Phú Thọ",interoperatingCount:0,month:1,onlineCount:30,ontimeCount:10,ontimePercentage:85,overdueCount:5,overtimeCount:5,overtimeInside:0,overtimeOutside:0,processCount:30,processingCount:0,receivedCount:40,releaseCount:10,releasingCount:11,remainingCount:10,reporting:!0,totalCount:100,undueCount:5,unresolvedCount:11,waitingCount:21,year:2018,onegateCount:12},{betimesCount:22,cancelledCount:11,deniedCount:51,domainCode:"YTE ",domainName:"Y Tế ",doneCount:41,govAgencyCode:"TPT2",govAgencyName:"UBND Tỉnh Phú Thọ 2",interoperatingCount:0,month:2,onlineCount:31,ontimeCount:15,ontimePercentage:80,overdueCount:5,overtimeCount:6,overtimeInside:0,overtimeOutside:0,processCount:31,processingCount:0,receivedCount:41,releaseCount:11,releasingCount:12,remainingCount:11,reporting:!0,totalCount:150,undueCount:5,unresolvedCount:15,waitingCount:12,year:2018,onegateCount:12}]}},80:function(n,e,t){"use strict";var o=t(206),i=t.n(o),a=t(60),r=t.n(a),u=t(448),c=[{path:"/bao-cao/:index",component:"Landing",props:!0},{path:"*",component:"NotFound"}],s=c.map(function(n){return i()({},n,{component:function(){return t(451)("./"+n.component+".vue")}})});r.a.use(u.a);var d=new u.a({routes:s});e.a=d}},[201]);
//# sourceMappingURL=app.a4202e04fcc1b43482a7.js.map