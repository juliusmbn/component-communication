import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slave',
  templateUrl: './slave.component.html',
  styleUrls: ['./slave.component.css']
})
export class SlaveComponent implements OnInit {

  @Input("itemx") item;

  constructor() { }

  ngOnInit() {
  }

}
