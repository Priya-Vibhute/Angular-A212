import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

 @Input() id=0;
 @Input() name=""
 @Input() price=0

 @Output() eventemitter = new EventEmitter<string>();

 onBtnClick()
 {
    this.eventemitter.emit("Data from child component")
    alert("Button Clicked")
 }


 
}
