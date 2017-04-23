import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({selector: 'app-cockpit', templateUrl: './cockpit.component.html', styleUrls: ['./cockpit.component.css']})
export class CockpitComponent implements OnInit {

  @Output('srvCreated')
  serverCreated = new EventEmitter < {
    serverName: string,
    serverContent: string
  } > ();

  @Output('bpCreated')
  blueprintCreated = new EventEmitter < {
    serverName: string,
    serverContent: string
  } > ();

  //newServerName : string = "";
  //newServerContent : string = "";
  @ViewChild('newServerContent') newServerContent : ElementRef;
  constructor() {}

  ngOnInit() {}

  onAddNewServer(serverName : HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.newServerContent.nativeElement.value})
    //serverName: this.newServerName, serverContent: this.newServerContent
  }

  onAddBluePrint(serverName : HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.newServerContent.nativeElement.value})
  }

}
