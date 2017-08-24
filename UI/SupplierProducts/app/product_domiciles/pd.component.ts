import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
@Component({
  selector: 'productD',
  templateUrl: 'app/product_domiciles/pd.html',
  styleUrls: ['app/lib/css/styles.css'],
  styles: [`input.ng-valid{border-left:5px solid green}
  input.ng-invalid{border-left:5px solid red}`],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class productDComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}