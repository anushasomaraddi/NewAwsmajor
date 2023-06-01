(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anusha\Downloads\SecureQuiz\quiz\src\main.ts */"zUnb");


/***/ }),

/***/ "0/SE":
/*!************************************************************!*\
  !*** ./src/app/teacher/createquiz/createquiz.component.ts ***!
  \************************************************************/
/*! exports provided: CreatequizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatequizComponent", function() { return CreatequizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreatequizComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.msg);
} }
class CreatequizComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
    }
    ngOnInit() {
    }
    createQuiz(f) {
        this.teacherService.createQuiz(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/teacher/uploadquiz']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
CreatequizComponent.ɵfac = function CreatequizComponent_Factory(t) { return new (t || CreatequizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreatequizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatequizComponent, selectors: [["app-createquiz"]], decls: 17, vars: 2, consts: [[1, "container", "mt-5"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "quizname"], ["type", "text", "name", "quizname", "autocomplete", "off", "id", "quizname", "ngModel", "", "required", "", 1, "form-control"], ["quizname", "ngModel"], ["for", "description"], ["type", "text", "autocomplete", "off", "name", "description", "id", "description", "ngModel", "", "required", "", 1, "form-control"], ["description", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function CreatequizComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatequizComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createQuiz(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quizname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CreatequizComponent_p_16_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["label[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n  padding: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]{\r\n  background-color: #0a192f;\r\n  font-weight: 600;\r\n  outline: none;\r\n  border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jcmVhdGVxdWl6L2NyZWF0ZXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY3JlYXRlcXVpei9jcmVhdGVxdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5idXR0b257XHJcblxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatequizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-createquiz',
                templateUrl: './createquiz.component.html',
                styleUrls: ['./createquiz.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "11p2":
/*!****************************************************!*\
  !*** ./src/app/admin/teacher/teacher.component.ts ***!
  \****************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function TeacherComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TeacherComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TeacherComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherComponent_ng_template_11_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.block(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.unblock(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r9.blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r9.blocked);
} }
function TeacherComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TeacherComponent_ng_template_11_ng_template_1_tr_12_Template, 11, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.users);
} }
function TeacherComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeacherComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherComponent_ng_template_11_ng_template_1_Template, 13, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class TeacherComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.msg = [];
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.seeteacher()
            .subscribe(data => {
            if (data['user']) {
                this.loading = false;
                this.users = data['user'];
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.adminService.blockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.adminService.unblockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
TeacherComponent.ɵfac = function TeacherComponent_Factory(t) { return new (t || TeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherComponent, selectors: [["app-teacher"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-link", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["aria-hidden", "true", 1, "fa", "fa-unlock"]], template: function TeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TeacherComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TeacherComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeacherComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nvertical-align: middle;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdGVhY2hlci90ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcbip7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4udGFibGV7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbnRoLHRke1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaHRtbCxib2R5e1xyXG5cclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmg0LGg1e1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher',
                templateUrl: './teacher.component.html',
                styleUrls: ['./teacher.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "17Sp":
/*!**************************************!*\
  !*** ./src/app/admin/admin.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class AdminGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('admin') == "yes") {
                if (localStorage.getItem('teacher') == "no") {
                    if (localStorage.getItem('student') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "1M0h":
/*!****************************************************************!*\
  !*** ./src/app/admin/view-question/view-question.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuestionComponent", function() { return ViewQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function ViewQuestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ViewQuestionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function ViewQuestionComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Question in the Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewQuestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r13 + 1, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r12.optionText);
} }
function ViewQuestionComponent_ng_template_10_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewQuestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewQuestionComponent_ng_template_10_ng_template_1_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const one_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.delete(one_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Q", j_r10 + 1, " - ", one_r9.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", one_r9.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer :- ", one_r9.answer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.del);
} }
function ViewQuestionComponent_ng_template_10_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewQuestionComponent_ng_template_10_ng_template_1_div_0_Template, 13, 5, "div", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allQuestions);
} }
function ViewQuestionComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewQuestionComponent_ng_template_10_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewQuestionComponent_ng_template_10_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class ViewQuestionComponent {
    // authSubscription: Subscription;
    constructor(admminService, router) {
        this.admminService = admminService;
        this.router = router;
        this.empty = true;
    }
    ngOnInit() {
        this.load = true;
        this.empty = true;
        if (this.admminService.getQuizId() == undefined) {
            this.router.navigate(['/admin/adminhome']);
        }
        else {
            if (this.admminService.getDelete() == undefined) {
                this.router.navigate(['/admin/adminhome']);
            }
            else {
                this.del = this.admminService.getDelete();
                this.quizid = this.admminService.getQuizId();
                this.getAllQuestions(this.quizid);
            }
        }
    }
    delete(one) {
        this.admminService.deleteQuestion(one._id)
            .subscribe(data => {
            this.getAllQuestions(this.quizid);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    getAllQuestions(quizid) {
        // console.log("hahaha");
        // console.log(quizid);
        this.admminService.getAllQuestion(quizid)
            .subscribe(data => {
            if (data['msg']) {
                this.allQuestions = data['msg'];
                this.load = false;
                if (!this.allQuestions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
ViewQuestionComponent.ɵfac = function ViewQuestionComponent_Factory(t) { return new (t || ViewQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewQuestionComponent, selectors: [["app-view-question"]], decls: 12, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [4, "ngFor", "ngForOf"], [1, "container", "mt-sm-5", "my-1"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], [1, "options"], [1, "d-flex", "align-items-center", "py-2", 2, "position", "relative", "margin-top", "20px"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"]], template: function ViewQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewQuestionComponent_div_7_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewQuestionComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewQuestionComponent_ng_template_10_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    background-color:#f1f1f1;\r\n    color: #0a192f;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    max-width: 800px;\r\n\r\n}\r\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    color: #0a192f;\r\n\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  font-weight: bolder;\r\n  font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy1xdWVzdGlvbi92aWV3LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCOztBQUUxQjtBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7O0FBRXBCO0FBR0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlldy1xdWVzdGlvbi92aWV3LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzBhMTkyZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcj5wIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICMwYTE5MmY7XHJcblxyXG59XHJcbmg0LGg1e1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI29wdGlvbnMgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-question',
                templateUrl: './view-question.component.html',
                styleUrls: ['./view-question.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "4+a0":
/*!********************************************************!*\
  !*** ./src/app/index/indexmain/indexmain.component.ts ***!
  \********************************************************/
/*! exports provided: IndexmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexmainComponent", function() { return IndexmainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indexnav/indexnav.component */ "l08C");
/* harmony import */ var _indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indexheader/indexheader.component */ "MTG3");




class IndexmainComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexmainComponent.ɵfac = function IndexmainComponent_Factory(t) { return new (t || IndexmainComponent)(); };
IndexmainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexmainComponent, selectors: [["app-indexmain"]], decls: 2, vars: 0, template: function IndexmainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexheader");
    } }, directives: [_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"], _indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_2__["IndexheaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4bWFpbi9pbmRleG1haW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexmainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indexmain',
                templateUrl: './indexmain.component.html',
                styleUrls: ['./indexmain.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "44tp":
/*!********************************************************************!*\
  !*** ./src/app/teacher/addquestioncta/addquestioncta.component.ts ***!
  \********************************************************************/
/*! exports provided: AddquestionctaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionctaComponent", function() { return AddquestionctaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddquestionctaComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.msg, " ");
} }
class AddquestionctaComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.options = [];
    }
    ngOnInit() {
        if (this.teacherService.getQuesId() == undefined) {
            this.router.navigate(['/teacher/ctaupload']);
        }
        else {
            this.quesid = this.teacherService.getQuesId();
        }
    }
    addQuestioncta(f) {
        // console.log(this.options);
        this.obj = {
            quesid: this.quesid,
            questionText: f.controls.questionText.value,
        };
        // console.log(this.obj);
        this.teacherService.addQuestioncta(this.obj).subscribe((data) => {
            // console.log(data);
            this.router.navigate(['/teacher/ctaupload']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
AddquestionctaComponent.ɵfac = function AddquestionctaComponent_Factory(t) { return new (t || AddquestionctaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddquestionctaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddquestionctaComponent, selectors: [["app-addquestioncta"]], decls: 12, vars: 2, consts: [[1, "container", "mt-5"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "questionText"], ["type", "text", "name", "questionText", "autocomplete", "off", "id", "questionText", "ngModel", "", "required", "", 1, "form-control"], ["questionText", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "social-text", "style", "color: red; font-weight: bold; font-size: 20px", 4, "ngIf"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function AddquestionctaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddquestionctaComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.addQuestioncta(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddquestionctaComponent_p_11_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["label[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  padding: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #0a192f;\r\n  font-weight: 600;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9hZGRxdWVzdGlvbmN0YS9hZGRxdWVzdGlvbmN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvYWRkcXVlc3Rpb25jdGEvYWRkcXVlc3Rpb25jdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMTkyZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBpbnB1dCAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddquestionctaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addquestioncta',
                templateUrl: './addquestioncta.component.html',
                styleUrls: ['./addquestioncta.component.css'],
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "4An4":
/*!********************************************************************!*\
  !*** ./src/app/teacher/seequestioncta/seequestioncta.component.ts ***!
  \********************************************************************/
/*! exports provided: SeequestionctaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeequestionctaComponent", function() { return SeequestionctaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function SeequestionctaComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SeequestionctaComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function SeequestionctaComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Not found any Question in the Quiz!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SeequestionctaComponent_ng_template_10_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeequestionctaComponent_ng_template_10_ng_template_1_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const one_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.delete(one_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Q", j_r10 + 1, " - ", one_r9.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.del);
} }
function SeequestionctaComponent_ng_template_10_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeequestionctaComponent_ng_template_10_ng_template_1_div_0_Template, 8, 3, "div", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allQuestions);
} }
function SeequestionctaComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeequestionctaComponent_ng_template_10_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeequestionctaComponent_ng_template_10_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class SeequestionctaComponent {
    // authSubscription: Subscription;
    constructor(teacherService, router, route) {
        this.teacherService = teacherService;
        this.router = router;
        this.route = route;
        this.empty = true;
    }
    ngOnInit() {
        this.load = true;
        this.empty = true;
        if (this.teacherService.getQuesId() == undefined) {
            this.router.navigate(['/teacher/teacherhome']);
        }
        else {
            if (this.teacherService.getDeleteQues() == undefined) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.del = this.teacherService.getDeleteQues();
                this.quesid = this.teacherService.getQuesId();
                // console.log(this.del);
                this.getAllQuestions(this.quesid);
            }
        }
        // this.authSubscription = this.route.queryParams.subscribe(
        //   (params: Params) => {
        //     console.log("heyy");
        //     console.log(params);
        //   });
    }
    delete(one) {
        this.teacherService.deleteQuestioncta(one._id).subscribe((data) => {
            // console.log(data);
            this.getAllQuestions(this.quesid);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    getAllQuestions(quesid) {
        // console.log("hahaha");
        // console.log(quizid);
        this.teacherService.getAllQuestioncta(quesid).subscribe((data) => {
            if (data['msg']) {
                this.allQuestions = data['msg'];
                this.load = false;
                if (!this.allQuestions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // this.one =  this.allQuestions[0]
            // console.log(this.allQuestions);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
SeequestionctaComponent.ɵfac = function SeequestionctaComponent_Factory(t) { return new (t || SeequestionctaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SeequestionctaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeequestionctaComponent, selectors: [["app-seequestioncta"]], decls: 12, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [4, "ngFor", "ngForOf"], [1, "container", "mt-sm-5", "my-1"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2"], [1, "btn", "btn-danger", 3, "disabled", "click"]], template: function SeequestionctaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SeequestionctaComponent_div_7_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SeequestionctaComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SeequestionctaComponent_ng_template_10_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: #f1f1f1;\r\n  color: #0a192f;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  max-width: 800px;\r\n}\r\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #0a192f;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 15px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  font-weight: bolder;\r\n  font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9zZWVxdWVzdGlvbmN0YS9zZWVxdWVzdGlvbmN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL3NlZXF1ZXN0aW9uY3RhL3NlZXF1ZXN0aW9uY3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBjb2xvcjogIzBhMTkyZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiBwIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbn1cclxuaDQsXHJcbmg1IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ub3B0aW9ucyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jb3B0aW9ucyBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeequestionctaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seequestioncta',
                templateUrl: './seequestioncta.component.html',
                styleUrls: ['./seequestioncta.component.css'],
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "5xLU":
/*!******************************************************************!*\
  !*** ./src/app/error/notfound-error/notfound-error.component.ts ***!
  \******************************************************************/
/*! exports provided: NotfoundErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundErrorComponent", function() { return NotfoundErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");



class NotfoundErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundErrorComponent.ɵfac = function NotfoundErrorComponent_Factory(t) { return new (t || NotfoundErrorComponent)(); };
NotfoundErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundErrorComponent, selectors: [["app-notfound-error"]], decls: 6, vars: 0, consts: [[2, "overflow-x", "hidden"], [1, "text-center", "mt-5", 2, "color", "#2f2e41"], [1, "d-flex", "justify-content-center", "mt-3"], ["src", "https://storage.googleapis.com/canteen-assets/index/404y.svg", "alt", "", 1, "img-fluid", 2, "max-height", "500px"]], template: function NotfoundErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! we can't find that page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n}\r\n@media (max-width: 767px) {\r\n  h3[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Ivbm90Zm91bmQtZXJyb3Ivbm90Zm91bmQtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9ub3Rmb3VuZC1lcnJvci9ub3Rmb3VuZC1lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIGgze1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound-error',
                templateUrl: './notfound-error.component.html',
                styleUrls: ['./notfound-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8fTH":
/*!**************************************************************!*\
  !*** ./src/app/teacher/seequestion/seequestion.component.ts ***!
  \**************************************************************/
/*! exports provided: SeequestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeequestionComponent", function() { return SeequestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function SeequestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SeequestionComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function SeequestionComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Question in the Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SeequestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r13 + 1, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r12.optionText);
} }
function SeequestionComponent_ng_template_10_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SeequestionComponent_ng_template_10_ng_template_1_div_0_div_6_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeequestionComponent_ng_template_10_ng_template_1_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const one_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.delete(one_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Q", j_r10 + 1, " - ", one_r9.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", one_r9.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Answer :- ", one_r9.answer, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.del);
} }
function SeequestionComponent_ng_template_10_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeequestionComponent_ng_template_10_ng_template_1_div_0_Template, 13, 5, "div", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allQuestions);
} }
function SeequestionComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeequestionComponent_ng_template_10_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeequestionComponent_ng_template_10_ng_template_1_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class SeequestionComponent {
    // authSubscription: Subscription;
    constructor(teacherService, router, route) {
        this.teacherService = teacherService;
        this.router = router;
        this.route = route;
        this.empty = true;
    }
    ngOnInit() {
        this.load = true;
        this.empty = true;
        if (this.teacherService.getQuizId() == undefined) {
            this.router.navigate(['/teacher/teacherhome']);
        }
        else {
            if (this.teacherService.getDelete() == undefined) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.del = this.teacherService.getDelete();
                this.quizid = this.teacherService.getQuizId();
                // console.log(this.del);
                this.getAllQuestions(this.quizid);
            }
        }
        // this.authSubscription = this.route.queryParams.subscribe(
        //   (params: Params) => {
        //     console.log("heyy");
        //     console.log(params);
        //   });
    }
    delete(one) {
        this.teacherService.deleteQuestion(one._id)
            .subscribe(data => {
            // console.log(data);
            this.getAllQuestions(this.quizid);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    getAllQuestions(quizid) {
        // console.log("hahaha");
        // console.log(quizid);
        this.teacherService.getAllQuestion(quizid)
            .subscribe(data => {
            if (data['msg']) {
                this.allQuestions = data['msg'];
                this.load = false;
                if (!this.allQuestions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // this.one =  this.allQuestions[0]
            // console.log(this.allQuestions);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
SeequestionComponent.ɵfac = function SeequestionComponent_Factory(t) { return new (t || SeequestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SeequestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeequestionComponent, selectors: [["app-seequestion"]], decls: 12, vars: 3, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [4, "ngFor", "ngForOf"], [1, "container", "mt-sm-5", "my-1"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], [1, "options"], [1, "d-flex", "align-items-center", "py-2", 2, "position", "relative", "margin-top", "20px"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"]], template: function SeequestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SeequestionComponent_div_7_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SeequestionComponent_ng_template_8_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SeequestionComponent_ng_template_10_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    background-color:#f1f1f1;\r\n    color: #0a192f;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    max-width: 800px;\r\n\r\n}\r\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    color: #0a192f;\r\n\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  font-weight: bolder;\r\n  font-size: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9zZWVxdWVzdGlvbi9zZWVxdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjs7QUFFMUI7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7O0FBRWxCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvc2VlcXVlc3Rpb24vc2VlcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMGExOTJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyPnAge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzBhMTkyZjtcclxuXHJcbn1cclxuaDQsaDV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm9wdGlvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jb3B0aW9ucyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc3BhbntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeequestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seequestion',
                templateUrl: './seequestion.component.html',
                styleUrls: ['./seequestion.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "9fHA":
/*!************************************************************!*\
  !*** ./src/app/teacher/uploadquiz/uploadquiz.component.ts ***!
  \************************************************************/
/*! exports provided: UploadquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadquizComponent", function() { return UploadquizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function UploadquizComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function UploadquizComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function UploadquizComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Not found any created Quiz!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadquizComponent_ng_template_11_ng_template_1_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.msg, " ");
} }
function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.viewQuestion(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.viewQuestion(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.add(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.upload(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.delete(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.quizdescription);
} }
function UploadquizComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UploadquizComponent_ng_template_11_ng_template_1_p_0_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "See Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UploadquizComponent_ng_template_11_ng_template_1_tr_19_Template, 19, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.avail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.quiz);
} }
function UploadquizComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UploadquizComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadquizComponent_ng_template_11_ng_template_1_Template, 20, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class UploadquizComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.getuploadquiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.quiz = data['quiz'];
                if (!this.quiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    add(quiz) {
        this.teacherService.setQuizId(quiz._id);
        this.router.navigate(['/teacher/addquestion']);
    }
    upload(quiz) {
        // console.log("upload");
        // console.log(quiz);
        // console.log(quiz._id);
        this.teacherService.uploadquiz(quiz._id)
            .subscribe(data => {
            // this.quiz = data['quiz']
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['message']) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.msg = "something went wrong!!";
                this.avail = true;
                return;
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    delete(quiz) {
        this.teacherService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.teacherService.setQuizId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestion']);
    }
}
UploadquizComponent.ɵfac = function UploadquizComponent_Factory(t) { return new (t || UploadquizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UploadquizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadquizComponent, selectors: [["app-uploadquiz"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["style", "\n            color: red;\n            font-weight: bold;\n            font-size: 20px;\n            text-align: center;\n            margin-top: 50px;\n          ", 4, "ngIf"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "color", "red", "font-weight", "bold", "font-size", "20px", "text-align", "center", "margin-top", "50px"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f", 3, "click"]], template: function UploadquizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadquizComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UploadquizComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UploadquizComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #0a192f;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\ntext-align: center;\r\n\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  outline: none;\r\n\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci91cGxvYWRxdWl6L3VwbG9hZHF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFDL0UsNkdBQTZHO0FBQzdHO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QjtBQUVBO0VBQ0UsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL3VwbG9hZHF1aXovdXBsb2FkcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4qe1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG50aCx0ZHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG4vKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG59XHJcbmh0bWwsYm9keXtcclxuXHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxufVxyXG5oNCxoNXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzBhMTkyZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadquizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uploadquiz',
                templateUrl: './uploadquiz.component.html',
                styleUrls: ['./uploadquiz.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AJ6+":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000/admin/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    seestudent() {
        return this.http.get(this.baseUri + "seestudent", { headers: this.headers });
    }
    seeteacher() {
        return this.http.get(this.baseUri + "seeteacher", { headers: this.headers });
    }
    blockuser(id) {
        return this.http.delete(this.baseUri + "blockuser/" + id, { headers: this.headers });
    }
    unblockuser(id) {
        return this.http.delete(this.baseUri + "unblockuser/" + id, { headers: this.headers });
    }
    getAllQuiz() {
        return this.http.get(this.baseUri + "getallquiz", { headers: this.headers });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    setDelete(data) {
        this.delete = data;
    }
    getDelete() {
        return this.delete;
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
    }
    deletequiz(id) {
        return this.http.delete(this.baseUri + "deletequiz/" + id, { headers: this.headers });
    }
    deleteQuestion(id) {
        return this.http.delete(this.baseUri + "deletequestion/" + id, { headers: this.headers });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "BWLr":
/*!**************************************************************!*\
  !*** ./src/app/error/server-error/server-error.component.ts ***!
  \**************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");



class ServerErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(); };
ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 6, vars: 0, consts: [[2, "overflow-x", "hidden"], [1, "text-center", "mt-5", "animated", "pulse", "infinite", 2, "color", "#2f2e41"], [1, "d-flex", "justify-content-center", "mt-3"], ["src", "https://storage.googleapis.com/canteen-assets/index/serverError.svg", "alt", "", 1, "img-fluid", 2, "max-height", "500px"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Opps! Server Down / Server Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n}\r\n@media (max-width: 767px) {\r\n  h3[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Ivc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-error',
                templateUrl: './server-error.component.html',
                styleUrls: ['./server-error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BvBR":
/*!***************************************************************!*\
  !*** ./src/app/auth/login-teacher/login-teacher.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginTeacherComponent", function() { return LoginTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");

// import { catchError, retry } from 'rxjs/operators';







function LoginTeacherComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.msg, " ");
} }
function LoginTeacherComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.msg, " ");
} }
const _c0 = function () { return ["/reset"]; };
class LoginTeacherComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-in-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").addClass("sign-up-mode");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-up-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").removeClass("sign-up-mode");
            });
        });
    }
    signinup() {
        // console.log("hello1");
        this.msg = "";
        this.avail = false;
    }
    onSubmitRegister(f) {
        // for (var val of this.arr) {
        //   var a = val['email'];
        //   var b = f.controls.email.value;
        //   if (a == b) {
        //     this.msg = "User already exist with this user name (email)!!";
        //     this.avail = true;
        //     return;
        //   }
        // }
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password   doesn't match";
            this.avail = true;
            return;
        }
        if (!f.valid) {
            this.msg = "Invalid Form Fields";
            this.avail = true;
            return;
        }
        this.authService.registerTeacher(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            // this.authService.msg = "successfully registered a user!";
            window.location.reload();
            this.router.navigate(['/teacher']);
        }, error => { this.router.navigate(['/error']); });
    }
    onSubmitLogin(f) {
        if (!f.valid) {
            this.msg = "Invalid Email or Password";
            this.avail = true;
            return;
        }
        this.authService.login(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['role'] == "admin") {
                // console.log("admin");
                localStorage.setItem('token', data['token']);
                localStorage.setItem('admin', 'yes');
                localStorage.setItem('student', 'no');
                localStorage.setItem('teacher', 'no');
                // this.router.navigate(['/admin']);
                // this.router.navigate(['/']);
                this.router.navigate(['/admin/adminhome']);
            }
            else if (data['role'] == "student") {
                // console.log("student")
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    // console.log("not blocked");
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'yes');
                    localStorage.setItem('teacher', 'no');
                    this.router.navigate(['/student/studenthome']);
                }
                // this.router.navigate(['/']);
            }
            else {
                // console.log("teacher");
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'no');
                    localStorage.setItem('teacher', 'yes');
                    this.router.navigate(['/teacher/teacherhome']);
                }
            }
        }, error => { this.router.navigate(['/error']); });
    }
}
LoginTeacherComponent.ɵfac = function LoginTeacherComponent_Factory(t) { return new (t || LoginTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginTeacherComponent, selectors: [["app-login-teacher"]], decls: 62, vars: 6, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p1", "ngModel"], ["type", "submit", "value", "Login", 1, "btn", "solid", 3, "disabled"], [1, "social-text", 2, "font-weight", "bold"], [3, "routerLink"], ["class", "social-text", "style", "color: red; font-weight: bold; font-size: 20px", 4, "ngIf"], [1, "sign-in-form", 3, "ngSubmit"], ["f", "ngForm"], ["type", "email", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "email", "", "spellcheck", "false", "ngModel", "", "required", ""], [1, "fas", "fa-phone"], ["type", "text", "placeholder", "Mobile no", "name", "phone", "pattern", "^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "ngModel", "", "required", ""], ["phone", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Re-enter Password", "name", "p2", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p2", "ngModel"], ["type", "submit", "value", "Sign up", 1, "btn", 3, "disabled"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-in-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/s2.png", "alt", "", 1, "image"], [1, "panel", "right-panel"], ["id", "sign-up-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/s1.png", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function LoginTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginTeacherComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginTeacherComponent_p_20_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginTeacherComponent_Template_form_ngSubmit_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx.onSubmitRegister(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Faculty Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LoginTeacherComponent_p_42_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "One of us ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginTeacherComponent_Template_button_click_50_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Faculty ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginTeacherComponent_Template_button_click_59_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  min-height: 92vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.forms-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.signin-signup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  left: 75%;\r\n  width: 50%;\r\n  transition: 1s 0.7s ease-in-out;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  z-index: 5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0rem 5rem;\r\n  transition: all 0.2s 0.7s;\r\n  overflow: hidden;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\nform.sign-in-form[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 2.2rem;\r\n  color:#0a192f;\r\n  margin-bottom: 10px;\r\n  \r\n  \r\n}\r\n\r\n@keyframes vibrate-1 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  40% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  60% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  width: 100%;\r\n  background-color: #f0f0f0;\r\n  margin: 10px 0;\r\n\r\n  height: 55px;\r\n  border-radius: 55px;\r\n  display: grid;\r\n  grid-template-columns: 15% 85%;\r\n  padding: 0 0.4rem;\r\n  position: relative;\r\n  transition: 0.4s ease;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  line-height: 55px;\r\n  color: #0a192f;\r\n  \r\n  transition: 0.5s;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color:#0a192f;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #aaa;\r\n  font-weight: 500;\r\n}\r\n\r\n.social-text[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #0a192f;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n  text-decoration: none;\r\n  color: #0a192f;\r\n}\r\n\r\n.social-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%] {\r\n  height: 46px;\r\n  width: 46px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 0.45rem;\r\n  color: #333;\r\n  border-radius: 50%;\r\n  border: 1px solid #333;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover {\r\n  color: #4481eb;\r\n  border-color: #4481eb;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  background-color:white;\r\n  border: none;\r\n  outline: none;\r\n  height: 49px;\r\n  border-radius: 49px;\r\n  color: black;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  animation: heartbeat 1.5s ease-in-out infinite both;\r\n}\r\n\r\n@keyframes heartbeat {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: center center;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  10% {\r\n    transform: scale(0.91);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  17% {\r\n    transform: scale(0.98);\r\n    animation-timing-function: ease-out;\r\n  }\r\n  33% {\r\n    transform: scale(0.87);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n.panels-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2000px;\r\n  width: 2000px;\r\n  top: -10%;\r\n  right: 48%;\r\n  transform: translateY(-50%);\r\n  \r\n  \r\n  \r\n\r\n  transition: 1.8s ease-in-out;\r\n  border-radius: 50%;\r\n  z-index: 6;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transition: transform 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n  padding: 3rem 17% 2rem 12%;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  padding: 3rem 12% 2rem 17%;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  color: black;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition-delay: 0.6s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.btn.transparent[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  background: white;\r\n  border: 2px solid black;\r\n  width: 130px;\r\n  height: 41px;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(800px);\r\n}\r\n\r\n\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n  transform: translate(100%, -50%);\r\n  right: 52%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(-800px);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n}\r\n\r\n@media (max-width: 870px) {\r\n  .containerr[_ngcontent-%COMP%] {\r\n    min-height: 800px;\r\n    height: 100vh;\r\n  }\r\n  .signin-signup[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    top: 95%;\r\n    transform: translate(-50%, -100%);\r\n    transition: 1s 0.8s ease-in-out;\r\n  }\r\n\r\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n\r\n  .panels-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2.5rem 8%;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%] {\r\n    grid-row: 3 / 4;\r\n  }\r\n\r\n  .left-panel[_ngcontent-%COMP%] {\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.6s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding-right: 15%;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.8s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.7rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  .btn.transparent[_ngcontent-%COMP%] {\r\n    width: 110px;\r\n    height: 35px;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    width: 1500px;\r\n    height: 1500px;\r\n    transform: translateX(-50%);\r\n    left: 30%;\r\n    bottom: 68%;\r\n    right: initial;\r\n    top: initial;\r\n    transition: 2s ease-in-out;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    transform: translate(-50%, 100%);\r\n    bottom: 32%;\r\n    right: initial;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(-300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@media (max-width: 570px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 0 1.5rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  .containerr[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    bottom: 72%;\r\n    left: 50%;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    bottom: 28%;\r\n    left: 50%;\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid red;\r\n  width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi10ZWFjaGVyL2xvZ2luLXRlYWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7O0FBRTdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQ7MERBQ3dEO0FBQzFEOztBQTRCQTtFQUNFO0lBRVUsdUJBQXVCO0VBQ2pDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLGdDQUFnQztFQUMxQztFQUNBO0lBRVUsOEJBQThCO0VBQ3hDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLHVCQUF1QjtFQUNqQztBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjs7O0FBR2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBRXZCLG1EQUFtRDtBQUNyRDs7QUFxQ0E7RUFDRTtJQUVVLG1CQUFtQjtJQUVuQiwrQkFBK0I7SUFFL0IsbUNBQW1DO0VBQzdDO0VBQ0E7SUFFVSxzQkFBc0I7SUFFdEIsa0NBQWtDO0VBQzVDO0VBQ0E7SUFFVSxzQkFBc0I7SUFFdEIsbUNBQW1DO0VBQzdDO0VBQ0E7SUFFVSxzQkFBc0I7SUFFdEIsa0NBQWtDO0VBQzVDO0VBQ0E7SUFFVSxtQkFBbUI7SUFFbkIsbUNBQW1DO0VBQzdDO0FBQ0Y7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0IseUVBQXlFO0VBQ3pFLHdFQUF3RTtFQUN4RSx5RUFBeUU7O0VBRXpFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsNEJBQTRCO0FBQzlCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBOztFQUVFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsK0JBQStCO0VBQ2pDOztFQUVBOztJQUVFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSw2QkFBNkI7RUFDL0I7O0VBRUE7O0lBRUUsMEJBQTBCO0VBQzVCOztFQUVBOztJQUVFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLE9BQU87SUFDUCw2QkFBNkI7RUFDL0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4tdGVhY2hlci9sb2dpbi10ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5LFxyXG5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGFpbmVyciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWluLWhlaWdodDogOTJ2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9ybXMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2lnbmluLXNpZ251cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDc1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IDFzIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiMwYTE5MmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKiB0ZXh0LXNoYWRvdzogNHB4IDZweCAyNXB4IHJnYmEoMTAsIDI1LCA0NywgMSk7ICAgKi9cclxuICAvKiAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHZpYnJhdGUtMSAxLjVzIGxpbmVhciBpbmZpbml0ZSBib3RoOyAqL1xyXG59XHJcblxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGUtMSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcclxuICBwYWRkaW5nOiAwIDAuNHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcbi5pbnB1dC1maWVsZDpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsMCwwLDAuNyk7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbiAgLyogY29sb3I6IHBhbGVncmVlbjsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjojMGExOTJmO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc29jaWFsLXRleHQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG5hOmhvdmVyXHJcbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbn1cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwLjQ1cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNDQ4MWViO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ0ODFlYjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDlweDtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcblxyXG5cclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG59XHJcblxyXG5cclxuIEAtd2Via2l0LWtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgMTclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5wYW5lbHMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIwMDBweDtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIHRvcDogLTEwJTtcclxuICByaWdodDogNDglO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNDQ4MWViIDAlLCAjMDRiZWZlIDEwMCUpOyAqL1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzBhMTkyZiAwJSwgIzBjMWIyYiAxMDAlKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZjE1NTI1IDAlLCAjZTQ3ODIwIDEwMCUpOyAqL1xyXG5cclxuICB0cmFuc2l0aW9uOiAxLjhzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjFzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmxlZnQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgcGFkZGluZzogM3JlbSAxNyUgMnJlbSAxMiU7XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcGFkZGluZzogM3JlbSAxMiUgMnJlbSAxNyU7XHJcbn1cclxuXHJcbi5wYW5lbCAuY29udGVudCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5wYW5lbCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBwYWRkaW5nOiAwLjdyZW0gMDtcclxufVxyXG5cclxuLmJ0bi50cmFuc3BhcmVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoODAwcHgpO1xyXG59XHJcblxyXG4vKiBBTklNQVRJT04gKi9cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xyXG4gIHJpZ2h0OiA1MiU7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuaW1hZ2UsXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MDBweCk7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgbGVmdDogMjUlO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgZm9ybS5zaWduLXVwLWZvcm0ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcclxuICAuY29udGFpbmVyciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5zaWduaW4tc2lnbnVwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA5NSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyAwLjhzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbi1zaWdudXAsXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5wYW5lbHMtY29udGFpbmVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMi41cmVtIDglO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIHtcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICB9XHJcblxyXG4gIC5sZWZ0LXBhbmVsIHtcclxuICAgIGdyaWQtcm93OiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgfVxyXG5cclxuICAucGFuZWwgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB9XHJcblxyXG4gIC5idG4udHJhbnNwYXJlbnQge1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVycjpiZWZvcmUge1xyXG4gICAgd2lkdGg6IDE1MDBweDtcclxuICAgIGhlaWdodDogMTUwMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbGVmdDogMzAlO1xyXG4gICAgYm90dG9tOiA2OCU7XHJcbiAgICByaWdodDogaW5pdGlhbDtcclxuICAgIHRvcDogaW5pdGlhbDtcclxuICAgIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcclxuICAgIGJvdHRvbTogMzIlO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4gIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcclxuICAgIHRvcDogNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnBhbmVsIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxuICAuY29udGFpbmVyciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVycjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiA3MiU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogMjglO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-teacher',
                templateUrl: './login-teacher.component.html',
                styleUrls: ['./login-teacher.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "EMjD":
/*!***************************************************************************!*\
  !*** ./src/app/auth/reset-password-done/reset-password-done.component.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordDoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordDoneComponent", function() { return ResetPasswordDoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResetPasswordDoneComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.msg);
} }
class ResetPasswordDoneComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
    }
    onSubmitResetpasswordDone(f) {
        if (!f.valid) {
            this.msg = "Invalid form data!!";
            this.avail = true;
            return;
        }
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password doesn't match";
            this.avail = true;
            return;
        }
        this.authService.resetpassworddone(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/']);
        }, error => { this.router.navigate(['/error']); });
        // this.msg = "hellp";
        // this.avail = true;
    }
}
ResetPasswordDoneComponent.ɵfac = function ResetPasswordDoneComponent_Factory(t) { return new (t || ResetPasswordDoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ResetPasswordDoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordDoneComponent, selectors: [["app-reset-password-done"]], decls: 37, vars: 2, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "text", "placeholder", "Enter Otp", "name", "otp", "pattern", "[0-9]{4}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "maxlength", "4"], ["otp", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p1", "ngModel"], ["type", "password", "placeholder", "Re-enter Password", "name", "p2", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p2", "ngModel"], ["type", "submit", "value", "submit", 1, "btn", "solid", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "panel", "right-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent"], ["src", "../../../assets/img/forgotpassword.svg", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function ResetPasswordDoneComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordDoneComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitResetpasswordDone(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ResetPasswordDoneComponent_p_25_Template, 2, 1, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Attention here!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Once you have submitted the request to reset your password, you will receive an email. Follow the instructions in the email and your password will be reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Don't Worry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  min-height: 92vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.forms-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n\r\n\r\n}\r\n\r\n@keyframes tilt-in-fwd-tr {\r\n  0% {\r\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.signin-signup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  left: 75%;\r\n  width: 50%;\r\n  transition: 1s 0.7s ease-in-out;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  z-index: 5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0rem 5rem;\r\n  transition: all 0.2s 0.7s;\r\n  overflow: hidden;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\nform.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\nform.sign-in-form[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 2.2rem;\r\n  color:#0a192f;\r\n  margin-bottom: 10px;\r\n  \r\n\t animation: vibrate-1 1.5s linear infinite both;\r\n}\r\n\r\n@keyframes vibrate-1 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  40% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  60% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  width: 100%;\r\n  background-color: #f0f0f0;\r\n  margin: 10px 0;\r\n\r\n  height: 55px;\r\n  border-radius: 55px;\r\n  display: grid;\r\n  grid-template-columns: 15% 85%;\r\n  padding: 0 0.4rem;\r\n  position: relative;\r\n  transition: 0.4s ease;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  line-height: 55px;\r\n  color: #0a192f;\r\n  \r\n  transition: 0.5s;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color:#0a192f;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #aaa;\r\n  font-weight: 500;\r\n}\r\n\r\n.social-text[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.social-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%] {\r\n  height: 46px;\r\n  width: 46px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 0.45rem;\r\n  color: #333;\r\n  border-radius: 50%;\r\n  border: 1px solid #333;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover {\r\n  color: #4481eb;\r\n  border-color: #4481eb;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  background-color: #0a192f;\r\n  border: none;\r\n  outline: none;\r\n  height: 49px;\r\n  border-radius: 49px;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #020b18;\r\n  animation: heartbeat 1.5s ease-in-out infinite both;\r\n}\r\n\r\n@keyframes heartbeat {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: center center;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  10% {\r\n    transform: scale(0.91);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  17% {\r\n    transform: scale(0.98);\r\n    animation-timing-function: ease-out;\r\n  }\r\n  33% {\r\n    transform: scale(0.87);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n.panels-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2000px;\r\n  width: 2000px;\r\n  top: -10%;\r\n  right: 48%;\r\n  transform: translateY(-50%);\r\n  \r\n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\r\n  \r\n\r\n  transition: 1.8s ease-in-out;\r\n  border-radius: 50%;\r\n  z-index: 6;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transition: transform 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n  padding: 3rem 17% 2rem 12%;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  padding: 3rem 12% 2rem 17%;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition-delay: 0.6s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.btn.transparent[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  background: none;\r\n  border: 2px solid #fff;\r\n  width: 130px;\r\n  height: 41px;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(800px);\r\n}\r\n\r\n\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n  transform: translate(100%, -50%);\r\n  right: 52%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(-800px);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n}\r\n\r\n@media (max-width: 870px) {\r\n  .containerr[_ngcontent-%COMP%] {\r\n    min-height: 800px;\r\n    height: 100vh;\r\n  }\r\n  .signin-signup[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    top: 95%;\r\n    transform: translate(-50%, -100%);\r\n    transition: 1s 0.8s ease-in-out;\r\n  }\r\n\r\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n\r\n  .panels-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2.5rem 8%;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%] {\r\n    grid-row: 3 / 4;\r\n  }\r\n\r\n  .left-panel[_ngcontent-%COMP%] {\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.6s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding-right: 15%;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.8s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.7rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  .btn.transparent[_ngcontent-%COMP%] {\r\n    width: 110px;\r\n    height: 35px;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    width: 1500px;\r\n    height: 1500px;\r\n    transform: translateX(-50%);\r\n    left: 30%;\r\n    bottom: 68%;\r\n    right: initial;\r\n    top: initial;\r\n    transition: 2s ease-in-out;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    transform: translate(-50%, 100%);\r\n    bottom: 32%;\r\n    right: initial;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(-300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@media (max-width: 570px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 0 1.5rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  .containerr[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    bottom: 72%;\r\n    left: 50%;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    bottom: 28%;\r\n    left: 50%;\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid red;\r\n  width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC1kb25lL3Jlc2V0LXBhc3N3b3JkLWRvbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7O0FBRTdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPOzs7QUFHVDs7QUFjQTtFQUNFO0lBRVUscUZBQXFGO0lBQzdGLFVBQVU7RUFDWjtFQUNBO0lBRVUsb0VBQW9FO0lBQzVFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFFZiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscURBQXFEO0VBRTlDLDhDQUE4QztBQUN2RDs7QUE0QkE7RUFDRTtJQUVVLHVCQUF1QjtFQUNqQztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSxnQ0FBZ0M7RUFDMUM7RUFDQTtJQUVVLDhCQUE4QjtFQUN4QztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSx1QkFBdUI7RUFDakM7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7O0VBRWQsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFFekIsbURBQW1EO0FBQ3JEOztBQXFDQTtFQUNFO0lBRVUsbUJBQW1CO0lBRW5CLCtCQUErQjtJQUUvQixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLG1CQUFtQjtJQUVuQixtQ0FBbUM7RUFDN0M7QUFDRjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQix5RUFBeUU7RUFDekUsa0VBQWtFO0VBQ2xFLHlFQUF5RTs7RUFFekUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7RUFDakM7O0VBRUE7O0lBRUUsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLDZCQUE2QjtFQUMvQjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsT0FBTztJQUNQLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0Y7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC1kb25lL3Jlc2V0LXBhc3N3b3JkLWRvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHksXHJcbmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiA5MnZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRpbHQtaW4tZndkLXRyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB0aWx0LWluLWZ3ZC10ciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbmluLXNpZ251cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDc1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IDFzIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHRpbHQtaW4tZndkLXRyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG4gIGFuaW1hdGlvbjogdGlsdC1pbi1md2QtdHIgMC42cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiMwYTE5MmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKiB0ZXh0LXNoYWRvdzogNHB4IDZweCAyNXB4IHJnYmEoMTAsIDI1LCA0NywgMSk7ICAgKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHZpYnJhdGUtMSAxLjVzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG59XHJcblxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGUtMSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcclxuICBwYWRkaW5nOiAwIDAuNHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcbi5pbnB1dC1maWVsZDpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsMCwwLDAuNyk7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbiAgLyogY29sb3I6IHBhbGVncmVlbjsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjojMGExOTJmO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc29jaWFsLXRleHQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwLjQ1cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNDQ4MWViO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ0ODFlYjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDlweDtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuXHJcblxyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwYjE4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gIGFuaW1hdGlvbjogaGVhcnRiZWF0IDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAxNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDMzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbi5jb250YWluZXJyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyMDAwcHg7XHJcbiAgd2lkdGg6IDIwMDBweDtcclxuICB0b3A6IC0xMCU7XHJcbiAgcmlnaHQ6IDQ4JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzQ0ODFlYiAwJSwgIzA0YmVmZSAxMDAlKTsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMwYTE5MmYgMCUsICMwYzFiMmIgMTAwJSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNTUyNSAwJSwgI2U0NzgyMCAxMDAlKTsgKi9cclxuXHJcbiAgdHJhbnNpdGlvbjogMS44cyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTIlIDJyZW0gMTclO1xyXG59XHJcblxyXG4ucGFuZWwgLmNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5wYW5lbCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBwYWRkaW5nOiAwLjdyZW0gMDtcclxufVxyXG5cclxuLmJ0bi50cmFuc3BhcmVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwMHB4KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICByaWdodDogNTIlO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24taW4tZm9ybSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogOTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgMC44cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5zaWduaW4tc2lnbnVwLFxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5yaWdodC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMyAvIDQ7XHJcbiAgfVxyXG5cclxuICAubGVmdC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcblxyXG4gIC5wYW5lbCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5wYW5lbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLnRyYW5zcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XHJcbiAgICBib3R0b206IDMyJTtcclxuICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogNzIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDI4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordDoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password-done',
                templateUrl: './reset-password-done.component.html',
                styleUrls: ['./reset-password-done.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "EW8g":
/*!**********************************************************!*\
  !*** ./src/app/teacher/ctacreate/ctacreate.component.ts ***!
  \**********************************************************/
/*! exports provided: CtacreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtacreateComponent", function() { return CtacreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CtacreateComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.msg, " ");
} }
class CtacreateComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
    }
    ngOnInit() { }
    createCta(f) {
        this.teacherService.createCTA(JSON.stringify(f.value)).subscribe((data) => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            this.router.navigate(['/teacher/ctaupload']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
CtacreateComponent.ɵfac = function CtacreateComponent_Factory(t) { return new (t || CtacreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CtacreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtacreateComponent, selectors: [["app-ctacreate"]], decls: 17, vars: 2, consts: [[1, "container", "mt-5"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "quizname"], ["type", "text", "name", "quesname", "autocomplete", "off", "id", "quesname", "ngModel", "", "required", "", 1, "form-control"], ["quizname", "ngModel"], ["for", "description"], ["type", "text", "autocomplete", "off", "name", "quesdescription", "id", "quesdescription", "ngModel", "", "required", "", 1, "form-control"], ["description", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "social-text", "style", "color: red; font-weight: bold; font-size: 20px", 4, "ngIf"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function CtacreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CtacreateComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.createCta(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CtacreateComponent_p_16_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["label[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  padding: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #0a192f;\r\n  font-weight: 600;\r\n  outline: none;\r\n  border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jdGFjcmVhdGUvY3RhY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY3RhY3JlYXRlL2N0YWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtacreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ctacreate',
                templateUrl: './ctacreate.component.html',
                styleUrls: ['./ctacreate.component.css'],
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "EcT0":
/*!************************************************************!*\
  !*** ./src/app/student/studentnav/studentnav.component.ts ***!
  \************************************************************/
/*! exports provided: StudentnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentnavComponent", function() { return StudentnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");





const _c0 = function () { return ["/student/studenthome"]; };
const _c1 = function () { return ["/student/studentctahome"]; };
const _c2 = function () { return ["/"]; };
class StudentnavComponent {
    constructor(router, authService, studentService) {
        this.router = router;
        this.authService = authService;
        this.studentService = studentService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
}
StudentnavComponent.ɵfac = function StudentnavComponent_Factory(t) { return new (t || StudentnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"])); };
StudentnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentnavComponent, selectors: [["app-studentnav"]], decls: 18, vars: 6, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "click"]], template: function StudentnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "cta home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentnavComponent_Template_a_click_16_listener() { return ctx.logoutuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n  background-color: #0A192F;\r\n  color: #fff;\r\n  min-height: 75px;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  padding: 14px 0 5px;\r\n  margin: 0 25px;\r\n  color: rgb(255, 255, 255);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-family: 'Audiowide' ,cursive;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n\r\n  bottom: 0;\r\n\r\n  transform: translateX(-100%) scaleX(0);\r\n  -webkit-transform: translateX(-100%) scaleX(0);\r\n  transform-origin: 50% 50%;\r\n\r\n\r\n  width: 100%;\r\n  height: 2px;\r\n\r\n  background-color:#fff;\r\n  transition: transform 250ms;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\n\r\n  transform: translateX(-100%) scaleX(1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50bmF2L3N0dWRlbnRuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudG5hdi9zdHVkZW50bmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyotLS0tLS0tLS0tLS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbnVsIGxpIGF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE0cHggMCA1cHg7XHJcbiAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScgLGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDApO1xyXG5cclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuXHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhOmhvdmVyOmFmdGVye1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentnav',
                templateUrl: './studentnav.component.html',
                styleUrls: ['./studentnav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"] }]; }, null); })();


/***/ }),

/***/ "Gyf/":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);




