import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BComponent } from '../b/b.component';
import { ToDoService } from '../b/to-do.services';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  msgToChild="This content declared in componentA is intended to render on child component B";
  updatedCount=0;
  @ViewChild(BComponent, {static:true}) compB: BComponent=new BComponent();
  data=[]
  constructor(public toDoService:ToDoService) {
   
   }
  ngOnInit(): void {
    this.toDoService.todos$.subscribe(val=> {
      this.data=val;
    })
  }
  updateCount(value:any){
   this.updatedCount=value;
  }
}
