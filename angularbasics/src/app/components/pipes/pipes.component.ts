import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WelcomePipe } from '../../pipes/welcome.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,WelcomePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  sentence="Wecome to XYZ company"
  salary=70000
  curdate= new Date()

  student={
    id:101,
    name:"Nisha",
    marks:60
  }

}
