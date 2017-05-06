import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') theForm: NgForm;

  answer: string = "";
  genders = ['Male', 'Female'];

  constructor() { }

  ngOnInit() {
  }

  onSuggestUsername(){
    const userName = "SuperUser";
    this.theForm.setValue({
      userData: {
        username: userName,
        email: '',
        secret: 'pet',
        questionAnswer: '',
        gender: 'Male'
      }
    })

  }

  onFormSubmit(data: NgForm){
    console.log(data.value);
  }

}
