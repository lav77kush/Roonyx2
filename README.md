# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

**Environments &&  Setup**
Angular: 14.1.2
Node : v14.15.0
run the app:  ng serve
and then open localhost:4200 in the browser.
=======================================================================================================
**providing answer for following questions:**
1) What options do we have to establish such communication?
2) For each option describe what are the pros and cons of this solution?
3) For each option describe what are the cases the solution fits best?
===================================================================================================
**Component Communication**
There are few ways in which components can communicate or share data between them. And methods depend on whether the components have a Parent-child relationship between them are not.
======================================================================================================
**Here are the three Possible Options to establish such communication**

1. Parent to Child Communication
2. Child to Parent Communication
3. Interaction when there is no parent-child relation
=======================================================================================================
**1. Parent to Child Communication**

If the Components have a parent-child relationship then, 


the parent component can pass the data to the child using the **@input** Property.

Using **@Input** Decorator to Pass Data
Create a property (helloFromChild) in the Child Component (Lets consider Component B as child here and Component A as a parent Component) 
and decorate it with **@Input**. This will mark the property as input property

 
export class BComponent {
    @Input() msgToChild: string;
}
 
And in the Parent Component Instantiate the Child Component. Pass the value to the "msgToChild" using the Property Bind Syntax.

<app-b [msgToChild]="msgToChild" ></app-b>
 
In this way, Child Component will receive the data from the parent.

**Listen for Input Changes**

The Child Component can get the values from the "msgToChild". But it also important for the child component to get notification when the values changes.

There are two ways in which we can achieve that.

1. Using **OnChanges** life Cycle hook or
2. Using a Property Setter on Input Property
## Pros and Cons  
  Pros: we can pass data from parent to child component where two components have parent and child relationship.
  Cons:
   A .  it is one way data transfer method. we cant get two way data transfer using this.
   B. if data changes in parent then it does not changes value in child.. for that we will have to use ngOnChanges lifecycle hook method.
## Best cases in which this solution fits  
It is best to share data from parent to child in parent child relationship scenario between the components.
========================================================================================================
**2. Child to Parent Communication**

The Child to Parent communication can happen in three ways.

1. Listens to Events from Child
2. Uses Local Variable to access the child in the Template
3. Uses a **@ViewChild** to get a reference to the child component

**2.1 Listens to Child Event**

This is done by the child component by exposing an EventEmitter Property. We also decorate this Property with **@Output** decorator. When Child Component needs to communicate with the parent it raises the emit event of the EventEmitter Property. The Parent Component listens to that event and reacts to it.
## Pros and Cons  
  Pros: we can pass data from child to parent component where two components have parent and child relationship.
  Cons:
  it is one way data transfer method. we cant get two way data transfer using this.

## Best cases in which this solution fits  
It is best to share data from child component to parent component in parent child relationship scenario between the components.
==========================================================================================================

**2.2 Uses Local Variable to access the child**

Using Local Variable is to refer to the child component is another technique.

For Example, Create a reference variable #child to the Child Component(Component B).

<app-b #child></app-b>
 
You can use the child (note without #) to access a property of the Child Component (Component B). The Code below displays count of the Child Component and displays it on screen:
<p> current count is {{child.count}} </p>
 
For Example, refer to local variable to access the Child in html Template of  componentA. 

Uses a @ViewChild to get the reference to the child component.

## Pros and Cons  
  Pros: we can access child's public data inside the html template of parent component.
  Cons:
  using this template reference variable its scope is limited to template only.

## Best cases in which this solution fits  
When we want to get reference and utilize child component's properties inside parent component's template.. we can use this.
===========================================================================================
 **2.3 Using @ViewChild**
<app-b ></app-b>
Another way to get the reference of the child component is using the ViewChild query in the component class

@ViewChild(BComponent) child: BComponent;
 
You can call any method in the Child component.
## Pros and Cons  
  Pros: we can access child component's  data inside the ts file of parent component.
  Cons: no such cons

## Best cases in which this solution fits  
When we want to get reference and utilize child component's properties inside parent component's TS file. we can use component's instance to access the properties and methods of the child component.. 
==========================================================================================================

**3. Communication when there is no relation**
export class TodoService {
 
  private _todo = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todo.asObservable();

}
 
The _todo observable will emit data, whenever it is available or changes using the next method of the Subject.

 this._todo.next(Object.assign([], this.todos));
 
In the component class, you can listen to the changes just by subscribing to the observable


       this.toDoService.todos$.subscribe(val=> {
          this.data=val;
       })
 

Pros:
The advantageous of using service is that-
You can share data between multiple components.
Using observable, you can notify each component, when the data changes.
Create a Service and create an Angular Observable in that 
service using either BehaviorSubject or Subject.

## Cons:   
We will have to be depend on services using dependency injection and other RxJs methods.

## Best case to use it  

 If the Components do not share the Parent-child relationship, then the only way they can share data is by using the services and observable.
========================================================================================================

