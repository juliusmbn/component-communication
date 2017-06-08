import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../models/item.model';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Output() childCreated = new EventEmitter<Item>();

  constructor() { }

  ngOnInit() {
  }

  createChild(){
    this.childCreated.emit(new Item("Julius","Bacosa"));
  }

}
