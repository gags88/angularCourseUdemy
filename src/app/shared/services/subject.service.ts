import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SubjectService {

  public userActivated = new Subject();

  constructor() { }

}
