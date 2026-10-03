import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


 @Input() name="Nisha"

 constructor()
 {
    console.log("Constructor",this.name)
 }

 ngOnInit()
 {
     console.log("ngOnInit",this.name)
 }

 ngOnChanges(changes: SimpleChange)
 {
    console.log("ngOnChanges",changes)
 }

 ngDoCheck()
 {
     console.log("ngDoCheck")
 }


 ngOnDestroy()
 {
    console.log("Component destroyed")
 }

 ngAfterContentInit()
 {
   console.log("Parent projected content in a child : ngAfterContentInit")
 }

 
}
