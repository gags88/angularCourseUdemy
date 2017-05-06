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
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSuggestUsername(){
    const userName = "SuperUser";
    // this.theForm.setValue({
    //   userData: {
    //     username: userName,
    //     email: '',
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'Male'
    //   }
    // })
    this.theForm.form.patchValue({
      userData: {
        username: userName
      }
    })

  }

  onFormSubmit(data: NgForm){
    this.submitted = true;
    //console.log(data.value);
    this.user.username = data.value.userData.username;
    this.user.email = data.value.userData.email;
    this.user.secretQuestion = data.value.userData.secret;
    this.user.answer = data.value.userData.questionAnswer;
    this.user.gender = data.value.userData.gender;

    this.theForm.reset();
  }

}
