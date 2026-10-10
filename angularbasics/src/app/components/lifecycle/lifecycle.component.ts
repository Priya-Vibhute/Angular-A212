import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  imports: [ChildComponent,CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {

     username="Manisha"
     isVisible:boolean=true;
     message="Good Morning"

    //  changeMessage("Good Afternoon")
     changeMessage(message:string)
     {
     this.message=message
     }

    //   changeUsername("Anisha")
     changeUsername(name: string)
     {
        this.username=name;
     }

     toggleIsVisible()
     {
      this.isVisible=!this.isVisible;
     }
}
