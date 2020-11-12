import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowDirective]'
})
export class RainbowDirectiveDirective {
  @HostBinding('style.color') color= 'black';
  @HostBinding('style.borderColor') borderColor = 'black';
  

  @HostListener('keydown') onKeyDown(){
    this.color ='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) ;
    this.borderColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) ;
    }


  constructor() { }

}
