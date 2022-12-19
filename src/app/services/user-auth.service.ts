import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginUser, IRegister ,Ilogin} from '../interface/user-auth/user-auth';
import {  Observable} from 'rxjs';
import { Router } from '@angular/router';

import { IUserList } from '../interface/user-auth/userList';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  apiURL = environment.API_URL;

  constructor(private http: HttpClient,private router:Router) { }

  /** 
   * @Name registerUser
   * @Description register user http_service method
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  registerUser(user: IRegister):Observable<IRegister[]> {
    console.log('user Service', user);
     return this.http.post<IRegister[]>(`${this.apiURL}/registeruser`,user);
  }

  /** 
   * @Name loginUser
   * @Description login user http_service method
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  loginUser(user:Ilogin):Observable<{ id: string;username:string;email:string; password:string }>{
     console.log("login user",user);
     return this.http.post<{ id: string;username:string;email:string; password:string }>(`${this.apiURL}/login`,user);
  }

  /** 
   * @Name getAllUser
   * @Description  All userList http_service method
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  getAllUser(p:number,limit:number):Observable<IUserList>{
     return this.http.get<IUserList>(`${this.apiURL}/mno?p=${p}&limit=${limit}`);
  }
  
  /** 
   * @Name gettoken
   * @Description  get authentication token from localstorage
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  getToken() {
    return localStorage.getItem('access_token');
  }
  
  /** 
   * @Name isLoggedIn
   * @Description  check the user ls LoggedIn or not
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  get isLoggedIn() {
    let authToken:string | null = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  
  /** 
   * @Name doLogout
   * @Description  user Logout to remove token and redirection
   * @Author Dharmesh
   * @createdAt 19/12/2022
   * @updatedAt 19/12/2022
   */
  doLogout() {
    localStorage.removeItem('username')
    let removeToken:void = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/auth/login']);
    }
  }

  


}
