(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_kb_entry_new_kb_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-kb-entry/new-kb-entry.component */ "./src/app/new-kb-entry/new-kb-entry.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: '', component: _new_kb_entry_new_kb_entry_component__WEBPACK_IMPORTED_MODULE_1__["NewKbEntryComponent"] },
    { path: 'newentry', component: _new_kb_entry_new_kb_entry_component__WEBPACK_IMPORTED_MODULE_1__["NewKbEntryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h1>\r\n        Welcome to {{title}}!\r\n    </h1>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    // users: any[] = [];
    function AppComponent(databaseService) {
        this.databaseService = databaseService;
        this.title = 'Tribal Knowledge';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.databaseService.getUsers().subscribe((users: any[]) => {
        //   console.log(users);
        //   this.users = users;
        // });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'kb-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_kb_entry_new_kb_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-kb-entry/new-kb-entry.component */ "./src/app/new-kb-entry/new-kb-entry.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _new_kb_entry_new_kb_entry_component__WEBPACK_IMPORTED_MODULE_8__["NewKbEntryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category.ts":
/*!*****************************!*\
  !*** ./src/app/category.ts ***!
  \*****************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category() {
        this.categoryCd = null;
        this.categoryNm = null;
        this.categoryDs = null;
        this.knowledgebaseEntry = null;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DatabaseService = /** @class */ (function () {
    function DatabaseService(httpService) {
        this.httpService = httpService;
        this._url = "/api/v1/";
    }
    DatabaseService.prototype.getUsers = function () {
        return this.httpService.get(this._url + "users");
    };
    DatabaseService.prototype.saveKbEntry = function (entry) {
        return this.httpService.post(this._url + "addkbentry", entry);
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/knowledgebase-entry.ts":
/*!****************************************!*\
  !*** ./src/app/knowledgebase-entry.ts ***!
  \****************************************/
/*! exports provided: KnowledgebaseEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgebaseEntry", function() { return KnowledgebaseEntry; });
var KnowledgebaseEntry = /** @class */ (function () {
    function KnowledgebaseEntry() {
        this.id = -1;
        this.title = null;
        this.longDescription = null;
        this.category = null;
    }
    return KnowledgebaseEntry;
}());



/***/ }),

/***/ "./src/app/new-kb-entry/new-kb-entry.component.css":
/*!*********************************************************!*\
  !*** ./src/app/new-kb-entry/new-kb-entry.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1rYi1lbnRyeS9uZXcta2ItZW50cnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new-kb-entry/new-kb-entry.component.html":
/*!**********************************************************!*\
  !*** ./src/app/new-kb-entry/new-kb-entry.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"initializing\" class=\"container\">\n  {{initializingMessage}}\n</div>\n<div *ngIf=\"!initializing\" class=\"container\">\n  <form class=\"mr-3 mb-2\">\n    <div class=\"form-group\">\n      <label class=\"mr-2\" for=\"newcategorycd\">New Category Code:</label>\n      <input type=\"text\" class=\"form-control\" id=\"newcategorycd\" name=\"newcategorycd\" [(ngModel)]=\"newCategoryCd\">\n      <label class=\"mr-2\" for=\"newcategorynm\">New Category Name:</label>\n      <input type=\"text\" class=\"form-control\" id=\"newcategorynm\" name=\"newcategorynm\" [(ngModel)]=\"newCategoryNm\">\n    </div>\n    <!-- <div class=\"form-group\">\n      <label class=\"mr-2\" for=\"existingcategory\">Existing Category:</label>\n      <select class=\"form-control\" id=\"existingcategory\" name=\"existingcategory\" [(ngModel)]=\"todo.category\">\n        <option value=\"NOSELECTION\"></option>\n        <option *ngFor=\"let category of categories\" value=\"{{category}}\">{{category}}</option>\n      </select>\n    </div> -->\n    <div class=\"form-group mr-3\">\n      <label class=\"mr-2\" for=\"title\">Title:</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"kb.title\">\n    </div>\n    <div class=\"form-group mr-3\">\n      <label class=\"mr-2\" for=\"desc\">Description:</label>\n      <textarea class=\"form-control\" name=\"desc\" id=\"desc\" name=\"desc\" cols=\"20\" rows=\"5\" [(ngModel)]=\"kb.longDescription\"></textarea>\n    </div>\n    <div class=\"form-group mr-3\" *ngIf=\"errorMessage !== null\" style=\"padding: 10px !important;\">\n      <font color=\"red\"><b>{{errorMessage}}</b></font>\n    </div>\n    <button type=\"button\" (click)=\"saveKbEntry()\" class=\"btn btn-primary mr-2\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/new-kb-entry/new-kb-entry.component.ts":
/*!********************************************************!*\
  !*** ./src/app/new-kb-entry/new-kb-entry.component.ts ***!
  \********************************************************/
/*! exports provided: NewKbEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewKbEntryComponent", function() { return NewKbEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _knowledgebase_entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../knowledgebase-entry */ "./src/app/knowledgebase-entry.ts");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../category */ "./src/app/category.ts");






var NewKbEntryComponent = /** @class */ (function () {
    function NewKbEntryComponent(databaseService, route) {
        this.databaseService = databaseService;
        this.route = route;
        this.initializing = false;
        this.initializingMessage = null;
        this.errorMessage = null;
        this.categories = [];
        this.newCategoryNm = null;
        this.newCategoryCd = null;
        this.kb = new _knowledgebase_entry__WEBPACK_IMPORTED_MODULE_4__["KnowledgebaseEntry"]();
    }
    NewKbEntryComponent.prototype.ngOnInit = function () {
    };
    NewKbEntryComponent.prototype.saveKbEntry = function () {
        console.log("Here is the kb to be saved:");
        this.kb.category = new _category__WEBPACK_IMPORTED_MODULE_5__["Category"]();
        this.kb.category.categoryCd = this.newCategoryCd;
        this.kb.category.categoryNm = this.newCategoryNm;
        console.log(this.kb);
        this.databaseService.saveKbEntry(this.kb).subscribe(function (returnedEntry) {
            console.log("Here is the entry I got back:");
            console.log(returnedEntry);
        });
    };
    NewKbEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kb-new-kb-entry',
            template: __webpack_require__(/*! ./new-kb-entry.component.html */ "./src/app/new-kb-entry/new-kb-entry.component.html"),
            styles: [__webpack_require__(/*! ./new-kb-entry.component.css */ "./src/app/new-kb-entry/new-kb-entry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewKbEntryComponent);
    return NewKbEntryComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\backup\code\spring-boot\tribal.knowledge\src\main\webapp\kb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map