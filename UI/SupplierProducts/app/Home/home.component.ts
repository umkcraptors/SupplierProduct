import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToRight } from '../router.transition/router.transition';
//import { ConsumerService } from '../Service/Services';
@Component({
  selector: 'home',
  template: `
       
       <div id="subscribe">
       <div class="darkoverlay">
           <div class="container text-center">
               
               <div class="sectionhead">            
                   <h2>Welcome to <span class="highlight">Supplier Product</span> Page</h2>
                   
               </div><!--SECTIONHEAD END-->            

               
               
           </div><!--SUBSCRIBE CONTAINER END-->
       </div><!--OVERLAY END-->
   </div><!--SUBSCRIBE SECTION END-->        
   
              
   
  `,
  styleUrls: ['app/lib/css/styles2.css'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class homeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

