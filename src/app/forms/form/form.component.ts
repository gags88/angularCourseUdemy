import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  answer: string = "";

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(data: NgForm){
    console.log(data.value);
  }

}
