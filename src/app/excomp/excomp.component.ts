import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excomp',
  templateUrl: './excomp.component.html',
  styleUrls: ['./excomp.component.css']
})
export class ExcompComponent implements OnInit {
  defaultcolor="#FFFFFF"
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(inputColor : string){
    this.defaultcolor = inputColor
  }
 reset(){
    this.defaultcolor = "#FFFFFF"
  }
}
