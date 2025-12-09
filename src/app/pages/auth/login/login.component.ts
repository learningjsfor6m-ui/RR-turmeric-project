import { Component, signal } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../shared/user';
import { Router } from '@angular/router';
// import { form, required, email as emailValidator, minLength } from '@angular/forms/signals'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // template driven
  loginform: User = {
    email: '',
    password: '',
  };
  isSubmitted: boolean = false;

  // Reactive
  loginFormReactive!: FormGroup;


  // Signals
  loginModel = signal<User>({ email: '', password: '' });
  // loginFormSignal = form()

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginFormReactive = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      //^(?=.*[a-z])(?=.*[A-Z])(?=.*[@/!]).{8,}$
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[@/!]).{8,}$'),
        ],
      ],
    });

    //  this.loginFormReactive = new FormGroup({
    //   // Create form controls
    //   username: new FormControl('', [Validators.required, Validators.minLength(5)]), // Add validators
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    // });
  }
  // Using Tempalte Driven form
  login() {
    let creds: User = {
      email: this.loginform.email,
      password: this.loginform.password,
    };
    this.loginCentre(creds);
  }

  // Using Reactive form
  submitReactiveForm() {
    this.isSubmitted = true;
    if (this.loginFormReactive.invalid) {
      return;
    }
    let creds: User = {
      email: this.loginFormReactive.value.email,
      password: this.loginFormReactive.value.password,
    };
    this.loginCentre(creds);
  }

  // Using Signals
  submitSignalForm(){

  }


  loginCentre(value: User) {
    let creds: User = value;
    this.auth.login(creds).subscribe((res: any) => {
      console.log(res);
      if (res) {
        this.router.navigateByUrl('/layout');
      }
    });
  }
  get emailControl() {
    return this.loginFormReactive.get('email');
  }
  get passwordControl() {
    return this.loginFormReactive.get('password');
  }
}
