import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyesIcon: string = "bi-eye-slash-fill";
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hideShow(): void {
    this.isText = !this.isText;
    this.isText ? this.eyesIcon = "bi-eye-fill" : this.eyesIcon = "bi-eye-slash-fill";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res: any) => {
            this.toast.success({ detail: "Success", summary: res.message, duration: 3000 });
            this.loginForm.reset();
            this.auth.setToken(res.Token);
            this.router.navigate(['Home']);
          },
          error: (err: any) => {
            this.toast.error({ detail: "ERROR", summary: "Something went Wrong!", duration: 3000 });
          }
        });
    } else {
      this.toast.error({ detail: "ERROR", summary: "Form is invalid!", duration: 3000 });
    }
  }
}
