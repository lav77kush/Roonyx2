import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class ToDoService {
        todos=[];
        private _todo = new BehaviorSubject([]);
        readonly todos$ = this._todo.asObservable();
      
        constructor(){
           
        }

        getTodos(){
            this._todo.next(Object.assign([], this.todos));
        }
      
}