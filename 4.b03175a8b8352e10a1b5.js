(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{L6id:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){return function(){}}(),u=t("pMnS"),o=t("WE+f"),r=t("aZ8m"),c=t("Xgv5"),s=t("rpEJ"),d=function(){return function(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0}}(),a=function(){var n={UNKNOWN:0,NEXT:1,PREV:2};return n[n.UNKNOWN]="UNKNOWN",n[n.NEXT]="NEXT",n[n.PREV]="PREV",n}(),p=function(){function n(n,l){this.ngZone=l,this.activeSlideChange=new e.EventEmitter(!1),this._slides=new s.a,this.destroyed=!1,Object.assign(this,n)}return Object.defineProperty(n.prototype,"activeSlide",{get:function(){return this._currentActiveSlide},set:function(n){this._slides.length&&n!==this._currentActiveSlide&&this._select(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"interval",{get:function(){return this._interval},set:function(n){this._interval=n,this.restartTimer()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"slides",{get:function(){return this._slides.toArray()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBs4",{get:function(){return!Object(s.e)()},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this.destroyed=!0},n.prototype.addSlide=function(n){this._slides.add(n),1===this._slides.length&&(this._currentActiveSlide=void 0,this.activeSlide=0,this.play())},n.prototype.removeSlide=function(n){var l=this,t=this._slides.indexOf(n);if(this._currentActiveSlide===t){var e=void 0;this._slides.length>1&&(e=this.isLast(t)?this.noWrap?t-1:0:t),this._slides.remove(t),setTimeout(function(){l._select(e)},0)}else{this._slides.remove(t);var i=this.getCurrentSlideIndex();setTimeout(function(){l._currentActiveSlide=i,l.activeSlideChange.emit(l._currentActiveSlide)},0)}},n.prototype.nextSlide=function(n){void 0===n&&(n=!1),this.activeSlide=this.findNextSlideIndex(a.NEXT,n)},n.prototype.previousSlide=function(n){void 0===n&&(n=!1),this.activeSlide=this.findNextSlideIndex(a.PREV,n)},n.prototype.selectSlide=function(n){this.activeSlide=n},n.prototype.play=function(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())},n.prototype.pause=function(){this.noPause||(this.isPlaying=!1,this.resetTimer())},n.prototype.getCurrentSlideIndex=function(){return this._slides.findIndex(function(n){return n.active})},n.prototype.isLast=function(n){return n+1>=this._slides.length},n.prototype.findNextSlideIndex=function(n,l){var t=0;if(l||!this.isLast(this.activeSlide)||n===a.PREV||!this.noWrap){switch(n){case a.NEXT:t=this.isLast(this._currentActiveSlide)?!l&&this.noWrap?this._currentActiveSlide:0:this._currentActiveSlide+1;break;case a.PREV:t=this._currentActiveSlide>0?this._currentActiveSlide-1:!l&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction")}return t}},n.prototype._select=function(n){if(isNaN(n))this.pause();else{var l=this._slides.get(this._currentActiveSlide);l&&(l.active=!1);var t=this._slides.get(n);t&&(this._currentActiveSlide=n,t.active=!0,this.activeSlide=n,this.activeSlideChange.emit(n))}},n.prototype.restartTimer=function(){var n=this;this.resetTimer();var l=+this.interval;!isNaN(l)&&l>0&&(this.currentInterval=this.ngZone.runOutsideAngular(function(){return setInterval(function(){var l=+n.interval;n.ngZone.run(function(){n.isPlaying&&!isNaN(n.interval)&&l>0&&n.slides.length?n.nextSlide():n.pause()})},l)}))},n.prototype.resetTimer=function(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)},n}(),f=function(){function n(n){this.addClass=!0,this.carousel=n}return n.prototype.ngOnInit=function(){this.carousel.addSlide(this)},n.prototype.ngOnDestroy=function(){this.carousel.removeSlide(this)},n}(),v=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[]}},n}(),g=t("Ip0R"),h=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,"li",[],[[2,"active",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.selectSlide(n.context.index)&&e),e},null,null))],null,function(n,l){n(l,0,0,!0===l.context.$implicit.active)})}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ol",[["class","carousel-indicators"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](2,278528,null,0,g.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.slides)},null)}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Previous"]))],null,null)}function y(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"a",[["class","left carousel-control carousel-control-prev"]],[[2,"disabled",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.previousSlide()&&e),e},null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"span",[["aria-hidden","true"],["class","icon-prev carousel-control-prev-icon"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](3,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.isBs4)},function(n,l){var t=l.component;n(l,0,0,0===t.activeSlide&&t.noWrap)})}function S(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,3,"a",[["class","right carousel-control carousel-control-next"]],[[2,"disabled",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.nextSlide()&&e),e},null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,"span",[["aria-hidden","true"],["class","icon-next carousel-control-next-icon"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Next"]))],null,function(n,l){var t=l.component;n(l,0,0,t.isLast(t.activeSlide)&&t.noWrap)})}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","carousel slide"]],null,[[null,"mouseenter"],[null,"mouseleave"],[null,"mouseup"]],function(n,l,t){var e=!0,i=n.component;return"mouseenter"===l&&(e=!1!==i.pause()&&e),"mouseleave"===l&&(e=!1!==i.play()&&e),"mouseup"===l&&(e=!1!==i.play()&&e),e},null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](2,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](3,0,null,null,1,"div",[["class","carousel-inner"]],null,null,null,null,null)),e["\u0275ncd"](null,0),(n()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](6,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,S)),e["\u0275did"](8,16384,null,0,g.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.showIndicators&&t.slides.length>1),n(l,6,0,t.slides.length>1),n(l,8,0,t.slides.length>1)},null)}var P=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"div",[["class","item"]],[[2,"active",null]],null,null,null,null)),e["\u0275ncd"](null,0)],null,function(n,l){n(l,0,0,l.component.active)})}var x=t("ZYCi"),I=t("k0v7"),N=t("gIcY"),b=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(n){return e["\u0275vid"](0,[e["\u0275ncd"](null,0)],null,null)}var R=t("zFbu"),w=function(){function n(n,l){this.catalogoService=n,this.cartService=l,this.slideConfig={slidesToShow:4,slidesToScroll:4}}return n.prototype.ngOnInit=function(){this.produtos=this.catalogoService.getProdutos()},n.prototype.addCarrinho=function(n){this.cartService.addCarrinho(n)},n}(),E=e["\u0275crt"]({encapsulation:0,styles:[["section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:20px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-bottom:20px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]{padding:10px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{text-transform:uppercase}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{margin-top:30px}section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .product[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .linkProduto[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function T(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,12,"div",[["class","product"],["ngxSlickItem",""]],null,null,null,null,null)),e["\u0275did"](1,4341760,null,0,I.SlickItemDirective,[e.ElementRef,I.SlickComponent],null,null),(n()(),e["\u0275eld"](2,0,null,null,10,"div",[["class","card"],["style","width: 100%"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,4,"div",[["class","linkProduto"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](n,5).onClick()&&i),i},null,null)),e["\u0275did"](5,16384,null,0,x.l,[x.k,x.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),(n()(),e["\u0275eld"](6,0,null,null,1,"b",[["class","card-title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](7,null,["",""])),(n()(),e["\u0275eld"](8,0,null,null,0,"img",[["alt","..."],["class","card-img-top"]],[[8,"src",4]],null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e["\u0275ted"](10,null,[" "," "])),(n()(),e["\u0275eld"](11,0,null,null,1,"div",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addCarrinho(n.context.$implicit)&&e),e},null,null)),(n()(),e["\u0275ted"](-1,null,["Comprar"]))],function(n,l){n(l,5,0,e["\u0275inlineInterpolate"](1,"/product/",l.context.$implicit.idProduto,""))},function(n,l){n(l,7,0,null==l.context.$implicit?null:l.context.$implicit.descricaoProduto),n(l,8,0,e["\u0275inlineInterpolate"](1,"",null==l.context.$implicit?null:l.context.$implicit.img,"")),n(l,10,0,null==l.context.$implicit?null:l.context.$implicit.quantidade)})}function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,10,"section",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,7,"div",[["class","col-sm"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Produtos mais vendidos"])),(n()(),e["\u0275eld"](6,0,null,null,4,"ngx-slick",[["class","carousel"]],null,null,null,M,b)),e["\u0275prd"](5120,null,N.NG_VALUE_ACCESSOR,function(n){return[n]},[I.SlickComponent]),e["\u0275did"](8,4374528,[["slickModal",4]],0,I.SlickComponent,[e.ElementRef,e.NgZone],{config:[0,"config"]},null),(n()(),e["\u0275and"](16777216,null,0,1,null,T)),e["\u0275did"](10,278528,null,0,g.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,8,0,t.slideConfig),n(l,10,0,t.produtos)},null)}var A=t("WCfK"),V=t("aF9I"),F=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),W=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function $(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,o.b,o.a)),e["\u0275did"](1,114688,null,0,r.a,[c.a],null,null),(n()(),e["\u0275eld"](2,0,null,null,9,"carousel",[],null,null,null,O,h)),e["\u0275did"](3,180224,null,0,p,[d,e.NgZone],null,null),(n()(),e["\u0275eld"](4,0,null,0,3,"slide",[["routerLink","/product/1"]],[[1,"aria-hidden",0],[2,"active",null],[2,"item",null],[2,"carousel-item",null]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](n,5).onClick()&&i),i},k,P)),e["\u0275did"](5,16384,null,0,x.l,[x.k,x.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275did"](6,245760,null,0,f,[p],null,null),(n()(),e["\u0275eld"](7,0,null,0,0,"img",[["alt","first slide"],["src","https://organomix.vteximg.com.br/arquivos/ids/37351/01-geladeira-home-20181210.jpg?v=636800499939000000"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](8,0,null,0,3,"slide",[["routerLink","/product/2"]],[[1,"aria-hidden",0],[2,"active",null],[2,"item",null],[2,"carousel-item",null]],[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e["\u0275nov"](n,9).onClick()&&i),i},k,P)),e["\u0275did"](9,16384,null,0,x.l,[x.k,x.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275did"](10,245760,null,0,f,[p],null,null),(n()(),e["\u0275eld"](11,0,null,0,0,"img",[["alt","second slide"],["src","https://organomix.vteximg.com.br/arquivos/ids/37484/01-pescados-home-20190107.jpg?v=636824762742030000"],["style","display: block; width: 100%;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](12,0,null,null,1,"app-catalogo",[],null,null,null,L,E)),e["\u0275did"](13,114688,null,0,w,[R.a,c.a],null,null),(n()(),e["\u0275eld"](14,0,null,null,1,"app-footer",[],null,null,null,A.b,A.a)),e["\u0275did"](15,114688,null,0,V.a,[],null,null)],function(n,l){n(l,1,0),n(l,5,0,"/product/1"),n(l,6,0),n(l,9,0,"/product/2"),n(l,10,0),n(l,13,0),n(l,15,0)},function(n,l){n(l,4,0,!e["\u0275nov"](l,6).active,e["\u0275nov"](l,6).active,e["\u0275nov"](l,6).addClass,e["\u0275nov"](l,6).addClass),n(l,8,0,!e["\u0275nov"](l,10).active,e["\u0275nov"](l,10).active,e["\u0275nov"](l,10).addClass,e["\u0275nov"](l,10).addClass)})}function j(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"app-home",[],null,null,null,$,W)),e["\u0275did"](1,114688,null,0,F,[],null,null)],function(n,l){n(l,1,0)},null)}var Z=e["\u0275ccf"]("app-home",F,j,{},{},[]),D=function(){return function(){}}(),X=t("PCNd");t.d(l,"HomeModuleNgFactory",function(){return U});var U=e["\u0275cmf"](i,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,Z]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,g.NgLocalization,g.NgLocaleLocalization,[e.LOCALE_ID,[2,g["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,R.a,R.a,[]),e["\u0275mpd"](4608,c.a,c.a,[]),e["\u0275mpd"](4608,d,d,[]),e["\u0275mpd"](1073742336,g.CommonModule,g.CommonModule,[]),e["\u0275mpd"](1073742336,x.m,x.m,[[2,x.s],[2,x.k]]),e["\u0275mpd"](1073742336,D,D,[]),e["\u0275mpd"](1073742336,I.SlickModule,I.SlickModule,[]),e["\u0275mpd"](1073742336,X.a,X.a,[]),e["\u0275mpd"](1073742336,v,v,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,x.i,function(){return[[{path:"",component:F}]]},[])])})}}]);