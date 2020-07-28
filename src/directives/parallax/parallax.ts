import { Directive } from '@angular/core';

@Directive({
  selector: '[parallax]',
  host:{
	  '(ionScroll)':'onCntscroll($event)',
  }
})
export class ParallaxDirective {

  constructor() {
    
  }
  
  onCntscroll(ev){
	console.log(ev);
	  
  }
  

}
