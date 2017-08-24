"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_transition_1 = require("../router.transition/router.transition");
var search_service_1 = require("./search.service");
var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.details = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getDetails()
            .subscribe(function (resdata) { return _this.details = resdata; }, function (resError) { return _this.errorMsg = resError; });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        template: "<h1>Search</h1>\n  <h2>Search by Name</h2>\n\n <input style=\"border-radius:3px;height:30px; width:450px; margin-left:30px; margin-top:30px;\" type=\"text\" required placeholder=\" Enter name\" ngModel>\n <button>Search</button>\n     <table class=\"table table-hover\">\n     <thead>\n     <tr>\n     <th>FirstName</th>\n     <th>LastName</th>\n     <th>MiddleName</th>\n     <th>Email</th>\n     <th>Phone</th>\n     <th>Status</th>\n     <th>Handle</th>\n     <th>Edit</th>\n     <th>Delete</th>\n     </tr>\n     </thead>\n     <tbody>\n     <tr *ngFor = \"let detail of details\">\n    <td>{{detail.firstName}}</td>\n    <td>{{detail.lastName}}</td>\n    <td>{{detail.middleName}}</td>\n    <td>{{detail.email}}</td>\n    <td>{{detail.phone}}</td>\n    <td>{{detail.status}}</td>\n    <td>{{detail.handle}}</td>\n    <td><button> Edit </button> </td>\n    <td><button> Delete </button> </td>\n    </tr> </tbody>\n    </table>\n    <p> {{errorMsg}}</p>\n  \n  ",
        styleUrls: ['app/lib/css/styles.css'],
        animations: [router_transition_1.routerTransition()],
        host: { '[@routerTransition]': '' },
        providers: [search_service_1.SearchService],
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map