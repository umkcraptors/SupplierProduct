import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'supplierP',
  templateUrl: 'app/supplier_product/sp.html',
  styleUrls: ['app/lib/css/styles.css'],
  styles: [`input.ng-valid{border-left:5px solid green}
  input.ng-invalid{border-left:5px solid red}`],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class supplierPComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}