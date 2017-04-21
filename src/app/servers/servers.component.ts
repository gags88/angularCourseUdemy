import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverButtonStatus: boolean = false;
  serverCreationText: string = "No Server was created";
  serverName: string = "Pre-Populated";

  constructor() {
    setTimeout(() => {
      this.serverButtonStatus = true;
    }, 2000);

    //const button = document.getElementsByTagName("button");
    //console.log(button);k


  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationText = "Server is created. Name of server is " + this.serverName;
  }

  onUdateServerName(event) {
    this.serverName = event.target.value;
  }

}
