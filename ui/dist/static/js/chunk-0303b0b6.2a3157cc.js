(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0303b0b6"],{"170f":function(e,t,a){},3432:function(e,t,a){"use strict";var n=a("7888"),s=a.n(n);s.a},"43df":function(e,t,a){},4936:function(e,t,a){"use strict";var n=a("170f"),s=a.n(n);s.a},5458:function(e,t,a){"use strict";var n=a("b4b1"),s=a.n(n);s.a},"61b2":function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"c",(function(){return w})),a.d(t,"b",(function(){return M})),a.d(t,"d",(function(){return T}));var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cluster-bar"},[a("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return a("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?a("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[a("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?a("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[a("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),a("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?a("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?a("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?a("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],o=(a("b0c0"),a("aad4")),r=a("5c96"),l={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(n&&clearTimeout(n),n=setTimeout((function(){e.nameFunc(e.nameInput),n=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(o["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},c=l,u=(a("a6e1"),a("dda3"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,"3a53f646",null),f=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xterm",attrs:{id:"xterm"}})},m=[],h=(a("99af"),a("abb2"),a("fcf3")),g=a("47d0"),v=a("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new h["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),a=new g["FitAddon"];t.loadAddon(a),t.open(document.getElementById("xterm")),a.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var a="ws://".concat(window.location.host,"/api/v1/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(a+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new v["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,S=Object(u["a"])(y,p,m,!1,null,null,null),w=S.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[a("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},k=[],O=a("5f87"),x={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(O["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="ws://".concat(window.location.host,"/api/v1/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(t+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var a=e;e.$nextTick((function(){if(a.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},F=x,D=(a("3432"),Object(u["a"])(F,_,k,!1,null,"2a777280",null)),M=D.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[a("textarea",{ref:"textarea"})])},j=[],E=a("56b3"),N=a.n(E);a("0dd0"),a("a7be"),a("cc10"),a("ced0"),a("8822"),a("b8d1");window.jsyaml=a("651e");var V={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=N.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},$=V,H=(a("db62"),Object(u["a"])($,C,j,!1,null,"5bb854da",null)),T=H.exports},7888:function(e,t,a){},"9c15":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),a("div",{staticClass:"dashboard-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.statefulsets,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"name-class",on:{click:function(a){return e.nameClick(t.row.namespace,t.row.name)}}},[e._v(" "+e._s(t.row.name)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"60","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ready_replicas",label:"Pods","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.ready_replicas)+"/"+e._s(t.row.status_replicas)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"replicas",label:"副本","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"strategy",label:"更新策略","min-width":"55","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"conditions",label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.conditions&&t.row.conditions.length>0?e._l(t.row.conditions,(function(t){return a("span",{key:t},[e._v(" "+e._s(t)+" ")])})):a("span",[e._v("—")])]}}])}),a("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"70","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.nameClick(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("详情")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.update_replicas_statefulset=t.row,e.update_replicas=t.row.replicas,e.replicaDialog=!0}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"scale"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("副本")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.getStatefulSetYaml(t.row.namespace,t.row.name)}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteStatefulSets([{namespace:t.row.namespace,name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?a("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateStatefulSet()}}},[e._v("确 定")])],1)],1),a("el-dialog",{staticClass:"replicaDialog",attrs:{title:"扩缩容",visible:e.replicaDialog,"close-on-click-modal":!1,width:"380px",top:"14%"},on:{"update:visible":function(t){e.replicaDialog=t}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",{staticStyle:{"line-height":"24px","font-size":"18px",color:"#303133"}},[e._v("扩缩容:")]),a("span",{staticStyle:{"line-height":"24px","font-size":"15px",color:"#606266"}},[e._v(e._s(e.update_replicas_statefulset?e.update_replicas_statefulset.name:""))])]),a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"当前副本数"}},[a("label",[e._v(e._s(e.update_replicas_statefulset?e.update_replicas_statefulset.replicas:0))])])],1),a("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"期望副本数"}},[a("el-input-number",{attrs:{size:"medium",min:1,max:100},model:{value:e.update_replicas,callback:function(t){e.update_replicas=t},expression:"update_replicas"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.replicaDialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateStatefulSetObj({statefulset:e.update_replicas_statefulset,replicas:e.update_replicas})}}},[e._v("确 定")])],1)],1)],1)},s=[],i=(a("4de4"),a("caad"),a("c975"),a("b0c0"),a("b64b"),a("2532"),a("b85c")),o=a("61b2"),r=a("f321"),l=a("5c96"),c={name:"StatefulSet",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{replicaDialog:!1,yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["StatefulSets"],maxHeight:window.innerHeight-150,loading:!0,originStatefulSets:[],search_ns:[],search_name:"",delFunc:void 0,delStatefulSets:[],update_replicas:0,update_replicas_statefulset:null}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{statefulsetsWatch:function(e){if(e){var t=e.resource.metadata.uid,a=e.resource.metadata.resourceVersion;if("add"===e.event)this.originStatefulSets.push(this.buildStatefulSets(e.resource));else if("update"===e.event)for(var n in this.originStatefulSets){var s=this.originStatefulSets[n];if(s.uid===t){if(s.resource_version<a){var i=this.buildStatefulSets(e.resource);this.$set(this.originStatefulSets,n,i)}break}}else"delete"===e.event&&(this.originStatefulSets=this.originStatefulSets.filter((function(e){var a=e.uid;return a!==t})))}}},computed:{statefulsets:function(){var e,t=[],a=Object(i["a"])(this.originStatefulSets);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||(n.conditions&&n.conditions.length>0?n.conditions.sort():n.conditions=[],t.push(n)))}}catch(s){a.e(s)}finally{a.f()}return t},statefulsetsWatch:function(){return this.$store.getters["ws/statefulsetsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originStatefulSets=[];var t=this.$store.state.cluster;t?Object(r["c"])(t).then((function(t){e.loading=!1,e.originStatefulSets=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,l["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,a=Object(i["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(s){a.e(s)}finally{a.f()}},nameSearch:function(e){this.search_name=e},buildStatefulSets:function(e){if(e){var t=[];if(e.status.conditions){var a,n=Object(i["a"])(e.status.conditions);try{for(n.s();!(a=n.n()).done;){var s=a.value;"True"===s.status&&t.push(s.type)}}catch(r){n.e(r)}finally{n.f()}}var o={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,replicas:e.spec.replicas,status_replicas:e.status.replicas||0,ready_replicas:e.status.readyReplicas||0,resource_version:e.metadata.resourceVersion,strategy:e.spec.updateStrategy.type,conditions:t,created:e.metadata.creationTimestamp};return o}},nameClick:function(e,t){this.$router.push({name:"statefulsetDetail",params:{namespace:e,statefulsetName:t}})},getStatefulSetYaml:function(e,t){var a=this;this.yamlNamespace="",this.yamlName="";var n=this.$store.state.cluster;n?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(n,e,t,"yaml").then((function(n){a.yamlLoading=!1,a.yamlValue=n.data,a.yamlNamespace=e,a.yamlName=t})).catch((function(){a.yamlLoading=!1}))):l["Message"].error("获取StatefulSet名称参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},deleteStatefulSets:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)l["Message"].error("请选择要删除的StatefulSets");else{var a={resources:e};Object(r["a"])(t,a).then((function(){l["Message"].success("删除成功")})).catch((function(){}))}else l["Message"].error("获取集群参数异常，请刷新重试")},updateStatefulSet:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),Object(r["d"])(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){l["Message"].success("更新成功")})).catch((function(){}))):l["Message"].error("获取StatefulSet参数异常，请刷新重试"):l["Message"].error("获取命名空间参数异常，请刷新重试"):l["Message"].error("获取集群参数异常，请刷新重试")},updateStatefulSetObj:function(e){var t=this;console.log(e);var a=this.$store.state.cluster;if(a)if(e&&e.statefulset){var n=e.statefulset;if(n.namespace)if(n.name){var s={};if(e.replicas){if(e.replicas<1)return void l["Message"].error("副本数不能小于1，请重新输入");if(parseInt(e.replicas)===parseInt(n.replicas))return void l["Message"].error("副本数与当前值相同，请重新输入");s["replicas"]=e.replicas}0!==Object.keys(s).length?Object(r["e"])(a,n.namespace,n.name,s).then((function(){l["Message"].success("更新成功"),t.replicaDialog=!1})).catch((function(){})):l["Message"].error("更新参数为空")}else l["Message"].error("获取StatefulSet参数异常，请刷新重试");else l["Message"].error("获取命名空间参数异常，请刷新重试")}else l["Message"].error("获取更新参数异常，请刷新重试");else l["Message"].error("获取集群参数异常，请刷新重试")},_delStatefulSetsFunc:function(){if(this.delStatefulSets.length>0){var e,t=[],a=Object(i["a"])(this.delStatefulSets);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push({namespace:n.namespace,name:n.name})}}catch(s){a.e(s)}finally{a.f()}this.deleteStatefulSets(t)}},handleSelectionChange:function(e){this.delStatefulSets=e,e.length>0?this.delFunc=this._delStatefulSetsFunc:this.delFunc=void 0}}},u=c,d=(a("4936"),a("5458"),a("2877")),f=Object(d["a"])(u,n,s,!1,null,"33408f3a",null);t["default"]=f.exports},a6e1:function(e,t,a){"use strict";var n=a("ab7f"),s=a.n(n);s.a},aad4:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i}));a("99af");var n=a("b775");function s(e){return Object(n["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,a){return Object(n["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:a}})}},ab7f:function(e,t,a){},b4b1:function(e,t,a){},b92f:function(e,t,a){},db62:function(e,t,a){"use strict";var n=a("43df"),s=a.n(n);s.a},dda3:function(e,t,a){"use strict";var n=a("b92f"),s=a.n(n);s.a},f321:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return l}));a("99af");var n=a("b775");function s(e){return Object(n["a"])({url:"statefulset/".concat(e),method:"get"})}function i(e,t,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(n["a"])({url:"statefulset/".concat(e,"/").concat(t,"/").concat(a),method:"get",params:{output:s}})}function o(e,t){return Object(n["a"])({url:"statefulset/".concat(e,"/delete"),method:"post",data:t})}function r(e,t,a,s){return Object(n["a"])({url:"statefulset/".concat(e,"/update/").concat(t,"/").concat(a),method:"post",data:{yaml:s}})}function l(e,t,a,s){return Object(n["a"])({url:"statefulset/".concat(e,"/update_obj/").concat(t,"/").concat(a),method:"post",data:s})}}}]);