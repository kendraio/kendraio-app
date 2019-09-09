(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tc2d:function(l,e,n){"use strict";n.r(e);var a=n("CcnG"),t=function(){return function(){}}(),o=n("pMnS"),i=n("t68o"),d=n("NcP4"),r=n("zbXB"),u=n("X4O0"),m=n("YImT"),s=n("l7KE"),p=n("IWKk"),c=n("vaAY"),f=n("s/Hs"),g=n("0Uq3"),h=n("zJr5"),b=n("m2xc"),v=n("zpqM"),y=n("S2jy"),w=n("0nrt"),C=n("0Lud"),R=n("Q+RM"),A=n("jrIF"),M=n("xQel"),L=n("XfxN"),k=n("9AKx"),x=n("gkMc"),N=n("GTsQ"),q=n("bvTX"),E=n("R0y7"),F=n("OXD6"),G=n("EvNm"),_=n("XUGs"),O=n("ta9P"),S=n("H2HR"),I=n("L0+s"),D=n("9tsn"),T=n("zhSX"),j=n("28Ac"),P=n("82Ow"),W=n("+aDf"),z=n("FbN9"),V=n("8mMr"),B=n("dWZg"),Z=n("Ip0R"),X=n("bujt"),Y=n("UodH"),H=n("lLAP"),J=n("wFw1"),K=n("A7o+"),U=n("YJ6i"),Q=n("n6H/"),$=n("wgQU"),ll=n("oveR"),el=n("hNGQ"),nl=n("+dxm"),al=n("jIY6"),tl=n("pZCB"),ol=n("L5g3"),il=n("15JJ"),dl=n("xMyE"),rl=n("K9Ia"),ul=n("KN+2"),ml=n("BIqH"),sl=[new ml.L({id:"Name",maxLength:25,placeholder:"Title of Recording",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.L({id:"Type",maxLength:50,placeholder:"Type",validators:{required:null},errorMessages:{required:"Field is required"},additional:{color:"accent"}}),new ml.L({id:"ISWC",placeholder:"ISWC",hint:"Add your ISWC code",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.L({id:"Composer",placeholder:"Composer",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.L({id:"lyricist",placeholder:"lyricist",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.L({id:"Arranger",placeholder:"Arranger",validators:{required:null},errorMessages:{required:"Field is required"}})],pl={addressStreet:{element:{host:"material-form-group"}}},cl=function(){function l(l,e){this.data=l,this.formService=e,this.formModel=sl,this.formLayout=pl}return l.prototype.ngOnInit=function(){this.formGroup=this.formService.createFormGroup(this.formModel),this.formGroup.patchValue(this.data)},l.prototype.onBlur=function(l){console.log("Material blur event on: "+l.model.id+": ",l)},l.prototype.onChange=function(l){console.log("Material change event on: "+l.model.id+": ",l)},l.prototype.onFocus=function(l){console.log("Material focus event on: "+l.model.id+": ",l)},l.prototype.onMatEvent=function(l){console.log("Material "+l.type+" event on: "+l.model.id+": ",l)},l}(),fl=n("dx/t"),gl=[new ml.L({id:"title",maxLength:25,placeholder:"Title of work",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.L({id:"altTitle",maxLength:25,placeholder:"Any alternative titles",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.L({id:"Duration",maxLength:50,placeholder:"Duration",validators:{required:null},errorMessages:{required:"Field is required"},additional:{color:"accent"}}),new ml.R({id:"instrumentation",placeholder:"instrumentation",hint:"if a classical or dramatic work",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.R({id:"CAE",placeholder:"CAE/IPI number of any other writers",hint:"CAE/IPI number of any other writers",validators:{required:null},errorMessages:{required:"Field is required"}}),new ml.r({id:"cmo",label:"Please choose all that apply ",group:[new ml.s({id:"prs",label:"PRS",value:!0}),new ml.s({id:"mcps",label:"MCPS",value:!1}),new ml.s({id:"ppl",label:"PPL",value:!1})]})],hl={addressStreet:{element:{host:"material-form-group"}}},bl=function(){function l(l,e){this.data=l,this.formService=e,this.formModel=gl,this.formLayout=hl}return l.prototype.ngOnInit=function(){this.formGroup=this.formService.createFormGroup(this.formModel),this.formGroup.patchValue(this.data)},l.prototype.onBlur=function(l){console.log("Material blur event on: "+l.model.id+": ",l)},l.prototype.onChange=function(l){console.log("Material change event on: "+l.model.id+": ",l)},l.prototype.onFocus=function(l){console.log("Material focus event on: "+l.model.id+": ",l)},l.prototype.onMatEvent=function(l){console.log("Material "+l.type+" event on: "+l.model.id+": ",l)},l}(),vl=function(){function l(l,e,n,a){this.testData=l,this.pageTitle=e,this.dialog=n,this.route=a,this.routeData=this.route.snapshot.data}return l.prototype.ngOnInit=function(){var l=this;this.pageTitle.setTitle(this.routeData.pageTitle),this.entityTypes$=this.testData.listEntityTypes(),this.entityList$=(new rl.a).pipe(Object(il.a)(function(e){return l.testData.listEntities(e)})),this.selectedEntity$=(new rl.a).pipe(Object(il.a)(function(e){return l.testData.getEntity(l.selectedType,e)})),this.listAll$=(new rl.a).pipe(Object(il.a)(function(e){return l.testData.listAll(e)})),this.listAll()},l.prototype.countryCellRenderer=function(l){return"<img border='0' width='15' height='10' style='margin-bottom: 2px' src='https://www.ag-grid.com/images/flags/gb.png'> "+l.value},l.prototype.editBtnCellRenderer=function(l){return'<button class="mat-button mat-raised-button"><span class="mat-button-wrapper">Edit</span><div class="mat-button-ripple mat-ripple"></div><div class="mat-button-focus-overlay"></div></button>'},l.prototype.changeEntityType=function(l){this.selectedType=l,this.entityList$.next(l)},l.prototype.changeEntity=function(l){this.selectedEntity$.next(l)},l.prototype.onCellClicked=function(l){"Actions"===l.colDef.headerName&&this.openDialog(l.data)},l.prototype.openDialog=function(l){this.dialog.open(cl,{data:l,width:"80%",panelClass:"formFieldWidth380"}).afterClosed().subscribe(function(l){console.log("The dialog was closed")})},l.prototype.openAddNewDialog=function(l){this.dialog.open(bl,{data:"ev",width:"80%",panelClass:"formFieldWidth380"}).afterClosed().subscribe(function(l){console.log("The dialog was closed")})},l.prototype.listAll=function(){var l=this;this.testData.listAll("music-work").pipe(Object(dl.a)(function(){return l.showSpinner=!0})).subscribe(function(e){l.allItems=e,l.showSpinner=!1})},l}(),yl=n("o3x0"),wl=n("ZYCi"),Cl=a["\u0275crt"]({encapsulation:0,styles:["dynamic-material-form[fxLayoutAlign][_ngcontent-%COMP%] { padding:10px; padding-left: 25px;}"],data:{}});function Rl(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,9,"mat-toolbar",[["class","mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,z.b,z.a)),a["\u0275did"](1,4243456,null,1,V.a,[a.ElementRef,B.a,Z.d],null,null),a["\u0275qud"](603979776,1,{_toolbarRows:1}),(l()(),a["\u0275eld"](3,0,null,0,6,"span",[],null,null,null,null,null)),(l()(),a["\u0275eld"](4,0,null,null,3,"button",[["mat-button",""],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,e,n){var a=!0;return"click"===e&&(a=!1!==l.component.openAddNewDialog()&&a),a},X.d,X.b)),a["\u0275did"](5,180224,null,0,Y.b,[a.ElementRef,H.h,[2,J.a]],null,null),(l()(),a["\u0275ted"](6,0,["\n","\n"])),a["\u0275pid"](131072,K.i,[K.j,a.ChangeDetectorRef]),(l()(),a["\u0275eld"](8,0,null,null,1,"span",[["appHelp","help.1"],["class","ml-3"]],null,null,null,null,null)),a["\u0275did"](9,16384,null,0,U.a,[a.Renderer2,a.ElementRef,Q.a,$.a],{helpRef:[0,"helpRef"]},null),(l()(),a["\u0275eld"](10,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["Your Works"])),(l()(),a["\u0275eld"](12,0,null,null,32,"div",[["class","table-responsive-lg"]],null,null,null,null,null)),(l()(),a["\u0275eld"](13,16777216,null,null,31,"ag-grid-angular",[["class","ag-theme-material"],["style","width: 100%; height: 700px;"]],null,[[null,"cellClicked"]],function(l,e,n){var a=!0;return"cellClicked"===e&&(a=!1!==l.component.onCellClicked(n)&&a),a},ll.b,ll.a)),a["\u0275prd"](512,null,el.AngularFrameworkOverrides,el.AngularFrameworkOverrides,[a.NgZone]),a["\u0275prd"](512,null,nl.AngularFrameworkComponentWrapper,nl.AngularFrameworkComponentWrapper,[]),a["\u0275did"](16,4898816,[["agGrid",4]],1,al.AgGridAngular,[a.ElementRef,a.ViewContainerRef,el.AngularFrameworkOverrides,nl.AngularFrameworkComponentWrapper,a.ComponentFactoryResolver],{gridOptions:[0,"gridOptions"],rowData:[1,"rowData"]},{cellClicked:"cellClicked"}),a["\u0275qud"](603979776,2,{columns:1}),(l()(),a["\u0275eld"](18,0,null,null,8,"ag-grid-column",[["headerName","Work"]],null,null,null,tl.b,tl.a)),a["\u0275did"](19,49152,[[3,4],[2,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"]},null),a["\u0275qud"](603979776,3,{childColumns:1}),(l()(),a["\u0275eld"](21,0,null,null,2,"ag-grid-column",[["headerName","Actions"]],null,null,null,tl.b,tl.a)),a["\u0275did"](22,49152,[[4,4],[3,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],cellRenderer:[1,"cellRenderer"],pinned:[2,"pinned"],width:[3,"width"]},null),a["\u0275qud"](603979776,4,{childColumns:1}),(l()(),a["\u0275eld"](24,0,null,null,2,"ag-grid-column",[["field","Name"],["headerName","Name"]],null,null,null,tl.b,tl.a)),a["\u0275did"](25,49152,[[5,4],[3,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],field:[1,"field"],filter:[2,"filter"],pinned:[3,"pinned"],width:[4,"width"],sortable:[5,"sortable"],resizable:[6,"resizable"]},null),a["\u0275qud"](603979776,5,{childColumns:1}),(l()(),a["\u0275eld"](27,0,null,null,17,"ag-grid-column",[["headerName","Details"]],null,null,null,tl.b,tl.a)),a["\u0275did"](28,49152,[[6,4],[2,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"]},null),a["\u0275qud"](603979776,6,{childColumns:1}),(l()(),a["\u0275eld"](30,0,null,null,2,"ag-grid-column",[["field","Type"],["headerName","Type"]],null,null,null,tl.b,tl.a)),a["\u0275did"](31,49152,[[7,4],[6,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],field:[1,"field"],filter:[2,"filter"],width:[3,"width"],sortable:[4,"sortable"],resizable:[5,"resizable"]},null),a["\u0275qud"](603979776,7,{childColumns:1}),(l()(),a["\u0275eld"](33,0,null,null,2,"ag-grid-column",[["field","ISWC"],["headerName","ISWC"]],null,null,null,tl.b,tl.a)),a["\u0275did"](34,49152,[[8,4],[6,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],field:[1,"field"],filter:[2,"filter"],width:[3,"width"],sortable:[4,"sortable"],resizable:[5,"resizable"]},null),a["\u0275qud"](603979776,8,{childColumns:1}),(l()(),a["\u0275eld"](36,0,null,null,2,"ag-grid-column",[["field","Composer"],["headerName","Composer"]],null,null,null,tl.b,tl.a)),a["\u0275did"](37,49152,[[9,4],[6,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],field:[1,"field"],filter:[2,"filter"],width:[3,"width"],sortable:[4,"sortable"],resizable:[5,"resizable"]},null),a["\u0275qud"](603979776,9,{childColumns:1}),(l()(),a["\u0275eld"](39,0,null,null,2,"ag-grid-column",[["field","lyricist"],["headerName","Lyricist"]],null,null,null,tl.b,tl.a)),a["\u0275did"](40,49152,[[10,4],[6,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],field:[1,"field"],filter:[2,"filter"],width:[3,"width"],sortable:[4,"sortable"],resizable:[5,"resizable"]},null),a["\u0275qud"](603979776,10,{childColumns:1}),(l()(),a["\u0275eld"](42,0,null,null,2,"ag-grid-column",[["field","Arranger"],["headerName","Arranger"]],null,null,null,tl.b,tl.a)),a["\u0275did"](43,49152,[[11,4],[6,4]],1,ol.AgGridColumn,[],{headerName:[0,"headerName"],field:[1,"field"],filter:[2,"filter"],width:[3,"width"],sortable:[4,"sortable"],resizable:[5,"resizable"]},null),a["\u0275qud"](603979776,11,{childColumns:1}),(l()(),a["\u0275eld"](45,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["you can amend the registration details of any works where you are a rightsholder. "]))],function(l,e){var n=e.component;l(e,9,0,"help.1"),l(e,16,0,n.gridOptions,n.allItems),l(e,19,0,"Work"),l(e,22,0,"Actions",n.editBtnCellRenderer,!0,100),l(e,25,0,"Name","Name",!0,!0,165,!0,!0),l(e,28,0,"Details"),l(e,31,0,"Type","Type",!0,150,!0,!0),l(e,34,0,"ISWC","ISWC",!0,100,!0,!0),l(e,37,0,"Composer","Composer",!0,100,!0,!0),l(e,40,0,"Lyricist","lyricist",!0,150,!0,!0),l(e,43,0,"Arranger","Arranger",!0,200,!0,!0)},function(l,e){l(e,0,0,a["\u0275nov"](e,1)._toolbarRows.length>0,0===a["\u0275nov"](e,1)._toolbarRows.length),l(e,4,0,a["\u0275nov"](e,5).disabled||null,"NoopAnimations"===a["\u0275nov"](e,5)._animationMode),l(e,6,0,a["\u0275unv"](e,6,0,a["\u0275nov"](e,7).transform("works.registerNew")))})}function Al(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-index",[],null,null,null,Rl,Cl)),a["\u0275did"](1,114688,null,0,vl,[fl.a,ul.a,yl.e,wl.a],null,null)],function(l,e){l(e,1,0)},null)}var Ml=a["\u0275ccf"]("app-index",vl,Al,{},{},[]),Ll=n("lzlj"),kl=n("FVSy"),xl=n("gIcY"),Nl=n("iMTk"),ql=n("21Lb"),El=n("OzfB"),Fl=n("Fzqc"),Gl=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function _l(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,23,"div",[],null,null,null,null,null)),(l()(),a["\u0275eld"](1,0,null,null,12,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,Ll.d,Ll.a)),a["\u0275did"](2,49152,null,0,kl.a,[[2,J.a]],null,null),(l()(),a["\u0275eld"](3,0,null,0,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,e,n){var t=!0;return"submit"===e&&(t=!1!==a["\u0275nov"](l,5).onSubmit(n)&&t),"reset"===e&&(t=!1!==a["\u0275nov"](l,5).onReset()&&t),t},null,null)),a["\u0275did"](4,16384,null,0,xl["\u0275angular_packages_forms_forms_z"],[],null,null),a["\u0275did"](5,540672,null,0,xl.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),a["\u0275prd"](2048,null,xl.ControlContainer,null,[xl.FormGroupDirective]),a["\u0275did"](7,16384,null,0,xl.NgControlStatusGroup,[[4,xl.ControlContainer]],null,null),(l()(),a["\u0275eld"](8,0,null,null,5,"dynamic-material-form",[["fxLayout","row wrap"],["fxLayoutAlign","start start"],["fxLayoutGap","40px"]],null,[[null,"blur"],[null,"change"],[null,"focus"],[null,"matEvent"]],function(l,e,n){var a=!0,t=l.component;return"blur"===e&&(a=!1!==t.onBlur(n)&&a),"change"===e&&(a=!1!==t.onChange(n)&&a),"focus"===e&&(a=!1!==t.onFocus(n)&&a),"matEvent"===e&&(a=!1!==t.onMatEvent(n)&&a),a},u.n,u.l)),a["\u0275did"](9,49152,null,1,Nl.f,[ml.G,ml.E],{formGroup:[0,"formGroup"],formModel:[1,"formModel"],formLayout:[2,"formLayout"]},{blur:"blur",change:"change",focus:"focus",customEvent:"matEvent"}),a["\u0275qud"](603979776,1,{templates:1}),a["\u0275did"](11,671744,null,0,ql.b,[a.ElementRef,El.i,[2,ql.i],El.f],{fxLayout:[0,"fxLayout"]},null),a["\u0275did"](12,1720320,null,0,ql.c,[a.ElementRef,a.NgZone,Fl.b,El.i,[2,ql.h],El.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),a["\u0275did"](13,671744,null,0,ql.a,[a.ElementRef,El.i,[2,ql.g],El.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),a["\u0275eld"](14,0,null,null,9,"div",[["class","align-right mat-dialog-actions"],["mat-dialog-actions",""]],null,null,null,null,null)),a["\u0275did"](15,16384,null,0,yl.f,[],null,null),(l()(),a["\u0275eld"](16,0,null,null,3,"button",[["mat-button",""],["mat-dialog-close","cancel"],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-label",0]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a["\u0275nov"](l,18).dialogRef.close(a["\u0275nov"](l,18).dialogResult)&&t),t},X.d,X.b)),a["\u0275did"](17,180224,null,0,Y.b,[a.ElementRef,H.h,[2,J.a]],null,null),a["\u0275did"](18,606208,null,0,yl.g,[[2,yl.l],a.ElementRef,yl.e],{dialogResult:[0,"dialogResult"]},null),(l()(),a["\u0275ted"](-1,0,["Cancel"])),(l()(),a["\u0275eld"](20,0,null,null,3,"button",[["cdkFocusInitial",""],["mat-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-label",0]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a["\u0275nov"](l,22).dialogRef.close(a["\u0275nov"](l,22).dialogResult)&&t),t},X.d,X.b)),a["\u0275did"](21,180224,null,0,Y.b,[a.ElementRef,H.h,[2,J.a]],{disabled:[0,"disabled"]},null),a["\u0275did"](22,606208,null,0,yl.g,[[2,yl.l],a.ElementRef,yl.e],{dialogResult:[0,"dialogResult"]},null),(l()(),a["\u0275ted"](-1,0,["Save"]))],function(l,e){var n=e.component;l(e,5,0,n.formGroup),l(e,9,0,n.formGroup,n.formModel,n.formLayout),l(e,11,0,"row wrap"),l(e,12,0,"40px"),l(e,13,0,"start start"),l(e,18,0,"cancel"),l(e,21,0,n.formGroup.invalid),l(e,22,0,n.data.Name)},function(l,e){l(e,1,0,"NoopAnimations"===a["\u0275nov"](e,2)._animationMode),l(e,3,0,a["\u0275nov"](e,7).ngClassUntouched,a["\u0275nov"](e,7).ngClassTouched,a["\u0275nov"](e,7).ngClassPristine,a["\u0275nov"](e,7).ngClassDirty,a["\u0275nov"](e,7).ngClassValid,a["\u0275nov"](e,7).ngClassInvalid,a["\u0275nov"](e,7).ngClassPending),l(e,16,0,a["\u0275nov"](e,17).disabled||null,"NoopAnimations"===a["\u0275nov"](e,17)._animationMode,a["\u0275nov"](e,18).ariaLabel||null),l(e,20,0,a["\u0275nov"](e,21).disabled||null,"NoopAnimations"===a["\u0275nov"](e,21)._animationMode,a["\u0275nov"](e,22).ariaLabel||null)})}function Ol(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-edit",[],null,null,null,_l,Gl)),a["\u0275did"](1,114688,null,0,cl,[yl.a,ml.G],null,null)],function(l,e){l(e,1,0)},null)}var Sl=a["\u0275ccf"]("app-edit",cl,Ol,{},{},[]),Il=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),Dl=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Tl(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" detail works!\n"]))],null,null)}function jl(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-detail",[],null,null,null,Tl,Dl)),a["\u0275did"](1,114688,null,0,Il,[],null,null)],function(l,e){l(e,1,0)},null)}var Pl=a["\u0275ccf"]("app-detail",Il,jl,{},{},[]),Wl=n("xYTU"),zl=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Vl(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,27,"div",[],null,null,null,null,null)),(l()(),a["\u0275eld"](1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,[" As a writer or composer, you can register your own works and amend the details at any time. However, if you have a publisher, they will usually manage any registration and amendments on your behalf.\n"])),(l()(),a["\u0275eld"](3,0,null,null,12,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,Ll.d,Ll.a)),a["\u0275did"](4,49152,null,0,kl.a,[[2,J.a]],null,null),(l()(),a["\u0275eld"](5,0,null,0,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,e,n){var t=!0;return"submit"===e&&(t=!1!==a["\u0275nov"](l,7).onSubmit(n)&&t),"reset"===e&&(t=!1!==a["\u0275nov"](l,7).onReset()&&t),t},null,null)),a["\u0275did"](6,16384,null,0,xl["\u0275angular_packages_forms_forms_z"],[],null,null),a["\u0275did"](7,540672,null,0,xl.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),a["\u0275prd"](2048,null,xl.ControlContainer,null,[xl.FormGroupDirective]),a["\u0275did"](9,16384,null,0,xl.NgControlStatusGroup,[[4,xl.ControlContainer]],null,null),(l()(),a["\u0275eld"](10,0,null,null,5,"dynamic-material-form",[["fxLayout","row wrap"],["fxLayoutAlign","start start"],["fxLayoutGap","40px"]],null,[[null,"blur"],[null,"change"],[null,"focus"],[null,"matEvent"]],function(l,e,n){var a=!0,t=l.component;return"blur"===e&&(a=!1!==t.onBlur(n)&&a),"change"===e&&(a=!1!==t.onChange(n)&&a),"focus"===e&&(a=!1!==t.onFocus(n)&&a),"matEvent"===e&&(a=!1!==t.onMatEvent(n)&&a),a},u.n,u.l)),a["\u0275did"](11,49152,null,1,Nl.f,[ml.G,ml.E],{formGroup:[0,"formGroup"],formModel:[1,"formModel"],formLayout:[2,"formLayout"]},{blur:"blur",change:"change",focus:"focus",customEvent:"matEvent"}),a["\u0275qud"](603979776,1,{templates:1}),a["\u0275did"](13,671744,null,0,ql.b,[a.ElementRef,El.i,[2,ql.i],El.f],{fxLayout:[0,"fxLayout"]},null),a["\u0275did"](14,1720320,null,0,ql.c,[a.ElementRef,a.NgZone,Fl.b,El.i,[2,ql.h],El.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),a["\u0275did"](15,671744,null,0,ql.a,[a.ElementRef,El.i,[2,ql.g],El.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),a["\u0275eld"](16,0,null,null,9,"div",[["class","align-right mat-dialog-actions"],["mat-dialog-actions",""]],null,null,null,null,null)),a["\u0275did"](17,16384,null,0,yl.f,[],null,null),(l()(),a["\u0275eld"](18,0,null,null,3,"button",[["mat-button",""],["mat-dialog-close","cancel"],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-label",0]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a["\u0275nov"](l,20).dialogRef.close(a["\u0275nov"](l,20).dialogResult)&&t),t},X.d,X.b)),a["\u0275did"](19,180224,null,0,Y.b,[a.ElementRef,H.h,[2,J.a]],null,null),a["\u0275did"](20,606208,null,0,yl.g,[[2,yl.l],a.ElementRef,yl.e],{dialogResult:[0,"dialogResult"]},null),(l()(),a["\u0275ted"](-1,0,["Cancel"])),(l()(),a["\u0275eld"](22,0,null,null,3,"button",[["cdkFocusInitial",""],["mat-button",""],["type","button"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null],[1,"aria-label",0]],[[null,"click"]],function(l,e,n){var t=!0;return"click"===e&&(t=!1!==a["\u0275nov"](l,24).dialogRef.close(a["\u0275nov"](l,24).dialogResult)&&t),t},X.d,X.b)),a["\u0275did"](23,180224,null,0,Y.b,[a.ElementRef,H.h,[2,J.a]],{disabled:[0,"disabled"]},null),a["\u0275did"](24,606208,null,0,yl.g,[[2,yl.l],a.ElementRef,yl.e],{dialogResult:[0,"dialogResult"]},null),(l()(),a["\u0275ted"](-1,0,["Save"])),(l()(),a["\u0275eld"](26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a["\u0275ted"](-1,null,["You\u2019ll be given a reference when you submit your work details, followed by a unique tune code for each work."]))],function(l,e){var n=e.component;l(e,7,0,n.formGroup),l(e,11,0,n.formGroup,n.formModel,n.formLayout),l(e,13,0,"row wrap"),l(e,14,0,"40px"),l(e,15,0,"start start"),l(e,20,0,"cancel"),l(e,23,0,n.formGroup.invalid),l(e,24,0,n.data.Name)},function(l,e){l(e,3,0,"NoopAnimations"===a["\u0275nov"](e,4)._animationMode),l(e,5,0,a["\u0275nov"](e,9).ngClassUntouched,a["\u0275nov"](e,9).ngClassTouched,a["\u0275nov"](e,9).ngClassPristine,a["\u0275nov"](e,9).ngClassDirty,a["\u0275nov"](e,9).ngClassValid,a["\u0275nov"](e,9).ngClassInvalid,a["\u0275nov"](e,9).ngClassPending),l(e,18,0,a["\u0275nov"](e,19).disabled||null,"NoopAnimations"===a["\u0275nov"](e,19)._animationMode,a["\u0275nov"](e,20).ariaLabel||null),l(e,22,0,a["\u0275nov"](e,23).disabled||null,"NoopAnimations"===a["\u0275nov"](e,23)._animationMode,a["\u0275nov"](e,24).ariaLabel||null)})}function Bl(l){return a["\u0275vid"](0,[(l()(),a["\u0275eld"](0,0,null,null,1,"app-register",[],null,null,null,Vl,zl)),a["\u0275did"](1,114688,null,0,bl,[yl.a,ml.G],null,null)],function(l,e){l(e,1,0)},null)}var Zl=a["\u0275ccf"]("app-register",bl,Bl,{},{},[]),Xl=n("t/Na"),Yl=n("eDkP"),Hl=n("mVsa"),Jl=n("M2Lx"),Kl=n("Wf4p"),Ul=n("uGex"),Ql=n("ZYjt"),$l=n("v9Dh"),le=n("OBdK"),ee=n("4tE/"),ne=n("jQLj"),ae=n("vZwA"),te=n("SlDQ"),oe=n("wcG+"),ie=n("wmQ5"),de=n("4c35"),re=n("qAlS"),ue=n("u7R8"),me=n("de3e"),se=n("seP3"),pe=n("SMsm"),ce=n("/VYK"),fe=n("b716"),ge=n("Blfk"),he=n("9It4"),be=n("w+lc"),ve=n("LC5p"),ye=n("0/Q6"),we=n("J12g"),Ce=n("SXLW"),Re=n("hUWP"),Ae=n("3pJQ"),Me=n("V9q+"),Le=n("/dO6"),ke=n("kWGw"),xe=n("UVXo"),Ne=n("2wDS"),qe=n("3H1x"),Ee=n("1MUZ"),Fe=n("1cSh"),Ge=n("I6xL"),_e=n("r7Sy"),Oe=n("L08Y"),Se=n("pcod"),Ie=n("G59w"),De=n("Jt1k"),Te=n("9OZt"),je=n("/3kK"),Pe=n("3Aes"),We=n("M5iK"),ze=n("xic9"),Ve=n("LZPl"),Be=n("usaa"),Ze=n("xFT9"),Xe=n("+qwN"),Ye=n("in0l"),He=n("bCLZ"),Je=n("9vck"),Ke=n("cXBl"),Ue=n("8cq0"),Qe=n("ZSpP"),$e=n("xKBX"),ln=n("lDDS"),en=n("JFDI"),nn=n("mPam"),an=n("10iu"),tn=n("xcyh"),on=n("tfgC"),dn=n("i2L+"),rn={breadcrumb:""},un=function(){return function(){}}(),mn=n("r43C"),sn=n("Nsh5"),pn=n("y4qS"),cn=n("BHnd"),fn=n("Z+uX"),gn=n("vARd"),hn=n("YhbO"),bn=n("jlZm"),vn=n("Lwpp"),yn=n("6Wmm"),wn=n("kJ4b"),Cn=n("YSh2");n.d(e,"MusicWorksModuleNgFactory",function(){return Rn});var Rn=a["\u0275cmf"](t,[],function(l){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,i.a,d.a,r.b,r.a,u.a,u.b,u.c,u.d,u.e,u.f,u.g,u.h,u.i,u.j,u.k,m.g,m.h,s.a,p.a,c.a,f.a,g.a,h.a,b.a,v.a,y.a,w.a,C.a,R.a,A.a,M.a,L.a,k.a,x.a,N.a,q.a,E.a,F.a,G.a,_.a,O.a,S.a,I.a,D.a,T.a,j.a,P.a,W.a,Ml,Sl,Pl,Wl.a,Wl.b,Zl]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,Z.p,Z.o,[a.LOCALE_ID,[2,Z.H]]),a["\u0275mpd"](4608,Xl.k,Xl.q,[Z.d,a.PLATFORM_ID,Xl.o]),a["\u0275mpd"](4608,Xl.r,Xl.r,[Xl.k,Xl.p]),a["\u0275mpd"](5120,Xl.a,function(l){return[l]},[Xl.r]),a["\u0275mpd"](4608,Xl.n,Xl.n,[]),a["\u0275mpd"](6144,Xl.l,null,[Xl.n]),a["\u0275mpd"](4608,Xl.j,Xl.j,[Xl.l]),a["\u0275mpd"](6144,Xl.b,null,[Xl.j]),a["\u0275mpd"](4608,Xl.g,Xl.m,[Xl.b,a.Injector]),a["\u0275mpd"](4608,Xl.c,Xl.c,[Xl.g]),a["\u0275mpd"](4608,xl.FormBuilder,xl.FormBuilder,[]),a["\u0275mpd"](4608,xl["\u0275angular_packages_forms_forms_o"],xl["\u0275angular_packages_forms_forms_o"],[]),a["\u0275mpd"](4608,Yl.c,Yl.c,[Yl.i,Yl.e,a.ComponentFactoryResolver,Yl.h,Yl.f,a.Injector,a.NgZone,Z.d,Fl.b,[2,Z.i]]),a["\u0275mpd"](5120,Yl.j,Yl.k,[Yl.c]),a["\u0275mpd"](5120,Hl.a,Hl.d,[Yl.c]),a["\u0275mpd"](4608,Jl.c,Jl.c,[]),a["\u0275mpd"](4608,Kl.b,Kl.b,[]),a["\u0275mpd"](5120,Ul.a,Ul.b,[Yl.c]),a["\u0275mpd"](4608,Ql.HAMMER_GESTURE_CONFIG,Kl.c,[[2,Kl.g],[2,Kl.l]]),a["\u0275mpd"](5120,yl.c,yl.d,[Yl.c]),a["\u0275mpd"](135680,yl.e,yl.e,[Yl.c,a.Injector,[2,Z.i],[2,yl.b],yl.c,[3,yl.e],Yl.e]),a["\u0275mpd"](5120,$l.b,$l.c,[Yl.c]),a["\u0275mpd"](135680,H.h,H.h,[a.NgZone,B.a]),a["\u0275mpd"](4608,le.f,le.f,[a.TemplateRef]),a["\u0275mpd"](5120,a.APP_BOOTSTRAP_LISTENER,function(l,e){return[El.j(l,e)]},[Z.d,a.PLATFORM_ID]),a["\u0275mpd"](5120,ee.b,ee.c,[Yl.c]),a["\u0275mpd"](4608,ne.i,ne.i,[]),a["\u0275mpd"](5120,ne.a,ne.b,[Yl.c]),a["\u0275mpd"](4608,ae.i,ae.i,[ae.f,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](4608,Kl.a,Kl.x,[[2,Kl.f],B.a]),a["\u0275mpd"](4608,Z.e,Z.e,[a.LOCALE_ID]),a["\u0275mpd"](4608,Z.k,Z.k,[]),a["\u0275mpd"](4608,Q.a,Q.a,[Xl.c,te.a,oe.a,wl.l,K.j]),a["\u0275mpd"](5120,ie.b,ie.a,[[3,ie.b]]),a["\u0275mpd"](1073742336,Z.c,Z.c,[]),a["\u0275mpd"](1073742336,Xl.e,Xl.e,[]),a["\u0275mpd"](1073742336,Xl.d,Xl.d,[]),a["\u0275mpd"](1073742336,xl["\u0275angular_packages_forms_forms_d"],xl["\u0275angular_packages_forms_forms_d"],[]),a["\u0275mpd"](1073742336,xl.ReactiveFormsModule,xl.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,xl.FormsModule,xl.FormsModule,[]),a["\u0275mpd"](1073742336,wl.p,wl.p,[[2,wl.u],[2,wl.l]]),a["\u0275mpd"](1073742336,Fl.a,Fl.a,[]),a["\u0275mpd"](1073742336,Kl.l,Kl.l,[[2,Kl.d],[2,Ql.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,kl.e,kl.e,[]),a["\u0275mpd"](1073742336,B.b,B.b,[]),a["\u0275mpd"](1073742336,Kl.w,Kl.w,[]),a["\u0275mpd"](1073742336,de.f,de.f,[]),a["\u0275mpd"](1073742336,re.g,re.g,[]),a["\u0275mpd"](1073742336,Yl.g,Yl.g,[]),a["\u0275mpd"](1073742336,Hl.c,Hl.c,[]),a["\u0275mpd"](1073742336,Hl.b,Hl.b,[]),a["\u0275mpd"](1073742336,ue.a,ue.a,[]),a["\u0275mpd"](1073742336,Y.c,Y.c,[]),a["\u0275mpd"](1073742336,Jl.d,Jl.d,[]),a["\u0275mpd"](1073742336,me.d,me.d,[]),a["\u0275mpd"](1073742336,me.c,me.c,[]),a["\u0275mpd"](1073742336,se.e,se.e,[]),a["\u0275mpd"](1073742336,pe.c,pe.c,[]),a["\u0275mpd"](1073742336,ce.c,ce.c,[]),a["\u0275mpd"](1073742336,fe.c,fe.c,[]),a["\u0275mpd"](1073742336,ge.c,ge.c,[]),a["\u0275mpd"](1073742336,he.d,he.d,[]),a["\u0275mpd"](1073742336,Kl.u,Kl.u,[]),a["\u0275mpd"](1073742336,Kl.r,Kl.r,[]),a["\u0275mpd"](1073742336,Ul.d,Ul.d,[]),a["\u0275mpd"](1073742336,be.b,be.b,[]),a["\u0275mpd"](1073742336,yl.k,yl.k,[]),a["\u0275mpd"](1073742336,H.a,H.a,[]),a["\u0275mpd"](1073742336,$l.e,$l.e,[]),a["\u0275mpd"](1073742336,Kl.n,Kl.n,[]),a["\u0275mpd"](1073742336,ve.a,ve.a,[]),a["\u0275mpd"](1073742336,ye.d,ye.d,[]),a["\u0275mpd"](1073742336,le.d,le.d,[]),a["\u0275mpd"](1073742336,we.c,we.c,[]),a["\u0275mpd"](1073742336,Ce.AgGridModule,Ce.AgGridModule,[]),a["\u0275mpd"](1073742336,El.c,El.c,[]),a["\u0275mpd"](1073742336,ql.f,ql.f,[]),a["\u0275mpd"](1073742336,Re.b,Re.b,[]),a["\u0275mpd"](1073742336,Ae.a,Ae.a,[]),a["\u0275mpd"](1073742336,Me.a,Me.a,[[2,El.g],a.PLATFORM_ID]),a["\u0275mpd"](1073742336,ee.e,ee.e,[]),a["\u0275mpd"](1073742336,Le.f,Le.f,[]),a["\u0275mpd"](1073742336,ne.j,ne.j,[]),a["\u0275mpd"](1073742336,ke.d,ke.d,[]),a["\u0275mpd"](1073742336,ke.c,ke.c,[]),a["\u0275mpd"](1073742336,xe.TextMaskModule,xe.TextMaskModule,[]),a["\u0275mpd"](1073742336,ml.J,ml.J,[]),a["\u0275mpd"](1073742336,Nl.a,Nl.a,[]),a["\u0275mpd"](512,ae.f,ae.f,[]),a["\u0275mpd"](1024,ae.a,function(l,e){return[{wrappers:[{name:"form-field",component:Ne.c}]},{types:[{name:"input",component:qe.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:Ee.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Fe.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:Ge.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:_e.a,wrappers:["form-field"]}]},{types:[{name:"select",component:Oe.a,wrappers:["form-field"]}]},{types:[{name:"datepicker",component:Se.b,wrappers:["form-field"]}]},ae.k(l),{validationMessages:[{name:"required",message:Ie.i},{name:"pattern",message:Ie.h},{name:"minlength",message:Ie.f},{name:"maxlength",message:Ie.d},{name:"min",message:Ie.e},{name:"max",message:Ie.b},{name:"passwordMatchValidation",message:Ie.g},{name:"maximumNumValidation",message:Ie.c},{name:"PasswordStrengthValidation",message:Ie.a}],wrappers:[{name:"panel",component:De.a}],types:[{name:"array",component:Te.a},{name:"videoviewer",component:je.a},{name:"thumbnailviewer",component:Pe.a},{name:"visibility",component:We.a},{name:"playlist",component:ze.a},{name:"tags",component:Ve.a},{name:"countries",component:Be.a},{name:"image",component:Ze.a},{name:"audio",component:Xe.a},{name:"remote-image",component:Ye.a},{name:"blocks",component:He.a},{name:"money",component:Je.a,defaultOptions:{expressionProperties:{},defaultValue:5903,templateOptions:{placeholder:"hello",disabled:!1}}},{name:"percentage",component:Ke.a,defaultOptions:{expressionProperties:{},defaultValue:0,templateOptions:{placeholder:"hello",disabled:!1}}},{name:"typeahead",component:Ue.a},{name:"number",extends:"input",defaultOptions:{templateOptions:{type:"number"}}},{name:"date",extends:"input",defaultOptions:{templateOptions:{type:"date"}}},{name:"integer",extends:"input"},{name:"password",extends:"input",defaultOptions:{templateOptions:{type:"password"}}},{name:"string",extends:"input"},{name:"object",component:Qe.a},{name:"boolean",extends:"checkbox"},{name:"enum",extends:"select"},{name:"k-textarea",component:$e.a},{name:"multiselect",component:ln.a,defaultOptions:{templateOptions:{multiple:!0,placeholder:"Select Option",options:[]}}},{name:"k-select",component:ln.a,defaultOptions:{wrappers:["panel"],templateOptions:{multiple:!1,placeholder:"Select Option",options:[]}}}],validators:[{name:"maximumNumValidation",validation:en.b},{name:"passwordMatchValidation",validation:en.c},{name:"PasswordStrengthValidation",validation:en.a}]},ae.k(e),{}]},[ae.f,ae.f]),a["\u0275mpd"](1073742336,ae.j,ae.j,[ae.f,[2,ae.a]]),a["\u0275mpd"](1073742336,nn.c,nn.c,[]),a["\u0275mpd"](1073742336,Ne.b,Ne.b,[]),a["\u0275mpd"](1073742336,qe.b,qe.b,[]),a["\u0275mpd"](1073742336,Ee.b,Ee.b,[]),a["\u0275mpd"](1073742336,an.a,an.a,[]),a["\u0275mpd"](1073742336,Fe.b,Fe.b,[]),a["\u0275mpd"](1073742336,Ge.b,Ge.b,[]),a["\u0275mpd"](1073742336,_e.b,_e.b,[]),a["\u0275mpd"](1073742336,Oe.b,Oe.b,[]),a["\u0275mpd"](1073742336,tn.a,tn.a,[]),a["\u0275mpd"](1073742336,Se.a,Se.a,[]),a["\u0275mpd"](1073742336,Kl.y,Kl.y,[]),a["\u0275mpd"](1073742336,Kl.o,Kl.o,[]),a["\u0275mpd"](1073742336,on.a,on.a,[]),a["\u0275mpd"](1073742336,K.g,K.g,[]),a["\u0275mpd"](1073742336,dn.a,dn.a,[]),a["\u0275mpd"](1073742336,un,un,[]),a["\u0275mpd"](1073742336,mn.a,mn.a,[]),a["\u0275mpd"](1073742336,sn.h,sn.h,[]),a["\u0275mpd"](1073742336,pn.p,pn.p,[]),a["\u0275mpd"](1073742336,cn.l,cn.l,[]),a["\u0275mpd"](1073742336,V.b,V.b,[]),a["\u0275mpd"](1073742336,fn.c,fn.c,[]),a["\u0275mpd"](1073742336,gn.e,gn.e,[]),a["\u0275mpd"](1073742336,hn.c,hn.c,[]),a["\u0275mpd"](1073742336,bn.d,bn.d,[]),a["\u0275mpd"](1073742336,vn.e,vn.e,[]),a["\u0275mpd"](1073742336,ie.c,ie.c,[]),a["\u0275mpd"](1073742336,yn.b,yn.b,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](256,Xl.o,"XSRF-TOKEN",[]),a["\u0275mpd"](256,Xl.p,"X-XSRF-TOKEN",[]),a["\u0275mpd"](256,Le.a,{separatorKeyCodes:[Cn.f]},[]),a["\u0275mpd"](256,nn.d,nn.e,[]),a["\u0275mpd"](256,Kl.e,Kl.i,[]),a["\u0275mpd"](1024,xl.NG_VALIDATORS,function(){return[dn.c,dn.d]},[]),a["\u0275mpd"](256,ml.a,dn.e,[]),a["\u0275mpd"](1024,wl.j,function(){return[[{path:"",component:vl,data:rn},{path:"edit/:id",component:cl},{path:"detail/:id",component:Il}]]},[])])})}}]);