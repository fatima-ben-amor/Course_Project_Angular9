import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//i will create my own event 
//to enable this event to be listened to from outside of this component @Output decorator
//@output enables us to use this event or to listen to it from the parent component.
 @Output() featureSelected = new EventEmitter<string>();
onSelect(feature :string){
  this.featureSelected.emit(feature);
}


  constructor() { }

  ngOnInit(): void {
  }

}
