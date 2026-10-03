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
