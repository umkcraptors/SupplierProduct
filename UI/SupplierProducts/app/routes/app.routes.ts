import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { headerComponent } from '../header/header';

import { consumerComponent } from '../consumer/consumer.component';
import { supplierComponent } from '../supplier/supplier.component';
import { productComponent } from '../product/product.component';
import { supplierPComponent } from '../supplier_product/supplier_product.component';
import { productDComponent } from '../product_domiciles/pd.component';
import { homeComponent } from '../Home/home.component';
import { routerTransition } from '../router.transition/router.transition';
import { slideToRight } from '../router.transition/router.transition';
import { SearchComponent } from "../search/search.component";

//import { EmployeeService } from '../Service/Services';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: homeComponent },
    { path: 'consumer', component: consumerComponent },
     { path: 'search', component: SearchComponent },
    { path: 'supplier', component: supplierComponent },
   
    { path: 'product', component: productComponent },
    { path: 'supplierP', component: supplierPComponent },
    { path: 'productD', component: productDComponent }


        //{ path: '**', component: ErrorComponent }
    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,
 {
     useHash: true
 });