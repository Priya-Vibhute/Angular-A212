import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-inputandoutput',
  imports: [ProductComponent],
  templateUrl: './inputandoutput.component.html',
  styleUrl: './inputandoutput.component.css'
})
export class InputandoutputComponent {
    product={ id:101,name:"Laptop",price:45000}

    receiveData(data :string)
    {
         alert("Received from child"+data)
    }
}
