(function(e){function t(t){for(var r,a,s=t[0],c=t[1],d=t[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[e.$store.getters.isShow?n("div",[n("div",{staticClass:"blocker"}),n("window",{attrs:{valute:e.getValute,indexOforiginal:e.getIndexOfPattern,head:e.getHeaders,copy:Object.assign({},e.getPattern),labelData:e.isNew},on:{hide:e.hideWindow,save:e.save}})],1):e._e()]),n("div",{staticClass:"table"},[n("div",{staticClass:"head"},[e._l(e.getHeaders,(function(t,r){return n("div",{key:r,staticClass:"cell"},[e._v(" "+e._s(t.name)+" ")])})),n("div",{staticClass:"cell"},[n("div",{staticClass:"buttonGroup"},[n("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.showWindow({clearRow:e.getClearPattern,status:!0})}}},[e._v(" ✍ Создать")])])])],2),e._l(e.getRecords,(function(t,r){return n("row",{key:t.id,attrs:{index:r,row:t},on:{edit:e.showWindow,remove:e.remove}})}))],2),0==e.getRecords.length?n("p",{staticStyle:{"text-align":"center"}},[e._v(" У вас сейчас нет данных в таблице ")]):e._e()],1)},o=[],a=n("5530"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[e._l(e.row,(function(t,r){return n("div",{key:r,staticClass:"cell",class:r},[e._v(" "+e._s(e._f("toFix")(t,r))+" ")])})),n("div",{staticClass:"cell"},[n("div",{staticClass:"buttonGroup"},[n("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.$emit("edit",{index:e.index,status:!1})}}},[e._v("✍ Редактировать")]),n("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.$emit("remove",e.row.id)}}},[e._v(" 🗑 Удалить")])])])],2)},c=[],d=(n("a9e3"),n("b680"),{name:"row",props:["row","index"],filters:{toFix:function(e,t){return"price"==t?Number(e).toFixed(2):e}}}),u=d,l=(n("93bf"),n("2877")),p=Object(l["a"])(u,s,c,!1,null,"5c6d6999",null),f=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"window"},[n("div",{staticClass:"head"},[n("p",[e._v(e._s(e.UpdOrCreate))]),n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.$emit("hide")}}},[e._v("✖")])]),n("div",{staticClass:"data"},[n("div",{staticClass:"inp"},e._l(e.copy,(function(t,r,i){return n("div",{key:i,staticClass:"alertdata"},[n("p",[e._v(e._s(e.head[i].name))]),n("div",{staticClass:"inputBlock"},[n("div",{class:r},[e._v(" "+e._s(e._f("addValute")(r))+" ")]),"checkbox"===e.head[i].type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.copy[r],expression:"copy[index]"}],attrs:{step:["number"==e.head[i].type?"0.1":""],disabled:e._f("isId")(r),type:"checkbox"},domProps:{checked:Array.isArray(e.copy[r])?e._i(e.copy[r],null)>-1:e.copy[r]},on:{change:function(t){var n=e.copy[r],i=t.target,o=!!i.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);i.checked?s<0&&e.$set(e.copy,r,n.concat([a])):s>-1&&e.$set(e.copy,r,n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.copy,r,o)}}}):"radio"===e.head[i].type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.copy[r],expression:"copy[index]"}],attrs:{step:["number"==e.head[i].type?"0.1":""],disabled:e._f("isId")(r),type:"radio"},domProps:{checked:e._q(e.copy[r],null)},on:{change:function(t){return e.$set(e.copy,r,null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.copy[r],expression:"copy[index]"}],attrs:{step:["number"==e.head[i].type?"0.1":""],disabled:e._f("isId")(r),type:e.head[i].type},domProps:{value:e.copy[r]},on:{input:function(t){t.target.composing||e.$set(e.copy,r,t.target.value)}}})])])})),0)]),e.error?n("p",{staticStyle:{"align-self":"center",color:"red"}},[e._v(" Заполните все поля ")]):e._e(),n("div",{staticClass:"foot"},[n("button",{on:{click:function(t){return e.notEmty()}}},[e._v("✓ "+e._s(e.UpdOrCreate))]),n("button",{on:{click:function(t){return t.preventDefault(),e.$emit("hide")}}},[e._v("✖ Отмена")])])])},h=[],m={name:"window",props:["copy","head","indexOforiginal","labelData","valute"],data:function(){return{error:!1}},watch:{copy:function(e){alert(e)}},methods:{notEmty:function(){for(var e in this.error=!1,this.copy)""===this.copy[e]&&"discontin"!=e&&"id"!=e&&(this.error=!0);0==this.error&&this.$emit("save",{index:this.indexOforiginal,newData:this.copy})}},computed:{UpdOrCreate:function(){return 0==this.labelData?"Редактировать":"Создать"},getPrice:function(){return this.copy.price}},filters:{isId:function(e){if("id"==e)return!0},addValute:function(e){if("price"==e)return"$"}}},w=m,y=(n("641c"),Object(l["a"])(w,v,h,!1,null,"72ae01e8",null)),b=y.exports,g=n("2f62"),_={name:"App",components:{row:f,window:b},computed:Object(a["a"])({},Object(g["b"])(["getRecords","getHeaders","getPattern","getIndexOfPattern","isShow","getClearPattern","isNew","getValute"])),methods:Object(a["a"])({},Object(g["c"])(["showWindow","save","remove","hideWindow"]))},x=_,O=(n("034f"),Object(l["a"])(x,i,o,!1,null,null,null)),P=O.exports,C=(n("4de4"),n("a434"),{state:{showWindow:!1,indexPattern:"",inEdit:"",showWind:"false",valute:"$",newData:!1,clearPattern:{name:"",price:"",units:"",discontin:!1},records:[{id:0,name:"12",price:3,units:0,discontin:!1},{id:1,name:"Chai",price:18,units:39,discontin:!0},{id:2,name:"Chang",price:19,units:17,discontin:!1}],headers:[{name:"ID",type:"number"},{name:"Product Name",type:"text"},{name:"Unit Price",type:"number"},{name:"Units in stock",type:"number"},{name:"Discontinued",type:"checkbox"}]},mutations:{hideWindow:function(e){e.showWindow=!1},showWindow:function(e,t){e.status=t.status,e.showWindow=!0,e.newData=t.status,0==e.newData?(e.indexPattern=t.index,e.inEdit=e.records[t.index]):e.inEdit=t.clearRow},save:function(e,t){0==e.newData?e.records.splice(t.index,1,t.newData):(console.log(e.inEdit),e.records.push(t.newData)),e.showWindow=!1},remove:function(e,t){e.records=e.records.filter((function(e){return e.id!=t}))}},actions:{},getters:{getClearPattern:function(e){if(null==e.records[e.records.length-1])var t=0;else t=e.records[e.records.length-1].id+1;return{id:t,name:"",price:"",units:"",discontin:!1}},isNew:function(e){return e.newData},getValute:function(e){return e.valute},getPattern:function(e){return e.inEdit},getIndexOfPattern:function(e){return e.indexPattern},getHeaders:function(e){return e.headers},getRecords:function(e){return e.records},isShow:function(e){return e.showWindow}}});r["a"].use(g["a"]);var k=new g["a"].Store({state:{},mutations:{},actions:{},modules:{t:C}});r["a"].config.productionTip=!1,new r["a"]({store:k,render:function(e){return e(P)}}).$mount("#app")},"641c":function(e,t,n){"use strict";n("fee7")},"85ec":function(e,t,n){},"93bf":function(e,t,n){"use strict";n("fc92")},fc92:function(e,t,n){},fee7:function(e,t,n){}});
//# sourceMappingURL=app.e30281a9.js.map