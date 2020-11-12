import { Component, EventEmitter, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent implements OnInit {
 
  constructor() { }

  @Output() sendDatatoCV = new EventEmitter() ; 

  processListe(value) {
    this.sendDatatoCV.emit(value)
  }


  ngOnInit(): void {
  }

}
