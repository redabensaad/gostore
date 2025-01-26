"use strict";(self.webpackChunkgostore=self.webpackChunkgostore||[]).push([[964],{2964:(Q,g,r)=>{r.r(g),r.d(g,{PageCategoryComponent:()=>D});var e=r(7705),p=r(177),d=r(1780),C=r(345),c=r(8141),m=r(6697),f=r(980),_=r(8633),P=r(1025),l=r(2986),u=r(5597);function y(s,a){if(1&s){const t=e.RV6();e.j41(0,"li")(1,"label",6),e.bIt("nzCheckedChange",function(n){const M=e.eBV(t).$implicit;return e.Njj(M.checked=n)})("nzCheckedChange",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onCheckedChange())}),e.EFF(2),e.k0s()()}if(2&s){const t=a.$implicit;e.R7$(1),e.Y8G("nzChecked",t.checked),e.R7$(1),e.SpI(" ",t.name," ")}}let G=(()=>{class s{constructor(){this.checkedChange=new e.bkB,this.shopService=(0,e.WQX)(u.s),this.cdk=(0,e.WQX)(e.gRc)}set categoryId(t){this.groups=this.shopService.getShopGroups(t)}set param(t){t&&this._checkParam(t)}_checkParam(t){const o=this.groups.find(n=>n.param==t);o&&(o.checked=!0)}_serialize(){const t=[];return this.groups.forEach(o=>{o.checked&&t.push(o.param)}),t}onCheckedChange(){this.checkedChange.emit(this._serialize())}resetChecked(){this.groups.forEach(t=>{t.checked=!1}),this.cdk.markForCheck()}refreshParam(t){t?this._checkParam(t):this.resetChecked()}static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-shop-group"]],inputs:{categoryId:["category","categoryId"],param:"param"},outputs:{checkedChange:"checkedChange"},standalone:!0,features:[e.aNF],decls:7,vars:1,consts:[[1,"shop-box","my-20"],[1,"header"],[1,"f-16","f-600"],[1,"content"],[1,"l-none","l-10"],[4,"ngFor","ngForOf"],["nz-checkbox","",3,"nzChecked","nzCheckedChange"]],template:function(o,n){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"h3",2),e.EFF(3,"Cat\xe9gories de produits"),e.k0s()(),e.j41(4,"div",3)(5,"ul",4),e.DNE(6,y,3,2,"li",5),e.k0s()()()),2&o&&(e.R7$(6),e.Y8G("ngForOf",n.groups))},dependencies:[p.MD,p.Sq,l.IJ,l.$g],encapsulation:2,changeDetection:0})}return s})();var k=r(6749),v=r(1111),j=r(9571),z=r(3965),B=r(1383),I=r(5400),T=r(1826),h=r(1047);const x=["shopGroup"],F=["shopPrice"],S=["shopBadge"],X=["shopBrand"],E=["shopPagination"];function N(s,a){1&s&&e.nrm(0,"span",17)}function V(s,a){if(1&s&&e.nrm(0,"app-product-item",20),2&s){const t=a.$implicit,o=e.XpG(3);e.Y8G("product",t)("grid",o.grid.id)}}function b(s,a){if(1&s){const t=e.RV6();e.j41(0,"div",21)(1,"p"),e.EFF(2,"Oops. Aucun produit \xe0 afficher selon vos crit\xe8res."),e.k0s(),e.j41(3,"a",22),e.bIt("click",function(){e.eBV(t);const n=e.XpG(3);return e.Njj(n.clearFilter())}),e.EFF(4," Effacer le filtre ! "),e.k0s()()}}function R(s,a){if(1&s&&(e.DNE(0,V,1,2,"app-product-item",18),e.DNE(1,b,5,0,"div",19)),2&s){const t=e.XpG(2);e.Y8G("ngForOf",t.products),e.R7$(1),e.Y8G("ngIf",0==t.products.length)}}function $(s,a){if(1&s){const t=e.RV6();e.j41(0,"app-shop-pagination",23,24),e.bIt("pageChange",function(n){e.eBV(t);const i=e.XpG(2);return e.Njj(i.onPageChange(n))}),e.k0s()}if(2&s){const t=e.XpG(2);e.Y8G("page",t.page)("size",t.size)("total",t.count)}}function Y(s,a){if(1&s){const t=e.RV6();e.qex(0),e.j41(1,"div",2)(2,"div",3)(3,"app-shop-group",4,5),e.bIt("checkedChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onCheckedGroups(n))}),e.k0s(),e.j41(5,"app-shop-price",6,7),e.bIt("pricesChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onPricesChange(n))}),e.k0s(),e.j41(7,"app-shop-badge",8,9),e.bIt("checkedChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onCheckedBadges(n))}),e.k0s(),e.j41(9,"app-shop-brand",10,11),e.bIt("checkedChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onCheckedBrands(n))}),e.k0s()(),e.j41(11,"div",12)(12,"app-shop-order",13),e.bIt("gridChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onGridChange(n))})("sortChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onSortChange(n))})("sizeChange",function(n){e.eBV(t);const i=e.XpG();return e.Njj(i.onSizeChange(n))}),e.k0s(),e.j41(13,"app-products-container"),e.DNE(14,N,1,0,"span",14),e.DNE(15,R,2,2,"ng-template",null,15,e.C5r),e.k0s(),e.DNE(17,$,2,3,"app-shop-pagination",16),e.k0s()(),e.bVm()}if(2&s){const t=a.ngIf,o=e.sdS(16),n=e.XpG();e.R7$(3),e.Y8G("category",t)("param",n.group),e.R7$(6),e.Y8G("category",t),e.R7$(3),e.Y8G("grid",n.grid)("sort",n.sort)("size",n.size),e.R7$(2),e.Y8G("ngIf",n.loading())("ngIfElse",o),e.R7$(3),e.Y8G("ngIf",!n.loading()&&n.count)}}let D=(()=>{class s{constructor(){this.shopService=(0,e.WQX)(u.s),this.scroll=(0,e.WQX)(P.zW),this.route=(0,e.WQX)(d.nX),this.router=(0,e.WQX)(d.Ix),this.title=(0,e.WQX)(C.hE),this.grid=h.V7[2],this.sort=h.Vh[0],this.size=h.qe[0],this._categoryId=(0,e.vPA)(0),this._loading=(0,e.vPA)(!1)}get categoryId(){return this._categoryId.asReadonly()}get loading(){return this._loading.asReadonly()}get products(){return this._response.products}get count(){return this._response.count}get page(){return this._pagination.page}ngOnInit(){this.route.params.pipe((0,c.M)(t=>{this._categoryId.set(0),this._fetchCategory(t.path)})).subscribe()}_fetchCategory(t){if("hot-deals"==t)return void this.router.navigate(["/shop"],{queryParams:{isTrend:!0}});if("top-offers"==t)return void this.router.navigate(["/shop"],{queryParams:{isOffer:!0}});const o=this.shopService.getShopCategory(t);o?(this._categoryId.set(o.id),this.title.setTitle(`${o.name} - Boutique GoStore`),this._loadCategory()):this.router.navigateByUrl("/404")}_loadCategory(){this._initShop(),this._initParams()}_initialPagination(){return{page:1,size:this.size,sort:this.sort.id}}_initialFilter(){return{categories:[this._categoryId()],groups:[],brands:[],badges:[],minPrice:0,maxPrice:600}}_initShop(){this._pagination=this._initialPagination(),this._filter=this._initialFilter()}_initParams(){this.route.queryParams.pipe((0,c.M)(t=>{this._fetchParams(t),this._loadProducts()})).subscribe()}_fetchParams(t){t.group?(this._filter.groups.push(this.group=t.group),this.shopGroup&&this.shopGroup.refreshParam(this.group)):this._filter.groups.length&&(this._filter.groups=[],this.shopGroup&&this.shopGroup.refreshParam(this.group=void 0)),this._resetPagination()}_loadProducts(){this._loading.set(!0),this.shopService.getShopProducts(this._filter,this._pagination).pipe((0,m.s)(1),(0,c.M)(t=>{this._response=t}),(0,f.j)(()=>{this._loading.set(!1)})).subscribe()}_resetPagination(){this._pagination.page>1&&(this._pagination.page=1,this.shopPagination&&this.shopPagination.resetPagination())}_reloadProducts(){this._resetPagination(),this._loadProducts()}onCheckedGroups(t){this._filter.groups=t,this._reloadProducts()}onPricesChange(t){this._filter.minPrice=t.min,this._filter.maxPrice=t.max,this._reloadProducts()}onCheckedBadges(t){this._filter.badges=t,this._reloadProducts()}onCheckedBrands(t){this._filter.brands=t,this._reloadProducts()}onGridChange(t){this.grid=t}onSortChange(t){this._pagination.sort=t.id,this._loadProducts()}onSizeChange(t){this._pagination.size=this.size=t,this._loadProducts()}onPageChange(t){this._pagination.page=t,this._loadProducts(),this.scroll.scrollTo(void 0,300)}clearFilter(){this._filter.groups.length&&this.shopGroup.resetChecked(),this._filter.badges.length&&this.shopBadge.resetChecked(),this._filter.brands.length&&this.shopBrand.resetChecked(),(this._filter.minPrice||600!=this._filter.maxPrice)&&this.shopPrice.resetPrices(),this._filter=this._initialFilter(),this._reloadProducts()}static#e=this.\u0275fac=function(o){return new(o||s)};static#t=this.\u0275cmp=e.VBU({type:s,selectors:[["app-page-category"]],viewQuery:function(o,n){if(1&o&&(e.GBs(x,5),e.GBs(F,5),e.GBs(S,5),e.GBs(X,5),e.GBs(E,5)),2&o){let i;e.mGM(i=e.lsd())&&(n.shopGroup=i.first),e.mGM(i=e.lsd())&&(n.shopPrice=i.first),e.mGM(i=e.lsd())&&(n.shopBadge=i.first),e.mGM(i=e.lsd())&&(n.shopBrand=i.first),e.mGM(i=e.lsd())&&(n.shopPagination=i.first)}},standalone:!0,features:[e.aNF],decls:2,vars:1,consts:[[1,"container"],[4,"ngIf"],[1,"row","py-20"],[1,"col","col-lg-3","hidden-md-down"],[3,"category","param","checkedChange"],["shopGroup",""],[3,"pricesChange"],["shopPrice",""],[3,"checkedChange"],["shopBadge",""],[3,"category","checkedChange"],["shopBrand",""],[1,"col","col-12","col-lg-9"],[3,"grid","sort","size","gridChange","sortChange","sizeChange"],["nz-icon","","nzType","loading","class","spinner-60 m-auto",4,"ngIf","ngIfElse"],["productsTmpl",""],[3,"page","size","total","pageChange",4,"ngIf"],["nz-icon","","nzType","loading",1,"spinner-60","m-auto"],[3,"product","grid",4,"ngFor","ngForOf"],["class","flex1 t-empty m-auto",4,"ngIf"],[3,"product","grid"],[1,"flex1","t-empty","m-auto"],[1,"lien","lien-underline","m-l-10",3,"click"],[3,"page","size","total","pageChange"],["shopPagination",""]],template:function(o,n){1&o&&(e.j41(0,"div",0),e.DNE(1,Y,18,9,"ng-container",1),e.k0s()),2&o&&(e.R7$(1),e.Y8G("ngIf",n.categoryId()))},dependencies:[p.MD,p.Sq,p.bT,_.Y3,_.Dn,G,k.b,v.X,j.B,z.s,B.Y,I.K,T.Z],encapsulation:2,changeDetection:0})}return s})()}}]);