(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],a[o]&&m.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"1f68":function(t,e,n){},"56c7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("total",{ref:"totalComponent",attrs:{total:this.total,items:this.items}})],1)]),n("div",{staticClass:"row"},[n("Inputs",{ref:"inputComponent",attrs:{total:this.total,items:this.items},on:{insert:function(e){t.insertItem(e)},update:function(e){t.updateItem(e)},clean:function(e){t.cleanList(e)}}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("Items",{ref:"itemsComponent",attrs:{items:this.items},on:{edit:function(e){t.editItem(e)},remove:function(e){t.removeItem(e)}}})],1)])])])])},s=[],o=(n("96cf"),n("3b8d")),r=n("59ad"),c=n.n(r),l=(n("ac6a"),n("d225")),u=n("74ce"),d=function t(){Object(l["a"])(this,t);var e=new u["a"]("items");return e.version(1).stores({items:"++id,name,price,qty"}),e},m=(n("7f7f"),n("e814")),p=n.n(m),f=n("b0b4"),h=function(){function t(e){Object(l["a"])(this,t),this._db=e}return Object(f["a"])(t,[{key:"add",value:function(t){this._db.items.add(t).catch(function(t){return console.log(t)})}},{key:"update",value:function(t){this._db.items.update(p()(t.id),{name:t.name,price:t.price,qty:t.qty}).catch(function(t){return console.log(t)})}},{key:"delete",value:function(t){this._db.items.delete(p()(t)).catch(function(t){return console.log(t)})}},{key:"clean",value:function(){this._db.items.clear()}},{key:"getAll",value:function(){return this._db.items.toArray()}}]),t}(),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total"},[t._v("$ "+t._s(this.total.toFixed(2))+" ("+t._s(this.items.length)+")")])},b=[],y={props:["total","items"]},_=y,C=(n("d85d"),n("2877")),g=Object(C["a"])(_,v,b,!1,null,null,null),q=g.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"row selection-group"},[n("ul",{staticClass:"list-group ",attrs:{id:"items"}},t._l(t.items,function(e){return n("li",{key:e.id,staticClass:"list-group-item"},[t._v("                              \n                         "+t._s(e.name)),n("br"),t._v("\n                         Precio: $ "+t._s(e.price)+" | Cantidad: "+t._s(e.qty)),n("br"),t._v("\n                         Subtotal: "+t._s((e.price*e.qty).toFixed(2))+"\n                         "),n("button",{staticClass:"btn btn-sm btn-dark btn-tool",attrs:{title:"Edit",id:"edit"},on:{click:function(n){t.edit(e)}}},[n("icon",{attrs:{name:"edit",scale:"1"}})],1),n("button",{staticClass:"btn btn-sm btn-danger btn-tool",attrs:{title:"Delete",id:"delete"},on:{click:function(n){t.remove(e.id)}}},[n("icon",{attrs:{name:"trash",scale:"1"}})],1)])}),0)])])])},w=[],S={props:["items"],methods:{edit:function(t){this.$emit("edit",t)},remove:function(t){this.$emit("remove",t)}}},O=S,j=(n("cfe0"),Object(C["a"])(O,I,w,!1,null,null,null)),k=j.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-tool"},[n("input",{staticClass:"form-control",attrs:{type:"text",required:"",id:"name",placeholder:"Nombre del producto"}}),n("input",{staticClass:"form-control",attrs:{type:"number",required:"",id:"price",placeholder:"Precio"}}),n("input",{staticClass:"form-control",attrs:{type:"number",required:"",id:"qty",placeholder:"Cantidad"}}),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn-primary add-btn",attrs:{id:"insertItem"},on:{click:t.insert}},[t._v("Agregar")]),n("button",{staticClass:"btn btn-warning add-btn",attrs:{id:"updateItem"},on:{click:t.update}},[t._v("Actualizar #"),n("span",{attrs:{id:"i_id"}})]),n("button",{staticClass:"btn btn-info add-btn",attrs:{id:"cancelAction"},on:{click:t.cancel}},[t._v("Cancelar")]),n("button",{staticClass:"btn btn-danger add-btn",attrs:{id:"cleanList"},on:{click:t.askClean}},[t._v("Limpiar")])]),n("div",{staticClass:"modal",attrs:{tabindex:"-1",role:"dialog"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[t._m(0),t._m(1),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.clean}},[t._v("Si")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("No")])])])])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v("Limpiar lista")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-body"},[n("p",[t._v("¿Desea eliminar todos los items?")])])}],E={props:["total","items"],mounted:function(){this.hideUpdateButton()},methods:{insert:function(){var t=document.querySelector("#name"),e=document.querySelector("#price"),n=document.querySelector("#qty");t.value.length>0&&e.value.length>0&&n.value.length>0&&(this.$emit("insert",{name:t.value,price:e.value,qty:n.value}),t.value="",e.value="",n.value="",t.focus())},update:function(){var t=document.querySelector("#i_id"),e=document.querySelector("#name"),n=document.querySelector("#price"),i=document.querySelector("#qty");t.innerText.length>0&&e.value.length>0&&n.value.length>0&&i.value.length>0&&this.$emit("update",{id:t.innerText,name:e.value,price:n.value,qty:i.value})},askClean:function(){this.items.length>0&&$(".modal").modal("show")},clean:function(){this.$emit("clean"),$(".modal").modal("hide")},cancel:function(){this.hideUpdateButton(),this.cleanInputs()},cleanInputs:function(){document.querySelector("#i_id").innerText="",document.querySelector("#price").value="",document.querySelector("#qty").value="";var t=document.querySelector("#name");t.value="",t.focus()},setInputs:function(t){document.querySelector("#i_id").innerText=t.id,document.querySelector("#name").value=t.name,document.querySelector("#price").value=t.price,document.querySelector("#qty").value=t.qty},showUpdateButton:function(){document.querySelector("#insertItem").style.display="none",document.querySelector("#updateItem").style.display="block"},hideUpdateButton:function(){document.querySelector("#insertItem").style.display="block",document.querySelector("#updateItem").style.display="none"}}},P=E,A=(n("aabe"),Object(C["a"])(P,x,T,!1,null,null,null)),B=A.exports,U={name:"app",components:{Total:q,Items:k,Inputs:B},data:function(){return{total:0,items:[],iObj:null}},mounted:function(){this.iObj=new h(new d),this.listItems()},methods:{insertItem:function(t){this.iObj.add(t),this.listItems()},updateItem:function(t){this.iObj.update(t),this.listItems(),this.$refs.inputComponent.cleanInputs(),this.$refs.inputComponent.hideUpdateButton()},cleanList:function(){this.iObj.clean(),this.listItems(),this.$refs.inputComponent.cleanInputs()},editItem:function(t){this.$refs.inputComponent.showUpdateButton(),this.$refs.inputComponent.setInputs(t)},removeItem:function(t){this.iObj.delete(t),this.listItems(),this.$refs.inputComponent.cleanInputs()},calcTotal:function(){var t=this;this.total=0,this.items.reverse(),this.items.forEach(function(e){var n=c()(e.price*e.qty);t.total+=n})},listItems:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.iObj.getAll();case 2:return this.items=t.sent,t.next=5,this.calcTotal();case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},L=U,M=(n("034f"),Object(C["a"])(L,a,s,!1,null,null,null)),J=M.exports,D=(n("ab8b"),n("3e48"),n("1f68"),n("d06d"),n("0874"));window.$=n("1157"),window.JQuery=n("1157"),i["a"].component("icon",D["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(J)}}).$mount("#app")},"64a9":function(t,e,n){},aabe:function(t,e,n){"use strict";var i=n("56c7"),a=n.n(i);a.a},abea:function(t,e,n){},cfe0:function(t,e,n){"use strict";var i=n("da3d"),a=n.n(i);a.a},d85d:function(t,e,n){"use strict";var i=n("abea"),a=n.n(i);a.a},da3d:function(t,e,n){}});
//# sourceMappingURL=app.ce80d02a.js.map