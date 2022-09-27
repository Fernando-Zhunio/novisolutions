"use strict";(self.webpackChunkng=self.webpackChunkng||[]).push([[6518],{36518:(z,f,r)=>{r.r(f),r.d(f,{SidebarModule:()=>X});var c=r(69808),d=r(59516),x=r(27761),e=r(5e3),h=r(8735),O=r(57261),T=r(39221);let y=(()=>{class n extends x.Y{constructor(i,t,o){super(i,t,o),this.displayedColumns=["id","name","url","icon","created_at","actions"],this.itemRows=[{key:"id",title:"Id",isEditable:!1},{key:"name",title:"Nombre",isEditable:!1},{key:"url",title:"Url",isEditable:!1},{key:"icon",title:"Icono",isEditable:!1},{key:"created_at",title:"Creado",isEditable:!1},{key:"acciones",title:"Acciones",isEditable:!1}],this.url="admin/sidebar"}ngOnInit(){}editItem(i){this.router.navigate(["/administracion-sistema/sidebar/item",i,"edit"])}createItem(){this.router.navigate(["/administracion-sistema/sidebar/item/create"])}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(h.X),e.Y36(O.ux),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidebar-index"]],features:[e.qOj],decls:2,vars:3,consts:[["title","Sidebar","placeholder","Buscar Sidebar","textBtnAdd","Agregar item sidebar",3,"itemRows","url","displayedColumns","onClickDestroy","onClickEdit","onClickCreate"]],template:function(i,t){1&i&&(e.TgZ(0,"div")(1,"app-index-with-mat-table",0),e.NdJ("onClickDestroy",function(l){return t.deleteItem(l)})("onClickEdit",function(l){return t.editItem(l)})("onClickCreate",function(){return t.createItem()}),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("itemRows",t.itemRows)("url",t.url)("displayedColumns",t.displayedColumns))},dependencies:[T.Z],styles:[".container-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#009688}"]}),n})();var s=r(93075),E=r(57062),b=r(9224),g=r(47423),C=r(25245),P=r(90508),u=r(14623),m=r(67322),v=r(77531),J=r(29055);function _(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido"),e.qZA())}function A(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido"),e.qZA())}function N(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido"),e.qZA())}function U(n,a){1&n&&(e.TgZ(0,"mat-error"),e._uU(1,"Este campo es requerido"),e.qZA())}function k(n,a){if(1&n&&(e.TgZ(0,"mat-list-option",18)(1,"div",19),e._uU(2),e.qZA(),e.TgZ(3,"div",20),e._uU(4),e.qZA()()),2&n){const i=a.$implicit;e.Q6J("value",null==i?null:i.id),e.xp6(2),e.Oqu(null==i?null:i.name),e.xp6(2),e.Oqu(null==i?null:i.description)}}const Q=function(){return["/administracion-sistema/sidebar"]},M=function(){return["/administracion-sistema/permissions"]};let S=(()=>{class n extends E.${constructor(i,t,o){super(i,t,o),this.standard=t,this.title="Sidebar Item",this.urlSave="admin/sidebar",this.urlPermission="admin/sidebar/permissions",this.loadCreate=!1,this.permissions=[],this.formPermission=new s.NI("",[s.kI.required]),this.form=new s.cw({name:new s.NI("",[s.kI.required]),url:new s.NI("",[s.kI.required]),icon:new s.NI("",[s.kI.required]),permission_id:new s.NI(null,[s.kI.required])}),this.formSearchPermission=new s.NI(null,[s.kI.required]),this.isLoadingPermissions=!1,this.isOpenSearchPermission=!1}ngOnInit(){this.init(!1),this.search()}search(i=null){this.isLoadingPermissions=!0,this.standard.methodGet(this.urlPermission+"?search="+i).subscribe(o=>{null!=o&&o.success&&(this.permissions=o.data.data),this.isLoadingPermissions=!1})}getData(i){console.log(i),this.permissions=i.data}setData(i){var t;"edit"===this.status&&(this.form.patchValue(i),null!=i&&i.permission&&(this.permissions.push(i.permission),this.formPermission.setValue(`${i.permission.name} - ${i.permission.description}`),null===(t=this.form.get("permission_id"))||void 0===t||t.setValue(i.permission.id)))}selectPermission(i){var t;const o=this.permissions.find(l=>l.id===i.options[0].value);o&&(null===(t=this.form.get("permission_id"))||void 0===t||t.setValue(o.id),this.formPermission.setValue(`${o.name} - ${o.description}`),this.isOpenSearchPermission=!1)}go(){this.router.navigate(["/administracion-sistema/sidebar"])}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(d.gz),e.Y36(h.X),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-create-or-edit-sidebar"]],features:[e.qOj],decls:39,vars:16,consts:[[1,"font-4xl","mt-3","font-weight-bold","d-flex","align-items-center"],["mat-mini-fab","",3,"routerLink"],[1,"row","m-0",3,"formGroup"],[1,"col-md-6"],["matInput","","placeholder","Nombre","formControlName","name"],[4,"ngIf"],["matInput","","placeholder","Url","formControlName","url"],["matInput","","placeholder","Icono","formControlName","icon"],[1,"w-100"],["type","text","readonly","","matInput","","placeholder","Permiso",3,"formControl","click"],["mat-icon-button","","matSuffix","",3,"routerLink"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"search-permission",3,"hidden"],["mat-mini-fab","","color","warn",1,"btn-close-search-product",3,"click"],[1,"col-md-6","col-8","overflow-auto"],["placeholder","Buscador de permisos",3,"url","data"],["data","",3,"multiple","selectionChange"],["mat-line","",3,"value",4,"ngFor","ngForOf"],["mat-line","",3,"value"],["mat-line",""],["mat-line","",1,"border-bottom"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div")(1,"h2",0)(2,"button",1)(3,"mat-icon"),e._uU(4,"arrow_back"),e.qZA()(),e._uU(5),e.qZA(),e.TgZ(6,"div")(7,"div")(8,"div")(9,"mat-card")(10,"div",2)(11,"mat-form-field",3),e._UZ(12,"input",4),e.YNc(13,_,2,0,"mat-error",5),e.qZA(),e.TgZ(14,"mat-form-field",3),e._UZ(15,"input",6),e.YNc(16,A,2,0,"mat-error",5),e.qZA(),e.TgZ(17,"mat-form-field",3),e._UZ(18,"input",7),e.YNc(19,N,2,0,"mat-error",5),e.qZA(),e.TgZ(20,"div",3)(21,"mat-form-field",8)(22,"input",9),e.NdJ("click",function(){return t.isOpenSearchPermission=!t.isOpenSearchPermission}),e.qZA(),e.TgZ(23,"button",10)(24,"mat-icon"),e._uU(25,"add"),e.qZA()(),e.YNc(26,U,2,0,"mat-error",5),e.qZA()(),e.TgZ(27,"button",11),e.NdJ("click",function(){return t.saveInServer()}),e._uU(28,"Guardar "),e.TgZ(29,"mat-icon"),e._uU(30,"save"),e.qZA()()()()()()()(),e.TgZ(31,"div",12)(32,"button",13),e.NdJ("click",function(){return t.isOpenSearchPermission=!t.isOpenSearchPermission}),e.TgZ(33,"mat-icon"),e._uU(34,"close"),e.qZA()(),e.TgZ(35,"div",14)(36,"app-search",15),e.NdJ("data",function(l){return t.getData(l)}),e.TgZ(37,"mat-selection-list",16),e.NdJ("selectionChange",function(l){return t.selectPermission(l)}),e.YNc(38,k,5,3,"mat-list-option",17),e.qZA()()()()),2&i){let o,l,Z,I;e.xp6(2),e.Q6J("routerLink",e.DdM(14,Q)),e.xp6(3),e.hij("\xa0 ",t.title,""),e.xp6(5),e.Q6J("formGroup",t.form),e.xp6(3),e.Q6J("ngIf",null==(o=t.form.get("name"))?null:o.invalid),e.xp6(3),e.Q6J("ngIf",null==(l=t.form.get("url"))?null:l.invalid),e.xp6(3),e.Q6J("ngIf",null==(Z=t.form.get("name"))?null:Z.invalid),e.xp6(3),e.Q6J("formControl",t.formPermission),e.xp6(1),e.Q6J("routerLink",e.DdM(15,M)),e.xp6(3),e.Q6J("ngIf",null==(I=t.form.get("name"))?null:I.invalid),e.xp6(1),e.Q6J("disabled",t.isLoading),e.xp6(4),e.Q6J("hidden",!t.isOpenSearchPermission),e.xp6(5),e.Q6J("url",t.urlPermission),e.xp6(1),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngForOf",t.permissions)}},dependencies:[c.sg,c.O5,b.a8,s.Fj,s.JJ,s.JL,s.oH,s.sg,s.u,g.lW,C.Hw,d.rH,P.X2,u.Ub,u.vS,m.TO,m.KE,m.R9,v.Nt,J.g],styles:[".input-search-permission[_ngcontent-%COMP%]{border-radius:20px;border:none;width:100%;padding:10px;outline:none;box-shadow:0 .125rem .25rem #00000013!important}.search-permission[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,.604);z-index:9999;display:flex;justify-content:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.btn-close-search-product[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px}"]}),n})();const p={index:["super-admin","admin.sidebar.index"],show:["super-admin","admin.sidebar.show"],create:["super-admin","admin.sidebar.create"],edit:["super-admin","admin.sidebar.edit"],delete:["super-admin","admin.sidebar.destroy"]},w=[{path:"",component:y,data:{permissions:{only:p.index}}},{path:"item/create",component:S,data:{permissions:{only:p.create}}},{path:"item/:id/edit",component:S,data:{permissions:{only:p.edit},isEdit:!0}}];let Y=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(w)]}),n})();var F=r(75401),L=r(91079),D=r(26688),B=r(87445),R=r(95176),j=r(74107),q=r(82085);let X=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,Y,F.r,b.QW,s.UX,g.ot,C.Ps,d.Bz,u.ie,v.c,m.lN,L.Bb,D.Hi,B.U,R.Co,j.LD,q.v]}),n})()}}]);