class WebsocketService {
    constructor() {
        this.url = "http://localhost:3000";
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["io"])(this.url);
    }
    listen(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((subscriber) => {
            this.socket.on(eventName, (data) => {
                subscriber.next(data);
            });
        });
    }
    emit(eventName, data) {
        this.socket.emit(eventName, data);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IPfh":
/*!*********************************************!*\
  !*** ./src/app/services/teacher.service.ts ***!
  \*********************************************/
/*! exports provided: TeacherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherService", function() { return TeacherService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TeacherService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = '';
        this.baseUri = 'http://localhost:3000/teacher/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    createQuiz(body) {
        return this.http.post(this.baseUri + 'createquiz', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    getuploadquiz() {
        return this.http.get(this.baseUri + 'getuploadquiz', {
            headers: this.headers,
        });
    }
    gethomequiz() {
        return this.http.get(this.baseUri + 'gethomequiz', {
            headers: this.headers,
        });
    }
    seestudent() {
        return this.http.get(this.baseUri + 'seestudent', {
            headers: this.headers,
        });
    }
    blockuser(id) {
        return this.http.delete(this.baseUri + 'blockuser/' + id, {
            headers: this.headers,
        });
    }
    unblockuser(id) {
        return this.http.delete(this.baseUri + 'unblockuser/' + id, {
            headers: this.headers,
        });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    deletequiz(id) {
        return this.http.delete(this.baseUri + 'deletequiz/' + id, {
            headers: this.headers,
        });
    }
    uploadquiz(body) {
        return this.http.post(this.baseUri + 'uploadquiz', { id: body }, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    addQuestion(body) {
        return this.http.post(this.baseUri + 'addquestion', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + 'getallquestion/' + id, {
            headers: this.headers,
        });
    }
    deleteQuestion(id) {
        return this.http.delete(this.baseUri + 'deletequestion/' + id, {
            headers: this.headers,
        });
    }
    setDelete(data) {
        this.delete = data;
    }
    getDelete() {
        return this.delete;
    }
    //Cta
    createCTA(body) {
        return this.http.post(this.baseUri + 'createcta', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    getuploadques() {
        return this.http.get(this.baseUri + 'getuploadques', {
            headers: this.headers,
        });
    }
    gethomeques() {
        return this.http.get(this.baseUri + 'gethomeques', {
            headers: this.headers,
        });
    }
    seestudentcta() {
        return this.http.get(this.baseUri + 'seestudentcta', {
            headers: this.headers,
        });
    }
    blockuserques(id) {
        return this.http.delete(this.baseUri + 'blockuserques/' + id, {
            headers: this.headers,
        });
    }
    unblockuserques(id) {
        return this.http.delete(this.baseUri + 'unblockuserques/' + id, {
            headers: this.headers,
        });
    }
    setQuesId(id) {
        this.quesid = id;
    }
    getQuesId() {
        return this.quesid;
    }
    deleteques(id) {
        return this.http.delete(this.baseUri + 'deleteques/' + id, {
            headers: this.headers,
        });
    }
    uploadques(body) {
        return this.http.post(this.baseUri + 'uploadques', { id: body }, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    addQuestioncta(body) {
        return this.http.post(this.baseUri + 'addquestioncta', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    getAllQuestioncta(id) {
        return this.http.get(this.baseUri + 'getallquestioncta/' + id, {
            headers: this.headers,
        });
    }
    deleteQuestioncta(id) {
        return this.http.delete(this.baseUri + 'deletequestioncta/' + id, {
            headers: this.headers,
        });
    }
    setDeleteQues(data) {
        this.delete = data;
    }
    getDeleteQues() {
        return this.delete;
    }
}
TeacherService.ɵfac = function TeacherService_Factory(t) { return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeacherService, factory: TeacherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TeacherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "IbWB":
/*!**************************************************************!*\
  !*** ./src/app/teacher/seestudents/seestudents.component.ts ***!
  \**************************************************************/
/*! exports provided: SeestudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeestudentsComponent", function() { return SeestudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function SeestudentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SeestudentsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function SeestudentsComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.block(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.unblock(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r9.blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r9.blocked);
} }
function SeestudentsComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SeestudentsComponent_ng_template_11_ng_template_1_tr_12_Template, 11, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.users);
} }
function SeestudentsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeestudentsComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeestudentsComponent_ng_template_11_ng_template_1_Template, 13, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class SeestudentsComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
        this.score = 0;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
        // this.score = this.playquiz.score;
        // this.totalQuestion = this.playquiz.totalQuestion;
    }
    getdata() {
        this.teacherService.seestudent().subscribe((data) => {
            if (data['user']) {
                this.users = data['user'];
                this.loading = false;
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.teacherService.blockuser(userid).subscribe((data) => {
            // console.log(data);
            // this.adminService.avail = true;
            // this.adminService.msg = "Successfully Blocked User!!!";
            // this.router.navigate(['/admin']);
            this.getdata();
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.teacherService.unblockuser(userid).subscribe((data) => {
            this.getdata();
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
SeestudentsComponent.ɵfac = function SeestudentsComponent_Factory(t) { return new (t || SeestudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SeestudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeestudentsComponent, selectors: [["app-seestudents"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-link", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["aria-hidden", "true", 1, "fa", "fa-unlock"]], template: function SeestudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SeestudentsComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SeestudentsComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SeestudentsComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nvertical-align: middle;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9zZWVzdHVkZW50cy9zZWVzdHVkZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvc2Vlc3R1ZGVudHMvc2Vlc3R1ZGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuKntcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50YWJsZXtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxudGgsdGR7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5odG1sLGJvZHl7XHJcblxyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5iYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaDQsaDV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeestudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seestudents',
                templateUrl: './seestudents.component.html',
                styleUrls: ['./seestudents.component.css'],
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "JITU":
/*!**********************************************************!*\
  !*** ./src/app/teacher/seescores/seescores.component.ts ***!
  \**********************************************************/
/*! exports provided: SeescoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeescoresComponent", function() { return SeescoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/student/playquiz/playquiz.component */ "hPIn");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");





class SeescoresComponent {
    constructor(router, playquiz, teacherService) {
        this.router = router;
        this.playquiz = playquiz;
        this.teacherService = teacherService;
        this.loading = true;
    }
    ngOnInit() { }
    getsdata() {
        if (this.playquiz.finalsubmit) {
            this.score = this.playquiz.score;
        }
    }
    getdata() {
        this.teacherService.seestudent().subscribe((data) => {
            if (data['user']) {
                this.users = data['user'];
                this.loading = false;
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
SeescoresComponent.ɵfac = function SeescoresComponent_Factory(t) { return new (t || SeescoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_2__["PlayquizComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"])); };
SeescoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeescoresComponent, selectors: [["app-seescores"]], decls: 18, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"]], template: function SeescoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvc2Vlc2NvcmVzL3NlZXNjb3Jlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeescoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seescores',
                templateUrl: './seescores.component.html',
                styleUrls: ['./seescores.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_2__["PlayquizComponent"] }, { type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"] }]; }, null); })();


/***/ }),

/***/ "JmRu":
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class StudentService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = '';
        this.baseUri = 'http://localhost:3000/student/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    getAllQuiz() {
        return this.http.get(this.baseUri + 'getallquiz', {
            headers: this.headers,
        });
    }
    setQuizId(id) {
        this.quizid = id;
    }
    getQuizId() {
        return this.quizid;
    }
    getAllQuestion(id) {
        return this.http.get(this.baseUri + 'getallquestion/' + id, {
            headers: this.headers,
        });
    }
    block() {
        return this.http.put(this.baseUri + 'blockme', {}, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
    //cta
    getAllQues() {
        return this.http.get(this.baseUri + 'getallques', {
            headers: this.headers,
        });
    }
    setQuesId(id) {
        this.quesid = id;
    }
    getQuesId() {
        return this.quesid;
    }
    getAllQuestioncta(id) {
        return this.http.get(this.baseUri + 'getallquestioncta/' + id, {
            headers: this.headers,
        });
    }
    blockcta() {
        return this.http.put(this.baseUri + 'blockme', {}, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json'),
        });
    }
}
StudentService.ɵfac = function StudentService_Factory(t) { return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StudentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StudentService, factory: StudentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StudentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "MTG3":
/*!************************************************************!*\
  !*** ./src/app/index/indexheader/indexheader.component.ts ***!
  \************************************************************/
/*! exports provided: IndexheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexheaderComponent", function() { return IndexheaderComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");





class IndexheaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        // this.check();
    }
    check() {
        this.authService.check().subscribe(data => {
            console.log(data);
        }, (error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                this.authService.logoutUser();
                this.router.navigate(['/']);
            }
            console.log(error);
        });
    }
}
IndexheaderComponent.ɵfac = function IndexheaderComponent_Factory(t) { return new (t || IndexheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
IndexheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexheaderComponent, selectors: [["app-indexheader"]], decls: 16, vars: 0, consts: [["lang", "en"], ["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Poppins:wght@100;400&display=swap", "rel", "stylesheet"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], [1, "masthead"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12", "text-center"], [1, "font-weight-light"], [1, "lead"], ["src", "../../../assets/img/WhatsApp Image 2023-04-25 at 8.33.11 PM.jpeg", "alt", "img"]], template: function IndexheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "TechHive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Challenge your limits, Sharpen your Mind!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n\r\n}\r\n\r\n.masthead[_ngcontent-%COMP%] {\r\n  height:89.5vh;\r\n  color: #0a2f2e;\r\n  overflow-y: hidden;\r\n  min-height: 500px;\r\n  \r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  font-family: 'Space Mono', monospace;\r\n\r\n}\r\n\r\n.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  animation: focus-in-contract-bck 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\n.lead[_ngcontent-%COMP%]{\r\n    color: #0A192F;\r\n    font-weight: bold;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n@keyframes focus-in-contract-bck {\r\n  0% {\r\n    letter-spacing: 1em;\r\n    transform: translateZ(300px);\r\n    filter: blur(12px);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateZ(12px);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXhoZWFkZXIvaW5kZXhoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMERBQTBEO0VBQzFELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLG9DQUFvQzs7QUFFdEM7O0FBQ0E7RUFFRSxpRkFBaUY7QUFDbkY7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFtQkE7RUFDRTtJQUNFLG1CQUFtQjtJQUVYLDRCQUE0QjtJQUU1QixrQkFBa0I7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFFVSwyQkFBMkI7SUFFM0IsZUFBZTtJQUN2QixVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4aGVhZGVyL2luZGV4aGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxufVxyXG5cclxuLm1hc3RoZWFkIHtcclxuICBoZWlnaHQ6ODkuNXZoO1xyXG4gIGNvbG9yOiAjMGEyZjJlO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcuamZpZicpOyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xyXG5cclxufVxyXG4ubWFzdGhlYWQgaDF7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0LWJjayAycyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApICBib3RoO1xyXG4gIGFuaW1hdGlvbjogZm9jdXMtaW4tY29udHJhY3QtYmNrIDJzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxufVxyXG4ubGVhZHtcclxuICAgIGNvbG9yOiAjMEExOTJGO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3QtYmNrIHtcclxuICAwJSB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMzAwcHgpO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMnB4KTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZvY3VzLWluLWNvbnRyYWN0LWJjayB7XHJcbiAgMCUge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDMwMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDMwMHB4KTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTJweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigwKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IndexheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-indexheader',
                templateUrl: './indexheader.component.html',
                styleUrls: ['./indexheader.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "N/mo":
/*!****************************************************!*\
  !*** ./src/app/admin/student/student.component.ts ***!
  \****************************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function StudentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function StudentComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function StudentComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentComponent_ng_template_11_ng_template_1_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.block(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentComponent_ng_template_11_ng_template_1_tr_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.unblock(user_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r9.blocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r9.blocked);
} }
function StudentComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unblock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentComponent_ng_template_11_ng_template_1_tr_12_Template, 11, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.users);
} }
function StudentComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentComponent_ng_template_11_ng_template_1_Template, 13, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class StudentComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.msg = [];
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.seestudent()
            .subscribe(data => {
            if (data['user']) {
                this.loading = false;
                this.users = data['user'];
                if (!this.users.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    block(user) {
        var userid = user._id;
        this.adminService.blockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    unblock(user) {
        var userid = user._id;
        this.adminService.unblockuser(userid).subscribe(data => {
            this.getdata();
            // this.router.navigate(['/admin/adminhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
StudentComponent.ɵfac = function StudentComponent_Factory(t) { return new (t || StudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentComponent, selectors: [["app-student"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-link", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-ban"], ["aria-hidden", "true", 1, "fa", "fa-unlock"]], template: function StudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nvertical-align: middle;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcbip7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4udGFibGV7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbnRoLHRke1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaHRtbCxib2R5e1xyXG5cclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmg0LGg1e1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student',
                templateUrl: './student.component.html',
                styleUrls: ['./student.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "NgLx":
/*!**************************************************************!*\
  !*** ./src/app/teacher/addquestion/addquestion.component.ts ***!
  \**************************************************************/
/*! exports provided: AddquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddquestionComponent", function() { return AddquestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddquestionComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.msg);
} }
class AddquestionComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.options = [];
    }
    ngOnInit() {
        if (this.teacherService.getQuizId() == undefined) {
            this.router.navigate(['/teacher/uploadquiz']);
        }
        else {
            this.quizid = this.teacherService.getQuizId();
        }
    }
    addQuestion(f) {
        this.options.push({ optionValue: '1', optionText: f.controls.optionA.value });
        this.options.push({ optionValue: '2', optionText: f.controls.optionB.value });
        this.options.push({ optionValue: '3', optionText: f.controls.optionC.value });
        this.options.push({ optionValue: '4', optionText: f.controls.optionD.value });
        // console.log(this.options);
        this.obj = { quizid: this.quizid, options: this.options, questionText: f.controls.questionText.value, answer: f.controls.answer.value };
        // console.log(this.obj);
        this.teacherService.addQuestion(this.obj)
            .subscribe(data => {
            // console.log(data);
            this.router.navigate(['/teacher/uploadquiz']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
AddquestionComponent.ɵfac = function AddquestionComponent_Factory(t) { return new (t || AddquestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddquestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddquestionComponent, selectors: [["app-addquestion"]], decls: 47, vars: 2, consts: [[1, "container", "mt-5"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "questionText"], ["type", "text", "name", "questionText", "autocomplete", "off", "id", "questionText", "ngModel", "", "required", "", 1, "form-control"], ["questionText", "ngModel"], ["for", "optionA"], ["type", "text", "name", "optionA", "autocomplete", "off", "id", "optionA", "ngModel", "", "required", "", 1, "form-control"], ["optionA", "ngModel"], ["for", "optionB"], ["type", "text", "name", "optionB", "autocomplete", "off", "id", "optionB", "ngModel", "", "required", "", 1, "form-control"], ["optionB", "ngModel"], ["for", "optionC"], ["type", "text", "name", "optionC", "autocomplete", "off", "id", "optionC", "ngModel", "", "required", "", 1, "form-control"], ["optionC", "ngModel"], ["for", "optionD"], ["type", "text", "name", "optionD", "autocomplete", "off", "id", "optionD", "ngModel", "", "required", "", 1, "form-control"], ["optionD", "ngModel"], [1, "form-group", 2, "margin-top", "10px"], ["for", "answer"], ["type", "radio", "value", "1", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["answer", "ngModel"], ["type", "radio", "value", "2", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["type", "radio", "value", "3", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["type", "radio", "value", "4", "name", "answer", "id", "answer", "ngModel", "", "required", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function AddquestionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddquestionComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.addQuestion(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Question Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Option1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Option2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Option3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 24, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 25, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AddquestionComponent_p_46_Template, 2, 1, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["label[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n  padding: 10px 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]{\r\n  background-color: #0a192f;\r\n  font-weight: 600;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\ninput[type=\"radio\"][_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9hZGRxdWVzdGlvbi9hZGRxdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL2FkZHF1ZXN0aW9uL2FkZHF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5idXR0b257XHJcblxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qIGlucHV0ICovXHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddquestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addquestion',
                templateUrl: './addquestion.component.html',
                styleUrls: ['./addquestion.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "NxgW":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");



class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "O94/":
/*!******************************************************!*\
  !*** ./src/app/admin/adminnav/adminnav.component.ts ***!
  \******************************************************/
/*! exports provided: AdminnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminnavComponent", function() { return AdminnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");




const _c0 = function () { return ["/admin/adminhome"]; };
const _c1 = function () { return ["/admin/viewstudent"]; };
const _c2 = function () { return ["/admin/viewteacher"]; };
const _c3 = function () { return ["/"]; };
class AdminnavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
}
AdminnavComponent.ɵfac = function AdminnavComponent_Factory(t) { return new (t || AdminnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AdminnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminnavComponent, selectors: [["app-adminnav"]], decls: 21, vars: 8, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "click"]], template: function AdminnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "view Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "view Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnavComponent_Template_a_click_19_listener() { return ctx.logoutuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n  background-color: #0A192F;\r\n  color: #fff;\r\n  min-height: 75px;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  padding: 14px 0 5px;\r\n  margin: 0 25px;\r\n  color: rgb(255, 255, 255);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-family: 'Audiowide' ,cursive;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n\r\n  bottom: 0;\r\n\r\n  transform: translateX(-100%) scaleX(0);\r\n  -webkit-transform: translateX(-100%) scaleX(0);\r\n  transform-origin: 50% 50%;\r\n\r\n\r\n  width: 100%;\r\n  height: 2px;\r\n\r\n  background-color:#fff;\r\n  transition: transform 250ms;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\n\r\n  transform: translateX(-100%) scaleX(1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5uYXYvYWRtaW5uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWlubmF2L2FkbWlubmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyotLS0tLS0tLS0tLS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuLm5hdmJhciB1bCBsaXtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxudWwgbGkgYXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTRweCAwIDVweDtcclxuICBtYXJnaW46IDAgMjVweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJyAsY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIHVsIGxpIGE6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBib3R0b206IDA7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMCk7XHJcblxyXG5cclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG5cclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXM7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG59XHJcblxyXG4ubmF2YmFyIHVsIGxpIGE6aG92ZXI6YWZ0ZXJ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgxKTtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminnav',
                templateUrl: './adminnav.component.html',
                styleUrls: ['./adminnav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "O94Z":
/*!******************************************************!*\
  !*** ./src/app/loading/loading/loading.component.ts ***!
  \******************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 5, vars: 0, consts: [[1, "loading"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", 2, "position", "absolute", "top", "50%", "color", "#0a192f"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loading[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: absolute;\r\n  z-index: 10;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Oq7o":
/*!********************************************************************!*\
  !*** ./src/app/teacher/teacherctahome/teacherctahome.component.ts ***!
  \********************************************************************/
/*! exports provided: TeacherctahomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherctahomeComponent", function() { return TeacherctahomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function TeacherctahomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TeacherctahomeComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TeacherctahomeComponent_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Not found any uploaded Quiz!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherctahomeComponent_ng_template_13_ng_template_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherctahomeComponent_ng_template_13_ng_template_1_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const q_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.viewQuestion(q_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherctahomeComponent_ng_template_13_ng_template_1_tr_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const q_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.delete(q_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r9.quesname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r9.quesdescription, " ");
} }
function TeacherctahomeComponent_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "See Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeacherctahomeComponent_ng_template_13_ng_template_1_tr_14_Template, 13, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.ctadescriptions);
} }
function TeacherctahomeComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeacherctahomeComponent_ng_template_13_div_0_Template, 10, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherctahomeComponent_ng_template_13_ng_template_1_Template, 15, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class TeacherctahomeComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.gethomeques().subscribe((data) => {
            if (data['ques']) {
                this.ctadescriptions = data['ques'];
                this.loading = false;
                // console.log(this.quiz.length);
                if (!this.ctadescriptions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.teacherService.setQuesId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestioncta']);
    }
    delete(ques) {
        this.teacherService.deleteques(ques._id).subscribe((data) => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
TeacherctahomeComponent.ɵfac = function TeacherctahomeComponent_Factory(t) { return new (t || TeacherctahomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherctahomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherctahomeComponent, selectors: [["app-teacherctahome"]], decls: 15, vars: 3, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f"], [1, "btn", "btn-danger", 3, "click"]], template: function TeacherctahomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello, world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeacherctahomeComponent_div_10_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeacherctahomeComponent_ng_template_11_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeacherctahomeComponent_ng_template_13_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #0a192f;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVyY3RhaG9tZS90ZWFjaGVyY3RhaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyL3RlYWNoZXJjdGFob21lL3RlYWNoZXJjdGFob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG59XHJcbnRoLFxyXG50ZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5oNCxcclxuaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherctahomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacherctahome',
                templateUrl: './teacherctahome.component.html',
                styleUrls: ['./teacherctahome.component.css'],
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Q/bm":
/*!**********************************************************!*\
  !*** ./src/app/teacher/ctaupload/ctaupload.component.ts ***!
  \**********************************************************/
/*! exports provided: CtauploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtauploadComponent", function() { return CtauploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function CtauploadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function CtauploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function CtauploadComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Not found any created Quiz!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CtauploadComponent_ng_template_11_ng_template_1_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.msg, " ");
} }
function CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.viewQuestion(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.viewQuestion(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.add(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.upload(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const q_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.delete(q_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.quesname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r10.quesdescription);
} }
function CtauploadComponent_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CtauploadComponent_ng_template_11_ng_template_1_p_0_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "See Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CtauploadComponent_ng_template_11_ng_template_1_tr_19_Template, 19, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.avail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.ctadescriptions);
} }
function CtauploadComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CtauploadComponent_ng_template_11_div_0_Template, 10, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CtauploadComponent_ng_template_11_ng_template_1_Template, 20, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class CtauploadComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.getuploadques().subscribe((data) => {
            if (data['ques']) {
                this.loading = false;
                this.ctadescriptions = data['ques'];
                if (!this.ctadescriptions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    add(ques) {
        this.teacherService.setQuesId(ques._id);
        this.router.navigate(['/teacher/addquestioncta']);
    }
    upload(ques) {
        // console.log("upload");
        // console.log(quiz);
        // console.log(quiz._id);
        this.teacherService.uploadques(ques._id).subscribe((data) => {
            // this.quiz = data['quiz']
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['message']) {
                this.router.navigate(['/teacher/teacherhome']);
            }
            else {
                this.msg = 'something went wrong!!';
                this.avail = true;
                return;
            }
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    delete(ques) {
        this.teacherService.deleteques(ques._id).subscribe((data) => {
            // console.log(data);
            this.router.navigate(['/teacher/teacherhome']);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(ques) {
        this.teacherService.setQuesId(ques._id);
        this.teacherService.setDeleteQues(ques.upload);
        this.router.navigate(['/teacher/seequestioncta']);
    }
}
CtauploadComponent.ɵfac = function CtauploadComponent_Factory(t) { return new (t || CtauploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CtauploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CtauploadComponent, selectors: [["app-ctaupload"]], decls: 13, vars: 3, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css", "integrity", "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["style", "\n            color: red;\n            font-weight: bold;\n            font-size: 20px;\n            text-align: center;\n            margin-top: 50px;\n          ", 4, "ngIf"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "color", "red", "font-weight", "bold", "font-size", "20px", "text-align", "center", "margin-top", "50px"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f", 3, "click"]], template: function CtauploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CtauploadComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CtauploadComponent_ng_template_9_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CtauploadComponent_ng_template_11_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #0a192f;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  \r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-attachment: fixed;\r\n  background-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci9jdGF1cGxvYWQvY3RhdXBsb2FkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztFQUNFLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvY3RhdXBsb2FkL2N0YXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4udGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG50aCxcclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG59XHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5oNCxcclxuaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CtauploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ctaupload',
                templateUrl: './ctaupload.component.html',
                styleUrls: ['./ctaupload.component.css'],
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "QFh7":
/*!******************************************************!*\
  !*** ./src/app/student/playcta/playcta.component.ts ***!
  \******************************************************/
/*! exports provided: PlayctaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayctaComponent", function() { return PlayctaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");








function PlayctaComponent_app_studentnav_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentnav");
} }
function PlayctaComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PlayctaComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function PlayctaComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Compiler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. ", ctx_r5.oneQuestion.questionText, "");
} }
class PlayctaComponent {
    constructor(studentService, authService, router) {
        this.studentService = studentService;
        this.authService = authService;
        this.router = router;
        this.solutionArray = [];
        this.ansOfOneQuestion = [];
        this.ansKey = [];
        this.time = 10;
        this.score = 0;
        this.flageLast = false;
        this.questionCounter = 1;
        this.finishflag = false;
        this.finalsubmit = false;
    }
    ngOnInit() {
        // this.toggleFullScreen(document.body)
        this.load = true;
        if (this.studentService.getQuesId() == undefined) {
            this.router.navigate(['/student/studentctahome']);
        }
        else {
            this.quesid = this.studentService.getQuesId();
            this.getAllQuestions(this.quesid);
            this.myurl = this.router.url;
            // console.log(this.myurl);
            //     window.addEventListener('blur', (event) => {
            //       if (this.myurl === '/student/playcta' && this.finalsubmit == false) {
            //         this.block();
            //       }
            //     });
            //     window.addEventListener('resize', (event) => {
            //       if (this.myurl === '/student/playcta' && this.finalsubmit == false) {
            //         this.block();
            //       }
            //     });
        }
    }
    getAllQuestions(quesid) {
        this.studentService.getAllQuestioncta(quesid).subscribe((data) => {
            if (data['msg']) {
                this.load = false;
                this.allQuestions = data['msg'];
                this.totalQuestion = this.allQuestions.length;
                this.oneQuestion = this.allQuestions[0];
            }
            // console.log(this.allQuestions);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    // block() {
    //   this.studentService.block().subscribe(
    //     (data) => {
    //       // console.log(data);
    //       if (data['message']) {
    //         this.authService.logoutUser();
    //         this.router.navigate(['/cheat']);
    //       }
    //     },
    //     (error) => {
    //       this.router.navigate(['/error']);
    //     }
    //   );
    // }
    playquiz(item) {
        this.studentService.setQuesId(item._id);
        this.router.navigate([
            'https://www.jdoodle.com/api/redirect-to-post/c-online-compiler',
        ]);
    }
}
PlayctaComponent.ɵfac = function PlayctaComponent_Factory(t) { return new (t || PlayctaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PlayctaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayctaComponent, selectors: [["app-playcta"]], decls: 12, vars: 4, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [1, "container", "mt-sm-5", "my-1"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2", "h5"], ["href", "https://www.jdoodle.com/api/redirect-to-post/c-online-compiler"], [1, "btn", "btn-light"]], template: function PlayctaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayctaComponent_app_studentnav_6_Template, 1, 0, "app-studentnav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayctaComponent_div_7_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayctaComponent_ng_template_8_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayctaComponent_ng_template_10_Template, 8, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalsubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r2)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_5__["StudentnavComponent"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  \r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: #f1f1f1;\r\n  color: #0a192f;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  max-width: 800px;\r\n}\r\n.container[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: #0a192f;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding-left: 40px;\r\n}\r\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 15px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\r\n.clsbtnleft[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 35%;\r\n}\r\n.clsbtnright[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 30%;\r\n}\r\n.checkmark[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -1px;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #f1f1f1;\r\n  border: 2px solid #0a192f;\r\n  border-radius: 50%;\r\n}\r\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n}\r\n.options[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 10px;\r\n  height: 10px;\r\n  \r\n  display: block;\r\n  background: white;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  border-radius: 50%;\r\n  transform: translate(-50%, -50%) scale(0);\r\n  transition: 300ms ease-in-out 0s;\r\n}\r\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\r\n  background: #0a192f;\r\n  transition: 300ms ease-in-out 0s;\r\n}\r\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\r\n  transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .clsbtnleft[_ngcontent-%COMP%] {\r\n    left: 30%;\r\n  }\r\n  .clsbtnright[_ngcontent-%COMP%] {\r\n    right: 30%;\r\n  }\r\n}\r\n@media (max-width: 576px) {\r\n  .question[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    word-spacing: 2px;\r\n  }\r\n  .clsbtnleft[_ngcontent-%COMP%] {\r\n    left: 20%;\r\n  }\r\n  .clsbtnright[_ngcontent-%COMP%] {\r\n    right: 20%;\r\n  }\r\n}\r\n@media (max-width: 356px) {\r\n  .clsbtnleft[_ngcontent-%COMP%] {\r\n    left: 10%;\r\n  }\r\n  .clsbtnright[_ngcontent-%COMP%] {\r\n    right: 10%;\r\n  }\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  color: #0a192f;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n.mt-100[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  margin-top: 18px;\r\n}\r\n.cross[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  color: #0a192f;\r\n  cursor: pointer;\r\n}\r\n.continue[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n.continue[_ngcontent-%COMP%] {\r\n  border-radius: 5px;\r\n  text-transform: capitalize;\r\n  font-size: 13px;\r\n  padding: 8px 19px;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  background-color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9wbGF5Y3RhL3BsYXljdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrRUFBK0U7QUFDL0UsNkdBQTZHO0FBQzdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVIO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3BsYXljdGEvcGxheWN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyAqL1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+IHAge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG5oNCxcclxuaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5vcHRpb25zIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4jb3B0aW9ucyBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3B0aW9ucyBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNsc2J0bmxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAzNSU7XHJcbn1cclxuLmNsc2J0bnJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwJTtcclxufVxyXG4uY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzBhMTkyZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5vcHRpb25zIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm9wdGlvbnMgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgLyogY29sb3I6IHJlZDsgKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLm9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kOiAjMGExOTJmO1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4ub3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcblxyXG4vKiAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWJmNzM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjFiZjczO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgcGFkZGluZzogNXB4IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiZjczO1xyXG59ICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAuY2xzYnRubGVmdCB7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgfVxyXG4gIC5jbHNidG5yaWdodCB7XHJcbiAgICByaWdodDogMzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLnF1ZXN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG4gIC5jbHNidG5sZWZ0IHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICB9XHJcbiAgLmNsc2J0bnJpZ2h0IHtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTZweCkge1xyXG4gIC5jbHNidG5sZWZ0IHtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLmNsc2J0bnJpZ2h0IHtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tdC0xMDAge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaDQge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5jcm9zcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogIzBhMTkyZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250aW51ZTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRpbnVlIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDhweCAxOXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayctaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playcta',
                templateUrl: './playcta.component.html',
                styleUrls: ['./playcta.component.css'],
            }]
    }], function () { return [{ type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'quiz';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UkjL":
/*!**************************************************************!*\
  !*** ./src/app/teacher/teacherhome/teacherhome.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherhomeComponent", function() { return TeacherhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/teacher.service */ "IPfh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function TeacherhomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TeacherhomeComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function TeacherhomeComponent_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any uploaded Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const q_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.viewQuestion(q_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const q_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.delete(q_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](q_r9.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r9.quizdescription, " ");
} }
function TeacherhomeComponent_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Quiz Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "See Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeacherhomeComponent_ng_template_13_ng_template_1_tr_14_Template, 13, 3, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.quiz);
} }
function TeacherhomeComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TeacherhomeComponent_ng_template_13_div_0_Template, 10, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeacherhomeComponent_ng_template_13_ng_template_1_Template, 15, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class TeacherhomeComponent {
    constructor(teacherService, router) {
        this.teacherService = teacherService;
        this.router = router;
        this.msg = [];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = false;
        this.getdata();
    }
    getdata() {
        this.teacherService.gethomequiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.quiz = data['quiz'];
                this.loading = false;
                // console.log(this.quiz.length);
                if (!this.quiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
            // console.log(data);
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.teacherService.setQuizId(q._id);
        this.teacherService.setDelete(q.upload);
        this.router.navigate(['/teacher/seequestion']);
    }
    delete(quiz) {
        this.teacherService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
TeacherhomeComponent.ɵfac = function TeacherhomeComponent_Factory(t) { return new (t || TeacherhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TeacherhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherhomeComponent, selectors: [["app-teacherhome"]], decls: 15, vars: 3, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], [1, "table", "table-hover", "w-50", 2, "background-color", "white", "margin-top", "100px", "box-shadow", "0px 0px 19px 5px rgba(0, 0, 0, 0.5)"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f"], [1, "btn", "btn-danger", 3, "click"]], template: function TeacherhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hello, world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-teachernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TeacherhomeComponent_div_10_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeacherhomeComponent_ng_template_11_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeacherhomeComponent_ng_template_13_Template, 3, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_3__["TeachernavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%]{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n  margin-bottom: 250px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #0a192f;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nvertical-align: middle;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground-attachment: fixed;\r\nbackground-repeat: no-repeat;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVyaG9tZS90ZWFjaGVyaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci90ZWFjaGVyaG9tZS90ZWFjaGVyaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4qe1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG50aCx0ZHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG52ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbmh0bWwsYm9keXtcclxuXHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5oNCxoNXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzBhMTkyZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacherhome',
                templateUrl: './teacherhome.component.html',
                styleUrls: ['./teacherhome.component.css']
            }]
    }], function () { return [{ type: src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_1__["TeacherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _index_indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/indexheader/indexheader.component */ "MTG3");
/* harmony import */ var _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/indexmain/indexmain.component */ "4+a0");
/* harmony import */ var _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login-teacher/login-teacher.component */ "BvBR");
/* harmony import */ var _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login-student/login-student.component */ "wFJB");
/* harmony import */ var _admin_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.guard */ "17Sp");
/* harmony import */ var _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/teacher.guard */ "zqFa");
/* harmony import */ var _student_student_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student/student.guard */ "tn5a");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/token-interceptor.service */ "NxgW");
/* harmony import */ var _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/reset/reset.component */ "y7II");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ "xT/v");
/* harmony import */ var _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/reset-password-done/reset-password-done.component */ "EMjD");
/* harmony import */ var _index_temp_temp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index/temp/temp.component */ "mp5M");
/* harmony import */ var _index_t_t_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./index/t/t.component */ "mdn8");
/* harmony import */ var _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./teacher/teacherhome/teacherhome.component */ "UkjL");
/* harmony import */ var _admin_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/adminnav/adminnav.component */ "O94/");
/* harmony import */ var _teacher_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teacher/teachernav/teachernav.component */ "mlVf");
/* harmony import */ var _student_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./student/studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/adminhome/adminhome.component */ "mjI7");
/* harmony import */ var _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./student/studenthome/studenthome.component */ "qAPG");
/* harmony import */ var _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./teacher/createquiz/createquiz.component */ "0/SE");
/* harmony import */ var _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./teacher/uploadquiz/uploadquiz.component */ "9fHA");
/* harmony import */ var _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./teacher/seestudents/seestudents.component */ "IbWB");
/* harmony import */ var _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./teacher/addquestion/addquestion.component */ "NgLx");
/* harmony import */ var _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./teacher/seequestion/seequestion.component */ "8fTH");
/* harmony import */ var _admin_student_student_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/student/student.component */ "N/mo");
/* harmony import */ var _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/teacher/teacher.component */ "11p2");
/* harmony import */ var _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./error/notfound-error/notfound-error.component */ "5xLU");
/* harmony import */ var _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./error/server-error/server-error.component */ "BWLr");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./loading/loading/loading.component */ "O94Z");
/* harmony import */ var _msgbox_msgbox_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./msgbox/msgbox.component */ "ZNcC");
/* harmony import */ var _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/view-question/view-question.component */ "1M0h");
/* harmony import */ var _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./student/playquiz/playquiz.component */ "hPIn");
/* harmony import */ var _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./error/cheating/cheating.component */ "fauK");
/* harmony import */ var _student_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./student/compiler/compiler.component */ "kkf9");
/* harmony import */ var _teacher_seescores_seescores_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./teacher/seescores/seescores.component */ "JITU");
/* harmony import */ var _teacher_ctacreate_ctacreate_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./teacher/ctacreate/ctacreate.component */ "EW8g");
/* harmony import */ var _teacher_ctaupload_ctaupload_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./teacher/ctaupload/ctaupload.component */ "Q/bm");
/* harmony import */ var _teacher_addquestioncta_addquestioncta_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./teacher/addquestioncta/addquestioncta.component */ "44tp");
/* harmony import */ var _teacher_seequestioncta_seequestioncta_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./teacher/seequestioncta/seequestioncta.component */ "4An4");
/* harmony import */ var _student_playcta_playcta_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./student/playcta/playcta.component */ "QFh7");
/* harmony import */ var _student_studentctahome_studentctahome_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./student/studentctahome/studentctahome.component */ "uox2");
/* harmony import */ var _teacher_teacherctahome_teacherctahome_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./teacher/teacherctahome/teacherctahome.component */ "Oq7o");





















































