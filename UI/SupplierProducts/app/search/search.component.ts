import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../router.transition/router.transition';
import { Observable } from "rxjs/Observable";
import { SearchService } from "./search.service";

@Component({
 
  template: `<h1>Search</h1>
  <h2>Search by Name</h2>

 <input style="border-radius:3px;height:30px; width:450px; margin-left:30px; margin-top:30px;" type="text" required placeholder=" Enter name" ngModel>
 <button>Search</button>
     <table class="table table-hover">
     <thead>
     <tr>
     <th>FirstName</th>
     <th>LastName</th>
     <th>MiddleName</th>
     <th>Email</th>
     <th>Phone</th>
     <th>Status</th>
     <th>Handle</th>
     <th>Edit</th>
     <th>Delete</th>
     </tr>
     </thead>
     <tbody>
     <tr *ngFor = "let detail of details">
    <td>{{detail.firstName}}</td>
    <td>{{detail.lastName}}</td>
    <td>{{detail.middleName}}</td>
    <td>{{detail.email}}</td>
    <td>{{detail.phone}}</td>
    <td>{{detail.status}}</td>
    <td>{{detail.handle}}</td>
    <td><button> Edit </button> </td>
    <td><button> Delete </button> </td>
    </tr> </tbody>
    </table>
    <p> {{errorMsg}}</p>
  
  `,
  styleUrls: ['app/lib/css/styles.css'],
  animations: [routerTransition()],
            host: {'[@routerTransition]': ''},

providers: [ SearchService ],
})

export class SearchComponent implements OnInit {
        errorMsg: any;
    details =[];
    constructor(private searchService: SearchService){}
 ngOnInit(){
     this.searchService.getDetails()
     .subscribe(resdata => this.details =resdata,
     resError => this.errorMsg = resError);
 }
}