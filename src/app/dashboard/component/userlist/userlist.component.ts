import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppUserState } from 'src/app/app.state';
import { IUser } from 'src/app/store/models/user.model';
import * as userActions from '../../../store/actions/user.actions';
import * as fromUser from '../../../store/selectors/user.selectors';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  // Section 1
  users: IUser[] | undefined;
  constructor(private store:Store<AppUserState>) { }

  ngOnInit(): void {
     //this.users = this.store.select((store)=>store.userData);
  
     this.store.dispatch(new userActions.LoadUsers()); // action dispatch
     // after action disptach select user state below
     this.store.pipe(select(fromUser.getUsers)).subscribe(
      users => {
         console.log("effect",users);
          this.users = users;
      }
    )
  }

}
