import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user : User){
  let users = [];
  if (localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users') as string);
      users=[user,... Object.values(users)];

  }
  else{
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users));

}
}
