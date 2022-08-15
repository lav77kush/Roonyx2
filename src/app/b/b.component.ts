import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  @Input('msgToChild') msgToChild:string='';
  @Output('countChanged') countChanged: EventEmitter<number> = new EventEmitter();
  count:number=0;
  constructor() { }
  ngOnInit(): void {
  }
  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

}
