import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { routerTransition } from '../app/router.transition/router.transition';
import { ConsumerService } from './Service/Services';
@Component({
  selector: 'my-app',
  template: `
   <header></header>
   
   <nav id="menu" class="pull-right">
 <ul>
       <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
       <li><a routerLink="/consumer" routerLinkActive="active">Consumers</a></li>
       <li> <a routerLink="/supplier" routerLinkActive="active">Suppliers</a> </li>
       <li><a routerLink="/product" routerLinkActive="active">Products</a></li>
       <li><a routerLink="/supplierP" routerLinkActive="active">Supplier products</a></li>
       <li><a routerLink="/productD" routerLinkActive="active">Products Domiciles</a></li>
      
         <li><a routerLink="/search" routerLinkActive="active">Search</a></li>
  </ul>
  </nav>
    <router-outlet></router-outlet>
 
  
 
  `,
    styleUrls: ['app/lib/css/styles.css'],
    providers: [ConsumerService]
  
})
export class AppComponent { 
  //constructor(private router: Router){} 
}
//<home [@routerTransition]=""></home>