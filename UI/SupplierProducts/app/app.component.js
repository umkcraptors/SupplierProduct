"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Services_1 = require("./Service/Services");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n   <header></header>\n   \n   <nav id=\"menu\" class=\"pull-right\">\n <ul>\n       <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n       <li><a routerLink=\"/consumer\" routerLinkActive=\"active\">Consumers</a></li>\n       <li> <a routerLink=\"/supplier\" routerLinkActive=\"active\">Suppliers</a> </li>\n       <li><a routerLink=\"/product\" routerLinkActive=\"active\">Products</a></li>\n       <li><a routerLink=\"/supplierP\" routerLinkActive=\"active\">Supplier products</a></li>\n       <li><a routerLink=\"/productD\" routerLinkActive=\"active\">Products Domiciles</a></li>\n      \n         <li><a routerLink=\"/search\" routerLinkActive=\"active\">Search</a></li>\n  </ul>\n  </nav>\n    <router-outlet></router-outlet>\n \n  \n \n  ",
        styleUrls: ['app/lib/css/styles.css'],
        providers: [Services_1.ConsumerService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//<home [@routerTransition]=""></home> 
//# sourceMappingURL=app.component.js.map