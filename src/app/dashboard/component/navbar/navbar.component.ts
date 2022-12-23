import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ApplyTheme: boolean = false;
  userName: string | null = '';
  constructor(private userAuth:UserAuthService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
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
