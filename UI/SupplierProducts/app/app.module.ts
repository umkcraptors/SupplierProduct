import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule} from '@angular/http';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './routes/app.routes';


import { AppComponent }  from './app.component';
import { headerComponent } from '../app/header/header';

import { consumerComponent } from '../app/consumer/consumer.component';
import { supplierComponent } from '../app/supplier/supplier.component';
import { productComponent } from '../app/product/product.component';
import { supplierPComponent } from '../app/supplier_product/supplier_product.component';
import { productDComponent } from '../app/product_domiciles/pd.component';

import { homeComponent } from '../app/Home/home.component';

import { SearchComponent } from "./search/search.component";
//import { EmployeeService } from '../app/Service/Services';
//import { routerTransition } from '../app/router.transition/router.transition';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, routing, HttpModule,JsonpModule ],
  declarations: [ AppComponent, headerComponent, 
                 consumerComponent, supplierComponent, productComponent, supplierPComponent,productDComponent,  homeComponent,SearchComponent],
  providers: [appRoutingProviders],
  exports:[],               
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
