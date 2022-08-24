import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  myReactiveForm: FormGroup | any;

  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      // To create new form group to put username and email in a separate object
      userDetails: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      // Individual form controls
      course: new FormControl('Angular'),
      gender: new FormControl('Male'),
      // Form Array
      skills: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
      ]),
    });
  }

  onAddSkills() {
    this.myReactiveForm
      .get('skills')
      .push(new FormControl(null, Validators.required));
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }
}
