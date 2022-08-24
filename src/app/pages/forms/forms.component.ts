import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Genders {
  id: number;
  value: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  defaultCourse: string = 'HTML';
  username = '';

  genders: Genders[] = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  ];

  defaultGender: string = 'Male';
  submitted: boolean = false;

  formData = {
    username: '',
    email: '',
    course: '',
    gender: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // console.log(form);
    this.submitted = true;
    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;

    form.reset();
  }
}
