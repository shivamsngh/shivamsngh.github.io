webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* .dropdown:hover .dropdown-menu {\n    display: block;\n  } */"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav id=\"mainNav\" class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n  \n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span> Menu\n          <i class=\"fa fa-bars\"></i>\n        </button>\n        <a class=\"navbar-brand page-scroll\" routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a class=\"page-scroll\" pageScroll href=\"#about\" >About</a>\n          </li>\n          <li>\n            <a class=\"page-scroll\" pageScroll href=\"#services\">Social</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n            <a id=\"bucketDrop\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" href=\"#\">Bucketlist</a>\n            <ul class=\"dropdown-menu\" aria-labelledby=\"bucketDrop\">\n              <li><a href=\"#\" class=\"active\" routerLink=\"bucketlist\" routerLinkActive=\"active\">Rishikesh, India</a></li>\n              <li><a  href=\"#\">Bhotekosi, Nepal</a></li>\n            </ul>\n          </li>\n          <li>\n            <a class=\"page-scroll\" pageScroll href=\"#portfolio\">Portfolio</a>\n          </li>\n          <li>\n            <a class=\"page-scroll\" pageScroll href=\"#contact\">Contact</a>\n          </li>\n          <li>\n            <a class=\"page-scroll\" href=\"assets/shivamsingh.pdf\" target=\"_blank\" rel=\"noopener\">CV</a>\n          </li> \n          <li>\n            <a href=\"https://orcid.org/0000-0003-2918-7975\" target=\"orcid.widget\" rel=\"noopener noreferrer\" style=\"vertical-align:top;\"><img src=\"https://orcid.org/sites/default/files/images/orcid_16x16.png\" style=\"width:1em;margin-right:.5em;\" alt=\"ORCID iD icon\">orcid.org/0000-0003-2918-7975</a>\n          </li>\n        </ul>\n      </div>\n      <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n  </nav>\n  \n  <!-- <router-outlet></router-outlet> -->\n<!-- <app-home></app-home> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_page_scroll__ = __webpack_require__("./node_modules/ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        __WEBPACK_IMPORTED_MODULE_1_ngx_page_scroll__["b" /* PageScrollConfig */].defaultScrollOffset = 50;
        __WEBPACK_IMPORTED_MODULE_1_ngx_page_scroll__["b" /* PageScrollConfig */].defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }
                if (t === d) {
                    return b + c;
                }
                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_twitter_timeline__ = __webpack_require__("./node_modules/ngx-twitter-timeline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__ = __webpack_require__("./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_scrollreveal__ = __webpack_require__("./node_modules/ng-scrollreveal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bucketlist_bucketlist_component__ = __webpack_require__("./src/app/bucketlist/bucketlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bucketlist_bucketlist_module__ = __webpack_require__("./src/app/bucketlist/bucketlist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: 'bucketlist', component: __WEBPACK_IMPORTED_MODULE_13__bucketlist_bucketlist_component__["a" /* BucketlistComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["e" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14__bucketlist_bucketlist_module__["a" /* BucketlistModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_twitter_timeline__["a" /* NgxTwitterTimelineModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng_scrollreveal__["a" /* NgsRevealModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["e" /* RouterModule */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bucketlist/bucketlist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bucketlist/bucketlist.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-jump [photoDetails]=\"photoDetails\"></app-header-jump>\n<app-india-jump-gallery [photoDetails]=\"photoDetails\"></app-india-jump-gallery>"

/***/ }),

/***/ "./src/app/bucketlist/bucketlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_db_service__ = __webpack_require__("./src/app/shared/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BucketlistComponent = /** @class */ (function () {
    function BucketlistComponent(db) {
        this.db = db;
    }
    BucketlistComponent.prototype.ngOnInit = function () {
        this.photoDetails = this.db.getGalleryPhotoDetails();
        this.photoDetails.subscribe(function (data) {
            console.log('data photo', data);
        });
    };
    BucketlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bucketlist',
            template: __webpack_require__("./src/app/bucketlist/bucketlist.component.html"),
            styles: [__webpack_require__("./src/app/bucketlist/bucketlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_db_service__["a" /* DbService */]])
    ], BucketlistComponent);
    return BucketlistComponent;
}());



/***/ }),

