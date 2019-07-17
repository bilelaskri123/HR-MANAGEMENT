import { Component } from '@angular/core';
import {UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HRAPP';
  public contacts : any;
  constructor(private userService: UserService) {
    this.userService.getContacts().subscribe((data:any) =>{
      console.log("----- data is ------ ", data);
      this.contacts = data;
    },(error:any) => {
      console.log("uuups error detected");
        })
  }
}