// import { WebcamModule } from 'ngx-webcam';
//  import { NgxCaptchaModule } from 'ngx-captcha';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _admin_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"],
        _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["TeacherGuard"],
        _student_student_guard__WEBPACK_IMPORTED_MODULE_15__["StudentGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // WebcamModule,
            // RecaptchaMo
            // NgxCaptchaModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_8__["IndexnavComponent"],
        _index_indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_9__["IndexheaderComponent"],
        _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_10__["IndexmainComponent"],
        _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_11__["LoginTeacherComponent"],
        _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_12__["LoginStudentComponent"],
        _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_17__["ResetComponent"],
        _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordComponent"],
        _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordDoneComponent"],
        _index_temp_temp_component__WEBPACK_IMPORTED_MODULE_20__["TempComponent"],
        _index_t_t_component__WEBPACK_IMPORTED_MODULE_21__["TComponent"],
        _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_22__["TeacherhomeComponent"],
        _admin_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_23__["AdminnavComponent"],
        _teacher_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_24__["TeachernavComponent"],
        _student_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_25__["StudentnavComponent"],
        _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_26__["AdminhomeComponent"],
        _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_27__["StudenthomeComponent"],
        _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_28__["CreatequizComponent"],
        _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_29__["UploadquizComponent"],
        _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_30__["SeestudentsComponent"],
        _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_31__["AddquestionComponent"],
        _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_32__["SeequestionComponent"],
        _admin_student_student_component__WEBPACK_IMPORTED_MODULE_33__["StudentComponent"],
        _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_34__["TeacherComponent"],
        _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_35__["NotfoundErrorComponent"],
        _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_36__["ServerErrorComponent"],
        _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_37__["LoadingComponent"],
        _msgbox_msgbox_component__WEBPACK_IMPORTED_MODULE_38__["MsgboxComponent"],
        _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_39__["ViewQuestionComponent"],
        _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_40__["PlayquizComponent"],
        _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_41__["CheatingComponent"],
        _student_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_42__["CompilerComponent"],
        _teacher_seescores_seescores_component__WEBPACK_IMPORTED_MODULE_43__["SeescoresComponent"],
        _teacher_ctacreate_ctacreate_component__WEBPACK_IMPORTED_MODULE_44__["CtacreateComponent"],
        _teacher_ctaupload_ctaupload_component__WEBPACK_IMPORTED_MODULE_45__["CtauploadComponent"],
        _teacher_addquestioncta_addquestioncta_component__WEBPACK_IMPORTED_MODULE_46__["AddquestionctaComponent"],
        _teacher_seequestioncta_seequestioncta_component__WEBPACK_IMPORTED_MODULE_47__["SeequestionctaComponent"],
        _student_playcta_playcta_component__WEBPACK_IMPORTED_MODULE_48__["PlayctaComponent"],
        _student_studentctahome_studentctahome_component__WEBPACK_IMPORTED_MODULE_49__["StudentctahomeComponent"],
        _teacher_teacherctahome_teacherctahome_component__WEBPACK_IMPORTED_MODULE_50__["TeacherctahomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // WebcamModule,
        // RecaptchaMo
        // NgxCaptchaModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_8__["IndexnavComponent"],
                    _index_indexheader_indexheader_component__WEBPACK_IMPORTED_MODULE_9__["IndexheaderComponent"],
                    _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_10__["IndexmainComponent"],
                    _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_11__["LoginTeacherComponent"],
                    _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_12__["LoginStudentComponent"],
                    _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_17__["ResetComponent"],
                    _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordComponent"],
                    _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_19__["ResetPasswordDoneComponent"],
                    _index_temp_temp_component__WEBPACK_IMPORTED_MODULE_20__["TempComponent"],
                    _index_t_t_component__WEBPACK_IMPORTED_MODULE_21__["TComponent"],
                    _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_22__["TeacherhomeComponent"],
                    _admin_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_23__["AdminnavComponent"],
                    _teacher_teachernav_teachernav_component__WEBPACK_IMPORTED_MODULE_24__["TeachernavComponent"],
                    _student_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_25__["StudentnavComponent"],
                    _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_26__["AdminhomeComponent"],
                    _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_27__["StudenthomeComponent"],
                    _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_28__["CreatequizComponent"],
                    _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_29__["UploadquizComponent"],
                    _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_30__["SeestudentsComponent"],
                    _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_31__["AddquestionComponent"],
                    _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_32__["SeequestionComponent"],
                    _admin_student_student_component__WEBPACK_IMPORTED_MODULE_33__["StudentComponent"],
                    _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_34__["TeacherComponent"],
                    _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_35__["NotfoundErrorComponent"],
                    _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_36__["ServerErrorComponent"],
                    _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_37__["LoadingComponent"],
                    _msgbox_msgbox_component__WEBPACK_IMPORTED_MODULE_38__["MsgboxComponent"],
                    _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_39__["ViewQuestionComponent"],
                    _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_40__["PlayquizComponent"],
                    _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_41__["CheatingComponent"],
                    _student_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_42__["CompilerComponent"],
                    _teacher_seescores_seescores_component__WEBPACK_IMPORTED_MODULE_43__["SeescoresComponent"],
                    _teacher_ctacreate_ctacreate_component__WEBPACK_IMPORTED_MODULE_44__["CtacreateComponent"],
                    _teacher_ctaupload_ctaupload_component__WEBPACK_IMPORTED_MODULE_45__["CtauploadComponent"],
                    _teacher_addquestioncta_addquestioncta_component__WEBPACK_IMPORTED_MODULE_46__["AddquestionctaComponent"],
                    _teacher_seequestioncta_seequestioncta_component__WEBPACK_IMPORTED_MODULE_47__["SeequestionctaComponent"],
                    _student_playcta_playcta_component__WEBPACK_IMPORTED_MODULE_48__["PlayctaComponent"],
                    _student_studentctahome_studentctahome_component__WEBPACK_IMPORTED_MODULE_49__["StudentctahomeComponent"],
                    _teacher_teacherctahome_teacherctahome_component__WEBPACK_IMPORTED_MODULE_50__["TeacherctahomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // WebcamModule,
                    // RecaptchaMo
                    // NgxCaptchaModule,
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                ],
                providers: [
                    _admin_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"],
                    _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_14__["TeacherGuard"],
                    _student_student_guard__WEBPACK_IMPORTED_MODULE_15__["StudentGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZNcC":
/*!********************************************!*\
  !*** ./src/app/msgbox/msgbox.component.ts ***!
  \********************************************/
/*! exports provided: MsgboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgboxComponent", function() { return MsgboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class MsgboxComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.box').fadeOut(4000);
        });
    }
}
MsgboxComponent.ɵfac = function MsgboxComponent_Factory(t) { return new (t || MsgboxComponent)(); };
MsgboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MsgboxComponent, selectors: [["app-msgbox"]], inputs: { message: "message", styl: "styl" }, decls: 4, vars: 4, consts: [[1, "box"], [1, "error", 3, "ngStyle"]], template: function MsgboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.message), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".box[_ngcontent-%COMP%] {\r\n  position:fixed;\r\n   bottom: 20px;\r\n   right: 20px;\r\n  color: #f1f1f1;\r\n}\r\n.error[_ngcontent-%COMP%] {\r\n  min-width: min(400px, 70vw);\r\n  max-width: 1000px;\r\n  opacity: 0;\r\n  transform: translateY(50px);\r\n  animation: animate 400ms forwards var(--animation-function);\r\n}\r\n.box[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n  white-space: nowrap;\r\n  \r\n  overflow: hidden;\r\n  border-radius: 5px;\r\n  padding: 1rem 1rem;\r\n}\r\n@keyframes animate {\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n@media (max-width: 650px) {\r\n  .error[_ngcontent-%COMP%] {\r\n    background: rgb(240, 71, 71);\r\n    transform: translateY(-50px);\r\n    white-space: normal;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXNnYm94L21zZ2JveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztHQUNiLFlBQVk7R0FDWixXQUFXO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLDJEQUEyRDtBQUM3RDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFHQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQjtFQUM1QjtBQUNGO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tc2dib3gvbXNnYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICAgYm90dG9tOiAyMHB4O1xyXG4gICByaWdodDogMjBweDtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG4uZXJyb3Ige1xyXG4gIG1pbi13aWR0aDogbWluKDQwMHB4LCA3MHZ3KTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICBhbmltYXRpb246IGFuaW1hdGUgNDAwbXMgZm9yd2FyZHMgdmFyKC0tYW5pbWF0aW9uLWZ1bmN0aW9uKTtcclxufVxyXG4uYm94IC5lcnJvciB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLyogdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICovXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC5lcnJvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCA3MSwgNzEpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsgboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-msgbox',
                templateUrl: './msgbox.component.html',
                styleUrls: ['./msgbox.component.css']
            }]
    }], function () { return []; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fauK":
/*!******************************************************!*\
  !*** ./src/app/error/cheating/cheating.component.ts ***!
  \******************************************************/
/*! exports provided: CheatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheatingComponent", function() { return CheatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");



class CheatingComponent {
    constructor() { }
    ngOnInit() {
    }
}
CheatingComponent.ɵfac = function CheatingComponent_Factory(t) { return new (t || CheatingComponent)(); };
CheatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheatingComponent, selectors: [["app-cheating"]], decls: 6, vars: 0, consts: [[2, "overflow-x", "hidden"], [1, "text-center", "mt-5", 2, "color", "#2f2e41"], [1, "d-flex", "justify-content-center", "mt-3"], ["src", "../../../assets/img/cheat.svg", "alt", "", 1, "img-fluid", 2, "max-height", "500px"]], template: function CheatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hmmm ! Seems Like You Cheated !!! Your Login is Blocked. Unblock yourself by contacting Admin or Teacher. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n}\r\n@media (max-width: 767px) {\r\n  h4[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvY2hlYXRpbmcvY2hlYXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9jaGVhdGluZy9jaGVhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIGg0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cheating',
                templateUrl: './cheating.component.html',
                styleUrls: ['./cheating.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hPIn":
/*!********************************************************!*\
  !*** ./src/app/student/playquiz/playquiz.component.ts ***!
  \********************************************************/
/*! exports provided: PlayquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayquizComponent", function() { return PlayquizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");








function PlayquizComponent_app_studentnav_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentnav");
} }
function PlayquizComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PlayquizComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function PlayquizComponent_ng_template_10_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlayquizComponent_ng_template_10_div_12_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.answer(ctx_r11.oneQuestion.questionId, user_r9.optionValue); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r9.optionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r9.optionValue);
} }
function PlayquizComponent_ng_template_10_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayquizComponent_ng_template_10_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayquizComponent_ng_template_10_div_13_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.lastsubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.flageLast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.flageLast);
} }
function PlayquizComponent_ng_template_10_h4_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" You have scored ", ctx_r8.score, "/", ctx_r8.totalQuestion, " ");
} }
function PlayquizComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PlayquizComponent_ng_template_10_div_12_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlayquizComponent_ng_template_10_div_13_Template, 7, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PlayquizComponent_ng_template_10_h4_14_Template, 2, 2, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CONGRATULATIONS!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayquizComponent_ng_template_10_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.navigatehome(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " CONTINUE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx_r5.questionCounter, " of ", ctx_r5.totalQuestion, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timeleft 00:", ctx_r5.timePerQuestion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. ", ctx_r5.oneQuestion.questionText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.oneQuestion.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.finalsubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.finalsubmit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have scored ", ctx_r5.score, "/", ctx_r5.totalQuestion, "");
} }
class PlayquizComponent {
    constructor(studentService, authService, router) {
        this.studentService = studentService;
        this.authService = authService;
        this.router = router;
        this.solutionArray = [];
        this.ansOfOneQuestion = [];
        this.ansKey = [];
        this.time = 10;
        this.score = 0;
        this.flageLast = false;
        this.questionCounter = 1;
        this.finishflag = false;
        this.finalsubmit = false;
    }
    ngOnInit() {
        // this.toggleFullScreen(document.body)
        this.load = true;
        if (this.studentService.getQuizId() == undefined) {
            this.router.navigate(['/student/studenthome']);
        }
        else {
            this.quizid = this.studentService.getQuizId();
            this.getAllQuestions(this.quizid);
            this.myurl = this.router.url;
            // console.log(this.myurl);
            window.addEventListener('blur', (event) => {
                if (this.myurl === '/student/playquiz' && this.finalsubmit == false) {
                    this.block();
                }
            });
            window.addEventListener('resize', (event) => {
                if (this.myurl === '/student/playquiz' && this.finalsubmit == false) {
                    this.block();
                }
            });
        }
    }
    getAllQuestions(quizid) {
        this.studentService.getAllQuestion(quizid).subscribe((data) => {
            if (data['msg']) {
                this.load = false;
                this.allQuestions = data['msg'];
                this.createAns();
                this.shuffleQuestion();
                this.timePerQuestion = this.time;
                this.totalQuestion = this.allQuestions.length;
                this.oneQuestion = this.allQuestions[0];
                this.countdown();
            }
            // console.log(this.allQuestions);
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    shuffleQuestion() {
        var m = this.allQuestions.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.allQuestions[m];
            this.allQuestions[m] = this.allQuestions[i];
            this.allQuestions[i] = t;
        }
        this.shuffleOption();
    }
    shuffleOption() {
        for (let i = 0; i < this.allQuestions.length; i++) {
            var x = this.allQuestions[i].options;
            var m = 4, t, j;
            while (m) {
                j = Math.floor(Math.random() * m--);
                t = x[m];
                x[m] = x[j];
                x[j] = t;
            }
        }
    }
    createAns() {
        for (let index = 0; index < this.allQuestions.length; index++) {
            const id = this.allQuestions[index].questionId;
            const ans = this.allQuestions[index].answer;
            this.ansKey.push({ qid: id, ans: ans });
        }
        // console.log("key");
        // console.log(this.ansKey);
    }
    countdown() {
        this.interval = setInterval(() => {
            if (this.timePerQuestion > 0) {
                this.timePerQuestion--;
            }
            if (this.timePerQuestion == 0) {
                // reset
                if (this.questionCounter + 1 <= this.totalQuestion) {
                    this.oneQuestion = this.allQuestions[this.questionCounter];
                    this.questionCounter++;
                    if (this.questionCounter == this.totalQuestion) {
                        this.flageLast = true;
                    }
                    this.timePerQuestion = this.time;
                    // console.log("reset timer");
                }
                else {
                    // this.router.navigate(['/']);
                    this.myStopFunction(this.interval);
                    // localStorage.removeItem('load');
                    // console.log("timeout");
                    this.finalsubmit = true;
                    this.getScore();
                }
            }
        }, 1000);
        // console.log("hloo");
    }
    myStopFunction(a) {
        clearInterval(a);
    }
    nextQuestion() {
        // console.log("button clicked");
        if (this.questionCounter != this.totalQuestion) {
            this.questionCounter++;
            if (this.questionCounter == this.totalQuestion) {
                this.flageLast = true;
            }
            this.oneQuestion = this.allQuestions[this.questionCounter - 1];
            this.timePerQuestion = this.time;
        }
        if (this.questionCounter > this.totalQuestion) {
            // this.router.navigate(['/']);
            this.myStopFunction(this.interval);
            // this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
            //   .subscribe(
            //     data => {
            //       if (data['msg']) {
            //         console.log('data of msh');
            //         console.log(data['msg']);
            //       }
            //     },
            //     error => { console.error(error); }
            //   )
        }
    }
    navigatehome() {
        this.router.navigate(['/student/studenthome']);
    }
    answer(qid, ans) {
        this.temp = this.ansOfOneQuestion.pop();
        if (this.temp) {
            if (this.temp.qid != qid) {
                this.ansOfOneQuestion.push(this.temp);
            }
        }
        this.ansOfOneQuestion.push({ qid: qid, ans: ans });
    }
    getScore() {
        for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
            for (let j = 0; j < this.ansKey.length; j++) {
                if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
                    if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
                        this.score++;
                    }
                }
            }
        }
    }
    lastsubmit() {
        this.finalsubmit = true;
        // localStorage.removeItem('load');
        this.myStopFunction(this.interval);
        this.getScore();
    }
    block() {
        this.studentService.block().subscribe((data) => {
            // console.log(data);
            if (data['message']) {
                this.authService.logoutUser();
                this.router.navigate(['/cheat']);
            }
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
}
PlayquizComponent.ɵfac = function PlayquizComponent_Factory(t) { return new (t || PlayquizComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PlayquizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayquizComponent, selectors: [["app-playquiz"]], decls: 12, vars: 4, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [1, "container", "mt-sm-5", "my-1"], [1, "bg-white", "p-3", "border-bottom"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "mcq"], [1, "text-danger"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2", "h5"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center pt-3", "style", "position: relative; margin-top: 20px; margin-bottom: 20px", 4, "ngIf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "card"], [1, "text-right", "cross"], [1, "fa", "fa-times"], [1, "card-body", "text-center"], ["src", "../../../assets/img/achivement.svg", 1, "img-fluid"], [1, "btn", "btn-out", "btn-square", "continue", "mt-5", 2, "cursor", "pointer", 3, "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"], [1, "options"], ["type", "radio", "name", "option", 3, "value", "change"], [1, "checkmark"], [1, "d-flex", "align-items-center", "pt-3", 2, "position", "relative", "margin-top", "20px", "margin-bottom", "20px"], [1, "clsbtnleft"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "clsbtnright"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function PlayquizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayquizComponent_app_studentnav_6_Template, 1, 0, "app-studentnav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PlayquizComponent_div_7_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayquizComponent_ng_template_8_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PlayquizComponent_ng_template_10_Template, 28, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalsubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.load)("ngIfThen", _r2)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_5__["StudentnavComponent"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    background-color:#f1f1f1;\r\n    color: #0a192f;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    max-width: 800px;\r\n\r\n}\r\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    color: #0a192f;\r\n\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 40px;\r\n}\r\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n.clsbtnleft[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    left: 35%;\r\n\r\n}\r\n.clsbtnright[_ngcontent-%COMP%]\r\n{\r\n\r\n    position: absolute;\r\n    right: 30%;\r\n}\r\n.checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -1px;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #f1f1f1;\r\n    border: 2px solid #0a192f;\r\n    border-radius: 50%;\r\n}\r\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n.options[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 10px;\r\n    \r\n    display: block;\r\n    background: white;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    border-radius: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 300ms ease-in-out 0s;\r\n}\r\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\r\n    background: #0a192f;\r\n    transition: 300ms ease-in-out 0s;\r\n}\r\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n@media(max-width:720px) {\r\n\r\n    .clsbtnleft[_ngcontent-%COMP%]\r\n    {\r\n        left:30%;\r\n    }\r\n    .clsbtnright[_ngcontent-%COMP%]\r\n    {\r\n        right: 30%;\r\n    }\r\n}\r\n@media(max-width:576px) {\r\n    .question[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        word-spacing: 2px;\r\n    }\r\n    .clsbtnleft[_ngcontent-%COMP%]\r\n    {\r\n        left:20%;\r\n    }\r\n    .clsbtnright[_ngcontent-%COMP%]\r\n    {\r\n        right: 20%;\r\n    }\r\n}\r\n@media(max-width:356px) {\r\n\r\n    .clsbtnleft[_ngcontent-%COMP%]\r\n    {\r\n        left:10%;\r\n    }\r\n    .clsbtnright[_ngcontent-%COMP%]\r\n    {\r\n        right: 10%;\r\n    }\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n\r\n  color: #0a192f;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n}\r\n.mt-100[_ngcontent-%COMP%] {\r\n    margin-top: 100px\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-size: 14px\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    margin-top: 18px\r\n}\r\n.cross[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    color: #0a192f;\r\n    cursor: pointer\r\n}\r\n.continue[_ngcontent-%COMP%]:focus {\r\n    outline: none\r\n}\r\n.continue[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    text-transform: capitalize;\r\n    font-size: 13px;\r\n    padding: 8px 19px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    background-color: #0a192f\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9wbGF5cXVpei9wbGF5cXVpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQUMvRSw2R0FBNkc7QUFDN0c7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7O0FBRWxCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjtBQUNBOzs7SUFHSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSDs7SUFFSTs7UUFFSSxRQUFRO0lBQ1o7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksUUFBUTtJQUNaO0lBQ0E7O1FBRUksVUFBVTtJQUNkO0FBQ0o7QUFDQTs7SUFFSTs7UUFFSSxRQUFRO0lBQ1o7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUlBOztFQUVFLGNBQWM7RUFDZCxrQ0FBa0M7O0FBRXBDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3BsYXlxdWl6L3BsYXlxdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcIik7XHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7ICovXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTtcclxuICAgIGNvbG9yOiAjMGExOTJmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuXHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyPnAge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzBhMTkyZjtcclxuXHJcbn1cclxuaDQsaDV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm9wdGlvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4jb3B0aW9ucyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wdGlvbnMgaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNsc2J0bmxlZnRcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzUlO1xyXG5cclxufVxyXG4uY2xzYnRucmlnaHRcclxue1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzMCU7XHJcbn1cclxuLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBhMTkyZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLm9wdGlvbnMgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ub3B0aW9ucyAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIC8qIGNvbG9yOiByZWQ7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG4ub3B0aW9ucyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZH4uY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQ6ICMwYTE5MmY7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLm9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcclxufVxyXG5cclxuLyogLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFiZjczO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIxYmY3MztcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYmY3MztcclxufSAqL1xyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3MjBweCkge1xyXG5cclxuICAgIC5jbHNidG5sZWZ0XHJcbiAgICB7XHJcbiAgICAgICAgbGVmdDozMCU7XHJcbiAgICB9XHJcbiAgICAuY2xzYnRucmlnaHRcclxuICAgIHtcclxuICAgICAgICByaWdodDogMzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjU3NnB4KSB7XHJcbiAgICAucXVlc3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gICAgfVxyXG4gICAgLmNsc2J0bmxlZnRcclxuICAgIHtcclxuICAgICAgICBsZWZ0OjIwJTtcclxuICAgIH1cclxuICAgIC5jbHNidG5yaWdodFxyXG4gICAge1xyXG4gICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDozNTZweCkge1xyXG5cclxuICAgIC5jbHNidG5sZWZ0XHJcbiAgICB7XHJcbiAgICAgICAgbGVmdDoxMCU7XHJcbiAgICB9XHJcbiAgICAuY2xzYnRucmlnaHRcclxuICAgIHtcclxuICAgICAgICByaWdodDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5jYXJke1xyXG5cclxuICBjb2xvcjogIzBhMTkyZjtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbi5tdC0xMDAge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcblxyXG5oNCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4XHJcbn1cclxuXHJcbi5jcm9zcyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICMwYTE5MmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmNvbnRpbnVlOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmVcclxufVxyXG5cclxuLmNvbnRpbnVlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogOHB4IDE5cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmZcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayquizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playquiz',
                templateUrl: './playquiz.component.html',
                styleUrls: ['./playquiz.component.css'],
            }]
    }], function () { return [{ type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "kkf9":
/*!********************************************************!*\
  !*** ./src/app/student/compiler/compiler.component.ts ***!
  \********************************************************/
/*! exports provided: CompilerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerComponent", function() { return CompilerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class CompilerComponent {
    constructor() { }
    ngOnInit() { }
}
CompilerComponent.ɵfac = function CompilerComponent_Factory(t) { return new (t || CompilerComponent)(); };
CompilerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompilerComponent, selectors: [["app-compiler"]], decls: 40, vars: 0, consts: [["href", "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cookie&family=EB+Garamond&family=Libre+Baskerville:wght@700&family=Merriweather&family=Montserrat:wght@900&family=Mulish&family=Noto+Serif&family=Playfair+Display:wght@600&family=Ubuntu:wght@300&display=swap"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65", "crossorigin", "anonymous"], ["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["rel", "stylesheet", "href", "https://pro.fontawesome.com/releases/v5.10.0/css/all.css", "integrity", "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p", "crossorigin", "anonymous"], [1, "a"], [1, "fas", "fa-question-circle"], [1, "textarea"], ["method", "post", "action", "https://www.jdoodle.com/api/redirect-to-post/c-online-compiler"], [1, "chp"], ["type", "submit", "value", "Proceed", 1, "btn", "btn-light"]], template: function CompilerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Practice Programs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Program to Display \"Hello, World!\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Program to Add Two numbers\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Program to find the number is positive or negative\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Program to find the number is even or odd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".a[_ngcontent-%COMP%] {\r\n    \r\n    margin: 0;\r\n    padding-top: 50px;\r\n    padding-left: 150px;\r\n    color: #5777ba;\r\n    font-family: 'Merriweather', serif;\r\n  }\r\n  .chp[_ngcontent-%COMP%] {\r\n    padding-top: 0.5px;\r\n    padding-left: 15px;\r\n    font-family: 'Noto Serif', serif;\r\n    margin-left: 30px;\r\n    margin-left: 155px;\r\n  }\r\n  hr[_ngcontent-%COMP%]{\r\n    margin-left: 150px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21waWxlci9jb21waWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcGlsZXIvY29tcGlsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOyAqL1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG4gICAgY29sb3I6ICM1Nzc3YmE7XHJcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xyXG4gIH1cclxuICAuY2hwIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTZXJpZicsIHNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTU1cHg7XHJcbiAgfVxyXG4gIGhye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIH0iXX0= */", "@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cookie&family=EB+Garamond&family=Libre+Baskerville:wght@700&family=Merriweather:ital,wght@0,400;1,300&family=Montserrat:wght@900&family=Mulish&family=Noto+Serif&family=Ubuntu:wght@300&display=swap\");", "@import url(\"https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cookie&family=EB+Garamond&family=Libre+Baskerville:wght@700&family=Merriweather&family=Montserrat:wght@900&family=Mulish&family=Noto+Serif&family=Playfair+Display:wght@500;600&family=Ubuntu:wght@300&display=swap\");"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompilerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-compiler',
                templateUrl: './compiler.component.html',
                styleUrls: ['./compiler.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l08C":
/*!******************************************************!*\
  !*** ./src/app/index/indexnav/indexnav.component.ts ***!
  \******************************************************/
/*! exports provided: IndexnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexnavComponent", function() { return IndexnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/student"]; };
const _c2 = function () { return ["/teacher"]; };
class IndexnavComponent {
    constructor() { }
    ngOnInit() {
    }
}
IndexnavComponent.ɵfac = function IndexnavComponent_Factory(t) { return new (t || IndexnavComponent)(); };
IndexnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexnavComponent, selectors: [["app-indexnav"]], decls: 19, vars: 6, consts: [["lang", "en"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px", "position", "fixed"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function IndexnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n  background-color: #0A192F;\r\n  color: #fff;\r\n  min-height: 75px;\r\n\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  padding: 14px 0 5px;\r\n  margin: 0 25px;\r\n  color: rgb(255, 255, 255);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-family: 'Audiowide' ,cursive;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n\r\n  bottom: 0;\r\n\r\n  transform: translateX(-100%) scaleX(0);\r\n  -webkit-transform: translateX(-100%) scaleX(0);\r\n  transform-origin: 50% 50%;\r\n\r\n\r\n  width: 100%;\r\n  height: 2px;\r\n\r\n  background-color:#fff;\r\n  transition: transform 250ms;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\n\r\n  transform: translateX(-100%) scaleX(1);\r\n}\r\n.navbar-nav[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 0;\r\n}\r\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  margin: 0 10px;\r\n}\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #333;\r\n}\r\n@media (max-width: 600px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXhuYXYvaW5kZXhuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleG5hdi9pbmRleG5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qLS0tLS0tLS0tLS0tLSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG5hdmJhciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5uYXZiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMTkyRjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiA3NXB4O1xyXG5cclxufVxyXG4ubmF2YmFyIHVsIGxpe1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbi5sb2dve1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbnVsIGxpIGF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE0cHggMCA1cHg7XHJcbiAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScgLGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDApO1xyXG5cclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuXHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhOmhvdmVyOmFmdGVye1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xyXG59XHJcbi5uYXZiYXItbmF2e1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMDAwcHg7ICovXHJcbiAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyIGxpe1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5uYXZiYXIgYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH19Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indexnav',
                templateUrl: './indexnav.component.html',
                styleUrls: ['./indexnav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.avail = false;
        this.msg = "";
        this.baseUri = "http://localhost:3000";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    registerStudent(body) {
        return this.http.post('http://127.0.0.1:3000/registerstudnet', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    registerTeacher(body) {
        return this.http.post('http://127.0.0.1:3000/registerteacher', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    login(body) {
        return this.http.post('http://127.0.0.1:3000/login', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    reset(body) {
        return this.http.post('http://127.0.0.1:3000/reset', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    resetpassworddone(body) {
        return this.http.post('http://127.0.0.1:3000/reset-password-done', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    logoutUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    check() {
        return this.http.get(this.baseUri + "/check", { headers: this.headers });
    }
    testdone(body) {
        return this.http.post('http://127.0.0.1:3000/testdone', body, {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
    testblock() {
        return this.http.post('http://127.0.0.1:3000/testblock', {
            observe: 'body',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().append('Content-Type', 'application/json')
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mdn8":
/*!****************************************!*\
  !*** ./src/app/index/t/t.component.ts ***!
  \****************************************/
/*! exports provided: TComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TComponent", function() { return TComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import { WebcamImage } from 'ngx-webcam';
// import { Subject, Observable } from 'rxjs';
class TComponent {
    constructor() {
        // ngZone:NgZone
        //   window['onSignIn'] = user => ngZone.run(()=>{
        //     this.dosomething(user);
        // })
    }
    // dosomething(googleuser)
    // {
    //   console.log(googleuser);
    // }
    // public webcamImage: WebcamImage = null;
    // // webcam snapshot trigger
    // private trigger: Subject<void> = new Subject<void>();
    // triggerSnapshot(): void {
    //   this.trigger.next();
    // }
    // handleImage(webcamImage: WebcamImage): void {
    //   console.info('received webcam image', webcamImage);
    //   this.webcamImage = webcamImage;
    // }
    // public get triggerObservable(): Observable<void> {
    //   return this.trigger.asObservable();
    // }
    ngOnInit() {
    }
}
TComponent.ɵfac = function TComponent_Factory(t) { return new (t || TComponent)(); };
TComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TComponent, selectors: [["app-t"]], decls: 10, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [1, "container"], [1, "container-fluid"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLScWt_aPtooQqQR-eQWxE2oMm_m34zOh0b-Spd2WJZmsTI46fQ/viewform?embedded=true", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function TComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Loading\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["iframe[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvdC90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvdC90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-t',
                templateUrl: './t.component.html',
                styleUrls: ['./t.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mjI7":
/*!********************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome.component.ts ***!
  \********************************************************/
/*! exports provided: AdminhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function() { return AdminhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/admin.service */ "AJ6+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminnav/adminnav.component */ "O94/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");







function AdminhomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function AdminhomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function AdminhomeComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.viewQuestion(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.delete(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizdescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.owneremail);
} }
function AdminhomeComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quiz Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quiz Creater's Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminhomeComponent_ng_template_4_ng_template_1_tr_19_Template, 15, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allquiz);
} }
function AdminhomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminhomeComponent_ng_template_4_div_0_Template, 10, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminhomeComponent_ng_template_4_ng_template_1_Template, 20, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class AdminhomeComponent {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.getdata();
    }
    getdata() {
        this.adminService.getAllQuiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.allquiz = data['quiz'];
                if (!this.allquiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            // console.error(error);
            this.router.navigate(['/error']);
        });
    }
    viewQuestion(q) {
        this.adminService.setQuizId(q._id);
        this.adminService.setDelete(q.upload);
        this.router.navigate(['/admin/seequestion']);
    }
    delete(quiz) {
        this.adminService.deletequiz(quiz._id)
            .subscribe(data => {
            // console.log(data);
            this.getdata();
            // this.router.navigate(['/teacher/teacherhome']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
AdminhomeComponent.ɵfac = function AdminhomeComponent_Factory(t) { return new (t || AdminhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminhomeComponent, selectors: [["app-adminhome"]], decls: 6, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["id", "container", 1, "container"], [1, "col-12"], [1, "table", "table-image"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "color", "#0a192f"], [1, "btn", "btn-danger", 2, "color", "#f1f1f1", 3, "click"]], template: function AdminhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-adminnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminhomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminhomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminhomeComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_adminnav_adminnav_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\r\n  color: #0a192f;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 2rem 0rem;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  margin-bottom: 200px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  margin: 2rem 0rem 1rem;\r\n}\r\n.table-image[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-image[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  }\r\nthead[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n  transition: 0.5s all ease-in-out;\r\n}\r\nimg[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.04);\r\n  }\r\n#edit[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#edit[_ngcontent-%COMP%]:hover{\r\n  color: #285aa5;\r\n  transform: scale(1.3);\r\n}\r\n#delete[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#delete[_ngcontent-%COMP%]:hover{\r\n  color: tomato;\r\n  transform: scale(1.3);\r\n}\r\n#plus[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#plus[_ngcontent-%COMP%]:hover{\r\n  color: #285aa5;\r\n  transform: scale(1.3);\r\n}\r\n@media (max-width: 767px) {\r\n  #container[_ngcontent-%COMP%]{\r\n    overflow-x: scroll;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGO0VBQ0UsZUFBZTtBQUNqQjtBQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjtFQUNFLGdDQUFnQztBQUNsQztBQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW5ob21lL2FkbWluaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtIDByZW07XHJcbn1cclxuLnRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbjogMnJlbSAwcmVtIDFyZW07XHJcbn1cclxuXHJcbi50YWJsZS1pbWFnZSB0ZCxcclxuLnRhYmxlLWltYWdlIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG50aCx0ZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG50aGVhZHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuICB0ZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuaW1ne1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbiAgaW1nOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcbiAgfVxyXG4jZWRpdHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuI2VkaXQ6aG92ZXJ7XHJcbiAgY29sb3I6ICMyODVhYTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG4jZGVsZXRle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2RlbGV0ZTpob3ZlcntcclxuICBjb2xvcjogdG9tYXRvO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuI3BsdXN7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jcGx1czpob3ZlcntcclxuICBjb2xvcjogIzI4NWFhNTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNjb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminhome',
                templateUrl: './adminhome.component.html',
                styleUrls: ['./adminhome.component.css']
            }]
    }], function () { return [{ type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mlVf":
/*!************************************************************!*\
  !*** ./src/app/teacher/teachernav/teachernav.component.ts ***!
  \************************************************************/
/*! exports provided: TeachernavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachernavComponent", function() { return TeachernavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");




const _c0 = function () { return ["/teacher/teacherhome"]; };
const _c1 = function () { return ["/teacher/createquiz"]; };
const _c2 = function () { return ["/teacher/uploadquiz"]; };
const _c3 = function () { return ["/teacher/teacherctahome"]; };
const _c4 = function () { return ["/teacher/ctacreate"]; };
const _c5 = function () { return ["/teacher/ctaupload"]; };
const _c6 = function () { return ["/teacher/seestudentes"]; };
const _c7 = function () { return ["/"]; };
class TeachernavComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutuser() {
        this.authService.logoutUser();
        this.router.navigate(['/']);
    }
}
TeachernavComponent.ɵfac = function TeachernavComponent_Factory(t) { return new (t || TeachernavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
TeachernavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeachernavComponent, selectors: [["app-teachernav"]], decls: 33, vars: 16, consts: [["lang", "en"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "fa", "fa-bars", 2, "color", "#fff", "font-size", "28px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 3, "routerLink", "click"]], template: function TeachernavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upload Quiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "home cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Create cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upload cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "See Studentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeachernavComponent_Template_a_click_31_listener() { return ctx.logoutuser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n  background-color: #0A192F;\r\n  color: #fff;\r\n  min-height: 75px;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  display: inline-flex;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  padding: 14px 0 5px;\r\n  margin: 0 25px;\r\n  color: rgb(255, 255, 255);\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-family: 'Audiowide' ,cursive;\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n\r\n  bottom: 0;\r\n\r\n  transform: translateX(-100%) scaleX(0);\r\n  -webkit-transform: translateX(-100%) scaleX(0);\r\n  transform-origin: 50% 50%;\r\n\r\n\r\n  width: 100%;\r\n  height: 2px;\r\n\r\n  background-color:#fff;\r\n  transition: transform 250ms;\r\n}\r\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{\r\n\r\n  transform: translateX(-100%) scaleX(1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci90ZWFjaGVybmF2L3RlYWNoZXJuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0hBQWdIO0FBQ2hIO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCOztFQUVsQixTQUFTOztFQUVULHNDQUFzQztFQUN0Qyw4Q0FBOEM7RUFJOUMseUJBQXlCOzs7RUFHekIsV0FBVztFQUNYLFdBQVc7O0VBRVgscUJBQXFCO0VBR3JCLDJCQUEyQjtBQUM3QjtBQUVBOztFQUdFLHNDQUFzQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXIvdGVhY2hlcm5hdi90ZWFjaGVybmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyotLS0tLS0tLS0tLS0tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmF2YmFyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLm5hdmJhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEExOTJGO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXIgdWwgbGl7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbnVsIGxpIGF7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDE0cHggMCA1cHg7XHJcbiAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScgLGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlWCgwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDApO1xyXG5cclxuXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuXHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcblxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcztcclxufVxyXG5cclxuLm5hdmJhciB1bCBsaSBhOmhvdmVyOmFmdGVye1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZVgoMSk7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGVYKDEpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeachernavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teachernav',
                templateUrl: './teachernav.component.html',
                styleUrls: ['./teachernav.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "mp5M":
/*!**********************************************!*\
  !*** ./src/app/index/temp/temp.component.ts ***!
  \**********************************************/
/*! exports provided: TempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempComponent", function() { return TempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "Gyf/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TempComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TempComponent_div_18_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.answer(ctx_r4.oneQuestion.questionId, user_r2.optionValue); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.optionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r2.optionValue);
} }
function TempComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TempComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TempComponent_div_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.lastsubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.flageLast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.flageLast);
} }
class TempComponent {
    constructor(router, authService, webSocketService) {
        this.router = router;
        this.authService = authService;
        this.webSocketService = webSocketService;
        // 0:<span *ngIf="timeLeft < 10">0</span>{{ timeLeft }}
        this.solutionArray = [];
        this.ansOfOneQuestion = [];
        this.ansKey = [];
        this.time = 10;
        this.score = 0;
        this.flageLast = false;
        this.questionCounter = 1;
        this.finishflag = false;
        this.finalsubmit = false;
        // submitAvail:any = true;
        this.allQuestions = [
            {
                questionId: 1,
                questionText: 'a?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '1',
            },
            {
                questionId: 2,
                questionText: 'b?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '2',
            },
            {
                questionId: 3,
                questionText: 'c?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '3',
            },
            {
                questionId: 4,
                questionText: 'd?',
                options: [
                    { optionValue: '1', optionText: 'A' },
                    { optionValue: '2', optionText: 'B' },
                    { optionValue: '3', optionText: 'C' },
                    { optionValue: '4', optionText: 'D' }
                ],
                answer: '4',
            }
        ];
    }
    ngOnInit() {
        // window.addEventListener('blur', event => {
        //   this.router.navigate(['/']);
        // localStorage.removeItem('load');
        // });
        // window.addEventListener('resize', event => {
        //   this.router.navigate(['/']);
        // localStorage.removeItem('load');
        // });
        console.log("loacal");
        console.log();
        if (!localStorage.getItem('load')) {
            localStorage.setItem('load', '1');
        }
        else {
            alert("you reloaded this page");
        }
        this.createAns();
        this.shuffleQuestion();
        this.webSocketService.listen('test event').subscribe((data) => {
            console.log(data);
        });
        this.timePerQuestion = this.time;
        this.totalQuestion = this.allQuestions.length;
        this.oneQuestion = this.allQuestions[0];
        this.countdown();
    }
    shuffleQuestion() {
        var m = this.allQuestions.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.allQuestions[m];
            this.allQuestions[m] = this.allQuestions[i];
            this.allQuestions[i] = t;
        }
        this.shuffleOption();
    }
    shuffleOption() {
        for (let i = 0; i < this.allQuestions.length; i++) {
            var x = this.allQuestions[i].options;
            var m = 4, t, j;
            while (m) {
                j = Math.floor(Math.random() * m--);
                t = x[m];
                x[m] = x[j];
                x[j] = t;
            }
        }
    }
    createAns() {
        for (let index = 0; index < this.allQuestions.length; index++) {
            const id = this.allQuestions[index].questionId;
            const ans = this.allQuestions[index].answer;
            this.ansKey.push({ qid: id, ans: ans });
        }
        // console.log("key");
        // console.log(this.ansKey);
    }
    countdown() {
        this.interval = setInterval(() => {
            if (this.timePerQuestion > 0) {
                this.timePerQuestion--;
            }
            if (this.timePerQuestion == 0) {
                // reset
                if (this.questionCounter + 1 <= this.totalQuestion) {
                    this.oneQuestion = this.allQuestions[this.questionCounter];
                    this.questionCounter++;
                    if (this.questionCounter == this.totalQuestion) {
                        this.flageLast = true;
                    }
                    this.timePerQuestion = this.time;
                    console.log("reset timer");
                }
                else {
                    // this.router.navigate(['/']);
                    this.myStopFunction(this.interval);
                    localStorage.removeItem('load');
                    this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
                        .subscribe(data => {
                        if (data['msg']) {
                            console.log('data of msh');
                            console.log(data['msg']);
                            // this.msg = ;
                            // this.avail = true;
                            // return;
                        }
                        // this.router.navigate(['/teacher/teacherhome']);
                    }, error => { console.error(error); });
                }
            }
        }, 1000);
        // console.log("hloo");
    }
    myStopFunction(a) {
        clearInterval(a);
    }
    nextQuestion() {
        // console.log("button clicked");
        if (this.questionCounter != this.totalQuestion) {
            this.questionCounter++;
            if (this.questionCounter == this.totalQuestion) {
                this.flageLast = true;
            }
            this.oneQuestion = this.allQuestions[this.questionCounter - 1];
            this.timePerQuestion = this.time;
        }
        if (this.questionCounter > this.totalQuestion) {
            // this.router.navigate(['/']);
            this.myStopFunction(this.interval);
            this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
                .subscribe(data => {
                if (data['msg']) {
                    console.log('data of msh');
                    console.log(data['msg']);
                    // this.msg = ;
                    // this.avail = true;
                    // return;
                }
                // this.router.navigate(['/teacher/teacherhome']);
                //            this.router.navigate(['/']);
            }, error => { console.error(error); });
        }
    }
    navigatehome() {
        console.log("naa");
    }
    answer(qid, ans) {
        this.temp = this.ansOfOneQuestion.pop();
        if (this.temp) {
            if (this.temp.qid != qid) {
                this.ansOfOneQuestion.push(this.temp);
            }
        }
        this.ansOfOneQuestion.push({ qid: qid, ans: ans });
        // console.log(this.ansOfOneQuestion);
    }
    getScore() {
        // console.log("in get score");
        // console.log(this.ansKey);
        // console.log(this.ansOfOneQuestion);
        for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
            for (let j = 0; j < this.ansKey.length; j++) {
                if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
                    if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
                        this.score++;
                    }
                }
            }
        }
        // console.log("yyour score is ", this.score);
    }
    lastsubmit() {
        this.finalsubmit = true;
        localStorage.removeItem('load');
        this.myStopFunction(this.interval);
        this.getScore();
        this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
            .subscribe(data => {
            if (data['msg']) {
                console.log('data of msh');
                console.log(data['msg']);
                // this.msg = ;
                // this.avail = true;
                // return;
            }
            // this.router.navigate(['/teacher/teacherhome']);
            //            this.router.navigate(['/']);
        }, error => { console.error(error); });
    }
}
TempComponent.ɵfac = function TempComponent_Factory(t) { return new (t || TempComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
TempComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TempComponent, selectors: [["app-temp"]], decls: 33, vars: 8, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css", "rel", "stylesheet", "crossorigin", "anonymous"], [1, "container", "mt-sm-5", "my-1"], [1, "bg-white", "p-3", "border-bottom"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center", "mcq"], [1, "text-danger"], [1, "question", "ml-sm-5", "pl-sm-5", "pt-2"], [1, "py-2", "h5"], ["class", "ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3", "id", "options", 4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center pt-3", "style", "position: relative;margin-top: 20px;margin-bottom: 20px;", 4, "ngIf"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "card"], [1, "text-right", "cross"], [1, "fa", "fa-times"], [1, "card-body", "text-center"], ["src", "../../../assets/img/achivement.svg", 1, "img-fluid"], [1, "btn", "btn-out", "btn-square", "continue", "mt-5", 2, "cursor", "pointer", 3, "click"], ["id", "options", 1, "ml-md-3", "ml-sm-3", "pl-md-5", "pt-sm-0", "pt-3"], [1, "options"], ["type", "radio", "name", "option", 3, "value", "change"], [1, "checkmark"], [1, "d-flex", "align-items-center", "pt-3", 2, "position", "relative", "margin-top", "20px", "margin-bottom", "20px"], [1, "clsbtnleft"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "clsbtnright"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-success", 3, "disabled", "click"]], template: function TempComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TempComponent_div_18_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TempComponent_div_19_Template, 7, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CONGRATULATIONS!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TempComponent_Template_button_click_31_listener() { return ctx.navigatehome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "CONTINUE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(", ctx.questionCounter, " of ", ctx.totalQuestion, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timeleft 00:", ctx.timePerQuestion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q. ", ctx.oneQuestion.questionText, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.oneQuestion.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.finalsubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You have scored ", ctx.score, "/", ctx.totalQuestion, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n*[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    background-color:#f1f1f1;\r\n    color: #0a192f;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    max-width: 800px;\r\n\r\n}\r\n.container[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    color: #0a192f;\r\n\r\n}\r\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.options[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-left: 40px;\r\n}\r\n#options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n.clsbtnleft[_ngcontent-%COMP%]\r\n{\r\n    position: absolute;\r\n    left: 35%;\r\n\r\n}\r\n.clsbtnright[_ngcontent-%COMP%]\r\n{\r\n\r\n    position: absolute;\r\n    right: 30%;\r\n}\r\n.checkmark[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -1px;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #f1f1f1;\r\n    border: 2px solid #0a192f;\r\n    border-radius: 50%;\r\n}\r\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n}\r\n.options[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 10px;\r\n    height: 10px;\r\n    \r\n    display: block;\r\n    background: white;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    border-radius: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 300ms ease-in-out 0s;\r\n}\r\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%] {\r\n    background: #0a192f;\r\n    transition: 300ms ease-in-out 0s;\r\n}\r\n.options[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked ~ .checkmark[_ngcontent-%COMP%]:after {\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n@media(max-width:720px) {\r\n\r\n    .clsbtnleft[_ngcontent-%COMP%]\r\n    {\r\n        left:30%;\r\n    }\r\n    .clsbtnright[_ngcontent-%COMP%]\r\n    {\r\n        right: 30%;\r\n    }\r\n}\r\n@media(max-width:576px) {\r\n    .question[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        word-spacing: 2px;\r\n    }\r\n    .clsbtnleft[_ngcontent-%COMP%]\r\n    {\r\n        left:20%;\r\n    }\r\n    .clsbtnright[_ngcontent-%COMP%]\r\n    {\r\n        right: 20%;\r\n    }\r\n}\r\n@media(max-width:356px) {\r\n\r\n    .clsbtnleft[_ngcontent-%COMP%]\r\n    {\r\n        left:10%;\r\n    }\r\n    .clsbtnright[_ngcontent-%COMP%]\r\n    {\r\n        right: 10%;\r\n    }\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n\r\n  color: #0a192f;\r\n  font-family: \"Poppins\", sans-serif;\r\n\r\n}\r\n.mt-100[_ngcontent-%COMP%] {\r\n    margin-top: 100px\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-size: 14px\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    margin-top: 18px\r\n}\r\n.cross[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    color: #0a192f;\r\n    cursor: pointer\r\n}\r\n.continue[_ngcontent-%COMP%]:focus {\r\n    outline: none\r\n}\r\n.continue[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    text-transform: capitalize;\r\n    font-size: 13px;\r\n    padding: 8px 19px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    background-color: #0a192f\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvdGVtcC90ZW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDZHQUE2RztBQUM3RztJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxnQkFBZ0I7O0FBRXBCO0FBR0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7QUFFbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixTQUFTOztBQUViO0FBQ0E7OztJQUdJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7QUFFQTs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUVIOztJQUVJOztRQUVJLFFBQVE7SUFDWjtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTs7UUFFSSxRQUFRO0lBQ1o7SUFDQTs7UUFFSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBOztJQUVJOztRQUVJLFFBQVE7SUFDWjtJQUNBOztRQUVJLFVBQVU7SUFDZDtBQUNKO0FBSUE7O0VBRUUsY0FBYztFQUNkLGtDQUFrQzs7QUFFcEM7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1g7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3RlbXAvdGVtcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxOyAqL1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjE7XHJcbiAgICBjb2xvcjogIzBhMTkyZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcj5wIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICMwYTE5MmY7XHJcblxyXG59XHJcbmg0LGg1e1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5vcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuI29wdGlvbnMgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25zIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jbHNidG5sZWZ0XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDM1JTtcclxuXHJcbn1cclxuLmNsc2J0bnJpZ2h0XHJcbntcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzAlO1xyXG59XHJcbi5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYTE5MmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5vcHRpb25zIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm9wdGlvbnMgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAvKiBjb2xvcjogcmVkOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dCAwcztcclxufVxyXG5cclxuLm9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWR+LmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGExOTJmO1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5vcHRpb25zIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbn1cclxuXHJcbi8qIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYmY3MztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMWJmNzM7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWJmNzM7XHJcbn0gKi9cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzIwcHgpIHtcclxuXHJcbiAgICAuY2xzYnRubGVmdFxyXG4gICAge1xyXG4gICAgICAgIGxlZnQ6MzAlO1xyXG4gICAgfVxyXG4gICAgLmNsc2J0bnJpZ2h0XHJcbiAgICB7XHJcbiAgICAgICAgcmlnaHQ6IDMwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo1NzZweCkge1xyXG4gICAgLnF1ZXN0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB3b3JkLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuICAgIC5jbHNidG5sZWZ0XHJcbiAgICB7XHJcbiAgICAgICAgbGVmdDoyMCU7XHJcbiAgICB9XHJcbiAgICAuY2xzYnRucmlnaHRcclxuICAgIHtcclxuICAgICAgICByaWdodDogMjAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MzU2cHgpIHtcclxuXHJcbiAgICAuY2xzYnRubGVmdFxyXG4gICAge1xyXG4gICAgICAgIGxlZnQ6MTAlO1xyXG4gICAgfVxyXG4gICAgLmNsc2J0bnJpZ2h0XHJcbiAgICB7XHJcbiAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4uY2FyZHtcclxuXHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4ubXQtMTAwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4XHJcbn1cclxucCB7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMThweFxyXG59XHJcblxyXG4uY3Jvc3Mge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjMGExOTJmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5jb250aW51ZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5jb250aW51ZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmXHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TempComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-temp',
                templateUrl: './temp.component.html',
                styleUrls: ['./temp.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "qAPG":
/*!**************************************************************!*\
  !*** ./src/app/student/studenthome/studenthome.component.ts ***!
  \**************************************************************/
/*! exports provided: StudenthomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudenthomeComponent", function() { return StudenthomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "Gyf/");
/* harmony import */ var _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");








function StudenthomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function StudenthomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function StudenthomeComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any uploaded Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudenthomeComponent_ng_template_4_ng_template_1_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudenthomeComponent_ng_template_4_ng_template_1_tr_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.playquiz(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Play Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quizdescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.owneremail);
} }
function StudenthomeComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quiz Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quiz Creater's Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudenthomeComponent_ng_template_4_ng_template_1_tr_17_Template, 12, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.allquiz);
} }
function StudenthomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudenthomeComponent_ng_template_4_div_0_Template, 10, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudenthomeComponent_ng_template_4_ng_template_1_Template, 18, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class StudenthomeComponent {
    constructor(studentService, router, webSocketService) {
        this.studentService = studentService;
        this.router = router;
        this.webSocketService = webSocketService;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.webSocketService.listen('quizcrud').subscribe((data) => {
            this.getdata();
        });
        this.getdata();
    }
    getdata() {
        this.studentService.getAllQuiz()
            .subscribe(data => {
            if (data['quiz']) {
                this.loading = false;
                this.allquiz = data['quiz'];
                // console.log(this.allquiz.length);
                if (!this.allquiz.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    playquiz(item) {
        this.studentService.setQuizId(item._id);
        this.router.navigate(['/student/playquiz']);
    }
}
StudenthomeComponent.ɵfac = function StudenthomeComponent_Factory(t) { return new (t || StudenthomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
StudenthomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudenthomeComponent, selectors: [["app-studenthome"]], decls: 6, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["id", "container", 1, "container"], [1, "col-12"], [1, "table", "table-image"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"]], template: function StudenthomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudenthomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudenthomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudenthomeComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_4__["StudentnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%]{\r\n  color: #0a192f;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 2rem 0rem;\r\n}\r\n.table[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  margin-bottom: 200px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  margin: 2rem 0rem 1rem;\r\n}\r\n.table-image[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-image[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  }\r\nthead[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-size: 17px;\r\n  }\r\nimg[_ngcontent-%COMP%]{\r\n  transition: 0.5s all ease-in-out;\r\n}\r\nimg[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.04);\r\n  }\r\n#edit[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#edit[_ngcontent-%COMP%]:hover{\r\n  color: #285aa5;\r\n  transform: scale(1.3);\r\n}\r\n#delete[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#delete[_ngcontent-%COMP%]:hover{\r\n  color: tomato;\r\n  transform: scale(1.3);\r\n}\r\n#plus[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#plus[_ngcontent-%COMP%]:hover{\r\n  color: #285aa5;\r\n  transform: scale(1.3);\r\n}\r\n@media (max-width: 767px) {\r\n  #container[_ngcontent-%COMP%]{\r\n    overflow-x: scroll;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50aG9tZS9zdHVkZW50aG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGO0VBQ0UsZUFBZTtBQUNqQjtBQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7QUFDRjtFQUNFLGdDQUFnQztBQUNsQztBQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50aG9tZS9zdHVkZW50aG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtIDByZW07XHJcbn1cclxuLnRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbjogMnJlbSAwcmVtIDFyZW07XHJcbn1cclxuXHJcbi50YWJsZS1pbWFnZSB0ZCxcclxuLnRhYmxlLWltYWdlIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG50aCx0ZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG50aGVhZHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuICB0ZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuaW1ne1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcbiAgaW1nOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcbiAgfVxyXG4jZWRpdHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuI2VkaXQ6aG92ZXJ7XHJcbiAgY29sb3I6ICMyODVhYTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG4jZGVsZXRle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2RlbGV0ZTpob3ZlcntcclxuICBjb2xvcjogdG9tYXRvO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuI3BsdXN7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jcGx1czpob3ZlcntcclxuICBjb2xvcjogIzI4NWFhNTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNjb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudenthomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studenthome',
                templateUrl: './studenthome.component.html',
                styleUrls: ['./studenthome.component.css']
            }]
    }], function () { return [{ type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "tn5a":
/*!******************************************!*\
  !*** ./src/app/student/student.guard.ts ***!
  \******************************************/
/*! exports provided: StudentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentGuard", function() { return StudentGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class StudentGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('student') == "yes") {
                if (localStorage.getItem('admin') == "no") {
                    if (localStorage.getItem('teacher') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
}
StudentGuard.ɵfac = function StudentGuard_Factory(t) { return new (t || StudentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
StudentGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentGuard, factory: StudentGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "uox2":
/*!********************************************************************!*\
  !*** ./src/app/student/studentctahome/studentctahome.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentctahomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentctahomeComponent", function() { return StudentctahomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ "JmRu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/websocket.service */ "Gyf/");
/* harmony import */ var _studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../studentnav/studentnav.component */ "EcT0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../loading/loading/loading.component */ "O94Z");








function StudentctahomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function StudentctahomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
function StudentctahomeComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Seems Like Empty Data!!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not found any uploaded Quiz!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentctahomeComponent_ng_template_4_ng_template_1_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentctahomeComponent_ng_template_4_ng_template_1_tr_17_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.playquiz(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quesname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.quesdescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.owneremail);
} }
function StudentctahomeComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Quiz Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quiz Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quiz Creater's Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "View Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StudentctahomeComponent_ng_template_4_ng_template_1_tr_17_Template, 12, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.ctadescriptions);
} }
function StudentctahomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StudentctahomeComponent_ng_template_4_div_0_Template, 10, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentctahomeComponent_ng_template_4_ng_template_1_Template, 18, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.empty)("ngIfElse", _r6);
} }
class StudentctahomeComponent {
    constructor(studentService, router, webSocketService) {
        this.studentService = studentService;
        this.router = router;
        this.webSocketService = webSocketService;
        this.loading = true;
        this.empty = true;
    }
    ngOnInit() {
        this.loading = true;
        this.empty = true;
        this.webSocketService.listen('quescrud').subscribe((data) => {
            console.log('Anusha here before getData()');
            this.getdata();
        });
        console.log('Anusha here after getData() socket');
        this.getdata();
    }
    getdata() {
        this.studentService.getAllQues().subscribe((data) => {
            console.log(data);
            if (data['cta']) {
                this.loading = false;
                this.ctadescriptions = data['cta'];
                //console.log(this.ctadescriptions.length);
                if (!this.ctadescriptions.length) {
                    this.empty = true;
                }
                else {
                    this.empty = false;
                }
            }
        }, (error) => {
            this.router.navigate(['/error']);
        });
    }
    playquiz(item) {
        this.studentService.setQuesId(item._id);
        this.router.navigate(['/student/playcta']);
    }
}
StudentctahomeComponent.ɵfac = function StudentctahomeComponent_Factory(t) { return new (t || StudentctahomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
StudentctahomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentctahomeComponent, selectors: [["app-studentctahome"]], decls: 6, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["myelseBlock", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-center", 2, "margin-top", "50px"], [1, "row"], [1, "col-6"], [1, "text-capitalize", "m-lg-5"], ["src", "../../../assets/img/empty.svg", "alt", "", 1, "img-fluid"], ["id", "container", 1, "container"], [1, "col-12"], [1, "table", "table-image"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "btn", "btn-light", 3, "click"]], template: function StudentctahomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-studentnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentctahomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StudentctahomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StudentctahomeComponent_ng_template_4_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_studentnav_studentnav_component__WEBPACK_IMPORTED_MODULE_4__["StudentnavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _loading_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  color: #0a192f;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 2rem 0rem;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  margin-bottom: 200px;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  margin: 2rem 0rem 1rem;\r\n}\r\n.table-image[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-image[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\nthead[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 17px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  transition: 0.5s all ease-in-out;\r\n}\r\nimg[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.04);\r\n}\r\n#edit[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#edit[_ngcontent-%COMP%]:hover {\r\n  color: #285aa5;\r\n  transform: scale(1.3);\r\n}\r\n#delete[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#delete[_ngcontent-%COMP%]:hover {\r\n  color: tomato;\r\n  transform: scale(1.3);\r\n}\r\n#plus[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition: 0.3s all ease-in-out;\r\n}\r\n#plus[_ngcontent-%COMP%]:hover {\r\n  color: #285aa5;\r\n  transform: scale(1.3);\r\n}\r\n@media (max-width: 767px) {\r\n  #container[_ngcontent-%COMP%] {\r\n    overflow-x: scroll;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50Y3RhaG9tZS9zdHVkZW50Y3RhaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudGN0YWhvbWUvc3R1ZGVudGN0YWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGNvbG9yOiAjMGExOTJmO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcclxufVxyXG4udGFibGUge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbjogMnJlbSAwcmVtIDFyZW07XHJcbn1cclxuXHJcbi50YWJsZS1pbWFnZSB0ZCxcclxuLnRhYmxlLWltYWdlIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG50aCxcclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50aGVhZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbnRkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuaW1nIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG5pbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcbn1cclxuI2VkaXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4jZWRpdDpob3ZlciB7XHJcbiAgY29sb3I6ICMyODVhYTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG4jZGVsZXRlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNkZWxldGU6aG92ZXIge1xyXG4gIGNvbG9yOiB0b21hdG87XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG4jcGx1cyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jcGx1czpob3ZlciB7XHJcbiAgY29sb3I6ICMyODVhYTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentctahomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentctahome',
                templateUrl: './studentctahome.component.html',
                styleUrls: ['./studentctahome.component.css'],
            }]
    }], function () { return [{ type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login-student/login-student.component */ "wFJB");
/* harmony import */ var _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login-teacher/login-teacher.component */ "BvBR");
/* harmony import */ var _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/reset-password-done/reset-password-done.component */ "EMjD");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ "xT/v");
/* harmony import */ var _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/reset/reset.component */ "y7II");
/* harmony import */ var _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/indexmain/indexmain.component */ "4+a0");
/* harmony import */ var _student_student_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.guard */ "tn5a");
/* harmony import */ var _teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher/teacher.guard */ "zqFa");
/* harmony import */ var _admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.guard */ "17Sp");
/* harmony import */ var _index_t_t_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/t/t.component */ "mdn8");
/* harmony import */ var _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher/teacherhome/teacherhome.component */ "UkjL");
/* harmony import */ var _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teacher/createquiz/createquiz.component */ "0/SE");
/* harmony import */ var _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/uploadquiz/uploadquiz.component */ "9fHA");
/* harmony import */ var _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teacher/seestudents/seestudents.component */ "IbWB");
/* harmony import */ var _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./teacher/addquestion/addquestion.component */ "NgLx");
/* harmony import */ var _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teacher/seequestion/seequestion.component */ "8fTH");
/* harmony import */ var _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student/studenthome/studenthome.component */ "qAPG");
/* harmony import */ var _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/adminhome/adminhome.component */ "mjI7");
/* harmony import */ var _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error/notfound-error/notfound-error.component */ "5xLU");
/* harmony import */ var _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./error/server-error/server-error.component */ "BWLr");
/* harmony import */ var _admin_student_student_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/student/student.component */ "N/mo");
/* harmony import */ var _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/teacher/teacher.component */ "11p2");
/* harmony import */ var _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/view-question/view-question.component */ "1M0h");
/* harmony import */ var _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error/cheating/cheating.component */ "fauK");
/* harmony import */ var _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./student/playquiz/playquiz.component */ "hPIn");
/* harmony import */ var _student_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./student/compiler/compiler.component */ "kkf9");
/* harmony import */ var _teacher_seescores_seescores_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./teacher/seescores/seescores.component */ "JITU");
/* harmony import */ var _teacher_ctacreate_ctacreate_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./teacher/ctacreate/ctacreate.component */ "EW8g");
/* harmony import */ var _teacher_ctaupload_ctaupload_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./teacher/ctaupload/ctaupload.component */ "Q/bm");
/* harmony import */ var _teacher_seequestioncta_seequestioncta_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./teacher/seequestioncta/seequestioncta.component */ "4An4");
/* harmony import */ var _teacher_addquestioncta_addquestioncta_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./teacher/addquestioncta/addquestioncta.component */ "44tp");
/* harmony import */ var _student_playcta_playcta_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./student/playcta/playcta.component */ "QFh7");
/* harmony import */ var _student_studentctahome_studentctahome_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./student/studentctahome/studentctahome.component */ "uox2");
/* harmony import */ var _teacher_teacherctahome_teacherctahome_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./teacher/teacherctahome/teacherctahome.component */ "Oq7o");







