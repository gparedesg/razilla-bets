(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{wNkF:function(t,n,e){"use strict";e.r(n),e.d(n,"AddModule",function(){return h});var o=e("ofXK"),i=e("tyNb"),c=e("fXoL"),s=e("I/3d"),r=e("UbJi"),a=e("3Pt+");function b(t,n){if(1&t&&(c.Rb(0,"label",16),c.xc(1),c.Qb()),2&t){const t=c.dc().$implicit;c.Ab(1),c.yc(t.question)}}function l(t,n){if(1&t&&(c.Rb(0,"option",20),c.xc(1),c.Qb()),2&t){const t=n.$implicit;c.jc("value",t),c.Ab(1),c.yc(t)}}function u(t,n){if(1&t){const t=c.Sb();c.Rb(0,"select",17),c.bc("ngModelChange",function(n){return c.rc(t),c.dc().$implicit.answer=n}),c.Rb(1,"option",18),c.xc(2,"Pick one"),c.Qb(),c.vc(3,l,2,2,"option",19),c.Qb()}if(2&t){const t=c.dc().$implicit;c.jc("ngModel",t.answer),c.Ab(3),c.jc("ngForOf",t.options)}}function d(t,n){if(1&t){const t=c.Sb();c.Rb(0,"input",21),c.bc("ngModelChange",function(n){return c.rc(t),c.dc().$implicit.answer=n}),c.Qb()}if(2&t){const t=c.dc().$implicit;c.jc("ngModel",t.answer)}}function f(t,n){if(1&t&&(c.Rb(0,"div",11),c.vc(1,b,2,1,"label",12),c.Rb(2,"div",13),c.vc(3,u,4,2,"select",14),c.vc(4,d,1,1,"input",15),c.Qb(),c.Qb()),2&t){const t=n.$implicit,e=n.first;c.Ab(1),c.jc("ngIf",!e),c.Ab(2),c.jc("ngIf",t.options),c.Ab(1),c.jc("ngIf",!t.options&&!e)}}const p=[{path:"",component:(()=>{class t{constructor(t,n,e){this.afs=t,this.auth=n,this.router=e,this.questions=[]}ngOnInit(){this.auth.currentUser.then(t=>{this.afs.collection("bets").doc(t.uid).get().subscribe(n=>{n.exists?(this.server=this.afs.collection("bets").doc(t.uid).valueChanges(),this.server.forEach(t=>this.questions=t.bets)):(this.server=this.afs.collection("bets").doc("69A3UONyvVS03vbsxVSE").valueChanges(),this.server.forEach(t=>this.questions=t.questions))})})}update(){this.auth.currentUser.then(t=>{this.afs.collection("bets").doc(t.uid).set({author_uid:t.uid,username:t.displayName,bets:this.questions}).then(t=>this.router.navigate(["main"]))})}}return t.\u0275fac=function(n){return new(n||t)(c.Mb(s.a),c.Mb(r.a),c.Mb(i.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-add"]],decls:14,vars:2,consts:[[1,"main-wrapper","login-body"],[1,"login-wrapper"],[1,"container"],[1,"card"],[1,"card-header"],[1,"float-left"],[1,"float-right","btn","btn-primary",3,"routerLink"],[1,"fa","fa-caret-left"],[1,"card-body"],["class","form-group row",4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-block",3,"click"],[1,"form-group","row"],["class","col-sm-6 col-form-label",4,"ngIf"],[1,"col-sm-6"],["name","answer","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],["name","answer","type","text","class","form-control",3,"ngModel","ngModelChange",4,"ngIf"],[1,"col-sm-6","col-form-label"],["name","answer",1,"form-control",3,"ngModel","ngModelChange"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["name","answer","type","text",1,"form-control",3,"ngModel","ngModelChange"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"div",3),c.Rb(4,"div",4),c.Rb(5,"h3",5),c.xc(6,"Llenar Apuesta"),c.Qb(),c.Rb(7,"button",6),c.Nb(8,"i",7),c.xc(9," Regresar "),c.Qb(),c.Qb(),c.Rb(10,"div",8),c.vc(11,f,5,3,"div",9),c.Rb(12,"button",10),c.bc("click",function(){return n.update()}),c.xc(13,"Actualizar"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.Ab(7),c.jc("routerLink","/main"),c.Ab(4),c.jc("ngForOf",n.questions))},directives:[i.c,o.i,o.j,a.h,a.e,a.f,a.g,a.i,a.a],styles:[""]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[i.d.forChild(p)],i.d]}),t})(),h=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[o.b,g,a.b]]}),t})()}}]);