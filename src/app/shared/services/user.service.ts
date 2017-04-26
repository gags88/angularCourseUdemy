import { Injectable } from '@angular/core';
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {

  activeUsers = ["User 1", "User 2", "User 3", "User 4"];
  inactiveUsers = ["User 5", "User 6", "User 7"];

  constructor(private counterService: CounterService) { }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive()
  }

  

}
