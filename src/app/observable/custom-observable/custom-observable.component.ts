import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import "rxjs/Rx";
import { SubjectService } from "../../shared/services/subject.service";

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  number:number;
  observable: string[] = [];
  numbersSubscription: Subscription;
  isUserActivated = false;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    //const myNumbers = Observable.interval(1000);
    const myNumbers = Observable.interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        this.number = number;
        console.log(this.number)
      });

    const myObservable = Observable.create((observer: Observer<string[]>) => {
      setTimeout(() => {
        observer.next(["First Package Emitted at 2s"]);
      }, 2000);
      setTimeout(() => {
        observer.next(["Second Package Emitted at 4s"]);
      }, 4000);
      // setTimeout(() => {
      //   observer.error(["Fails at 5s"])
      // }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });

    myObservable.subscribe(
      (data: string[]) => {
        this.observable.push(...data);
      },
      (error: string[]) => {
        this.observable.push(...error);
      },
      () => {
        this.observable.push(...["Completed at 8 seconds"]);
      }
    );

    this.subjectService.userActivated.subscribe(
      (id: number) => {
        if(id === 1){
          this.isUserActivated = true;
        }
      }
    );

  }

  ngOnDestroy(){
    this.numbersSubscription.unsubscribe();
  }

  onUserActivated(id: number){
    this.subjectService.userActivated.next(id);
  }

}
