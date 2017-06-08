import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
@Component({
  selector: 'app-master-component',
  templateUrl: './master-component.component.html',
  styleUrls: ['./master-component.component.css']
})
export class MasterComponentComponent implements OnInit {

  item: string;

  constructor() { }

  ngOnInit() {
  }

  onChildCreated(e: Item){        
    this.item = e.name;
  }

}
