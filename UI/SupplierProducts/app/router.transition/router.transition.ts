
import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {    
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition('void => *', [  
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition('* => void', [  
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

export function slideToRight() {
  return trigger('slideToRight', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate('3s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('3s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}
