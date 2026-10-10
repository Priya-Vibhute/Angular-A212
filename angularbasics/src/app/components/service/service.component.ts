import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

     userService=inject(UserService)

    // constructor(private userService:UserService)
    // {
         
    // }


    getUsers()
    {
        return this.userService.getUsers()
    }

}
