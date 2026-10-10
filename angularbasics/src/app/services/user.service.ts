import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers()
  {
       return [ { name: "Nisha", age:18} ,{name :"Anisha", age:17}]
  }

  constructor() { }
}
