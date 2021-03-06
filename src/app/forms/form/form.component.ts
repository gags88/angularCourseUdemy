import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

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
  forbiddenUsernames = ['Test','ABC'];
  formStatus: string;
  /*--------Reactive Forms block Ends----------*/

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenUsername.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      'ageData': new FormGroup({
        'age': new FormControl(null, Validators.required),
        'dob': new FormControl(null, Validators.required)
      }),
      'hobbies': new FormArray([]),
      'choiceR': new FormControl('Good')
    });



    //Subscribe to Form Observables
    this.signupForm.statusChanges.subscribe(
      (value) => {
        this.formStatus = value;
      }
    );
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
    console.log(this.signupForm);
    this.signupForm.reset({
      'username': '',
      'email': '',
      'ageData': {
        'age': '',
        'dob': '',
      },
      'hobbies': []
    });
  }

  onAddNewHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenUsername(control: FormControl): { [s: string]:boolean }{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return { 'isNameForbidden': true}
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable <any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === "test@test.com"){
            resolve({'emailIsForbidden': true})
          }else{
            resolve(null);
          }
        } ,1500)
      }
    )
    return promise;
  }

}
