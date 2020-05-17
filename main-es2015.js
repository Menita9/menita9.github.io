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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-employee-details></app-employee-details>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee/employee-details/employee-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee/employee-details/employee-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Made Use of Bootstrap4 for the Employee Form with Template Driven validation-->\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 offset-md-2\">\r\n                <h3>Add Employees to the NGRX store</h3>\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && addNewEmployee(f)\" #f=\"ngForm\"  novalidate>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"id\">ID</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"id\" ngModel #id=\"ngModel\" [ngClass]=\"{ 'is-invalid': id.invalid && id.touched}\" required />\r\n                        <div *ngIf=\"id.touched&& id.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"id.errors.required\">ID is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">NAME</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"name\" ngModel #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': name.touched && name.invalid }\" required />\r\n                        <div *ngIf=\"name.touched&& name.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"name.errors.required\"> Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"address\">ADDRESS</label>\r\n                        <input type=\"text\" class=\"form-control\" name=\"address\" ngModel #address=\"ngModel\" [ngClass]=\"{ 'is-invalid': address.touched && address.invalid }\" required  />\r\n                        <div *ngIf=\"address.touched && address.invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"address.errors.required\">Address is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"department\">DEPARTMENT</label>\r\n                      <input type=\"text\" class=\"form-control\" name=\"department\" ngModel #department=\"ngModel\" [ngClass]=\"{ 'is-invalid': department.touched && department.invalid }\" required  />\r\n                      <div *ngIf=\"department.touched&& department.invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"department.errors.required\">Department is required</div>\r\n                      </div>\r\n                  </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <button class=\"btn btn-primary\">Register</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Displaying Employee Details in the STORE-->\r\n<div class=\"container\">\r\n  <h2>Employees Details</h2>\r\n  <p *ngIf='employeeDetails.length===0'>No Employees Added</p>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>NAME</th>\r\n        <th>ADDRESS</th>\r\n        <th>DEPARTMENT</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of employeeDetails;\">\r\n        <td>{{employee.ID}}</td>\r\n        <td>{{employee.name}}</td>\r\n        <td>{{employee.address}}</td>\r\n        <td>{{employee.department}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'employee-data';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_employee_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/employee/employee-details/employee-details.component */ "./src/app/employee/employee-details/employee-details.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_employee_employee_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/employee/employee.reducers */ "./src/app/employee/employee.reducers.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_employee_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({ employeeData: _app_employee_employee_reducers__WEBPACK_IMPORTED_MODULE_7__["reducer"] }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/employee/employee-details/employee-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/employee/employee-details/employee-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employee/employee-details/employee-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employee/employee-details/employee-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _employee_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.action */ "./src/app/employee/employee.action.ts");




let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor(store) {
        this.store = store;
        this.employeeDetails$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('employeeData'));
        // 'employeeData' is what we have added in app.module.ts to reference our Store
    }
    ngOnInit() {
        // subscribing to Employee State observable to fetch Data present in the store.
        this.employeeDetails$.subscribe((val) => {
            this.employeeDetails = val.EmployeeList;
            console.log(this.employeeDetails);
        });
    }
    addNewEmployee(employeedata) {
        const empData = {
            ID: employeedata.controls.id.value,
            name: employeedata.controls.name.value,
            address: employeedata.controls.address.value,
            department: employeedata.controls.department.value
        };
        // dispatching addEmployee action to add Employee Details in the store
        this.store.dispatch(_employee_action__WEBPACK_IMPORTED_MODULE_3__["addEmployee"]({ payload: empData }));
        employeedata.reset();
    }
};
EmployeeDetailsComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-details',
        template: __webpack_require__(/*! raw-loader!./employee-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee/employee-details/employee-details.component.html"),
        styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee/employee-details/employee-details.component.css")]
    })
], EmployeeDetailsComponent);



/***/ }),

/***/ "./src/app/employee/employee.action.ts":
/*!*********************************************!*\
  !*** ./src/app/employee/employee.action.ts ***!
  \*********************************************/
/*! exports provided: addEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployee", function() { return addEmployee; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const addEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Employee Data] Add new Employee', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/employee/employee.reducers.ts":
/*!***********************************************!*\
  !*** ./src/app/employee/employee.reducers.ts ***!
  \***********************************************/
/*! exports provided: initializeState, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeState", function() { return initializeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _employee_employee_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee/employee.action */ "./src/app/employee/employee.action.ts");


const initializeState = () => {
    return { EmployeeList: Array() };
};
const initialState = initializeState();
const employeeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_employee_employee_action__WEBPACK_IMPORTED_MODULE_1__["addEmployee"], (state, { payload }) => {
    return Object.assign({}, state, { EmployeeList: [...state.EmployeeList, payload] });
}));
function reducer(state, action) {
    return employeeReducer(state, action);
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Menita\employee-data\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map