import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {
  @Input() nameItem ="ala" ;
  @Input() path = "rotating_card_profile.png" 
  @Input() description = "1111111111111111111"
  constructor() { }

  @Output() sendDatatoListe = new EventEmitter()

  sendData(){
    this.sendDatatoListe.emit({
      name : this.nameItem,
      path : this.path,
      desc : this.description
    })
  }

  ngOnInit(): void {
  }

}
