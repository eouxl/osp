(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67d9673f"],{"0905":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o}));var s=a("b775");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l={};return e&&(l["uid"]=e),a&&(l["kind"]=a),o&&(l["namespace"]=o),n&&(l["name"]=n),Object(s["a"])({url:"event/".concat(t),method:"get",params:l})}function o(t){if(t){var e=t.lastTimestamp;return e||(e=t.firstTimestamp),e||(e=t.metadata.creationTimestamp),{uid:t.metadata.uid,namespace:t.metadata.namespace,count:t.spec?t.spec.count:1,reason:t.reason,message:t.message,type:t.type,object:t.involvedObject,source:t.source,event_time:e,resource_version:t.metadata.resourceVersion}}}},6193:function(t,e,a){},6242:function(t,e,a){},"63e5":function(t,e,a){"use strict";var s=a("6242"),n=a.n(s);n.a},7725:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("clusterbar",{attrs:{titleName:t.titleName,delFunc:t.deleteStatefulSets,editFunc:t.getStatefulSetYaml}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.pods,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"name"}}},[a("el-table-column",{attrs:{prop:"name",label:"POD名称","min-width":"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"name-class",on:{click:function(a){return t.namePodClick(e.row.namespace,e.row.name)}}},[t._v(" "+t._s(e.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"containerNum",label:"容器","min-width":"45","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.init_containers?t._l(e.row.init_containers,(function(e){return a("el-tooltip",{key:e.name,attrs:{content:e.name+" ("+e.status+")",placement:"top"}},[a("svg-icon",{class:t.containerClass(e.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)})):t._e(),t._l(e.row.containers,(function(e){return a("el-tooltip",{key:e.name,attrs:{content:e.name+" ("+e.status+")",placement:"top"}},[a("svg-icon",{class:t.containerClass(e.status),staticStyle:{"margin-top":"7px"},attrs:{"icon-class":"square"}})],1)}))]}}])}),a("el-table-column",{attrs:{prop:"restarts",label:"重启","min-width":"45","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"node_name",label:"节点","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ip",label:"IP","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),t.namePodClick(e.row.namespace,e.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("详情")])],1),a("div",{on:{mouseover:function(e){t.logContainerShow=!0},mouseout:function(e){t.logContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),t.selectContainer=e.row.containers[0].name,t.selectPodName=e.row.name,t.logDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"log"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("日志")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.row.containerNum>1&&t.logContainerShow,expression:"scope.row.containerNum > 1 && logContainerShow"}],staticClass:"download-right"},[t._l(e.row.init_containers,(function(s){return a("div",{key:s.name,staticClass:"download-item",on:{click:function(a){t.selectContainer=s.name,t.selectPodName=e.row.name,t.logDialog=!0}}},[t._v(" "+t._s(s.name)+" ")])})),t._l(e.row.containers,(function(s){return a("div",{key:s.name,staticClass:"download-item",on:{click:function(a){t.selectContainer=s.name,t.selectPodName=e.row.name,t.logDialog=!0}}},[t._v(" "+t._s(s.name)+" ")])}))],2)])])],1),a("div",{on:{mouseover:function(e){t.termContainerShow=!0},mouseout:function(e){t.termContainerShow=!1}}},[a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),t.selectContainer=e.row.containers[0].name,t.selectPodName=e.row.name,t.terminalDialog=!0}}},[a("div",{staticClass:"download"},[a("div",[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"terminal"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("终端")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.row.containers.length>1&&t.termContainerShow,expression:"scope.row.containers.length > 1 && termContainerShow"}],staticClass:"download-right"},t._l(e.row.containers,(function(s){return a("div",{key:s.name,staticClass:"download-item",on:{click:function(a){t.selectContainer=s.name,t.selectPodName=e.row.name,t.terminalDialog=!0}}},[t._v(" "+t._s(s.name)+" ")])})),0)])])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),t.deletePods([{namespace:e.row.namespace,name:e.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[t._v("删除")])],1)],1)],1)]}}])})],1),a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[t._v(t._s(t.statefulset.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[t._v(t._s(t.statefulset.created))])]),a("el-form-item",{attrs:{label:"命名空间"}},[a("span",[t._v(t._s(t.statefulset.namespace))])]),a("el-form-item",{attrs:{label:"更新策略"}},[a("span",[t._v(t._s(t.statefulset.strategy))])]),a("el-form-item",{attrs:{label:"Pod副本"}},[a("span",[t._v(t._s(t.statefulset.ready_replicas+"/"+t.statefulset.status_replicas))])]),a("el-form-item",{attrs:{label:"选择器"}},[t.statefulset.label_selector?t._l(t.statefulset.label_selector.matchLabels,(function(e,s){return[a("span",{key:s},[t._v(t._s(s)+": "+t._s(e)),a("br")])]})):a("span",[t._v("—")])],2),a("el-form-item",{attrs:{label:"标签"}},[t.statefulset.labels?t._l(t.statefulset.labels,(function(e,s){return[a("span",{key:s},[t._v(t._s(s)+": "+t._s(e)),a("br")])]})):a("span",[t._v("—")])],2)],1),a("el-collapse",{staticClass:"podCollapse",attrs:{value:["conditions","events"]}},[a("el-collapse-item",{attrs:{title:"Conditions",name:"conditions"}},[a("template",{slot:"title"},[a("span",{staticClass:"title-class"},[t._v("Conditions")])]),a("div",{staticClass:"msgClass"},[t.statefulset&&t.statefulset.conditions&&t.statefulset.conditions.length>0?a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.statefulset.conditions,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"lastProbeTime"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"20","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.reason?e.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.message?e.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{label:"触发时间","min-width":"40","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.lastProbeTime?e.row.lastProbeTime:e.row.lastTransitionTime)+" ")])]}}],null,!1,2572631955)})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[t._v("暂无数据")])],1)],2),a("el-collapse-item",{attrs:{title:"Events",name:"events"}},[a("template",{slot:"title"},[a("span",{staticClass:"title-class"},[t._v("Events")])]),a("div",{staticClass:"msgClass"},[t.statefulsetEvents&&t.statefulsetEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.statefulsetEvents,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.object.kind)+"/"+t._s(e.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.reason?e.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.message?e.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[t._v("暂无数据")])],1)],2)],1),a("el-dialog",{attrs:{title:"终端",visible:t.terminalDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(e){t.terminalDialog=e}}},[t.terminalDialog?a("terminal",{attrs:{cluster:t.cluster,namespace:t.namespace,pod:t.selectPodName,container:t.selectContainer}}):t._e()],1),a("el-dialog",{attrs:{title:"日志",visible:t.logDialog,"close-on-click-modal":!1,width:"80%",top:"55px"},on:{"update:visible":function(e){t.logDialog=e}}},[t.logDialog?a("log",{attrs:{cluster:t.cluster,namespace:t.namespace,pod:t.selectPodName,container:t.selectContainer}}):t._e()],1),a("el-dialog",{attrs:{title:"编辑",visible:t.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(e){t.yamlDialog=e}}},[t.yamlDialog?a("yaml",{attrs:{loading:t.yamlLoading},model:{value:t.yamlValue,callback:function(e){t.yamlValue=e},expression:"yamlValue"}}):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){t.yamlDialog=!1}}},[t._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){return t.updateStatefulSet()}}},[t._v("确 定")])],1)],1)],1)],1)},n=[],o=(a("4de4"),a("b0c0"),a("61b2")),l=a("f321"),i=a("0905"),r=a("f492"),c=a("5c96"),u={name:"StatefulSetDetail",components:{Clusterbar:o["a"],Terminal:o["c"],Log:o["b"],Yaml:o["d"]},data:function(){return{logContainerShow:!1,termContainerShow:!1,yamlDialog:!1,yamlValue:"",yamlLoading:!0,logDialog:!1,terminalDialog:!1,cellStyle:{border:0},loading:!0,originStatefulset:void 0,pods:[],selectContainer:"",selectPodName:"",statefulsetEvents:[],eventLoading:!0}},created:function(){this.fetchData()},watch:{statefulsetWatch:function(t){if(t&&this.originStatefulset){var e=t.resource.metadata.uid;if(e!==this.statefulset.uid)return;var a=t.resource.metadata.resourceVersion;this.statefulset.resource_version<a&&(this.originStatefulset=t.resource)}},eventWatch:function(t){if(t&&this.originStatefulset){var e=t.resource;if(e.involvedObject.namespace!==this.statefulset.namespace)return;if(e.involvedObject.uid!==this.statefulset.uid)return;var a=t.resource.metadata.uid;if("add"===t.event)this.statefulsetEvents.push(Object(i["a"])(e));else if("update"==t.event){var s=t.resource.metadata.resourceVersion;for(var n in this.statefulsetEvents){var o=this.statefulsetEvents[n];if(o.uid===a){if(o.resource_version<s){var l=Object(i["a"])(t.resource);this.$set(this.statefulsetEvents,n,l)}break}}}else"delete"===t.event&&(this.statefulsetEvents=this.statefulsetEvents.filter((function(t){var e=t.uid;return e!==a})))}},podsWatch:function(t){if(t&&this.originStatefulset){var e=Object(r["f"])(this.originStatefulset.spec.selector,t.resource.metadata.labels);if(e){var a=t.resource.metadata.uid,s=t.resource.metadata.resourceVersion;if("add"===t.event)this.pods.push(Object(r["a"])(t.resource));else if("update"===t.event)for(var n in this.pods){var o=this.pods[n];if(o.uid===a&&o.resource_version<s){var l=Object(r["a"])(t.resource);this.$set(this.pods,n,l);break}}else"delete"===t.event&&(this.pods=this.pods.filter((function(t){var e=t.uid;return e!==a})))}}}},computed:{titleName:function(){return["StatefulSets",this.statefulsetName]},statefulsetName:function(){return this.$route.params?this.$route.params.statefulsetName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},statefulset:function(){var t=this.buildStatefulSet(this.originStatefulset);return t},cluster:function(){return this.$store.state.cluster},statefulsetWatch:function(){return this.$store.getters["ws/statefulsetWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]},podsWatch:function(){return this.$store.getters["ws/podWatch"]}},methods:{fetchData:function(){var t=this;this.originStatefulset=null,this.statefulsetEvents=[],this.loading=!0,this.eventLoading=!0;var e=this.$store.state.cluster;return e?this.namespace?this.statefulsetName?void Object(l["b"])(e,this.namespace,this.statefulsetName).then((function(a){t.originStatefulset=a.data,Object(r["e"])(e,t.originStatefulset.spec.selector).then((function(e){t.loading=!1,t.pods=e.data})).catch((function(){t.loading=!1})),Object(i["b"])(e,t.originStatefulset.metadata.uid).then((function(e){t.eventLoading=!1,e.data&&(t.statefulsetEvents=e.data.length>0?e.data:[])})).catch((function(){t.eventLoading=!1}))})).catch((function(){t.loading=!1,t.eventLoading=!1})):(c["Message"].error("获取Statefulset名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},buildStatefulSet:function(t){if(!t)return{};var e={uid:t.metadata.uid,namespace:t.metadata.namespace,name:t.metadata.name,replicas:t.spec.replicas,status_replicas:t.status.replicas||0,ready_replicas:t.status.readyReplicas||0,resource_version:t.metadata.resourceVersion,strategy:t.spec.updateStrategy.type,conditions:t.status.conditions,created:t.metadata.creationTimestamp,label_selector:t.spec.selector,labels:t.metadata.labels,annotations:t.metadata.annotations};return e},toogleExpand:function(t){var e=this.$refs.table;e.toggleRowExpansion(t)},deleteStatefulSets:function(){var t=this.$store.state.cluster;if(t){this.statefulset||c["Message"].error("获取Statefulset参数异常，请刷新重试");var e=[{namespace:this.statefulset.namespace,name:this.statefulset.name}],a={resources:e};Object(l["a"])(t,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")},getStatefulSetYaml:function(){var t=this;if(this.statefulset){var e=this.$store.state.cluster;e?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(l["b"])(e,this.statefulset.namespace,this.statefulset.name,"yaml").then((function(e){t.yamlLoading=!1,t.yamlValue=e.data})).catch((function(){t.yamlLoading=!1}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Statefulset参数异常，请刷新重试")},updateStatefulSet:function(){if(this.statefulset){var t=this.$store.state.cluster;t?(console.log(this.yamlValue),Object(l["d"])(t,this.statefulset.namespace,this.statefulset.name,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Statefulset参数异常，请刷新重试")},containerClass:function(t){return Object(r["b"])(t)},namePodClick:function(t,e){this.$router.push({name:"podsDetail",params:{namespace:t,podName:e}})},deletePods:function(t){var e=this.$store.state.cluster;if(e)if(t.length<=0)c["Message"].error("请选择要删除的Pod");else{var a={resources:t};Object(r["c"])(e,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")}}},d=u,m=(a("63e5"),a("ab8a"),a("2877")),f=Object(m["a"])(d,s,n,!1,null,"5b4a3a76",null);e["default"]=f.exports},ab8a:function(t,e,a){"use strict";var s=a("6193"),n=a.n(s);n.a},f321:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return r}));a("99af");var s=a("b775");function n(t){return Object(s["a"])({url:"statefulset/".concat(t),method:"get"})}function o(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s["a"])({url:"statefulset/".concat(t,"/").concat(e,"/").concat(a),method:"get",params:{output:n}})}function l(t,e){return Object(s["a"])({url:"statefulset/".concat(t,"/delete"),method:"post",data:e})}function i(t,e,a,n){return Object(s["a"])({url:"statefulset/".concat(t,"/update/").concat(e,"/").concat(a),method:"post",data:{yaml:n}})}function r(t,e,a,n){return Object(s["a"])({url:"statefulset/".concat(t,"/update_obj/").concat(e,"/").concat(a),method:"post",data:n})}}}]);