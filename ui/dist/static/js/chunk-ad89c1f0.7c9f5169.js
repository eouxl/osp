(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad89c1f0"],{"0905":function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a("b775");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return t&&(i["uid"]=t),a&&(i["kind"]=a),o&&(i["namespace"]=o),s&&(i["name"]=s),Object(n["a"])({url:"event/".concat(e),method:"get",params:i})}function o(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},1358:function(e,t,a){"use strict";var n=a("bc88"),s=a.n(n);s.a},3432:function(e,t,a){"use strict";var n=a("7888"),s=a.n(n);s.a},"43df":function(e,t,a){},"61b2":function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return F})),a.d(t,"d",(function(){return V}));var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cluster-bar"},[a("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return a("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?a("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[a("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?a("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[a("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),a("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?a("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?a("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?a("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},o=[],i=(a("b0c0"),a("aad4")),r=a("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(n&&clearTimeout(n),n=setTimeout((function(){e.nameFunc(e.nameInput),n=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(i["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(a("a6e1"),a("dda3"),a("2877")),d=Object(u["a"])(l,s,o,!1,null,"3a53f646",null),p=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xterm",attrs:{id:"xterm"}})},f=[],h=(a("99af"),a("abb2"),a("fcf3")),g=a("47d0"),v=a("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new h["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),a=new g["FitAddon"];t.loadAddon(a),t.open(document.getElementById("xterm")),a.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var a="ws://".concat(window.location.host,"/api/v1/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(a+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new v["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,k=Object(u["a"])(y,m,f,!1,null,null,null),_=k.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[a("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},O=[],x=a("5f87"),H={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(x["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="ws://".concat(window.location.host,"/api/v1/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(t+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var a=e;e.$nextTick((function(){if(a.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},C=H,E=(a("3432"),Object(u["a"])(C,w,O,!1,null,"2a777280",null)),F=E.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[a("textarea",{ref:"textarea"})])},M=[],S=a("56b3"),D=a.n(S);a("0dd0"),a("a7be"),a("cc10"),a("ced0"),a("8822"),a("b8d1");window.jsyaml=a("651e");var N={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=D.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},T=N,$=(a("db62"),Object(u["a"])(T,j,M,!1,null,"5bb854da",null)),V=$.exports},7888:function(e,t,a){},a15f:function(e,t,a){"use strict";var n=a("f25d"),s=a.n(n);s.a},a6e1:function(e,t,a){"use strict";var n=a("ab7f"),s=a.n(n);s.a},aad4:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o}));a("99af");var n=a("b775");function s(e){return Object(n["a"])({url:"namespace/".concat(e),method:"get"})}function o(e,t,a){return Object(n["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:a}})}},ab7f:function(e,t,a){},ac35:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return r}));a("99af");var n=a("b775");function s(e){return Object(n["a"])({url:"hpa/".concat(e),method:"get"})}function o(e,t,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"hpa/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:s}})}function i(e,t,a,s){return Object(n["a"])({url:"hpa/".concat(e,"/").concat(t,"/").concat(a),method:"post",data:{yaml:s}})}function r(e,t){return Object(n["a"])({url:"hpa/".concat(e,"/delete"),method:"post",data:t})}},ac70:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,editFunc:e.getHpaYaml,delFunc:e.deleteHpa}}),a("div",{staticClass:"dashboard-container"},[e.hpa.metadata?a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"180px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[e._v(e._s(e.hpa.metadata.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[e._v(e._s(e.hpa.metadata.creationTimestamp))])]),a("el-form-item",{attrs:{label:"Namespace"}},[a("span",[e._v(e._s(e.hpa.metadata.namespace))])]),a("el-form-item",{attrs:{label:"Min Pods"}},[e.hpa.spec?a("span",[e._v(e._s(e.hpa.spec.minReplicas))]):e._e()]),a("el-form-item",{attrs:{label:"Max Pods"}},[e.hpa.spec?a("span",[e._v(e._s(e.hpa.spec.maxReplicas))]):e._e()]),a("el-form-item",{attrs:{label:"Replicas"}},[e.hpa.status?a("span",[e._v(e._s(e.hpa.status.currentReplicas))]):e._e()]),a("el-form-item",{attrs:{label:"Reference"}},[e.hpa.spec?a("span",[e._v(e._s(e.hpa.spec.scaleTargetRef.kind)+"/"+e._s(e.hpa.spec.scaleTargetRef.name))]):e._e()])],1):e._e(),a("el-collapse",{staticClass:"podCollapse",attrs:{value:["events"]}},[a("el-collapse-item",{attrs:{title:"Events",name:"events"}},[a("template",{slot:"title"},[a("span",{staticClass:"title-class"},[e._v("Events")])]),a("div",{staticClass:"msgClass"},[e.hpaEvents&&e.hpaEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.hpaEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateHpa()}}},[e._v("确 定")])],1)],1)],1)],1)},s=[],o=a("61b2"),i=a("ac35"),r=a("0905"),c=a("5c96"),l={name:"HpaDetail",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originHpa:{},eventLoading:!0,activeNames:["1"],hpaEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["HpaDetail",this.hpaName]},hpaName:function(){return this.$route.params?this.$route.params.hpaName:""},cluster:function(){return this.$store.state.cluster},hpa:function(){return console.log(this.originHpa),this.originHpa},namespace:function(){return this.$route.params?this.$route.params.namespace:""}},methods:{handleChange:function(e){console.log(e)},fetchData:function(){var e=this;this.originHpa={},this.loading=!0;var t=this.$store.state.cluster;return t?this.hpaName?(this.namespace||c["Message"].error("获取获取Hpa命名空间参数异常，请刷新重试"),void Object(i["b"])(t,this.namespace,this.hpaName).then((function(a){e.loading=!1,e.originHpa=a.data,console.log("*******",e.originHpa),Object(r["b"])(t,e.originHpa.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.hpaEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1}))):(c["Message"].error("获取Hpa名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getHpaYaml:function(){var e=this;if(this.hpaName){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["b"])(t,this.namespace,this.hpaName,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Hpa参数异常，请刷新重试")},updateHpa:function(){if(this.hpa){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),console.log(this.hpa),Object(i["d"])(e,this.namespace,this.hpaName,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Hpa参数异常，请刷新重试")},deleteHpa:function(){var e=this.$store.state.cluster;if(e){this.hpa||c["Message"].error("获取Hpa参数异常，请刷新重试");var t=[{namespace:this.namespace,name:this.hpaName}],a={resources:t};Object(i["a"])(e,a).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")}}},u=l,d=(a("a15f"),a("1358"),a("2877")),p=Object(d["a"])(u,n,s,!1,null,"28647cf6",null);t["default"]=p.exports},b92f:function(e,t,a){},bc88:function(e,t,a){},db62:function(e,t,a){"use strict";var n=a("43df"),s=a.n(n);s.a},dda3:function(e,t,a){"use strict";var n=a("b92f"),s=a.n(n);s.a},f25d:function(e,t,a){}}]);