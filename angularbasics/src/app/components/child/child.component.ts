import { Component, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @ViewChild('para') paragraph  !:ElementRef;
 @ViewChild('inputbox') inputBox  !:ElementRef

 @Input() name="Nisha"

 constructor()
 {
    console.log("Constructor",this.name)
    console.log("Paragraph from constructor",this.paragraph)
 }

 ngOnInit()
 {
     console.log("ngOnInit",this.name)
     console.log("Paragraph from ngOninit",this.paragraph)
 }

 ngAfterViewInit()
 {
    console.log("Paragraph from ngAfterViewInit",this.paragraph)
    this.paragraph.nativeElement.style.color="red"
    this.inputBox.nativeElement.focus()
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


 ngAfterContentChecked()
 {
     console.log("ngAfterContentChecked")
 }
 
}
