import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Ilogin, ILoginUser } from 'src/app/interface/user-auth/user-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginUser: { id: string; username: string; email: string; password: string } =
    {
      id: '',
      username: '',
      email: '',
      password: '',
    };

  constructor(
    private toaster: ToastrService,
    private fb: FormBuilder,
    private userAuth: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  LoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(12)],
    ],
  });
  get f() {
    return this.LoginForm.controls;
  }

  /**
   * @Name login
   * @Description user login method
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  Login() {
    this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
    }

    console.log('login', this.LoginForm.value);
    this.userAuth.loginUser(this.LoginForm.value as Ilogin).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', '123456'); //set token
        this.loginUser = response;
        localStorage.setItem('username', this.loginUser.username); //set username

        this.toaster.success('login success', 'Admin', {
          progressBar: true,
          closeButton: true,
          timeOut: 3000,
        });
        setTimeout(() => {
          this.router.navigate(['/dashboard'], { state: this.loginUser });
        }, 1000);
        this.submitted = false;
      },
      error: (err) => {
        console.log(err.message);
        this.toaster.error('user not found !!!', 'Admin', {
          progressBar: true,
          closeButton: true,
          timeOut: 3000,
        });
        this.submitted = false;
      },
      complete: () => {
        console.log('login completed');
      },
    });
  }
}