/***/ "./src/app/bucketlist/bucketlist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketlistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bucketlist_component__ = __webpack_require__("./src/app/bucketlist/bucketlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_db_service__ = __webpack_require__("./src/app/shared/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_jump_header_jump_component__ = __webpack_require__("./src/app/bucketlist/header-jump/header-jump.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__india_jump_gallery_india_jump_gallery_component__ = __webpack_require__("./src/app/bucketlist/india-jump-gallery/india-jump-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BucketlistModule = /** @class */ (function () {
    function BucketlistModule() {
    }
    BucketlistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__bucketlist_component__["a" /* BucketlistComponent */], __WEBPACK_IMPORTED_MODULE_5__header_jump_header_jump_component__["a" /* HeaderJumpComponent */], __WEBPACK_IMPORTED_MODULE_6__india_jump_gallery_india_jump_gallery_component__["a" /* IndiaJumpGalleryComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_db_service__["a" /* DbService */]]
        })
    ], BucketlistModule);
    return BucketlistModule;
}());



/***/ }),

/***/ "./src/app/bucketlist/header-jump/header-jump.component.css":
/***/ (function(module, exports) {

module.exports = ".showvid{\n    display: block;\n}"

/***/ }),

/***/ "./src/app/bucketlist/header-jump/header-jump.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"blogPage\">\n    <div id=\"jumpvideo\" [ngClass]=\"{'show': showVideoPoster}\">\n        <video poster=\"assets/img/bungy/optimized/thesuspension_0.jpg\" id=\"bgvid\" playsinline muted autoplay loop #jumpvid>\n            <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the \"Pause\" button  -->\n            <source src=\"assets/video/leapofaplutonian.mp4\" type=\"video/mp4\">\n        </video>\n    </div>\n    <div class=\"header-content\">\n        <div class=\"header-content-inner\">\n            <h1>Rishikesh</h1>\n            <hr>\n            <p>Bungy Jump | 83 mts | Highest in India</p>\n            <div *ngIf=\"details.length>0; then link\">\n            </div>\n            <ng-template #link>\n                    <a id=\"bungyloc\" href=\"{{details[0].jumpsStats[0].mapLocation}}\" target=\"_blank\" class=\"btn btn-social-icon btn-map\">\n                            <span class=\"fa fa-4x fa-map-marker\"></span>\n                        </a>\n            </ng-template>\n          \n            <!-- <a (click)=\"jumpvid.paused?jumpvid.play():jumpvid.pause()\" id=\"playbtn\" class=\"btn btn-social-icon btn-play\">\n                <span class=\"fa fa-3x fa-film\"></span>\n            </a> -->\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/bucketlist/header-jump/header-jump.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderJumpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__ = __webpack_require__("./node_modules/rxjs/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderJumpComponent = /** @class */ (function () {
    function HeaderJumpComponent() {
        this.showVideoPoster = true;
        this.details = [];
    }
    HeaderJumpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoDetails.subscribe(function (details) {
            _this.details = details;
            console.log('detais', _this.details[0]);
        });
    };
    HeaderJumpComponent.prototype.videoControl = function (elm) {
        console.log(elm.paused);
        if (elm.paused) {
            elm.play();
            this.showVideoPoster = true;
        }
        else {
            elm.pause();
            this.showVideoPoster = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_observable__["Observable"])
    ], HeaderJumpComponent.prototype, "photoDetails", void 0);
    HeaderJumpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header-jump',
            template: __webpack_require__("./src/app/bucketlist/header-jump/header-jump.component.html"),
            styles: [__webpack_require__("./src/app/bucketlist/header-jump/header-jump.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderJumpComponent);
    return HeaderJumpComponent;
}());



