import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

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

  /*--------Reactive Forms----------*/
  choices = ['Good', 'Bad'];
  signupForm: FormGroup;

  /*--------Reactive Forms block Ends----------*/

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'choiceR': new FormControl('Good')
    });
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

  onSubmit(){
    console.log(this.signupForm.value)
  }

}
