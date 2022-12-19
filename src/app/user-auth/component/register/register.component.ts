import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import { IRegister } from 'src/app/interface/user-auth/user-auth';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  title = 'Create an account';
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userAuth: UserAuthService,
    private toaster:ToastrService,
    private router:Router
  ) {}

  ngOnInit(): void {}

  RegisterForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });

  get f() {
    return this.RegisterForm.controls;
  }

 /** 
   * @Name register
   * @Description user register method 
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.RegisterForm.invalid) {
      return;
    }
    console.log('user component', this.RegisterForm.value);
    this.userAuth.registerUser(this.RegisterForm.value as IRegister).subscribe({
      next: (response) => {
        console.log('succfess', response);
        this.toaster.success("register succesfully","Admin",{
          progressBar:true,
          closeButton:true,
          timeOut: 3000
        })
        this.submitted = false;
        setTimeout(() => {
          this.router.navigate(['/']);
      }, 3000);  //3s
      },
      error: (err) => {
        console.log(err);
        this.toaster.error(err.message,"Admin",{
          progressBar:true,
          closeButton:true,
          timeOut:3000
        });
        this.submitted = false;
      },
      complete: () => {
        console.log('user Register succesfuly');
      },
    });
  }
}
