import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppLoggedUser } from 'src/app/app.state';
import * as LoggedUser from '../../../store/selectors/userlogin.selectors'

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {
   userloggedName="";
  constructor(private store:Store<AppLoggedUser>) { }

  ngOnInit(): void {

    this.store.pipe(select(LoggedUser.getLoggedUserData)).subscribe({
      next:(res)=>{
         console.log("aaa",res);
         this.userloggedName = res.username;
      }
    })
  }

}
