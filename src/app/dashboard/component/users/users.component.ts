import { Component, OnInit } from '@angular/core';
import { ILoginUser } from 'src/app/interface/user-auth/user-auth';
import { IUserList } from 'src/app/interface/user-auth/userList';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUser: ILoginUser[] = [];

  // Pagination parameters.
  p: number = 1;
  total: number = 0;
  limit: number = 3;

  constructor(private userAuth : UserAuthService) { }

  ngOnInit(): void {
    this.AllUserlist();
  }

    /**
   * @Name AllUserlist
   * @description
   * @Author Dharmesh
   * @createdDate 19/12/2022
   * @updateDate  19/12/2022
   */
     AllUserlist() {
      this.userAuth.getAllUser(this.p, this.limit).subscribe({
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
   * @Name ngx-pagination event here
   * @Author dharmesh
   */
  pageChangeEvent(event: number) {
    this.p = event;
    this.AllUserlist();
  }
}
