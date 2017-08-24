import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.transition/router.transition';
import { ConsumerService } from '../Service/Services';
@Component({
  selector: 'consumer',
  templateUrl: 'app/consumer/cons.html',
 
 
  
  styleUrls: ['app/lib/css/styles.css'],
  styles: [`input.ng-valid{border-left:5px solid green}
            input.ng-invalid{border-left:5px solid red}`],
            animations: [routerTransition()],
            host: {'[@routerTransition]': ''} 
})
export class consumerComponent implements OnInit {
   consumers: any;
   errorMsg: string;
    constructor( private router: Router, private _consumerService: ConsumerService) { }

    ngOnInit() { 
       this._consumerService.getConsumers()
     .subscribe(resConsumerData => this.consumers = (resConsumerData),
     resConsumerError => this.errorMsg = resConsumerError);
    }

    private onSave(value:any){
      alert("In Progress");
    }
    gotoDepartments(){
           
           this.router.navigate(['']);
       }

}

 /* consumers: any;
  errorMsg: string;
    constructor(private _consumerService: ConsumerService){}
        ngOnInit(){
     this._consumerService.getConsumers()
     .subscribe(resConsumerData => this.consumers = JSON.stringify(resConsumerData),
     resConsumerError => this.errorMsg = resConsumerError);
        }
        JSON.stringify
        */