import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rainbow-component',
  templateUrl: './rainbow-component.component.html',
  styleUrls: ['./rainbow-component.component.css']
})
export class RainbowComponentComponent implements OnInit {
  border: string ;
  constructor() { }

  ngOnInit(): void {
    this.border ="3px"
  }

}