/***/ }),

/***/ "./src/app/bucketlist/india-jump-gallery/india-jump-gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bucketlist/india-jump-gallery/india-jump-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<app-photo-gallery [photoDetails]=\"photoDetails\"></app-photo-gallery>\n<footer>\n    <section class=\"blog-footer\">\n        <!-- <img src=\"../img/bungy/header.jpg\"> -->\n    </section>\n</footer>"

/***/ }),

/***/ "./src/app/bucketlist/india-jump-gallery/india-jump-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndiaJumpGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndiaJumpGalleryComponent = /** @class */ (function () {
    function IndiaJumpGalleryComponent() {
    }
    IndiaJumpGalleryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], IndiaJumpGalleryComponent.prototype, "photoDetails", void 0);
    IndiaJumpGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-india-jump-gallery',
            template: __webpack_require__("./src/app/bucketlist/india-jump-gallery/india-jump-gallery.component.html"),
            styles: [__webpack_require__("./src/app/bucketlist/india-jump-gallery/india-jump-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndiaJumpGalleryComponent);
    return IndiaJumpGalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-primary\" id=\"about\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\" [ngsRevealSet]=\"{ reset:true}\" [ngsInterval]=\"400\" [ngsSelector]=\"'.sr-button'\">\n\t\t\t\t<h2 class=\"section-heading\">{{about.heading}}</h2>\n\t\t\t\t<hr class=\"light\">\n\t\t\t\t<p class=\"text-faded\">{{about.introText}}</p>\n\t\t\t\t<p class=\"text-faded\">{{about.abtPassionText}}</p>\n\t\t\t\t<a href=\"#services\" pageScroll class=\"page-scroll btn btn-default btn-xl sr-button\">Know More!</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/home/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.about = {
            heading: "A little about me!",
            introText: "Human Computer Interaction, Internet of Things, Open Source Innovation, AI, Machine Learning, Modern Web Development,\n    Progressive Web Apps.",
            // tslint:disable-next-line:max-line-length
            abtPassionText: "I wander, try to jump from highest peaks in the world (Last jump was 160 M), take keen interest in Defence and Strategy discussions."
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-about',
            template: __webpack_require__("./src/app/home/about/about.component.html"),
            styles: [__webpack_require__("./src/app/home/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/home/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n\t<div class=\"container\">\n\t\t<div class=\"row\" [ngsRevealSet]=\"{ reset:true}\" [ngsInterval]=\"60\" [ngsSelector]=\"'.sr-contact'\">\n\t\t\t<div class=\"col-lg-8 col-lg-offset-2 text-center\">\n\t\t\t\t<h2 class=\"section-heading\">{{contact.heading}}</h2>\n\t\t\t\t<hr class=\"primary\">\n\t\t\t\t<p>{{contact.text}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-lg-offset-2 text-center\">\n\t\t\t\t<i class=\"fa fa-phone fa-3x sr-contact\"></i>\n\t\t\t\t<p>{{contact.phone}}</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t<i class=\"fa fa-envelope-o fa-3x sr-contact\" ></i>\n\t\t\t\t<p>\n\t\t\t\t\t<a href=\"mailto:{{contact.email}}\">{{contact.email}}</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.contact = {
            heading: "Let's Get In Touch!",
            text: "Up for a discussion? That's great! Give a call or send an email and I will get back to you as soon as possible!",
            phone: "+91 9696644017",
            email: "shivamsngh@hotmail.com"
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-contact',
            template: __webpack_require__("./src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/home/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout-header [events]=\"events\"></app-layout-header>\n<app-home-about></app-home-about>\n<app-home-social></app-home-social>\n<app-home-portfolio></app-home-portfolio>\n<app-home-more></app-home-more>\n<app-home-contact></app-home-contact>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_db_service__ = __webpack_require__("./src/app/shared/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        this.db = db;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.events = this.db.getRecentEvents();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_db_service__["a" /* DbService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/home/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_social_component__ = __webpack_require__("./src/app/home/social/social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio_component__ = __webpack_require__("./src/app/home/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("./src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__more_more_component__ = __webpack_require__("./src/app/home/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_db_service__ = __webpack_require__("./src/app/shared/services/db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng_scrollreveal__ = __webpack_require__("./node_modules/ng-scrollreveal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bucketlist_bucketlist_module__ = __webpack_require__("./src/app/bucketlist/bucketlist.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_page_scroll__ = __webpack_require__("./node_modules/ngx-page-scroll/ngx-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var homeRouting = __WEBPACK_IMPORTED_MODULE_7__angular_router__["e" /* RouterModule */].forChild([
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
]);
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                homeRouting,
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14__bucketlist_bucketlist_module__["a" /* BucketlistModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng_scrollreveal__["a" /* NgsRevealModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__social_social_component__["a" /* SocialComponent */], __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio_component__["a" /* PortfolioComponent */], __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__more_more_component__["a" /* MoreComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__social_social_component__["a" /* SocialComponent */], __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio_component__["a" /* PortfolioComponent */], __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__more_more_component__["a" /* MoreComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__shared_services_db_service__["a" /* DbService */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/more/more.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/more/more.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"bg-dark\">\n\t\t<div class=\"container text-center\">\n\t\t\t<div class=\"call-to-action\">\n\t\t\t\t<!-- <h2></h2> -->\n\t\t\t\t<!-- <a href=\"#\" class=\"btn btn-default btn-xl sr-button\"></a> -->\n\t\t\t</div>\n\t\t</div>\n\t</aside>"

/***/ }),

/***/ "./src/app/home/more/more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-more',
            template: __webpack_require__("./src/app/home/more/more.component.html"),
            styles: [__webpack_require__("./src/app/home/more/more.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"no-padding\" id=\"portfolio\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row no-gutter\">\n\t\t\t<div class=\"col-lg-4 col-sm-6\" *ngFor=\"let item of portfolio\">\n\t\t\t\t<a href=\"#\" class=\"portfolio-box\">\n\t\t\t\t\t<img src=\"assets/img/portfolio/thumbnails/{{item.thumbnail}}\" class=\"img-responsive\" alt=\"portfolio\">\n\t\t\t\t\t<div class=\"portfolio-box-caption\">\n\t\t\t\t\t\t<div class=\"portfolio-box-caption-content\">\n\t\t\t\t\t\t\t<div class=\"project-category text-faded\">\n\t\t\t\t\t\t\t\t{{item.title}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"project-name\" *ngFor=\"let detail of item.details\">\n\t\t\t\t\t\t\t\t{{detail}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.portfolio = [{
                title: 'Publications',
                details: ['Human Computer Interaction', 'Internet of Things', 'Artificial Intelligence'],
                thumbnail: '1.jpg'
            },
            {
                title: 'Applications',
                details: ['https://github.com/shivamsngh'],
                thumbnail: '2.jpg'
            },
            {
                title: 'Projects',
                details: ['AI, ML, Human Computer Interacion, IoT, Virtual and Augmented reality'],
                thumbnail: '3.jpg'
            }
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-portfolio',
            template: __webpack_require__("./src/app/home/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/home/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/home/social/social.component.css":
/***/ (function(module, exports) {

module.exports = "div ul.rss-items li.rss-item{\nmax-height: 100px;\noverflow: hidden;\ntext-overflow: ellipsis;\n}\ndiv ul.rss-items li.rss-item span div:first-child   {\ndisplay: none;\n    }\n"

/***/ }),

/***/ "./src/app/home/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"services\" [ngsRevealSet]=\"{ reset:true}\" [ngsInterval]=\"60\" [ngsSelector]=\"'.sr-icons'\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12 text-center\">\n\t\t\t\t<h2 class=\"section-heading\">Social</h2>\n\t\t\t\t<hr class=\"primary\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<!-- Blog -->\n\t\t\t<div class=\"col-lg-4 col-md-8 text-center\">\n\t\t\t\t<div class=\"service-box\">\n\t\t\t\t\t<app-blog [blogs]=\"social.blogs\"></app-blog>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- /Blog -->\n\n\t\t\t<!-- Twitter -->\n\t\t\t<div class=\"col-lg-4 col-md-8 text-center\">\n\t\t\t\t<div class=\"service-box\">\n\t\t\t\t\t<app-twitter></app-twitter>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- /Twitter -->\n\n\t\t\t<!-- Books -->\n\t\t\t<div class=\"col-lg-4 col-md-8 text-center\">\n\t\t\t\t<div class=\"service-box\">\n\t\t\t\t\t<app-book-library [books]=\"books\"></app-book-library>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- /Books -->\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/home/social/social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("./src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_db_service__ = __webpack_require__("./src/app/shared/services/db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialComponent = /** @class */ (function () {
    function SocialComponent(api, db) {
        var _this = this;
        this.api = api;
        this.db = db;
        this.social = { blogs: [] };
        this.api.getBlogData().subscribe(function (data) {
            console.log(data);
            _this.social.blogs = data.items;
        });
        this.books = db.getBooksFromDb();
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-social',
            template: __webpack_require__("./src/app/home/social/social.component.html"),
            styles: [__webpack_require__("./src/app/home/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_db_service__["a" /* DbService */]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = "div ul li.rss-item{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height:100px\n}"

/***/ }),

/***/ "./src/app/shared/custom-components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <i class=\"fa fa-4x fa-rss text-primary sr-icons\"></i>\n    <h3>Blog</h3>\n    <div class=\"text-muted\">\n      <ul class=\"rss-items\">\n        <li class=\"rss-item\" *ngFor=\"let blog of blogs\">\n          <a href=\"{{blog.url}}\" target=\"_blank\" rel=noopener>{{blog.title}}</a>\n          <br>\n          <span [innerHTML]=\"blog.content\"></span>\n        </li>\n      </ul>\n    </div>"

/***/ }),

/***/ "./src/app/shared/custom-components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], BlogComponent.prototype, "blogs", void 0);
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/shared/custom-components/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/shared/custom-components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/book-library/book-library.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/custom-components/book-library/book-library.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-4x fa-book text-primary sr-icons\">\n</i>\n<h3>Latest Reads</h3>\n<!--Book Card-->\n<div class=\"card text-center\" *ngIf=\"currentBook\">\n  <div class=\"card-header\" >\n    <h4 id=\"currentBook\">{{currentBook.title}}</h4>\n  </div>\n  <div class=\"card-block\">\n    <h5 class=\"text-muted\" id=\"currentAuthor\">By- {{currentBook.author}}</h5>\n    <h5 class=\"card-text\" id=\"currentRead\">Now Reading</h5>\n    <h6 style=\"color:green\" id=\"currentRating\">My Rating: {{currentBook.myrating}}</h6>\n    <!--<a href=\"#\" class=\"btn btn-primary\">View All Reads</a>-->\n    <!-- Trigger the modal with a button -->\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\">View All Reads</button>\n  </div>\n  <div class=\"card-footer text-muted\">\n    <p id=\"bookcount\">Book Count: {{totalBooks}}</p>\n  </div>\n</div>\n<!--/Book Card-->\n\n<!--Modal Start-->\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Books so far</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div id=\"card-template\">\n            <div class=\"card text-center\" *ngFor=\"let book of books | async\">\n              <div class=\"card-header\">\n                <h4 class=\"bookname\">{{book.title}}</h4>\n              </div>\n              <div class=\"card-block\">\n                <h5 class=\"text-muted\" id=\"author\">By- {{book.author}}</h5>\n                <h5 class=\"card-text\">{{book.read?'Completed':'Reading'}}</h5>\n                <h6 style=\"color:green\" id=\"myrating\">MyRating: {{book.myrating}}</h6>\n              </div>\n              <div class=\"card-footer text-muted\">\n                <p id=\"bookcount\"></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--Modal end-->"

/***/ }),

/***/ "./src/app/shared/custom-components/book-library/book-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookLibraryComponent = /** @class */ (function () {
    function BookLibraryComponent() {
        this.totalBooks = 0;
    }
    BookLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books.subscribe(function (data) {
            _this.totalBooks = data.length;
            data.forEach(function (x) {
                if (!x.read) {
                    _this.currentBook = x;
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], BookLibraryComponent.prototype, "books", void 0);
    BookLibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-library',
            template: __webpack_require__("./src/app/shared/custom-components/book-library/book-library.component.html"),
            styles: [__webpack_require__("./src/app/shared/custom-components/book-library/book-library.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookLibraryComponent);
    return BookLibraryComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/custom-components.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/custom-components/custom-components.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  custom-components works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/custom-components/custom-components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomComponentsComponent = /** @class */ (function () {
    function CustomComponentsComponent() {
    }
    CustomComponentsComponent.prototype.ngOnInit = function () {
    };
    CustomComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-custom-components',
            template: __webpack_require__("./src/app/shared/custom-components/custom-components.component.html"),
            styles: [__webpack_require__("./src/app/shared/custom-components/custom-components.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomComponentsComponent);
    return CustomComponentsComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/custom-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_components_component__ = __webpack_require__("./src/app/shared/custom-components/custom-components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__twitter_twitter_component__ = __webpack_require__("./src/app/shared/custom-components/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_library_book_library_component__ = __webpack_require__("./src/app/shared/custom-components/book-library/book-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__ = __webpack_require__("./src/app/shared/custom-components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recent_event_card_recent_event_card_component__ = __webpack_require__("./src/app/shared/custom-components/recent-event-card/recent-event-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_twitter_timeline__ = __webpack_require__("./node_modules/ngx-twitter-timeline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__photo_gallery_photo_gallery_component__ = __webpack_require__("./src/app/shared/custom-components/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_scrollreveal__ = __webpack_require__("./node_modules/ng-scrollreveal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CustomComponentsModule = /** @class */ (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_twitter_timeline__["a" /* NgxTwitterTimelineModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng_scrollreveal__["a" /* NgsRevealModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__custom_components_component__["a" /* CustomComponentsComponent */], __WEBPACK_IMPORTED_MODULE_3__twitter_twitter_component__["a" /* TwitterComponent */], __WEBPACK_IMPORTED_MODULE_4__book_library_book_library_component__["a" /* BookLibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* BlogComponent */], __WEBPACK_IMPORTED_MODULE_6__recent_event_card_recent_event_card_component__["a" /* RecentEventCardComponent */], __WEBPACK_IMPORTED_MODULE_8__photo_gallery_photo_gallery_component__["a" /* PhotoGalleryComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__custom_components_component__["a" /* CustomComponentsComponent */], __WEBPACK_IMPORTED_MODULE_3__twitter_twitter_component__["a" /* TwitterComponent */], __WEBPACK_IMPORTED_MODULE_4__book_library_book_library_component__["a" /* BookLibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__blog_blog_component__["a" /* BlogComponent */], __WEBPACK_IMPORTED_MODULE_6__recent_event_card_recent_event_card_component__["a" /* RecentEventCardComponent */], __WEBPACK_IMPORTED_MODULE_8__photo_gallery_photo_gallery_component__["a" /* PhotoGalleryComponent */]]
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/photo-gallery/photo-gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/custom-components/photo-gallery/photo-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"photoDetails | async as photos\">\n  <div class=\"photo-grid\" style=\"background: rgba(93, 159, 183, 0.7);\" *ngFor=\"let photo of photos[0].jumpsStats[0].allPhotoBlogData; let i=index\">\n    <div class=\"photo-detail outer-box\" [style.order]=\"i % 2 === 0 ? 1 : 2\">\n      <h2>{{photo.caption}}</h2>\n      <h4>\n        <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>\n        <i> {{photo.quote}} </i>\n        <i class=\"fa fa-min fa-quote-right\" aria-hidden=\"true\"></i>\n      </h4>\n      <h4>{{photo.detail}}</h4>\n      <sub>{{photo.timestamp}}</sub>\n    </div>\n    <div class=\"photo-full outer-box\" [style.order]=\"i % 2 === 0 ? 2 : 1\">\n      <div class=\"inner-box\">\n        <img src=\"assets/img/bungy/optimized/{{photo.photoId}}\" />\n      </div>\n    </div>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/shared/custom-components/photo-gallery/photo-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent() {
    }
    PhotoGalleryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], PhotoGalleryComponent.prototype, "photoDetails", void 0);
    PhotoGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-photo-gallery',
            template: __webpack_require__("./src/app/shared/custom-components/photo-gallery/photo-gallery.component.html"),
            styles: [__webpack_require__("./src/app/shared/custom-components/photo-gallery/photo-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/recent-event-card/recent-event-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/custom-components/recent-event-card/recent-event-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"event-bubble  bg-primary left-top\" *ngFor=\"let event of events | async\">\n  <div class=\"eventtext\" [ngsRevealSet]=\"{ reset:true}\" [ngsInterval]=\"200\" [ngsSelector]=\"'.btn,.glyphicon-bookmark'\">\n    <a href=\"#\">\n      <span class=\"glyphicon glyphicon-bookmark\" style=\"float:right\"></span>\n    </a>\n    <div class=\"eventtext-header\">\n      <h4 class=\"recent-card-header\">{{event.eventName}}</h4>\n    </div>\n    <p class=\"recent-card-body\">{{event.details}}</p>\n    <div class=\"recent-card-footer\">\n      <span>{{event.startDate}}</span>\n      <a href='{{event.link}}' class='btn btn-xs' target=\"_blank\" rel=\"noopener\">Details</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/custom-components/recent-event-card/recent-event-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentEventCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecentEventCardComponent = /** @class */ (function () {
    function RecentEventCardComponent() {
    }
    RecentEventCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], RecentEventCardComponent.prototype, "events", void 0);
    RecentEventCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recent-event-card',
            template: __webpack_require__("./src/app/shared/custom-components/recent-event-card/recent-event-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/custom-components/recent-event-card/recent-event-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecentEventCardComponent);
    return RecentEventCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/custom-components/twitter/twitter.component.css":
/***/ (function(module, exports) {

module.exports = "div.twitter-box{\n    overflow:scroll;\n    max-height: 200px;\n}"

/***/ }),

/***/ "./src/app/shared/custom-components/twitter/twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"fa fa-4x fa-twitter text-primary sr-icons\"></i>\n<!--Twitter Feed-->\n<h3>Tweets</h3>\n<div class=\"twitter-box\">\n    <ngx-twitter-timeline [data]=\"{sourceType: 'profile',screenName: 'sshivamsngh', url:'https://twitter.com/sshivamsngh'}\"></ngx-twitter-timeline>\n</div>\n\n<!--Twitter Feed-->"

/***/ }),

/***/ "./src/app/shared/custom-components/twitter/twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwitterComponent = /** @class */ (function () {
    function TwitterComponent() {
    }
    TwitterComponent.prototype.ngOnInit = function () {
    };
    TwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-twitter',
            template: __webpack_require__("./src/app/shared/custom-components/twitter/twitter.component.html"),
            styles: [__webpack_require__("./src/app/shared/custom-components/twitter/twitter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header-content\">\n    <div class=\"header-content-inner\" [ngsRevealSet]=\"{ reset:true}\" [ngsInterval]=\"400\" [ngsSelector]=\"'.btn,i.fa'\">\n      <h1 id=\"homeHeading\">Shivam Singh</h1>\n      <hr>\n      <p style=\"color:white\">Researcher | Developer | Hobby Cook | Avid Reader</p>\n      <hr>\n      <a href=\"https://www.twitter.com/sshivamsngh\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-social-icon btn-twitter\">\n        <span class=\"fa fa-4x fa-twitter\"></span>\n      </a>\n      <a href=\"https://www.github.com/shivamsngh\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-social-icon btn-github\">\n        <span class=\"fa fa-4x fa-github\"></span>\n      </a>\n      <a href=\"https://www.linkedin.com/in/shivamsngh\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-social-icon btn-linkedin\">\n        <span class=\"fa fa-4x fa-linkedin\"></span>\n      </a>\n      <p></p>\n      <p style=\"color:black;transform:scale(-1)\">\n        <i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i> Kitkat , Batman, Rayban...\n        <i class=\"fa fa-quote-right\" aria-hidden=\"true\"></i>\n      </p>\n    </div>\n  </div>\n  <!-- News, Events and Updates -->\n  <div class=\"side-bar\" id=\"eventsarea\">\n    <div id=\"eventscreen\">\n      <app-recent-event-card [events]=\"events\"></app-recent-event-card>\n    </div>\n  </div>\n  <!-- /News, Events and Updates -->\n</header>"

/***/ }),

/***/ "./src/app/shared/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */])
    ], HeaderComponent.prototype, "events", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout-header',
            template: __webpack_require__("./src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/layout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  layout works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/shared/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/shared/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/shared/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/shared/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/shared/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_components_custom_components_module__ = __webpack_require__("./src/app/shared/custom-components/custom-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_page_scroll__ = __webpack_require__("./node_modules/ngx-page-scroll/ngx-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_scrollreveal__ = __webpack_require__("./node_modules/ng-scrollreveal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__custom_components_custom_components_module__["a" /* CustomComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_page_scroll__["a" /* NgxPageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_scrollreveal__["a" /* NgsRevealModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BLOG_URL = "https://www.googleapis.com/blogger/v3/blogs/4562383522539686383/posts";
var BLOGGER_API_KEY = "AIzaSyBgiSne19z3sYYRp-KC7HZajqT4SSR9iDM";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    /**
     * getBlogData
     */
    ApiService.prototype.getBlogData = function () {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        param = param.append('key', BLOGGER_API_KEY);
        var opts = { params: param };
        return this.http.get(BLOG_URL, opts);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DbService = /** @class */ (function () {
    function DbService(db) {
        this.db = db;
    }
    DbService.prototype.getBooksFromDb = function () {
        return this.db.list('/books').valueChanges();
    };
    DbService.prototype.getAllJson = function () {
        return this.db.database.ref('/').once('value').then(function (snapshot) {
            var data = (snapshot.val()) || 'Anonymous';
            console.log('web', data);
            return data;
        });
    };
    DbService.prototype.getRecentEvents = function () {
        return this.db.list('/events').valueChanges();
    };
    DbService.prototype.getGalleryPhotoDetails = function () {
        return this.db.list('/listItems').valueChanges();
    };
    DbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_components_custom_components_module__ = __webpack_require__("./src/app/shared/custom-components/custom-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__ = __webpack_require__("./src/app/shared/layout/layout.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * It is important for shared module to have import and export
 * any module which is required by child modules
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__custom_components_custom_components_module__["a" /* CustomComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__["a" /* LayoutModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__custom_components_custom_components_module__["a" /* CustomComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__layout_layout_module__["a" /* LayoutModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAayEe57TVQEXrjcIFIPBsfWtOPxOG7TxM',
        authDomain: 'myweb-github.firebaseapp.com',
        databaseURL: 'https://myweb-github.firebaseio.com',
        projectId: 'myweb-github',
        storageBucket: '',
        messagingSenderId: '623432970845'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map