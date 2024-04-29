import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import ValidateForm from 'src/app/helper/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  type: string = "password";
  isText: boolean = false;
  eyesIcon: string = "bi-eye-slash-fill";
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthService,private router :Router) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSignup() {
    if (this.signupForm.valid) {
      //Send Object to Database

      this.auth.signUp(this.signupForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.signupForm.reset();
            this.router.navigate(['/login']);
            
          },
          error: (err) => {
            alert(err.error.message)
          }
        })
    }
    else {
      //Throw the error
      this.validateAllForms(this.signupForm);
      alert("Form is invalid")
    }
  }

  private validateAllForms(formGroup:FormGroup){
      Object.keys(formGroup.controls).forEach(field =>{
        const control =formGroup.get(field);
        if(control instanceof FormControl){
        control.markAsDirty({onlySelf :true})
        }else if(control instanceof FormGroup){
          ValidateForm.validateAllForms(control)
        }
      })
  }
  
  hideShow() {
    this.isText = !this.isText;
    this.isText ? this.eyesIcon = "bi-eye-fill" : this.eyesIcon = "bi-eye-slash-fill";
    this.isText ? this.type = "text" : this.type = "password";
  }

}
