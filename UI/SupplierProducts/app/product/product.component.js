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
var productComponent = (function () {
    function productComponent() {
    }
    productComponent.prototype.ngOnInit = function () { };
    return productComponent;
}());
productComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: 'app/product/product.html',
        styleUrls: ['app/lib/css/styles.css'],
        styles: ["input.ng-valid{border-left:5px solid green}\n  input.ng-invalid{border-left:5px solid red}"],
        animations: [router_transition_1.routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], productComponent);
exports.productComponent = productComponent;
//# sourceMappingURL=product.component.js.map