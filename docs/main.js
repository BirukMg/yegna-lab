(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products-page/products-page.component */ "./src/app/components/products-page/products-page.component.ts");






const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'products',
        component: _components_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_3__["ProductsPageComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products-page/products-page.component */ "./src/app/components/products-page/products-page.component.ts");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "./src/app/components/product-card/product-card.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/highlight/highlight.component */ "./src/app/components/highlight/highlight.component.ts");
/* harmony import */ var _components_home_body_home_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-body/home-body.component */ "./src/app/components/home-body/home-body.component.ts");
/* harmony import */ var _components_home_body_section_home_body_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-body-section/home-body-section.component */ "./src/app/components/home-body-section/home-body-section.component.ts");
/* harmony import */ var _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/our-client/our-client.component */ "./src/app/components/our-client/our-client.component.ts");
/* harmony import */ var _components_members_members_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/members/members.component */ "./src/app/components/members/members.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_6__["ProductsPageComponent"],
        _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"],
        _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
        _components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_10__["HighlightComponent"],
        _components_home_body_home_body_component__WEBPACK_IMPORTED_MODULE_11__["HomeBodyComponent"],
        _components_home_body_section_home_body_section_component__WEBPACK_IMPORTED_MODULE_12__["HomeBodySectionComponent"],
        _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_13__["OurClientComponent"],
        _components_members_members_component__WEBPACK_IMPORTED_MODULE_14__["MembersComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_6__["ProductsPageComponent"],
                    _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_7__["ProductCardComponent"],
                    _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                    _components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_10__["HighlightComponent"],
                    _components_home_body_home_body_component__WEBPACK_IMPORTED_MODULE_11__["HomeBodyComponent"],
                    _components_home_body_section_home_body_section_component__WEBPACK_IMPORTED_MODULE_12__["HomeBodySectionComponent"],
                    _components_our_client_our_client_component__WEBPACK_IMPORTED_MODULE_13__["OurClientComponent"],
                    _components_members_members_component__WEBPACK_IMPORTED_MODULE_14__["MembersComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                ],
                providers: [],
                bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'yegna-lab';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 28, vars: 0, consts: [[1, "footer", "d-flex", "justify-content-around", "align-items-center", "p-5"], [1, "footer__item"], [1, "fa", "fa-map-marker-alt"], [1, "fa", "fa-phone-alt"], [1, "fa", "fa-envelope"], [1, "fa", "fa-facebook-square", "mx-1"], [1, "fa", "fa-twitter-square", "mx-1"], [1, "fa", "fa-instagram", "mx-1"], [1, "fa", "fa-linkedin", "mx-1"], ["type", "email", "name", "email", "placeholder", "Your email", 1, "form-control"], ["rows", "3", "placeholder", "Say something", 1, "form-control", "my-2"], ["type", "submit", 1, "btn", "btn-outline-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Addis Ababa, Ethiopia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " +251911123445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " info@yegna-lab.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  background-color: #eb5757;\n  -webkit-clip-path: polygon(0 20%, 0 100%, 100% 100%, 100% 0%);\n          clip-path: polygon(0 20%, 0 100%, 100% 100%, 100% 0%);\n  color: #fff;\n}\n.footer__item[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCA4NywgODcpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyMCUsIDAgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDAlKTtcbiAgY29sb3I6ICNmZmY7XG5cbiAgJl9faXRlbSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/highlight/highlight.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.ts ***!
  \*************************************************************/
/*! exports provided: HighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightComponent", function() { return HighlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HighlightComponent {
    constructor() { }
    ngOnInit() {
    }
}
HighlightComponent.ɵfac = function HighlightComponent_Factory(t) { return new (t || HighlightComponent)(); };
HighlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HighlightComponent, selectors: [["app-highlight"]], decls: 25, vars: 0, consts: [[1, "highlight", "m-auto", "p-3"], [1, "highlight__body", "d-flex", "justify-content-around", "p-3"], [1, "highlight__body-item"], [1, "d-flex", "align-items-start"], ["src", "../../../assets/img/info.svg", "alt", ""], [1, "text-secondary"]], template: function HighlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hot Market.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fair listing fee.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quality service for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "We are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repellendus quaerat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam repellendus quaerat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".highlight[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n  width: 80%;\n  height: auto;\n  border-radius: 20px;\n  transform: translateY(-25%);\n  color: #3d3939;\n}\n.highlight__body[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n  background-color: #fff;\n}\n.highlight__body-item[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oaWdobGlnaHQvaGlnaGxpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGlnaGxpZ2h0L2hpZ2hsaWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjMpO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTtcbiAgY29sb3I6IHJnYig2MSwgNTcsIDU3KTtcbiAgLy8gbWFyZ2luOiBhdXRvO1xuXG4gICZfX2JvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgJl9fYm9keS1pdGVtIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-highlight',
                templateUrl: './highlight.component.html',
                styleUrls: ['./highlight.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-body-section/home-body-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/home-body-section/home-body-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeBodySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBodySectionComponent", function() { return HomeBodySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function HomeBodySectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
const _c0 = function (a0) { return { "flex-row-reverse": a0 }; };
const _c1 = function (a0) { return { "home-body-section__reverse": a0 }; };
class HomeBodySectionComponent {
    constructor() { }
    ngOnInit() { }
}
HomeBodySectionComponent.ɵfac = function HomeBodySectionComponent_Factory(t) { return new (t || HomeBodySectionComponent)(); };
HomeBodySectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeBodySectionComponent, selectors: [["app-home-body-section"]], inputs: { data: "data" }, decls: 11, vars: 14, consts: [[1, "home-body-section", "d-flex", "align-items-center", "my-5", 3, "ngClass"], [1, "home-body-section__desc", "px-5"], [1, "text-secondary"], [1, "d-flex"], ["class", "home-body-section__tag py-1 px-4 mr-2", 4, "ngFor", "ngForOf"], [1, "home-body-section__graphic", "position-relative", 3, "ngClass"], ["width", "70%", "alt", "", 1, "position-absolute", "home-body-section__img", 3, "src"], [1, "home-body-section__tag", "py-1", "px-4", "mr-2"]], template: function HomeBodySectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeBodySectionComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.data == null ? null : ctx.data.reverse));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.data.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("--color:" + (ctx.data == null ? null : ctx.data.bgUrl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.data.reverse));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../../assets/img/" + (ctx.data == null ? null : ctx.data.imgUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: [".home-body-section__desc[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.home-body-section__graphic[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 15rem;\n  background-color: var(--color);\n  border-top-left-radius: 100rem;\n  border-bottom-left-radius: 100rem;\n}\n.home-body-section__reverse[_ngcontent-%COMP%] {\n  border-top-left-radius: unset;\n  border-bottom-left-radius: unset;\n  border-top-right-radius: 100rem;\n  border-bottom-right-radius: 100rem;\n}\n.home-body-section__tag[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.3);\n  color: #ff0000;\n  border-radius: 20px;\n}\n.home-body-section__img[_ngcontent-%COMP%] {\n  top: -30%;\n  left: 10%;\n  animation: float 3s infinite alternate;\n}\n@keyframes float {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLWJvZHktc2VjdGlvbi9ob21lLWJvZHktc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUFBSjtBQUdFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFESjtBQUlFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUFGSjtBQUtFO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1FO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxzQ0FBQTtBQUpKO0FBUUE7RUFDRTtJQUNFLHdCQUFBO0VBTEY7RUFPQTtJQUNFLDRCQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1ib2R5LXNlY3Rpb24vaG9tZS1ib2R5LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1ib2R5LXNlY3Rpb24ge1xuICAmX19kZXNjIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgJl9fZ3JhcGhpYyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDByZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcmVtO1xuICB9XG5cbiAgJl9fcmV2ZXJzZSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwMHJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcmVtO1xuICB9XG5cbiAgJl9fdGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmMDAwMCwgJGFscGhhOiAwLjMpO1xuICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cblxuICAmX19pbWcge1xuICAgIHRvcDogLTMwJTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgYW5pbWF0aW9uOiBmbG9hdCAzcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBodySectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-body-section',
                templateUrl: './home-body-section.component.html',
                styleUrls: ['./home-body-section.component.scss'],
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/home-body/home-body.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-body/home-body.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBodyComponent", function() { return HomeBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _our_client_our_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../our-client/our-client.component */ "./src/app/components/our-client/our-client.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../members/members.component */ "./src/app/components/members/members.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _home_body_section_home_body_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home-body-section/home-body-section.component */ "./src/app/components/home-body-section/home-body-section.component.ts");







function HomeBodyComponent_app_home_body_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-body-section", 4);
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", data_r1);
} }
class HomeBodyComponent {
    constructor() {
        this.homeSectionData = [
            {
                title: 'For Research Labs',
                description: 'Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.',
                tags: ['Hospitals', 'Hospitals'],
                bgUrl: '#61EBCA',
                imgUrl: 'lab.png',
                reverse: false,
            },
            {
                title: 'For Medical Faculties',
                description: 'Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.',
                tags: ['Hospitals', 'Hospitals'],
                bgUrl: '#FFCD78',
                imgUrl: 'hospital.png',
                reverse: true,
            },
            {
                title: 'For Educational Institute',
                description: 'Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.',
                tags: ['Hospitals', 'Hospitals'],
                bgUrl: '#3691FA',
                imgUrl: 'school-2.png',
                reverse: false,
            },
        ];
    }
    ngOnInit() { }
}
HomeBodyComponent.ɵfac = function HomeBodyComponent_Factory(t) { return new (t || HomeBodyComponent)(); };
HomeBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeBodyComponent, selectors: [["app-home-body"]], decls: 10, vars: 1, consts: [[1, "home-body"], [1, "home-body__service", "m-auto", "pl-5"], [1, "text-secondary"], [3, "data", 4, "ngFor", "ngForOf"], [3, "data"]], template: function HomeBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Quisque velit nisi, pretium ut lacinia in, elementum id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeBodyComponent_app_home_body_section_6_Template, 1, 1, "app-home-body-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-our-client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeSectionData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _our_client_our_client_component__WEBPACK_IMPORTED_MODULE_2__["OurClientComponent"], _members_members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _home_body_section_home_body_section_component__WEBPACK_IMPORTED_MODULE_5__["HomeBodySectionComponent"]], styles: [".home-body__service[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.home-body__service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLWJvZHkvaG9tZS1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsVUFBQTtBQUFKO0FBRUk7RUFDRSxVQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtYm9keS9ob21lLWJvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1ib2R5IHtcbiAgJl9fc2VydmljZSB7XG4gICAgd2lkdGg6IDk1JTtcblxuICAgIHAge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-body',
                templateUrl: './home-body.component.html',
                styleUrls: ['./home-body.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highlight/highlight.component */ "./src/app/components/highlight/highlight.component.ts");
/* harmony import */ var _home_body_home_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home-body/home-body.component */ "./src/app/components/home-body/home-body.component.ts");





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-highlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-body");
    } }, directives: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_2__["HighlightComponent"], _home_body_home_body_component__WEBPACK_IMPORTED_MODULE_3__["HomeBodyComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");



function LandingComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function LandingComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function LandingComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} }
class LandingComponent {
    constructor() {
        this.customOptions = {
            autoplay: true,
            autoplayTimeout: 6000,
            items: 1,
            dotsData: true,
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            animateIn: 'animate__zoomIn',
            animateOut: 'animate__zoomOut',
        };
    }
    ngOnInit() { }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 20, vars: 1, consts: [[1, "landing", "d-flex", "justify-content-center", "align-items-center", "position-relative", "flex-wrap"], ["src", "../../../assets/img/yegna_logo.svg", "alt", "", "width", "5%", 1, "landing__logo", "position-absolute"], ["src", "../../../assets/img/landing-bg.svg", "alt", "", "width", "100%", 1, "landing__bg", "position-absolute"], ["src", "../../../assets/img/bubbles.svg", "alt", "", "width", "100%", 1, "landing__bg", "position-absolute"], [1, "landing__slider"], [3, "options"], ["carouselSlide", ""], [1, "landing__desc", "d-flex", "align-items-center", "justify-content-center", "flex-column"], [1, "d-flex", "align-items-center"], [1, "landing__desc__letter-o"], [1, "landing__desc__urs"], [1, "landing__desc__yours"], [1, "py-2", "px-5"], ["src", "../../../assets//img/chemicals.png", "alt", "", "width", "70%", 1, "landing__slider-item"], ["src", "../../../assets//img/model.png", "alt", "", "width", "70%", 1, "landing__slider-item"], ["src", "../../../assets//img/lab-tool.png", "alt", "", "width", "70%", 1, "landing__slider-item"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "owl-carousel-o", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LandingComponent_ng_template_6_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LandingComponent_ng_template_7_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LandingComponent_ng_template_8_Template, 1, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Yegna lab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "urs,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Yours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Get Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"]], styles: [".landing[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n.landing__slider[_ngcontent-%COMP%] {\n  width: 50%;\n  font-family: fertigo;\n}\n.landing__desc[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  font-family: fertigo;\n}\n.landing__desc[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  color: red;\n}\n.landing__desc__letter-o[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 50%;\n  width: 4rem;\n  height: 4rem;\n}\n.landing__desc__urs[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4rem;\n}\n.landing__desc__yours[_ngcontent-%COMP%] {\n  color: #3d3939;\n  font-size: 4rem;\n}\n.landing__desc[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #FFF;\n  border: none;\n  border-radius: 50px;\n  z-index: 1;\n}\n.landing__logo[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.landing__bg[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  opacity: 0.5;\n}\n.landing__slider-item[_ngcontent-%COMP%] {\n  animation: float 1s infinite alternate;\n}\n@keyframes float {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGO0FBS0U7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFISjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUpKO0FBT0k7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUxOO0FBUUk7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOTjtBQVNJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFSTjtBQVdJO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVROO0FBY0U7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFaSjtBQWVFO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZ0JFO0VBQ0Usc0NBQUE7QUFkSjtBQW1CQTtFQUNFO0lBQ0Usd0JBQUE7RUFoQkY7RUFrQkE7SUFDRSw0QkFBQTtFQWhCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9idWJibGVzLnN2Zyk7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAvL3JlbW92ZVxuXG4gICZfX3NsaWRlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LWZhbWlseTogZmVydGlnbztcbiAgfVxuXG4gICZfX2Rlc2Mge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBmZXJ0aWdvO1xuICAgIC8vIGNvbG9yOiB3aGl0ZTsgLy9yZW1vdmVcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLy9yZW1vdmVcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cblxuICAgICZfX2xldHRlci1vIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgIH1cblxuICAgICZfX3VycyB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cblxuICAgICZfX3lvdXJzIHtcbiAgICAgIGNvbG9yOiByZ2IoNjEsIDU3LCA1Nyk7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gIH1cblxuICAmX19sb2dvIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgJl9fYmcge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDA7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgJl9fc2xpZGVyLWl0ZW0ge1xuICAgIGFuaW1hdGlvbjogZmxvYXQgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/members/members.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/members/members.component.ts ***!
  \*********************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MembersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../../../assets/img/" + member_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r1.role, " ");
} }
class MembersComponent {
    constructor() {
        this.members = [
            {
                name: 'John Doe',
                role: 'CEO',
                imgUrl: 'men-member-1.jpg',
            },
            {
                name: 'Emma',
                role: 'Marketing & sale',
                imgUrl: 'women-member-1.jpg',
            },
            {
                name: 'Aaliyah',
                role: 'Finance Head',
                imgUrl: 'women-member-2.jpg',
            },
            {
                name: 'Smith',
                role: 'Associate Manager',
                imgUrl: 'men-member-2.jpg',
            },
        ];
    }
    ngOnInit() { }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], decls: 2, vars: 1, consts: [[1, "members", "p-5", "d-flex", "justify-content-between"], ["class", "members__card", 4, "ngFor", "ngForOf"], [1, "members__card"], [1, "members__img"], ["width", "100%", "alt", "", 3, "src"], [1, "text-center", "text-secondary", "py-2"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MembersComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".members__card[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 300px;\n  background-color: #fff;\n  border-radius: 18px;\n  overflow: hidden;\n}\n.members__img[_ngcontent-%COMP%] {\n  height: 75%;\n  overflow: hidden;\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXJzIHtcbiAgJl9fY2FyZCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJl9faW1nIHtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE4cHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-members',
                templateUrl: './members.component.html',
                styleUrls: ['./members.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/our-client/our-client.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/our-client/our-client.component.ts ***!
  \***************************************************************/
/*! exports provided: OurClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurClientComponent", function() { return OurClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function OurClientComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} }
class OurClientComponent {
    constructor() { }
    ngOnInit() {
    }
}
OurClientComponent.ɵfac = function OurClientComponent_Factory(t) { return new (t || OurClientComponent)(); };
OurClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurClientComponent, selectors: [["app-our-client"]], decls: 2, vars: 1, consts: [[1, "our-client", "p-5", "d-flex", "justify-content-between", "align-items-center", "flex-wrap"], ["class", "our-client__card m-2", 4, "ngFor", "ngForOf"], [1, "our-client__card", "m-2"]], template: function OurClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OurClientComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ",".repeat(9).split(","));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".our-client__card[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background: transparent;\n  box-shadow: 0px 0px 3px 0px #FF000040;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdXItY2xpZW50L291ci1jbGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3VyLWNsaWVudC9vdXItY2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91ci1jbGllbnQge1xuICAmX19jYXJkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI0ZGMDAwMDQwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-client',
                templateUrl: './our-client.component.html',
                styleUrls: ['./our-client.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/product-card/product-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductCardComponent.ɵfac = function ProductCardComponent_Factory(t) { return new (t || ProductCardComponent)(); };
ProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductCardComponent, selectors: [["app-product-card"]], decls: 2, vars: 0, template: function ProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-card works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-card',
                templateUrl: './product-card.component.html',
                styleUrls: ['./product-card.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products-page/products-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/products-page/products-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsPageComponent.ɵfac = function ProductsPageComponent_Factory(t) { return new (t || ProductsPageComponent)(); };
ProductsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsPageComponent, selectors: [["app-products-page"]], decls: 2, vars: 0, template: function ProductsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "products-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products-page',
                templateUrl: './products-page.component.html',
                styleUrls: ['./products-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bik/Documents/simplex/yegna/yegna-lab/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map