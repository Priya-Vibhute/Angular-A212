import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {


  loggedIn = false

  names = ["Nisha", "Anisha", "Manisha"]
  classes:string[]=[]
  theme=true;

  changeTheme()
  {
    this.theme=!this.theme
  }



  addClass(className:string)
  {
     this.classes.push(className)
  }

  undo()
  {
    this.classes.pop()
  }

  getStyle(choice: number) {
  switch (choice) {
    case 1:
      return {
        color: "green",
        backgroundColor: "#e8f5e9",
        padding: "10px",
        borderRadius: "8px"
      };

    case 2:
      return {
        color: "purple",
        backgroundColor: "#f3e5f5",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center"
      };

    case 3:
      return {
        color: "plum",
        backgroundColor: "#fff0f5",
        padding: "10px",
        borderLeft: "5px solid plum",
        fontStyle: "italic"
      };

    default:
      return {
        color: "orange"
      };
  }
}


  students = [
    {
      id: 1,
      name: "Rahul Sharma",
      age: 20,
      course: "Computer Science",
      email: "rahul@example.com",
      city: "Mumbai",
      marks: 85
    },
    {
      id: 2,
      name: "Priya Patel",
      age: 21,
      course: "Information Technology",
      email: "priya@example.com",
      city: "Pune",
      marks: 92
    },
    {
      id: 3,
      name: "Amit Kumar",
      age: 19,
      course: "Mechanical Engineering",
      email: "amit@example.com",
      city: "Delhi",
      marks: 78
    },
    {
      id: 4,
      name: "Sneha Verma",
      age: 20,
      course: "Computer Science",
      email: "sneha@example.com",
      city: "Bangalore",
      marks: 88
    },
    {
      id: 5,
      name: "Arjun Mehta",
      age: 22,
      course: "Electronics",
      email: "arjun@example.com",
      city: "Ahmedabad",
      marks: 81
    }
  ];


  toggleLogin() {
    this.loggedIn = !this.loggedIn
  }




}
