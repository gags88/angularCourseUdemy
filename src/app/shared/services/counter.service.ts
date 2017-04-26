export class CounterService {

  activeToInactiveCount : number = 0;
  inactiveToActiveCount : number = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCount++;
    console.log("Inactive Link Clicks: " + this.activeToInactiveCount);
    
  }

  incrementInactiveToActive(){
    this.inactiveToActiveCount++;
    console.log("Active Link Clicks: " + this.inactiveToActiveCount);
    
  }

}