// import { IndexheaderComponent } from './index/indexheader/indexheader.component';































const routes = [
    // root
    { path: '', component: _index_indexmain_indexmain_component__WEBPACK_IMPORTED_MODULE_7__["IndexmainComponent"] },
    // login register
    { path: 'teacher', component: _auth_login_teacher_login_teacher_component__WEBPACK_IMPORTED_MODULE_3__["LoginTeacherComponent"] },
    { path: 'student', component: _auth_login_student_login_student_component__WEBPACK_IMPORTED_MODULE_2__["LoginStudentComponent"] },
    //forgot password
    { path: 'reset', component: _auth_reset_reset_component__WEBPACK_IMPORTED_MODULE_6__["ResetComponent"] },
    { path: 'reset-password', component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
    { path: 'reset-password-done', component: _auth_reset_password_done_reset_password_done_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordDoneComponent"] },
    { path: 'student/compiler', component: _student_compiler_compiler_component__WEBPACK_IMPORTED_MODULE_27__["CompilerComponent"] },
    { path: 'teacher/seescores', component: _teacher_seescores_seescores_component__WEBPACK_IMPORTED_MODULE_28__["SeescoresComponent"] },
    // testing
    { path: 'a', component: _index_t_t_component__WEBPACK_IMPORTED_MODULE_11__["TComponent"] },
    // { path: 't', component: CheatingComponent},
    // { path: 'b', component: IndexheaderComponent },
    // teacher
    {
        path: 'teacher/teacherhome',
        component: _teacher_teacherhome_teacherhome_component__WEBPACK_IMPORTED_MODULE_12__["TeacherhomeComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/createquiz',
        component: _teacher_createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_13__["CreatequizComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/uploadquiz',
        component: _teacher_uploadquiz_uploadquiz_component__WEBPACK_IMPORTED_MODULE_14__["UploadquizComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/seestudentes',
        component: _teacher_seestudents_seestudents_component__WEBPACK_IMPORTED_MODULE_15__["SeestudentsComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/addquestion',
        component: _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_16__["AddquestionComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/seequestion',
        component: _teacher_seequestion_seequestion_component__WEBPACK_IMPORTED_MODULE_17__["SeequestionComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    //cta
    {
        path: 'teacher/seequestioncta',
        component: _teacher_seequestioncta_seequestioncta_component__WEBPACK_IMPORTED_MODULE_31__["SeequestionctaComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/teacherctahome',
        component: _teacher_teacherctahome_teacherctahome_component__WEBPACK_IMPORTED_MODULE_35__["TeacherctahomeComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/addquestioncta',
        component: _teacher_addquestioncta_addquestioncta_component__WEBPACK_IMPORTED_MODULE_32__["AddquestionctaComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/seequestioncta',
        component: _teacher_addquestion_addquestion_component__WEBPACK_IMPORTED_MODULE_16__["AddquestionComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/ctacreate',
        component: _teacher_ctacreate_ctacreate_component__WEBPACK_IMPORTED_MODULE_29__["CtacreateComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    {
        path: 'teacher/ctaupload',
        component: _teacher_ctaupload_ctaupload_component__WEBPACK_IMPORTED_MODULE_30__["CtauploadComponent"],
        canActivate: [_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_9__["TeacherGuard"]],
    },
    // student
    {
        path: 'student/studenthome',
        component: _student_studenthome_studenthome_component__WEBPACK_IMPORTED_MODULE_18__["StudenthomeComponent"],
        canActivate: [_student_student_guard__WEBPACK_IMPORTED_MODULE_8__["StudentGuard"]],
    },
    {
        path: 'student/playquiz',
        component: _student_playquiz_playquiz_component__WEBPACK_IMPORTED_MODULE_26__["PlayquizComponent"],
        canActivate: [_student_student_guard__WEBPACK_IMPORTED_MODULE_8__["StudentGuard"]],
    },
    //student-cta
    {
        path: 'student/playcta',
        component: _student_playcta_playcta_component__WEBPACK_IMPORTED_MODULE_33__["PlayctaComponent"],
        canActivate: [_student_student_guard__WEBPACK_IMPORTED_MODULE_8__["StudentGuard"]],
    },
    {
        path: 'student/studentctahome',
        component: _student_studentctahome_studentctahome_component__WEBPACK_IMPORTED_MODULE_34__["StudentctahomeComponent"],
        canActivate: [_student_student_guard__WEBPACK_IMPORTED_MODULE_8__["StudentGuard"]],
    },
    // admin
    {
        path: 'admin/adminhome',
        component: _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_19__["AdminhomeComponent"],
        canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]],
    },
    {
        path: 'admin/viewstudent',
        component: _admin_student_student_component__WEBPACK_IMPORTED_MODULE_22__["StudentComponent"],
        canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]],
    },
    {
        path: 'admin/viewteacher',
        component: _admin_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_23__["TeacherComponent"],
        canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]],
    },
    {
        path: 'admin/seequestion',
        component: _admin_view_question_view_question_component__WEBPACK_IMPORTED_MODULE_24__["ViewQuestionComponent"],
        canActivate: [_admin_admin_guard__WEBPACK_IMPORTED_MODULE_10__["AdminGuard"]],
    },
    // error
    { path: 'cheat', component: _error_cheating_cheating_component__WEBPACK_IMPORTED_MODULE_25__["CheatingComponent"] },
    { path: 'error', component: _error_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_21__["ServerErrorComponent"] },
    { path: '**', component: _error_notfound_error_notfound_error_component__WEBPACK_IMPORTED_MODULE_20__["NotfoundErrorComponent"] },
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wFJB":
/*!***************************************************************!*\
  !*** ./src/app/auth/login-student/login-student.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStudentComponent", function() { return LoginStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginStudentComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.msg, " ");
} }
function LoginStudentComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.msg, " ");
} }
const _c0 = function () { return ["/reset"]; };
class LoginStudentComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-in-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").removeClass("sign-up-mode");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("#sign-up-btn").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".containerr").addClass("sign-up-mode");
            });
        });
    }
    onSubmitRegister(f) {
        if (f.controls.p1.value != f.controls.p2.value) {
            this.msg = "Password   doesn't match";
            this.avail = true;
            return;
        }
        if (!f.valid) {
            this.msg = "Invalid Form Fields";
            this.avail = true;
            return;
        }
        this.authService.registerStudent(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            // this.authService.msg = "successfully registered a user!";
            window.location.reload();
            this.router.navigate(['/student']);
        }, error => {
            this.router.navigate(['/error']);
        });
    }
    onSubmitLogin(f) {
        if (!f.valid) {
            this.msg = "Invalid Email or Password";
            this.avail = true;
            return;
        }
        this.authService.login(JSON.stringify(f.value))
            .subscribe(data => {
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            if (data['role'] == "admin") {
                // console.log("admin");
                localStorage.setItem('token', data['token']);
                localStorage.setItem('admin', 'yes');
                localStorage.setItem('student', 'no');
                localStorage.setItem('teacher', 'no');
                this.router.navigate(['/admin/adminhome']);
            }
            else if (data['role'] == "student") {
                // console.log("student")
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    // console.log("not blocked");
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'yes');
                    localStorage.setItem('teacher', 'no');
                    this.router.navigate(['/student/studenthome']);
                }
                // this.router.navigate(['/a']);
            }
            else {
                // console.log("teacher");
                if (data['blocked'] == true) {
                    this.msg = "You are blocked by Admin wait until admin unblock you!!!";
                    this.avail = true;
                    return;
                }
                else {
                    localStorage.setItem('token', data['token']);
                    localStorage.setItem('userid', f.controls.email.value);
                    localStorage.setItem('admin', 'no');
                    localStorage.setItem('student', 'no');
                    localStorage.setItem('teacher', 'yes');
                    this.router.navigate(['/teacher/teacherhome']);
                }
            }
        }, error => { this.router.navigate(['/error']); });
    }
    signinup() {
        // console.log("hello1");
        this.msg = "";
        this.avail = false;
    }
}
LoginStudentComponent.ɵfac = function LoginStudentComponent_Factory(t) { return new (t || LoginStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginStudentComponent, selectors: [["app-login-student"]], decls: 62, vars: 6, consts: [[1, "containerr"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-in-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p1", "ngModel"], ["type", "submit", "value", "Login", 1, "btn", "solid", 3, "disabled"], [1, "social-text", 2, "font-weight", "bold"], [3, "routerLink"], ["class", "social-text", "style", "color: red; font-weight: bold; font-size: 20px", 4, "ngIf"], [1, "sign-up-form", 3, "ngSubmit"], ["f", "ngForm"], ["type", "email", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "email", "", "spellcheck", "false", "ngModel", "", "required", ""], [1, "fas", "fa-phone"], ["type", "text", "placeholder", "Mobile no", "name", "phone", "pattern", "^(\\+91[\\-\\s]?)?[0]?(91)?[6789]\\d{9}$", "autocomplete", "off", "spellcheck", "false", "maxlength", "10", "ngModel", "", "required", ""], ["phone", "ngModel"], ["type", "password", "placeholder", "Enter Password", "name", "p1", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Re-enter Password", "name", "p2", "pattern", "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", ""], ["p2", "ngModel"], ["type", "submit", "value", "Sign up", 1, "btn", 3, "disabled"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/s1.png", "alt", "", 1, "image"], [1, "panel", "right-panel"], ["id", "sign-in-btn", 1, "btn", "transparent", 3, "click"], ["src", "../../../assets/img/s2.png", "alt", "", 1, "image"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function LoginStudentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginStudentComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginStudentComponent_p_20_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginStudentComponent_Template_form_ngSubmit_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx.onSubmitRegister(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Student Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LoginStudentComponent_p_42_Template, 2, 1, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "New Student ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginStudentComponent_Template_button_click_50_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "One of us ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " In life, the classroom is everywhere. The exam comes at the very end. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginStudentComponent_Template_button_click_59_listener() { return ctx.signinup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r4.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_4__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  min-height:92vh;\r\n  overflow: hidden;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #0a192f;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n  text-decoration: none;\r\n  color:#0a192f;\r\n}\r\n\r\n.forms-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.signin-signup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  left: 75%;\r\n  width: 50%;\r\n  transition: 1s 0.7s ease-in-out;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  z-index: 5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0rem 5rem;\r\n  transition: all 0.2s 0.7s;\r\n  overflow: hidden;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\nform.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\nform.sign-in-form[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 2.2rem;\r\n  color:#0a192f;\r\n  margin-bottom: 10px;\r\n  \r\n  \r\n}\r\n\r\n@keyframes vibrate-1 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  40% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  60% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  width: 100%;\r\n  background-color: #f0f0f0;\r\n  margin: 10px 0;\r\n\r\n  height: 55px;\r\n  border-radius: 55px;\r\n  display: grid;\r\n  grid-template-columns: 15% 85%;\r\n  padding: 0 0.4rem;\r\n  position: relative;\r\n  transition: 0.4s ease;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  line-height: 55px;\r\n  color: #0a192f;\r\n  \r\n  transition: 0.5s;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color:#0a192f;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #aaa;\r\n  font-weight: 500;\r\n}\r\n\r\n.social-text[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.social-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%] {\r\n  height: 46px;\r\n  width: 46px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 0.45rem;\r\n  color: #333;\r\n  border-radius: 50%;\r\n  border: 1px solid #333;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover {\r\n  color: #4481eb;\r\n  border-color: #4481eb;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  background-color: white;\r\n  border: none;\r\n  outline: none;\r\n  height: 49px;\r\n  border-radius: 49px;\r\n  color: black;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  animation: heartbeat 1.5s ease-in-out infinite both;\r\n}\r\n\r\n@keyframes heartbeat {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: center center;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  10% {\r\n    transform: scale(0.91);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  17% {\r\n    transform: scale(0.98);\r\n    animation-timing-function: ease-out;\r\n  }\r\n  33% {\r\n    transform: scale(0.87);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n.panels-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2000px;\r\n  width: 2000px;\r\n  top: -10%;\r\n  right: 48%;\r\n  transform: translateY(-50%);\r\n  \r\n  \r\n  \r\n\r\n  transition: 1.8s ease-in-out;\r\n  border-radius: 50%;\r\n  z-index: 6;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transition: transform 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n  padding: 3rem 17% 2rem 12%;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  padding: 3rem 12% 2rem 17%;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  color: black;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition-delay: 0.6s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.btn.transparent[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  background: white;\r\n  border: 2px solid black;\r\n  width: 130px;\r\n  height: 41px;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(800px);\r\n}\r\n\r\n\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n  transform: translate(100%, -50%);\r\n  right: 52%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(-800px);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n}\r\n\r\n@media (max-width: 870px) {\r\n  .containerr[_ngcontent-%COMP%] {\r\n    min-height: 800px;\r\n    height: 100vh;\r\n  }\r\n  .signin-signup[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    top: 95%;\r\n    transform: translate(-50%, -100%);\r\n    transition: 1s 0.8s ease-in-out;\r\n  }\r\n\r\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n\r\n  .panels-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2.5rem 8%;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%] {\r\n    grid-row: 3 / 4;\r\n  }\r\n\r\n  .left-panel[_ngcontent-%COMP%] {\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.6s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding-right: 15%;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.8s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.7rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  .btn.transparent[_ngcontent-%COMP%] {\r\n    width: 110px;\r\n    height: 35px;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    width: 1500px;\r\n    height: 1500px;\r\n    transform: translateX(-50%);\r\n    left: 30%;\r\n    bottom: 68%;\r\n    right: initial;\r\n    top: initial;\r\n    transition: 2s ease-in-out;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    transform: translate(-50%, 100%);\r\n    bottom: 32%;\r\n    right: initial;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(-300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@media (max-width: 570px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 0 1.5rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  .containerr[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    bottom: 72%;\r\n    left: 50%;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    bottom: 28%;\r\n    left: 50%;\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid red;\r\n  width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1zdHVkZW50L2xvZ2luLXN0dWRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2R0FBNkc7O0FBRTdHO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBOztFQUVFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsU0FBUztFQUNULFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JEOzBEQUN3RDtBQUMxRDs7QUE0QkE7RUFDRTtJQUVVLHVCQUF1QjtFQUNqQztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSxnQ0FBZ0M7RUFDMUM7RUFDQTtJQUVVLDhCQUE4QjtFQUN4QztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSx1QkFBdUI7RUFDakM7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7O0VBRWQsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFFdkIsbURBQW1EO0FBQ3JEOztBQXFDQTtFQUNFO0lBRVUsbUJBQW1CO0lBRW5CLCtCQUErQjtJQUUvQixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLG1CQUFtQjtJQUVuQixtQ0FBbUM7RUFDN0M7QUFDRjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQix5RUFBeUU7RUFDekUsd0VBQXdFO0VBQ3hFLHlFQUF5RTs7RUFFekUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7RUFDakM7O0VBRUE7O0lBRUUsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLDZCQUE2QjtFQUMvQjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsT0FBTztJQUNQLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0Y7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi1zdHVkZW50L2xvZ2luLXN0dWRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHksXHJcbmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0Ojkydmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzBhMTkyZjtcclxufVxyXG5hOmhvdmVyXHJcbntcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IzBhMTkyZjtcclxufVxyXG4uZm9ybXMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc2lnbmluLXNpZ251cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDc1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IDFzIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiMwYTE5MmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKiB0ZXh0LXNoYWRvdzogNHB4IDZweCAyNXB4IHJnYmEoMTAsIDI1LCA0NywgMSk7ICAgKi9cclxuICAvKiAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHZpYnJhdGUtMSAxLjVzIGxpbmVhciBpbmZpbml0ZSBib3RoOyAqL1xyXG59XHJcblxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGUtMSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcclxuICBwYWRkaW5nOiAwIDAuNHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcbi5pbnB1dC1maWVsZDpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsMCwwLDAuNyk7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbiAgLyogY29sb3I6IHBhbGVncmVlbjsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjojMGExOTJmO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc29jaWFsLXRleHQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwLjQ1cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNDQ4MWViO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ0ODFlYjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBoZWlnaHQ6IDQ5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDlweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxuXHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gIGFuaW1hdGlvbjogaGVhcnRiZWF0IDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAxNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDMzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbi5jb250YWluZXJyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyMDAwcHg7XHJcbiAgd2lkdGg6IDIwMDBweDtcclxuICB0b3A6IC0xMCU7XHJcbiAgcmlnaHQ6IDQ4JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzQ0ODFlYiAwJSwgIzA0YmVmZSAxMDAlKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMwYTE5MmYgMCUsICMwYzFiMmIgMTAwJSk7ICovXHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNTUyNSAwJSwgI2U0NzgyMCAxMDAlKTsgKi9cclxuXHJcbiAgdHJhbnNpdGlvbjogMS44cyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTIlIDJyZW0gMTclO1xyXG59XHJcblxyXG4ucGFuZWwgLmNvbnRlbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4ucGFuZWwgaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5wYW5lbCBwIHtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgcGFkZGluZzogMC43cmVtIDA7XHJcbn1cclxuXHJcbi5idG4udHJhbnNwYXJlbnQge1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwMHB4KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICByaWdodDogNTIlO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24taW4tZm9ybSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogOTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgMC44cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5zaWduaW4tc2lnbnVwLFxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5yaWdodC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMyAvIDQ7XHJcbiAgfVxyXG5cclxuICAubGVmdC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcblxyXG4gIC5wYW5lbCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5wYW5lbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLnRyYW5zcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XHJcbiAgICBib3R0b206IDMyJTtcclxuICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogNzIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDI4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-student',
                templateUrl: './login-student.component.html',
                styleUrls: ['./login-student.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "xT/v":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/reset-password-done"]; };
class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 23, vars: 2, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form"], [1, "title"], [1, "social-text", 2, "font-weight", "bold"], [3, "routerLink"], ["type", "button", "value", "click here", 1, "btn", "solid"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "panel", "right-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent"], ["src", "../../../assets/img/forgotpassword.svg", "alt", "", 1, "image"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please check your mail and click below button for reset password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Attention here!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Once you have submitted the request to reset your password, you will receive an email. Follow the instructions in the email and your password will be reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Don't Worry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_1__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  min-height: 92vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.forms-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n\r\n\r\n}\r\n\r\n@keyframes tilt-in-fwd-tr {\r\n  0% {\r\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.signin-signup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  left: 75%;\r\n  width: 50%;\r\n  transition: 1s 0.7s ease-in-out;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  z-index: 5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0rem 5rem;\r\n  transition: all 0.2s 0.7s;\r\n  overflow: hidden;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\nform.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\nform.sign-in-form[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 2.2rem;\r\n  color:#0a192f;\r\n  margin-bottom: 10px;\r\n  \r\n\t animation: vibrate-1 1.5s linear infinite both;\r\n}\r\n\r\n@keyframes vibrate-1 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  40% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  60% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  width: 100%;\r\n  background-color: #f0f0f0;\r\n  margin: 10px 0;\r\n\r\n  height: 55px;\r\n  border-radius: 55px;\r\n  display: grid;\r\n  grid-template-columns: 15% 85%;\r\n  padding: 0 0.4rem;\r\n  position: relative;\r\n  transition: 0.4s ease;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  line-height: 55px;\r\n  color: #0a192f;\r\n  \r\n  transition: 0.5s;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color:#0a192f;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #aaa;\r\n  font-weight: 500;\r\n}\r\n\r\n.social-text[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.social-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%] {\r\n  height: 46px;\r\n  width: 46px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 0.45rem;\r\n  color: #333;\r\n  border-radius: 50%;\r\n  border: 1px solid #333;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover {\r\n  color: #4481eb;\r\n  border-color: #4481eb;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  background-color: #0a192f;\r\n  border: none;\r\n  outline: none;\r\n  height: 49px;\r\n  border-radius: 49px;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #020b18;\r\n  animation: heartbeat 1.5s ease-in-out infinite both;\r\n}\r\n\r\n@keyframes heartbeat {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: center center;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  10% {\r\n    transform: scale(0.91);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  17% {\r\n    transform: scale(0.98);\r\n    animation-timing-function: ease-out;\r\n  }\r\n  33% {\r\n    transform: scale(0.87);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n.panels-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2000px;\r\n  width: 2000px;\r\n  top: -10%;\r\n  right: 48%;\r\n  transform: translateY(-50%);\r\n  \r\n  background-image: linear-gradient(-45deg,#0a192f 0%, #0c1b2b 100%);\r\n  \r\n\r\n  transition: 1.8s ease-in-out;\r\n  border-radius: 50%;\r\n  z-index: 6;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transition: transform 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n  padding: 3rem 17% 2rem 12%;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  padding: 3rem 12% 2rem 17%;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition-delay: 0.6s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.btn.transparent[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  background: none;\r\n  border: 2px solid #fff;\r\n  width: 130px;\r\n  height: 41px;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(800px);\r\n}\r\n\r\n\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n  transform: translate(100%, -50%);\r\n  right: 52%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(-800px);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n}\r\n\r\n@media (max-width: 870px) {\r\n  .containerr[_ngcontent-%COMP%] {\r\n    min-height: 800px;\r\n    height: 100vh;\r\n  }\r\n  .signin-signup[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    top: 95%;\r\n    transform: translate(-50%, -100%);\r\n    transition: 1s 0.8s ease-in-out;\r\n  }\r\n\r\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n\r\n  .panels-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2.5rem 8%;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%] {\r\n    grid-row: 3 / 4;\r\n  }\r\n\r\n  .left-panel[_ngcontent-%COMP%] {\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.6s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding-right: 15%;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.8s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.7rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  .btn.transparent[_ngcontent-%COMP%] {\r\n    width: 110px;\r\n    height: 35px;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    width: 1500px;\r\n    height: 1500px;\r\n    transform: translateX(-50%);\r\n    left: 30%;\r\n    bottom: 68%;\r\n    right: initial;\r\n    top: initial;\r\n    transition: 2s ease-in-out;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    transform: translate(-50%, 100%);\r\n    bottom: 32%;\r\n    right: initial;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(-300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@media (max-width: 570px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 0 1.5rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  .containerr[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    bottom: 72%;\r\n    left: 50%;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    bottom: 28%;\r\n    left: 50%;\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid red;\r\n  width: 300px;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: #0a192f;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZHQUE2Rzs7QUFFN0c7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87OztBQUdUOztBQWNBO0VBQ0U7SUFFVSxxRkFBcUY7SUFDN0YsVUFBVTtFQUNaO0VBQ0E7SUFFVSxvRUFBb0U7SUFDNUUsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUVmLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFFOUMsOENBQThDO0FBQ3ZEOztBQTRCQTtFQUNFO0lBRVUsdUJBQXVCO0VBQ2pDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLGdDQUFnQztFQUMxQztFQUNBO0lBRVUsOEJBQThCO0VBQ3hDO0VBQ0E7SUFFVSwrQkFBK0I7RUFDekM7RUFDQTtJQUVVLHVCQUF1QjtFQUNqQztBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7OztBQUdsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUV6QixtREFBbUQ7QUFDckQ7O0FBcUNBO0VBQ0U7SUFFVSxtQkFBbUI7SUFFbkIsK0JBQStCO0lBRS9CLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLG1DQUFtQztFQUM3QztFQUNBO0lBRVUsc0JBQXNCO0lBRXRCLGtDQUFrQztFQUM1QztFQUNBO0lBRVUsbUJBQW1CO0lBRW5CLG1DQUFtQztFQUM3QztBQUNGOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHlFQUF5RTtFQUN6RSxrRUFBa0U7RUFDbEUseUVBQXlFOztFQUV6RSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDRCQUE0QjtBQUM5Qjs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxRQUFRO0lBQ1IsaUNBQWlDO0lBQ2pDLCtCQUErQjtFQUNqQzs7RUFFQTs7SUFFRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTs7SUFFRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7QUFDRjs7QUFJQTtFQUNFLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHksXHJcbmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXJyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiA5MnZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRpbHQtaW4tZndkLXRyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB0aWx0LWluLWZ3ZC10ciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVgoMzVkZWcpIHRyYW5zbGF0ZSgzMDBweCwgLTMwMHB4KSBza2V3KC0zNWRlZywgMTBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbmluLXNpZ251cCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDc1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zaXRpb246IDFzIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAwcmVtIDVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHRpbHQtaW4tZndkLXRyIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG4gIGFuaW1hdGlvbjogdGlsdC1pbi1md2QtdHIgMC42cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiMwYTE5MmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAvKiB0ZXh0LXNoYWRvdzogNHB4IDZweCAyNXB4IHJnYmEoMTAsIDI1LCA0NywgMSk7ICAgKi9cclxuICAtd2Via2l0LWFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7XHJcblx0ICAgICAgICBhbmltYXRpb246IHZpYnJhdGUtMSAxLjVzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG59XHJcblxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGUtMSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgNjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdmlicmF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcclxuICBwYWRkaW5nOiAwIDAuNHJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG59XHJcbi5pbnB1dC1maWVsZDpob3ZlcntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsMCwwLDAuNyk7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgY29sb3I6ICMwYTE5MmY7XHJcbiAgLyogY29sb3I6IHBhbGVncmVlbjsgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjb2xvcjojMGExOTJmO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc29jaWFsLXRleHQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwLjQ1cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNDQ4MWViO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ0ODFlYjtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGExOTJmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNDlweDtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuXHJcblxyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwYjE4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gIGFuaW1hdGlvbjogaGVhcnRiZWF0IDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAxNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDMzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbn1cclxuXHJcbi5jb250YWluZXJyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyMDAwcHg7XHJcbiAgd2lkdGg6IDIwMDBweDtcclxuICB0b3A6IC0xMCU7XHJcbiAgcmlnaHQ6IDQ4JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzQ0ODFlYiAwJSwgIzA0YmVmZSAxMDAlKTsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCMwYTE5MmYgMCUsICMwYzFiMmIgMTAwJSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNTUyNSAwJSwgI2U0NzgyMCAxMDAlKTsgKi9cclxuXHJcbiAgdHJhbnNpdGlvbjogMS44cyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4xcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTIlIDJyZW0gMTclO1xyXG59XHJcblxyXG4ucGFuZWwgLmNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5wYW5lbCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBwYWRkaW5nOiAwLjdyZW0gMDtcclxufVxyXG5cclxuLmJ0bi50cmFuc3BhcmVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwMHB4KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICByaWdodDogNTIlO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24taW4tZm9ybSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogOTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgMC44cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5zaWduaW4tc2lnbnVwLFxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5yaWdodC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMyAvIDQ7XHJcbiAgfVxyXG5cclxuICAubGVmdC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcblxyXG4gIC5wYW5lbCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5wYW5lbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLnRyYW5zcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XHJcbiAgICBib3R0b206IDMyJTtcclxuICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogNzIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDI4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzBhMTkyZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "y7II":
/*!***********************************************!*\
  !*** ./src/app/auth/reset/reset.component.ts ***!
  \***********************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index/indexnav/indexnav.component */ "l08C");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResetComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.msg);
} }
class ResetComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.msg = [];
    }
    ngOnInit() {
    }
    onSubmitForgot(f) {
        // console.log("f submit");
        this.authService.reset(JSON.stringify(f.value))
            .subscribe(data => {
            // console.log(data);
            if (data['msg']) {
                this.msg = data['msg'];
                this.avail = true;
                return;
            }
            else {
                this.router.navigate(['/reset-password']);
            }
        }, error => {
            this.router.navigate(['/error']);
        });
    }
}
ResetComponent.ɵfac = function ResetComponent_Factory(t) { return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetComponent, selectors: [["app-reset"]], decls: 24, vars: 2, consts: [[1, "containerr", "sign-up-mode"], [1, "forms-container"], [1, "signin-signup"], [1, "sign-up-form", 3, "ngSubmit"], ["a", "ngForm"], [1, "title"], [1, "input-field"], [1, "fas", "fa-envelope"], ["type", "text", "placeholder", "Email", "name", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", "autocomplete", "off", "spellcheck", "false", "ngModel", "", "required", "", "email", ""], ["email", "ngModel"], ["type", "submit", "value", "Send mail", 1, "btn", "solid", 3, "disabled"], ["class", "social-text", "style", "color: red;font-weight: bold;font-size: 20px;", 4, "ngIf"], [1, "panels-container"], [1, "panel", "left-panel"], [1, "panel", "right-panel"], [1, "content"], ["id", "sign-up-btn", 1, "btn", "transparent"], [1, "social-text", 2, "color", "red", "font-weight", "bold", "font-size", "20px"]], template: function ResetComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-indexnav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmitForgot(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResetComponent_p_13_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Attention here!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Once you have submitted the request to reset your password, you will receive an email. Follow the instructions in the email and your password will be reset. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Don't Worry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.avail);
    } }, directives: [_index_indexnav_indexnav_component__WEBPACK_IMPORTED_MODULE_3__["IndexnavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\r\n\r\n*[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  min-height: 92vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.forms-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n\r\n\r\n}\r\n\r\n@keyframes tilt-in-fwd-tr {\r\n  0% {\r\n    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.signin-signup[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  left: 75%;\r\n  width: 50%;\r\n  transition: 1s 0.7s ease-in-out;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  z-index: 5;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 0rem 5rem;\r\n  transition: all 0.2s 0.7s;\r\n  overflow: hidden;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 2;\r\n  animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n\r\nform.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\nform.sign-in-form[_ngcontent-%COMP%] {\r\n  z-index: 2;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 2.2rem;\r\n  color:#0a192f;\r\n  margin-bottom: 10px;\r\n  \r\n  \r\n\t        \r\n}\r\n\r\n@keyframes vibrate-1 {\r\n  0% {\r\n    transform: translate(0);\r\n  }\r\n  20% {\r\n    transform: translate(-2px, 2px);\r\n  }\r\n  40% {\r\n    transform: translate(-2px, -2px);\r\n  }\r\n  60% {\r\n    transform: translate(2px, 2px);\r\n  }\r\n  80% {\r\n    transform: translate(2px, -2px);\r\n  }\r\n  100% {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  max-width: 380px;\r\n  width: 100%;\r\n  background-color: #f0f0f0;\r\n  margin: 10px 0;\r\n\r\n  height: 55px;\r\n  border-radius: 55px;\r\n  display: grid;\r\n  grid-template-columns: 15% 85%;\r\n  padding: 0 0.4rem;\r\n  position: relative;\r\n  transition: 0.4s ease;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]:hover{\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 0 20px 0 rgba(0,0,0,0.7);\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  line-height: 55px;\r\n  color: #0a192f;\r\n  \r\n  transition: 0.5s;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  font-size: 1.1rem;\r\n  color:#0a192f;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n  color: #aaa;\r\n  font-weight: 500;\r\n}\r\n\r\n.social-text[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.social-media[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%] {\r\n  height: 46px;\r\n  width: 46px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 0.45rem;\r\n  color: #333;\r\n  border-radius: 50%;\r\n  border: 1px solid #333;\r\n  text-decoration: none;\r\n  font-size: 1.1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.social-icon[_ngcontent-%COMP%]:hover {\r\n  color: #4481eb;\r\n  border-color: #4481eb;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  background-color: #0a192f;\r\n  border: none;\r\n  outline: none;\r\n  height: 49px;\r\n  border-radius: 49px;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  margin: 10px 0;\r\n  cursor: pointer;\r\n  transition: 0.5s;\r\n\r\n\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #020b18;\r\n  animation: heartbeat 1.5s ease-in-out infinite both;\r\n}\r\n\r\n@keyframes heartbeat {\r\n  from {\r\n    transform: scale(1);\r\n    transform-origin: center center;\r\n    animation-timing-function: ease-out;\r\n  }\r\n  10% {\r\n    transform: scale(0.91);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  17% {\r\n    transform: scale(0.98);\r\n    animation-timing-function: ease-out;\r\n  }\r\n  33% {\r\n    transform: scale(0.87);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n    animation-timing-function: ease-out;\r\n  }\r\n}\r\n\r\n.panels-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.containerr[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 2000px;\r\n  width: 2000px;\r\n  top: -10%;\r\n  right: 48%;\r\n  transform: translateY(-50%);\r\n  \r\n  \r\n  \r\n\r\n  transition: 1.8s ease-in-out;\r\n  border-radius: 50%;\r\n  z-index: 6;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  transition: transform 1.1s ease-in-out;\r\n  transition-delay: 0.4s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  z-index: 6;\r\n}\r\n\r\n.left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n  padding: 3rem 17% 2rem 12%;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n  padding: 3rem 12% 2rem 17%;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  color: black;\r\n  transition: transform 0.9s ease-in-out;\r\n  transition-delay: 0.6s;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  line-height: 1;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  padding: 0.7rem 0;\r\n}\r\n\r\n.btn.transparent[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  background: none;\r\n  border: 2px solid #fff;\r\n  width: 130px;\r\n  height: 41px;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(800px);\r\n}\r\n\r\n\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n  transform: translate(100%, -50%);\r\n  right: 52%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(-800px);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-up-form[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 2;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   form.sign-in-form[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  transform: translateX(0%);\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\r\n  pointer-events: all;\r\n}\r\n\r\n@media (max-width: 870px) {\r\n  .containerr[_ngcontent-%COMP%] {\r\n    min-height: 800px;\r\n    height: 100vh;\r\n  }\r\n  .signin-signup[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    top: 95%;\r\n    transform: translate(-50%, -100%);\r\n    transition: 1s 0.8s ease-in-out;\r\n  }\r\n\r\n  .signin-signup[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n\r\n  .panels-container[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 2fr 1fr;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%] {\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 2.5rem 8%;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%] {\r\n    grid-row: 3 / 4;\r\n  }\r\n\r\n  .left-panel[_ngcontent-%COMP%] {\r\n    grid-row: 1 / 2;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.6s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding-right: 15%;\r\n    transition: transform 0.9s ease-in-out;\r\n    transition-delay: 0.8s;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 0.7rem;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n  .btn.transparent[_ngcontent-%COMP%] {\r\n    width: 110px;\r\n    height: 35px;\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    width: 1500px;\r\n    height: 1500px;\r\n    transform: translateX(-50%);\r\n    left: 30%;\r\n    bottom: 68%;\r\n    right: initial;\r\n    top: initial;\r\n    transition: 2s ease-in-out;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    transform: translate(-50%, 100%);\r\n    bottom: 32%;\r\n    right: initial;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(-300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .containerr.sign-up-mode[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(0px);\r\n  }\r\n\r\n  .right-panel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%], .right-panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    transform: translateY(300px);\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]   .signin-signup[_ngcontent-%COMP%] {\r\n    top: 5%;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@media (max-width: 570px) {\r\n  form[_ngcontent-%COMP%] {\r\n    padding: 0 1.5rem;\r\n  }\r\n\r\n  .image[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  .containerr[_ngcontent-%COMP%] {\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .containerr[_ngcontent-%COMP%]:before {\r\n    bottom: 72%;\r\n    left: 50%;\r\n  }\r\n\r\n  .containerr.sign-up-mode[_ngcontent-%COMP%]:before {\r\n    bottom: 28%;\r\n    left: 50%;\r\n  }\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%]   .ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid red;\r\n  width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZHQUE2Rzs7QUFFN0c7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87OztBQUdUOztBQWNBO0VBQ0U7SUFFVSxxRkFBcUY7SUFDN0YsVUFBVTtFQUNaO0VBQ0E7SUFFVSxvRUFBb0U7SUFDNUUsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUVmLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsNERBQTREO1NBQ3JELG9EQUFvRDtBQUM3RDs7QUE0QkE7RUFDRTtJQUVVLHVCQUF1QjtFQUNqQztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSxnQ0FBZ0M7RUFDMUM7RUFDQTtJQUVVLDhCQUE4QjtFQUN4QztFQUNBO0lBRVUsK0JBQStCO0VBQ3pDO0VBQ0E7SUFFVSx1QkFBdUI7RUFDakM7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7O0VBRWQsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCOzs7QUFHbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFFekIsbURBQW1EO0FBQ3JEOztBQXFDQTtFQUNFO0lBRVUsbUJBQW1CO0lBRW5CLCtCQUErQjtJQUUvQixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixtQ0FBbUM7RUFDN0M7RUFDQTtJQUVVLHNCQUFzQjtJQUV0QixrQ0FBa0M7RUFDNUM7RUFDQTtJQUVVLG1CQUFtQjtJQUVuQixtQ0FBbUM7RUFDN0M7QUFDRjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQix5RUFBeUU7RUFDekUsd0VBQXdFO0VBQ3hFLHlFQUF5RTs7RUFFekUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLGdDQUFnQztFQUNoQyxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGlDQUFpQztJQUNqQywrQkFBK0I7RUFDakM7O0VBRUE7O0lBRUUsU0FBUztFQUNYOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLDZCQUE2QjtFQUMvQjs7RUFFQTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7O0lBRUUsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsT0FBTztJQUNQLDZCQUE2QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0FBQ0Y7O0FBSUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZXNldC9yZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSxcclxuaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDkydmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZvcm1zLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcblxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGlsdC1pbi1md2QtdHIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDM1ZGVnKSB0cmFuc2xhdGUoMzAwcHgsIC0zMDBweCkgc2tldygtMzVkZWcsIDEwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDIwZGVnKSByb3RhdGVYKDM1ZGVnKSB0cmFuc2xhdGUoMzAwcHgsIC0zMDBweCkgc2tldygtMzVkZWcsIDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcm90YXRlWCgwZGVnKSB0cmFuc2xhdGUoMCwgMCkgc2tldygwZGVnLCAwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHRpbHQtaW4tZndkLXRyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgyMGRlZykgcm90YXRlWCgzNWRlZykgdHJhbnNsYXRlKDMwMHB4LCAtMzAwcHgpIHNrZXcoLTM1ZGVnLCAxMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDApIHJvdGF0ZVgoMGRlZykgdHJhbnNsYXRlKDAsIDApIHNrZXcoMGRlZywgMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZSgwLCAwKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWduaW4tc2lnbnVwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbGVmdDogNzUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogMXMgMC43cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDByZW0gNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAwLjdzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gIGdyaWQtcm93OiAxIC8gMjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogdGlsdC1pbi1md2QtdHIgMC42cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiB0aWx0LWluLWZ3ZC10ciAwLjZzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxufVxyXG5cclxuZm9ybS5zaWduLXVwLWZvcm0ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuZm9ybS5zaWduLWluLWZvcm0ge1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgY29sb3I6IzBhMTkyZjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIC8qIHRleHQtc2hhZG93OiA0cHggNnB4IDI1cHggcmdiYSgxMCwgMjUsIDQ3LCAxKTsgICAqL1xyXG4gIC8qIC13ZWJraXQtYW5pbWF0aW9uOiB2aWJyYXRlLTEgMS41cyBsaW5lYXIgaW5maW5pdGUgYm90aDsgKi9cclxuXHQgICAgICAgIC8qIGFuaW1hdGlvbjogdmlicmF0ZS0xIDEuNXMgbGluZWFyIGluZmluaXRlIGJvdGg7ICovXHJcbn1cclxuXHJcbiBALXdlYmtpdC1rZXlmcmFtZXMgdmlicmF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyB2aWJyYXRlLTEge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xyXG4gIH1cclxuICA0MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XHJcbiAgfVxyXG4gIDYwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xyXG4gIH1cclxuICA4MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBtYXgtd2lkdGg6IDM4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gIGhlaWdodDogNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xyXG4gIHBhZGRpbmc6IDAgMC40cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbn1cclxuLmlucHV0LWZpZWxkOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwwLDAsMC43KTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxuICBjb2xvcjogIzBhMTkyZjtcclxuICAvKiBjb2xvcjogcGFsZWdyZWVuOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiMwYTE5MmY7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zb2NpYWwtdGV4dCB7XHJcbiAgcGFkZGluZzogMC43cmVtIDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc29jaWFsLW1lZGlhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gIGhlaWdodDogNDZweDtcclxuICB3aWR0aDogNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDAuNDVyZW07XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6ICM0NDgxZWI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDQ4MWViO1xyXG59XHJcblxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTE5MmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0OXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxuXHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBiMTg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG59XHJcblxyXG5cclxuIEAtd2Via2l0LWtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDE3JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgNDUlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgMTclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi5wYW5lbHMtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIwMDBweDtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIHRvcDogLTEwJTtcclxuICByaWdodDogNDglO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNDQ4MWViIDAlLCAjMDRiZWZlIDEwMCUpOyAqL1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIzBhMTkyZiAwJSwgIzBjMWIyYiAxMDAlKTsgKi9cclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZjE1NTI1IDAlLCAjZTQ3ODIwIDEwMCUpOyAqL1xyXG5cclxuICB0cmFuc2l0aW9uOiAxLjhzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxLjFzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmxlZnQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgcGFkZGluZzogM3JlbSAxNyUgMnJlbSAxMiU7XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcGFkZGluZzogM3JlbSAxMiUgMnJlbSAxNyU7XHJcbn1cclxuXHJcbi5wYW5lbCAuY29udGVudCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5wYW5lbCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBwYWRkaW5nOiAwLjdyZW0gMDtcclxufVxyXG5cclxuLmJ0bi50cmFuc3BhcmVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwMHB4KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAtNTAlKTtcclxuICByaWdodDogNTIlO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnNpZ25pbi1zaWdudXAge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIGZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb250YWluZXJyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24taW4tZm9ybSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogOTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogMXMgMC44cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5zaWduaW4tc2lnbnVwLFxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5yaWdodC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMyAvIDQ7XHJcbiAgfVxyXG5cclxuICAubGVmdC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcclxuICB9XHJcblxyXG4gIC5wYW5lbCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5wYW5lbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLnRyYW5zcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XHJcbiAgICBib3R0b206IDMyJTtcclxuICAgIHJpZ2h0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMDBweCk7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5wYW5lbCAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcnIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnI6YmVmb3JlIHtcclxuICAgIGJvdHRvbTogNzIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcnIuc2lnbi11cC1tb2RlOmJlZm9yZSB7XHJcbiAgICBib3R0b206IDI4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmlucHV0LWZpZWxkIC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZWQ7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset',
                templateUrl: './reset.component.html',
                styleUrls: ['./reset.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zqFa":
/*!******************************************!*\
  !*** ./src/app/teacher/teacher.guard.ts ***!
  \******************************************/
/*! exports provided: TeacherGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherGuard", function() { return TeacherGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class TeacherGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    doSomthing() {
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('admin');
        localStorage.removeItem('student');
        localStorage.removeItem('teacher');
        this.router.navigate(['/']);
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('teacher') == "yes") {
                if (localStorage.getItem('admin') == "no") {
                    if (localStorage.getItem('student') == "no") {
                        return true;
                    }
                    else {
                        this.doSomthing();
                        return false;
                    }
                }
                else {
                    this.doSomthing();
                    return false;
                }
            }
            else {
                this.doSomthing();
                return false;
            }
        }
        else {
            this.doSomthing();
            return false;
        }
    }
}
TeacherGuard.ɵfac = function TeacherGuard_Factory(t) { return new (t || TeacherGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
TeacherGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeacherGuard, factory: TeacherGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map