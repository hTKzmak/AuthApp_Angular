import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  public dataForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
    console.log('build')
  }


  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    },
    )
  }

  public onSubmit(): void {
    // // получаем значения dataForm
    // console.log(this.dataForm.value)
    // // получаем проверку dataForm
    // console.log(this.dataForm.valid)
    // // получаем статус dataForm
    // console.log(this.dataForm.status)


    console.log(this.dataForm.valid, this.dataForm.value )
  }
}
