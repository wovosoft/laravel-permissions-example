(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(t,e,r){var a=r(30);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(15)(a,n);a.locals&&(t.exports=a.locals)},13:function(t,e,r){var a=r(32);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(15)(a,n);a.locals&&(t.exports=a.locals)},16:function(t,e,r){"use strict";var a=r(2),n={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}}},methods:{range:a.e,changeVisibility:a.a,startCase:a.g}},s=(r(31),r(1)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"input-group"},[t._m(0),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.datatable.per_page,expression:"datatable.per_page"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.datatable,"per_page",e.target.multiple?r:r[0])}}},t._l(t.range(),(function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)])]),t._v(" "),r("div",{staticClass:"col-md-5"},[r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Type and Hit Enter to Search the table, ESC to clear"},domProps:{value:t.value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-md-4 text-right"},[r("div",{staticClass:"btn-group"},t._l(t.custom_buttons,(function(e,a){return t.custom_buttons&&t.custom_buttons.length?r("button",{key:a,staticClass:"btn",class:e.variant?"btn-"+e.variant:"btn-dark",attrs:{type:"button"},on:{click:e.method}},[e.icon?r("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n            ")]):t._e()})),0),t._v(" "),r("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:"Columns",right:"",variant:"primary"}},[r("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,a){return r("li",{key:a,staticClass:"list-group-item"},[r("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(r){return t.changeVisibility(e,a)}},model:{value:e.visible,callback:function(r){t.$set(e,"visible",r)},expression:"field.visible"}},[t._v("\n                        "+t._s(t.startCase(e.label||e.key))+"\n                    ")])],1)})),0)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Per Page")])])}],!1,null,null,null);e.a=i.exports},2:function(t,e,r){"use strict";function a(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{key:"key",value:"value"},a=[];for(var n in t)if(!e.includes(n)){var s={};s[r.key]=n,s[r.value]=t[n],a.push(s)}return a}function i(t,e){"string"!=typeof this.fields[e].thClass&&(this.fields[e].thClass=""),"string"!=typeof this.fields[e].tdClass&&(this.fields[e].tdClass=""),t.visible?(this.fields[e].thClass+=" d-none",this.fields[e].tdClass+=" d-none"):(this.fields[e].thClass=this.fields[e].thClass.replace("d-none","").trim(),this.fields[e].tdClass=this.fields[e].tdClass.replace("d-none","").trim())}function o(t,e,r){this.$bvToast.toast(t.msg,{title:t.title,variant:t.type,autoHideDelay:e||3e3,appendToast:r||!1})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return a(Array(e).keys()).map((function(e){return e*t+t}))}function u(t){return!0===t||!1===t}function c(t){return t.fields.map((function(t){if(u(t.visible)&&t.visible&&(!u(t.searchable)||t.searchable))return t.key})).filter((function(t){return null!=t&&""!==("string"==typeof t?t.trim():t)}))}r.d(e,"d",(function(){return s})),r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"g",(function(){return m}));var d=/_/g,p=/([a-z])([A-Z])/g,f=/(\s|^)(\w)/g;function m(t){return t.replace(d," ").replace(p,(function(t,e,r){return e+" "+r})).replace(f,(function(t,e,r){return e+r.toUpperCase()}))}e.b={data:function(){return{search:"",currentItem:{},datatable:{per_page:10,current_page:1,total:0,from:0,to:0},fields:[]}},mounted:function(){var t;(t=this).fields.forEach((function(e){u(e.visible)||t.$set(e,"visible",!0),u(e.visible)&&!e.visible&&(t.$set(e,"thClass","d-none"),t.$set(e,"tdClass","d-none"))})),function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];"function"==typeof e?e.apply(void 0,a(r)):t.$root.$on("bv::modal::hidden",(function(e,r){"addModal"===r?t.form={}:"viewModal"===r&&(t.currentItem={}),"function"==typeof n&&n.apply(void 0,a(s))}))}(this)},methods:{getItems:function(t){var e,r=this;return axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:this.datatable.per_page,orderBy:t.sortBy||"id",order:(e=t.sortDesc,u(e)&&e?"desc":"asc"),filter:t.filter,columns:c(this)}).then((function(t){return r.datatable.total=t.data.total,r.datatable.from=t.data.from,r.datatable.to=t.data.to,r.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]}))},onSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];axios.post(this.submit_url,this.form,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){t.$bvModal.hide("addModal"),t.msgBox(n.data),t.$refs.datatable.refresh(),e&&e.apply(void 0,a(r))})).catch((function(e){t.msgBox(e.response),console.log(e.response)}))},trash:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"datatable",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvModal.msgBoxConfirm("Are you sure?").then((function(n){n&&axios.post(a||e.trash_url,{id:t}).then((function(t){e.msgBox(t.data),e.$refs[r].refresh()})).catch((function(t){e.msgBox(t.response),console.log(t.response)}))})).catch((function(t){console.log(t)}))},msgBox:o,obj2Table:s,startCase:m}}},29:function(t,e,r){"use strict";var a=r(12);r.n(a).a},30:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,"\n.scrollable-dropdown {\n    max-height: 300px;\n    overflow-y: auto;\n}\n",""])},31:function(t,e,r){"use strict";var a=r(13);r.n(a).a},32:function(t,e,r){(t.exports=r(14)(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""])},4:function(t,e,r){"use strict";var a={props:{datatable:Object}},n=r(1),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),r("div",{staticClass:"col"},[r("b-pagination",{attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"0c3a5b90",null);e.a=s.exports},5:function(t,e,r){"use strict";var a={inheritAttrs:!1,props:{closeOnSelect:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!1},resetOnSelect:{type:Boolean,default:!1},search:{type:String,default:""},searchItems:{type:Function},api_url:{type:String,default:""},placeholder:{type:String,default:"Type and Search"},formatter:{type:Function,default:function(t){return"".concat(t.text||t.name||JSON.stringify(t))}}},data:function(){return{show_dropdown:!1,current_position:0,items:[],search_value:this.search}},methods:{enterPressed:function(){this.show_dropdown&&(this.$emit("selected",this.items[this.current_position]),this.search_value=this.clearOnSelect?"":this.formatter(this.items[this.current_position]),this.closeOnSelect&&(this.show_dropdown=!1),this.resetOnSelect&&(this.items=[]))},itemClicked:function(t){this.search_value=this.clearOnSelect?"":this.formatter(t),this.resetOnSelect&&(this.items=[]),this.$emit("selected",t)},getList:function(t){var e=this,r=null;(r=""!==this.api_url?axios.post(this.api_url,{search:t.target.value}):this.searchItems(t.target.value))&&r.then((function(t){e.items=t.data||[],e.$emit("items",t.data||[])})).catch((function(t){e.items=[],e.$emit("items",[]),console.error(t.response)}))},hideDropdown:function(){var t=this;setTimeout((function(){return t.show_dropdown=!1}),300),this.current_position=0,this.$emit("dropdownHidden",!0)},changePosition:function(t,e){"down"===e&&this.current_position>this.items.length-1?(this.current_position=this.current_position+1,console.log("down")):"up"===e&&this.current_position>0&&(this.current_position=this.current_position-1,console.log("up"))},fixPosition:function(t){if(this.$refs.ddown_typehead){var e=this.$refs.ddown_typehead.$el.querySelectorAll(".ddown-item");e.length&&e[t||this.current_position].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}}}},n=(r(29),r(1)),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"input-group"},[r("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.search_value,expression:"search_value"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search_value},on:{focusin:function(e){t.show_dropdown=!0,t.$emit("dropdownShown",!0)},focusout:t.hideDropdown,input:[function(e){e.target.composing||(t.search_value=e.target.value)},t.getList],keypress:function(){t.show_dropdown||(t.show_dropdown=!0)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.enterPressed(e))},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;t.current_position=t.current_position<t.items.length-1?t.current_position+1:t.items.length>0?t.items.length-1:0,t.fixPosition(t.current_position)},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;t.current_position=t.current_position>0?t.current_position-1:0,t.fixPosition(t.current_position)}]}},"input",t.$attrs,!1)),t._v(" "),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.search_value="",t.$emit("reset")}}},[t._v("X")])])]),t._v(" "),t.show_dropdown&&t.items.length?r("b-dropdown",{ref:"ddown_typehead",staticClass:"w-100",staticStyle:{top:"-15px"},attrs:{"menu-class":{show:t.show_dropdown,"w-100":!0,"scrollable-dropdown":!0},"toggle-class":"d-none"}},t._l(t.items,(function(e,a){return r("b-dropdown-item",{key:a,class:{"bg-light":t.current_position===a,"ddown-item":!0},staticStyle:{cursor:"pointer"},on:{click:function(r){return t.itemClicked(e)}}},[t._t("option",[t._v("\n                "+t._s(e)+"}\n            ")],null,e)],2)})),1):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},66:function(t,e,r){"use strict";r.r(e);var a=r(2),n={components:{DtFooter:r(4).a},props:{title:{type:String,default:""},api_url:{type:String,default:"/backend/users/listByRole"},trash_url:{type:String,default:"/backend/roles/detuch"},role_id:{type:Number,default:0,required:!0},disable_action:{type:Boolean,default:!1}},data:function(){return{_:null,form:{},fields:[{key:"id",sortable:!0,visible:!0},{key:"name",sortable:!0,visible:!0},{key:"email",sortable:!0,visible:!0},{key:"action",sortable:!1,searchable:!1,thClass:{"text-right":!0,"d-none":this.disable_action},tdClass:{"text-right":!0,"d-none":this.disable_action}}],datatable:{per_page:10,current_page:1,total:0,from:0,to:0}}},created:function(){this._=window._},methods:{getItems:function(t){var e=this,r=[];if(t.filter)for(var a in this.fields)_.isBoolean(this.fields[a].visible)&&this.fields[a].visible&&(_.isBoolean(this.fields[a].searchable)&&!this.fields[a].searchable||r.push(this.fields[a].key));return this.role_id?axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:this.datatable.per_page,orderBy:t.sortBy,order:t.sortDesc?"desc":"asc",filter:t.filter,columns:r,role_id:this.role_id}).then((function(t){return e.datatable.total=t.data.total,e.datatable.from=t.data.from,e.datatable.to=t.data.to,e.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]})):[]},detach:function(t){var e=this;this.$bvModal.msgBoxConfirm("Are you sure?",{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!1,headerBgVariant:"dark",headerTextVariant:"light"}).then((function(r){r&&axios.post(e.trash_url,{role_id:e.role_id,user_id:t}).then((function(t){console.log(t),e.msgBox(t.data),e.$refs.datatable.refresh()})).catch((function(t){e.msgBox(t.response),console.log(t.response)}))})).catch((function(t){console.log(t)}))},msgBox:a.c}},s=r(1),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{attrs:{header:t.title,"no-body":""},scopedSlots:t._u([{key:"footer",fn:function(){return[r("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[r("b-table",{ref:"datatable",staticClass:"m-0 border-0",attrs:{variant:"primary",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{attrs:{variant:"danger",title:"Revoke User"},on:{click:function(r){return t.detach(e.item.id)}}},[r("i",{staticClass:"fa fa-trash"}),t._v(" Detach\n                    ")])],1)]}}])})],1)],1)}),[],!1,null,null,null).exports,o=r(5),l={props:{submit_url:{type:String,default:null},users_search_url:{type:String,default:"/backend/users/search"},data_url:{type:String,default:"/backend/users/data"},value:{type:Object,default:function(){return{id:null}}},hide_submit:{type:Boolean,default:!1}},components:{TypeHead:o.a,UserList:i},mounted:function(){var t=this;this.form=JSON.parse(JSON.stringify(this.value)),axios.post(this.data_url,{permissions:this.permissions.length<=0&&["id","name","description"]}).then((function(e){if(e.data.permissions){var r=t.form.permissions.map((function(t){return t.name}));t.permissions=(e.data.permissions||[]).map((function(t){return{id:t.id,name:t.name,description:t.description,allowed:r.includes(t.name)}}))}})).catch((function(t){console.log(t.response)}))},computed:{rows:function(){return this.permissions?this.permissions.length:0}},watch:{form:{handler:function(t){this.$emit("input",t)},deep:!0}},data:function(){return{url:null,form:{},show_dropdown:!1,users:[],users_insert:[],search:"",perPage:10,currentPage:1,permissions:[]}},methods:{range:a.e,onSubmit:function(){var t=this,e=JSON.parse(JSON.stringify(this.form));e.users_insert=this.users_insert.map((function(t){return t.id})),e.permissions_sync=this.permissions.filter((function(t){return t.allowed})).map((function(t){return t.name})),axios.post(this.submit_url,e).then((function(e){t.$emit("created",e.data)})).catch((function(e){t.$emit("error",e.response),console.log(e.response.data)}))},hitSubmit:function(){this.$refs.submitBtn.click()},searchItems:function(t){return t?axios.post(this.users_search_url,{search:t}):(this.users=[],!1)},selectUser:function(t){for(var e in this.users_insert)if(this.users_insert[e].id===t.id)return!1;this.users_insert.push(t),this.search=""}}},u=Object(s.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{"no-body":""}},[r("b-tabs",{attrs:{card:""}},[r("b-tab",{attrs:{title:"Basic Information",active:""}},[r("b-row",[r("b-col",{attrs:{md:"4"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",{attrs:{label:"Name *"}},[r("b-form-input",{attrs:{placeholder:"Name",required:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("b-form-group",{attrs:{label:"Guard Name"}},[r("b-form-input",{attrs:{placeholder:"Guard Name"},model:{value:t.form.guard_name,callback:function(e){t.$set(t.form,"guard_name",e)},expression:"form.guard_name"}})],1),t._v(" "),r("b-form-group",{attrs:{label:"Description"}},[r("b-form-textarea",{attrs:{placeholder:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("b-button",{ref:"submitBtn",attrs:{variant:"primary",hidden:t.hide_submit,block:"",type:"submit"}},[t._v("SUBMIT\n                        ")])],1)]),t._v(" "),r("b-col",{attrs:{md:"8"}},[r("h4",[t._v("\n                        Permissions\n                        "),r("b-badge",[t._v(t._s(t.rows))])],1),t._v(" "),r("b-table",{attrs:{items:t.permissions,small:"",bordered:"",hover:"",striped:"","head-variant":"dark","current-page":t.currentPage,"per-page":t.perPage,fields:[{key:"name",sortable:!0},{key:"description",sortable:!0},{key:"allowed",sortable:!1,tdClass:"text-right",thClass:"text-right"}]},scopedSlots:t._u([{key:"cell(allowed)",fn:function(e){return[r("b-form-checkbox",{attrs:{switch:""},model:{value:e.item.allowed,callback:function(r){t.$set(e.item,"allowed",r)},expression:"row.item.allowed"}})]}}])}),t._v(" "),r("b-row",[r("b-col",[r("b-form-select",{attrs:{options:t.range(5)},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),r("b-col",[r("b-pagination",{attrs:{align:"right","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)],1),t._v(" "),r("b-tab",{attrs:{title:"Assigned Users"}},[r("b-form-group",{attrs:{label:"Users"}},[r("type-head",{attrs:{search:t.search,"search-items":t.searchItems,autocomplete:"off",placeholder:"Search Users"},on:{selected:function(e){return t.selectUser(e)}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                        "+t._s(e.id)+" # "+t._s(e.name)+" | "+t._s(e.email)+"\n                    ")]}}])}),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("Selected Users")]),t._v(" "),r("b-table",{attrs:{bordered:"",small:"","head-variant":"dark",items:t.users_insert,fields:["id","name","email",{key:"action",tdClass:"text-right",thClass:"text-right"}]},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[r("button",{staticClass:"btn btn-dark btn-sm",attrs:{type:"button"},on:{click:function(r){return t.users_insert.splice(e.index,1)}}},[r("i",{staticClass:"fa fa-trash"})])]}}])}),t._v(" "),r("h4",[t._v("Assigned Users")]),t._v(" "),t.form.id?r("user-list",{attrs:{role_id:t.form.id}}):t._e()],1)],1)],1)],1)}),[],!1,null,null,null).exports,c=r(8),d={name:"RolesList",components:{DataView:r(9).a,DtTable:c.a,AddItem:u,Users:i},mixins:[a.b],props:{title:{type:String,default:""},api_url:{type:String,default:"/backend/roles/list"},trash_url:{type:String,default:"/backend/roles/delete"},submit_url:{type:String,default:"/backend/roles/store"},add_modal_title:{type:String,default:"Add / Edit Role"},view_modal_title:{type:String,default:"View Role"},custom_buttons:{type:Array,default:function(){var t=this;return[{text:"Add",method:function(){t.$bvModal.show("addModal")}}]}}},data:function(){return{_:null,form:{},fields:[{key:"id",sortable:!0,visible:!0},{key:"name",sortable:!0,visible:!0},{key:"guard_name",sortable:!0,visible:!0,label:"Guard"},{key:"description",sortable:!0,visible:!0},{key:"created_at",sortable:!0,visible:!0},{key:"updated_at",sortable:!0,visible:!0},{key:"action",sortable:!1,searchable:!1,thClass:"text-right",tdClass:"text-right"}]}}},p=Object(s.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons},scopedSlots:t._u([{key:"table",fn:function(){return[r("b-table",{ref:"datatable",attrs:{variant:"primary",responsive:"md",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,id:"datatable",filter:t.search,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.viewModal",modifiers:{viewModal:!0}}],attrs:{variant:"primary"},on:{click:function(){t.currentItem=JSON.parse(JSON.stringify(e.item))}}},[r("i",{staticClass:"fa fa-eye"})]),t._v(" "),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.addModal",modifiers:{addModal:!0}}],attrs:{variant:"warning"},on:{click:function(){t.form=JSON.parse(JSON.stringify(e.item))}}},[r("i",{staticClass:"fa fa-edit"})]),t._v(" "),r("b-button",{attrs:{variant:"danger"},on:{click:function(r){return t.trash(e.item.id)}}},[r("i",{staticClass:"fa fa-trash"})])],1)]}}])})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("b-modal",{attrs:{id:"addModal",title:t.add_modal_title,size:"xl","header-bg-variant":"dark","header-text-variant":"light",lazy:""},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.close;return[r("b-button-group",{staticClass:"float-right"},[r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$refs.ItemAdd.hitSubmit()}}},[t._v("SUBMIT")]),t._v(" "),r("b-button",{on:{click:function(t){return a()}}},[t._v("Close")])],1)]}}])},[r("add-item",{ref:"ItemAdd",attrs:{hide_submit:!0,submit_url:t.submit_url},on:{created:function(e){t.$refs.datatable.refresh(),t.$bvModal.hide("addModal"),t.msgBox(e)}},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),t._v(" "),r("b-modal",{attrs:{id:"viewModal",title:t.view_modal_title,size:"xl","header-bg-variant":"dark","header-text-variant":"light","no-body":"",lazy:""}},[r("data-view",{attrs:{item:t.currentItem,skip:["permissions"]}}),t._v(" "),t.currentItem.permissions?r("b-card",{attrs:{header:"Assigned Permissions"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("ul",{domProps:{innerHTML:t._s(t.currentItem.permissions.slice(0,t.currentItem.permissions.length/2).map((function(t){return"<li>"+t.name.toUpperCase()+"</li>"})).join(""))}})]),t._v(" "),r("div",{staticClass:"col"},[r("ul",{domProps:{innerHTML:t._s(t.currentItem.permissions.slice(t.currentItem.permissions.length/2,t.currentItem.permissions.length).map((function(t){return"<li>"+t.name.toUpperCase()+"</li>"})).join(""))}})])])]):t._e(),t._v(" "),r("br"),t._v(" "),r("users",{attrs:{title:"Assigned Users",role_id:t.currentItem.id,disable_action:!0}})],1)],1)}),[],!1,null,null,null);e.default=p.exports},8:function(t,e,r){"use strict";var a=r(16),n=r(4),s={components:{DtHeader:a.a,DtFooter:n.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}}},data:function(){return{ff:[],cbuttons:[1,2,3]}}},i=r(1),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{attrs:{title:t.title},scopedSlots:t._u([{key:"header",fn:function(){return[r("dt-header",{attrs:{custom_buttons:t.custom_buttons,datatable:t.datatable,fields:t.fields,value:t.value},on:{input:function(e){return t.$emit("input",e)}}})]},proxy:!0},{key:"footer",fn:function(){return[r("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,"8fa1cc0a",null);e.a=o.exports},9:function(t,e,r){"use strict";var a=r(2),n={props:{headVariant:{type:String,default:"dark"},bordered:{type:Boolean,default:!0},small:{type:Boolean,default:!0},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},item:{type:Object,required:!0},skip:{type:Array,default:function(){return[]}},as:{type:Object,default:function(){return{key:"key",value:"value"}}},fields:{type:Array,default:function(){return[{key:"key",sortable:!0,formatter:function(t){return Object(a.g)(t)}},{key:"value",sortable:!0}]}}},methods:{obj2Table:a.d,startCase:a.g}},s=r(1),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-table",t._b({attrs:{items:t.obj2Table(t.item,t.skip,t.as),fields:t.fields,"head-variant":t.headVariant,bordered:t.bordered,small:t.small,hover:t.hover,striped:t.striped}},"b-table",t.$attrs,!1))}),[],!1,null,"3dc098b1",null);e.a=i.exports}}]);