import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent implements OnInit {

  public dataForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
    console.log('build')
  }


  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/), Validators.minLength(8)]],
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
