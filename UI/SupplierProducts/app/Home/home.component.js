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
//import { ConsumerService } from '../Service/Services';
var homeComponent = (function () {
    function homeComponent() {
    }
    homeComponent.prototype.ngOnInit = function () { };
    return homeComponent;
}());
homeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        template: "\n       \n       <div id=\"subscribe\">\n       <div class=\"darkoverlay\">\n           <div class=\"container text-center\">\n               \n               <div class=\"sectionhead\">            \n                   <h2>Welcome to <span class=\"highlight\">Supplier Product</span> Page</h2>\n                   \n               </div><!--SECTIONHEAD END-->            \n\n               \n               \n           </div><!--SUBSCRIBE CONTAINER END-->\n       </div><!--OVERLAY END-->\n   </div><!--SUBSCRIBE SECTION END-->        \n   \n              \n   \n  ",
        styleUrls: ['app/lib/css/styles2.css'],
        animations: [router_transition_1.slideToRight()],
        host: { '[@slideToRight]': '' }
    }),
    __metadata("design:paramtypes", [])
], homeComponent);
exports.homeComponent = homeComponent;
//# sourceMappingURL=home.component.js.map