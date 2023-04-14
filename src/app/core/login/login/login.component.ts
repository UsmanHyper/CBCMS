import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  emailPattern = '^[A-Za-z0-9._-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$';
  startedClass = false;
  email: any;
  password: any;
  completedClass = false;
  preventAbuse = false;
  constructor(private titlePage: Title, private router: Router,
    private http: HttpClient,
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]],
      password: [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$')]],
      remember: [true],
    });
    this.checkFuntion();
    this.titlePage.setTitle('Sign-In');
  }
  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }

  checkFuntion() {
    this.password = this.validateForm.get('password');
    this.email = this.validateForm.get('email');
  }

  submitSignIn() {
    console.log(' the form ', this.validateForm.value);
    const body = {
      email: this.validateForm.controls['email'].value,
      password: this.validateForm.controls['password'].value,
    };

        // this.router.navigate(['/home']);
      
  }
}
