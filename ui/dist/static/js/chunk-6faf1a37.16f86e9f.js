(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6faf1a37"],{"2c0c":function(e,t,n){},"43df":function(e,t,n){},5043:function(e,t,n){},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return H}));var i,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),"undefined"!==typeof e.addFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.addFunc()}}},[n("svg-icon",{attrs:{"icon-class":"add"}})],1):e._e(),"undefined"!==typeof e.saveFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.saveFunc()}}},[n("svg-icon",{attrs:{"icon-class":"save"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},a=[],s=(n("b0c0"),n("aad4")),c=n("5c96"),r={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},addFunc:{type:Function,required:!1,default:void 0},saveFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(i&&clearTimeout(i),i=setTimeout((function(){e.nameFunc(e.nameInput),i=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(s["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):c["Message"].error("获取集群异常，请刷新重试")}}},l=r,u=(n("e69f"),n("dda3"),n("2877")),d=Object(u["a"])(l,o,a,!1,null,"7321a090",null),h=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},f=[],p=(n("99af"),n("abb2"),n("fcf3")),g=n("47d0"),v=n("173c"),y={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new g["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",i="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(i+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else c["Message"].error("获取POD参数异常，请刷新重试");else c["Message"].error("获取命名空间参数异常，请刷新重试");else c["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new v["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},w=y,k=Object(u["a"])(w,m,f,!1,null,null,null),b=k.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},_=[],F=n("5f87"),O={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(F["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else c["Message"].error("获取POD参数异常，请刷新重试");else c["Message"].error("获取命名空间参数异常，请刷新重试");else c["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},x=O,P=(n("ca6d"),Object(u["a"])(x,N,_,!1,null,"19556679",null)),S=P.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},j=[],D=n("56b3"),M=n.n(D);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var E={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=M.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},q=E,V=(n("db62"),Object(u["a"])(q,C,j,!1,null,"5bb854da",null)),H=V.exports},"64d3":function(e,t,n){},"96f3":function(e,t,n){"use strict";var i=n("5043"),o=n.n(i);o.a},a15b:function(e,t,n){"use strict";var i=n("23e7"),o=n("44ad"),a=n("fc6a"),s=n("a640"),c=[].join,r=o!=Object,l=s("join",",");i({target:"Array",proto:!0,forced:r||!l},{join:function(e){return c.call(a(this),void 0===e?",":e)}})},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));n("99af");var i=n("b775");function o(e){return Object(i["a"])({url:"namespace/".concat(e),method:"get"})}function a(e,t,n){return Object(i["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},adb6:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.networkpolicies,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"30","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"30","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"policy_types",label:"策略类型","min-width":"35","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"created",label:"创建时间","min-width":"30","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dropdown",{attrs:{size:"medium"}},[n("el-link",{attrs:{underline:!1}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.getNetworkPolicyYaml(t.row.namespace,t.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1),n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.deleteNetworkPolicies([{namespace:t.row.namespace,name:t.row.name}])}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateNetworkPolicy()}}},[e._v("确 定")])],1)],1)],1)},o=[],a=(n("4de4"),n("caad"),n("c975"),n("a15b"),n("b0c0"),n("2532"),n("b85c")),s=n("61b2"),c=(n("99af"),n("b775"));function r(e){return Object(c["a"])({url:"networkpolicy/".concat(e),method:"get"})}function l(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(c["a"])({url:"networkpolicy/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:i}})}function u(e,t){return Object(c["a"])({url:"networkpolicy/".concat(e,"/delete"),method:"post",data:t})}function d(e,t,n,i){return Object(c["a"])({url:"networkpolicy/".concat(e,"/update/").concat(t,"/").concat(n),method:"post",data:{yaml:i}})}var h=n("5c96"),m={name:"NetworkPolicy",components:{Clusterbar:s["a"],Yaml:s["d"]},data:function(){return{yamlDialog:!1,yamlNamespace:"",yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Network Policies"],maxHeight:window.innerHeight-150,loading:!0,originNetworkPolicies:[],search_ns:[],search_name:"",delFunc:void 0,delNetworkPolicies:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{networkpoliciesWatch:function(e){if(e){var t=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.originNetworkPolicies.push(this.buildNetworkPolicies(e.resource));else if("update"===e.event)for(var i in this.originNetworkPolicies){var o=this.originNetworkPolicies[i];if(o.uid===t){if(o.resource_version<n){var a=this.buildNetworkPolicies(e.resource);this.$set(this.originNetworkPolicies,i,a)}break}}else"delete"===e.event&&(this.originNetworkPolicies=this.originNetworkPolicies.filter((function(e){var n=e.uid;return n!==t})))}}},computed:{networkpolicies:function(){var e,t=[],n=Object(a["a"])(this.originNetworkPolicies);try{for(n.s();!(e=n.n()).done;){var i=e.value;this.search_ns.length>0&&this.search_ns.indexOf(i.namespace)<0||(this.search_name&&!i.name.includes(this.search_name)||(i.conditions&&i.conditions.length>0?i.conditions.sort():i.conditions=[],t.push(i)))}}catch(o){n.e(o)}finally{n.f()}return t},networkpoliciesWatch:function(){return this.$store.getters["ws/networkpoliciesWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originNetworkPolicies=[];var t=this.$store.state.cluster;t?r(t).then((function(t){e.loading=!1,e.originNetworkPolicies=t.data?t.data:[]})).catch((function(){e.loading=!1})):(this.loading=!1,h["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this.search_ns.push(i)}}catch(o){n.e(o)}finally{n.f()}},nameSearch:function(e){this.search_name=e},buildNetworkPolicies:function(e){if(e){var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,policy_types:e.spec.policyTypes,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp};return t}},nameClick:function(e,t){this.$router.push({name:"networkpolicyDetail",params:{namespace:e,networkpolicyName:t}})},getNetworkPolicyYaml:function(e,t){var n=this;this.yamlNamespace="",this.yamlName="";var i=this.$store.state.cluster;i?e?t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,l(i,e,t,"yaml").then((function(i){n.yamlLoading=!1,n.yamlValue=i.data,n.yamlNamespace=e,n.yamlName=t})).catch((function(){n.yamlLoading=!1}))):h["Message"].error("获取NetworkPolicy名称参数异常，请刷新重试"):h["Message"].error("获取命名空间参数异常，请刷新重试"):h["Message"].error("获取集群参数异常，请刷新重试")},deleteNetworkPolicies:function(e){var t=this.$store.state.cluster;if(t)if(e.length<=0)h["Message"].error("请选择要删除的NetworkPolicies");else{var n={resources:e};u(t,n).then((function(){h["Message"].success("删除成功")})).catch((function(){}))}else h["Message"].error("获取集群参数异常，请刷新重试")},updateNetworkPolicy:function(){var e=this.$store.state.cluster;e?this.yamlNamespace?this.yamlName?(console.log(this.yamlValue),d(e,this.yamlNamespace,this.yamlName,this.yamlValue).then((function(){h["Message"].success("更新成功")})).catch((function(){}))):h["Message"].error("获取NetworkPolicy参数异常，请刷新重试"):h["Message"].error("获取命名空间参数异常，请刷新重试"):h["Message"].error("获取集群参数异常，请刷新重试")},_delNetworkPoliciesFunc:function(){if(this.delNetworkPolicies.length>0){var e,t=[],n=Object(a["a"])(this.delNetworkPolicies);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.push({namespace:i.namespace,name:i.name})}}catch(o){n.e(o)}finally{n.f()}this.deleteNetworkPolicies(t)}},handleSelectionChange:function(e){this.delNetworkPolicies=e,e.length>0?this.delFunc=this._delNetworkPoliciesFunc:this.delFunc=void 0},getPortsDisplay:function(e){if(!e)return"";var t,n=[],i=Object(a["a"])(e);try{for(i.s();!(t=i.n()).done;){var o=t.value,s=o.port;o.nodePort&&(s+=":"+o.nodePort),s+="/"+o.protocol,n.push(s)}}catch(c){i.e(c)}finally{i.f()}return n.join(",")}}},f=m,p=(n("f47b"),n("96f3"),n("2877")),g=Object(p["a"])(f,i,o,!1,null,"448931c6",null);t["default"]=g.exports},b92f:function(e,t,n){},ca6d:function(e,t,n){"use strict";var i=n("64d3"),o=n.n(i);o.a},db62:function(e,t,n){"use strict";var i=n("43df"),o=n.n(i);o.a},dda3:function(e,t,n){"use strict";var i=n("b92f"),o=n.n(i);o.a},e396:function(e,t,n){},e69f:function(e,t,n){"use strict";var i=n("2c0c"),o=n.n(i);o.a},f47b:function(e,t,n){"use strict";var i=n("e396"),o=n.n(i);o.a}}]);