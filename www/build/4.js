webpackJsonp([4],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPageModule", function() { return TncPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tnc__ = __webpack_require__(515);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TncPageModule = /** @class */ (function () {
    function TncPageModule() {
    }
    TncPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tnc__["a" /* TncPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tnc__["a" /* TncPage */]),
            ],
        })
    ], TncPageModule);
    return TncPageModule;
}());

//# sourceMappingURL=tnc.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TncPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TncPage = /** @class */ (function () {
    function TncPage(platform, NP, viewCtrl, loadingCtrl) {
        this.platform = platform;
        this.NP = NP;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    TncPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        //this.ionicApp._modalPortal.getActive().dismiss();
    };
    TncPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tnc',template:/*ion-inline-start:"C:\Users\user\IonicProject\imgood\src\pages\tnc\tnc.html"*/'<ion-header class="bg">\n  <ion-toolbar>\n    <ion-title text-wrap class="head">\n      Counselling Terms\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close-circle" color="dark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="content">\n  <h2 class="head" text-wrap>INFORMED CONSENT FOR CLIENTS TO UNDERGO COUNSELLING SESSION</h2>\n  <p class="people2" text-wrap><span style="color: red;">*</span> The application should be submitted at least 1 working days before the date of appointment.</p>\n  <h2 class="people" text-wrap>1. COUNSELLING PERIOD HELD</h2>\n  <p class="people2" text-wrap>Individual counselling sessions will be held for 40 minutes to 1 hour according to the needs of the session.</p>\n  <br>\n  <h2 class="people" text-wrap>2. CONFIDENTIALITY AND LIMITATION OF CONFIDENTIALITY</h2>\n  <p class="people2" text-wrap>a)  	When you are refered to a specific medical treatment. In some cases, information of the reasons for the treatment should also be disclosed.</p>\n  <p class="people2" text-wrap>b)  	If ordered by the court.</p>\n  <p class="people2" text-wrap>c)  	Threatening a person\'s life (including your own life).</p>\n  <p class="people2" text-wrap>d)  	Providing consultation to trainees.</p>\n  <p class="people2" text-wrap>e)  	Inform your progress and what kind of counselling you received to the medical doctor if you are referred by medical doctors.</p>\n  <p class="people2" text-wrap>f)  	If you are suffering from psychological problems, your sessions report will be referred to a Psychiatrist.</p>\n  <p class="people2" text-wrap>g)  	Discussions with the Head of Department or colleagues for your growth and development.</p>\n  <br>\n  <h2 class="people" text-wrap>3. RESPONSIBILITIES AND RIGHTS AS A CLIENT</h2>\n  <p class="people2" text-wrap>a) Cooperate and be honest during the session.</p>\n  <p class="people2" text-wrap>b) Working diligently to resolve the issue.</p>\n  <p class="people2" text-wrap>c) Inform in advance if unable to attend counselling appointments.</p>\n  <p class="people2" text-wrap>d) You also have the right to withdraw and / or refer to other Psychology Officer if you do not feel comfortable with me.</p>\n  <p class="people2" text-wrap>e) You have the right to know your recorded information of the session.</p>\n  <br>\n  <h2 class="people" text-wrap>4. PSYCHOLOGY OFFICER RESPONSIBILITIES</h2>\n  <p class="people2" text-wrap>In counselling sessions, I, who serve as a Psychology Officer, will assist you in resolving addressed issues / problems by respecting your dignity, value and capability. If you fail to attend our designated appointment repeatedly, I am entitled to terminate the session / refer you to another Psychology Officer and if your issue is beyond my ability, I will refer you to another Psychology Officer with your consent as a client first. If a recording of the session has to be made, I will ask for your permission before start recording.</p>\n  <br>\n  <h2 class="people" text-wrap>5. CONSENT TO UNDERGO COUNSELLING</h2>\n  <p class="people2" text-wrap>I have read and understood all the above statements and got the opportunity to ask questions and agree to begin counseling session.</p>\n  <br>\n  <button ion-button color="dark" (click)="dismiss()" full> Return </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\IonicProject\imgood\src\pages\tnc\tnc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TncPage);
    return TncPage;
}());

//# sourceMappingURL=tnc.js.map

/***/ })

});
//# sourceMappingURL=4.js.map