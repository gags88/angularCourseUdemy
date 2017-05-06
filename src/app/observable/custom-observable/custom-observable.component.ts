import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import "rxjs/Rx";

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  number:number;
  observable: string[] = [];
  numbersSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        this.number = ++number;
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
  }

  ngOnDestroy(){
    this.numbersSubscription.unsubscribe();
  }

}
