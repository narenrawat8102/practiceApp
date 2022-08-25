import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  myReactiveForm: FormGroup | any;

  notAllowedNames = ['uxTrendz', 'Narender'];

  genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      // To create new form group to put username and email in a separate object
      userDetails: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.namesNotAllowed.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.notAllowedEmails
        ),
      }),
      // Individual form controls
      course: new FormControl('Angular'),
      gender: new FormControl('Male'),
      // Form Array
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }

  onAddSkills() {
    this.myReactiveForm
      .get('skills')
      .push(new FormControl(null, Validators.required));
  }

  onSubmit() {
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset();
  }

  // Custom Validators to apply on username input
  namesNotAllowed(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { nameIsNotAllowed: true };
    }
    return null;
  }

  // Async Validator to be applied on email input
  notAllowedEmails(control: AbstractControl): Promise<any> | Observable<any> {
    const myResponse = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'rawat.narendra87@gmail.com') {
          resolve({ emailNotAllowed: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return myResponse;
  }
}
