import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
import { Router } from '@angular/router';
@Component({
  selector: 'supplier',
  templateUrl: 'app/supplier/supplier.html',
  styleUrls: ['app/lib/css/styles.css'],
  styles: [`input.ng-valid{border-left:5px solid green}
  input.ng-invalid{border-left:5px solid red}`],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''} 
})
export class supplierComponent implements OnInit {
    user: any = {Name: null, Email: null, Phone: null, Status: null};
    data: any;
    constructor() { }

    ngOnInit() { }
 /*
    onSubmit(user: any){
        console.log(user);
        this.data = JSON.stringify(user);
    }
*/
}