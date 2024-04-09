import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  public dataForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
    console.log('build')
  }


  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/), Validators.minLength(8)]],
      secondPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/), Validators.minLength(8)]],
    }, {
      validator: this.checkPassword
    })
  }

  public checkPassword(group: FormGroup) {
    const password = group.get('password')?.value
    const secondPassword = group.get('secondPassword')?.value
    return password === secondPassword ? null : { passValidate: false }
  }


  public onSubmit(): void {
    // // получаем значения dataForm
    // console.log(this.dataForm.value)
    // // получаем проверку dataForm
    // console.log(this.dataForm.valid)
    // // получаем статус dataForm
    // console.log(this.dataForm.status)

    console.log(this.dataForm.valid, this.dataForm.value)
  }
}
