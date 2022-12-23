import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Tutorial } from 'src/app/store/models/tutorial.model';
import * as TutorialActions from '../../../../../store/actions/tutorial.actions'

@Component({
  selector: 'app-list-tutorial',
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})
export class ListTutorialComponent implements OnInit {
 // Section 1
tutorials: Observable<Tutorial[]> | undefined;
  constructor(private store:Store<AppState>) { }
  
  ngOnInit(): void {
    //this.tutorials = this.store.select('tutorialData');   // access tutorial store
    this.tutorials = this.store.select((store) => store.tutorialData);
    
  }

  deleteTutorial(index:number){
    console.log(index)
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) );
}

}
