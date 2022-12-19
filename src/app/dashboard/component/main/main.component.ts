import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { ILoginUser } from 'src/app/interface/user-auth/user-auth';
import { Location } from '@angular/common';
import {IUserList} from '../../../interface/user-auth/userList';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  ApplyTheme: boolean = false;
  allUser: ILoginUser[] = [];
  userName: string | null = '';

  // Pagination parameters.
  p: number = 1;
  total: number = 0;
  limit:number =3;

  constructor(private userAuth: UserAuthService) {}

  ngOnInit(): void {
    this.AllUserlist();
    this.userName = localStorage.getItem('username');
  }

  /**
   * @Name AllUserlist
   * @description 
   * @Author Dharmesh
   * @createdDate 19/12/2022
   * @updateDate  19/12/2022
   */
  AllUserlist() {
    this.userAuth.getAllUser(this.p,this.limit).subscribe({
      next: (res: IUserList) => {
        console.log(res);
        this.allUser = res.data;
        this.total = res.total;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('user fetch succesfully');
      },
    });
  }
  
  /**
   * Write code on Method
   *
   * @return response()
   */

  pageChangeEvent(event: number){
    this.p = event;
    this.AllUserlist();
}

  /** 
   * @Name changeThemeMode
   * @Description this is used for toggling the theme color
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  changeThemeMode(event: boolean) {
    this.ApplyTheme = event;
    console.log('value from parent cmp', this.ApplyTheme);
  }

  /** 
   * @Name logout
   * @Description user logout method
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  logout() {
    this.userAuth.doLogout();
  }


}
