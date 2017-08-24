"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var consumer_component_1 = require("../consumer/consumer.component");
var supplier_component_1 = require("../supplier/supplier.component");
var product_component_1 = require("../product/product.component");
var supplier_product_component_1 = require("../supplier_product/supplier_product.component");
var pd_component_1 = require("../product_domiciles/pd.component");
var home_component_1 = require("../Home/home.component");
var search_component_1 = require("../search/search.component");
//import { EmployeeService } from '../Service/Services';
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'consumer', component: consumer_component_1.consumerComponent },
    { path: 'search', component: search_component_1.SearchComponent },
    { path: 'supplier', component: supplier_component_1.supplierComponent },
    { path: 'product', component: product_component_1.productComponent },
    { path: 'supplierP', component: supplier_product_component_1.supplierPComponent },
    { path: 'productD', component: pd_component_1.productDComponent }
    //{ path: '**', component: ErrorComponent }
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, {
    useHash: true
});
//# sourceMappingURL=app.routes.js.map