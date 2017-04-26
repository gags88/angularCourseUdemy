import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: any[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }

  onSetToInactive(id: number){
    this.userService.setToInactive(id);
  }
  

}
