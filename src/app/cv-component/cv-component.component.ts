import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  namefromItem ="";
  pathfromItem ="" ; 
  descfromItem =""
  constructor() { }

  

  processData(obj){
    this.namefromItem = obj.name ;
    this.pathfromItem = obj.path ;
    this.descfromItem = obj.desc 
  }
  ngOnInit(): void {
  }

}
