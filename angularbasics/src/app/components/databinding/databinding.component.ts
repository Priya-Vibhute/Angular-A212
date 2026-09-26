import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
    name="Nisha"
    age=20
    color="red"

    onBtnClick()
    {
      alert("Button Clicked")
    }

    // changeColor("blue")
    changeColor(color:string)
    {
        this.color=color
    }
}
