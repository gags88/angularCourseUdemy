import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  serverElements = [];
  oddNumbers :  number[] = [];
  evenNumbers :  number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onGameStarted(numberCount: number){
    if(numberCount % 2 === 0){
      this.evenNumbers.push(numberCount);
    }else{
      this.oddNumbers.push(numberCount);
    }
  }

}