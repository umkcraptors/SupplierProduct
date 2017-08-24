import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'product',
  templateUrl: 'app/product/product.html',
  styleUrls: ['app/lib/css/styles.css'],
  styles: [`input.ng-valid{border-left:5px solid green}
  input.ng-invalid{border-left:5px solid red}`],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
  
})
export class productComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}