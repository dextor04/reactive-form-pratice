import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { noSpaceAllowed } from './validators/noSpaceAllowed.validator';
import { customValidators } from './validators/noSpaceAllowed.validator';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'reactive-form-angular';
  reactiveForm: FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        customValidators.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        customValidators.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(
        null,
        Validators.required,
        customValidators.checkUserName
      ),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postalCode: new FormControl(null, Validators.required),
      }),

      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([
        // new FormGroup({
        //   company: new FormControl(null),
        //   position: new FormControl(null),
        //   totalExp: new FormControl(null),
        //   start: new FormControl(null),
        //   end: new FormControl(null),
        // }),
      ]),
    });
  }
  OnformSubmitted() {
    console.log(this.reactiveForm);
    //
    console.log('form submitted');
  }
  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }
  deleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
  addExp() {
    const frmgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }
  deleteExp(index: number) {
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }
}
