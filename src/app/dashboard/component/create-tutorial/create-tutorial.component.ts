import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Tutorial } from 'src/app/store/models/tutorial.model';
import * as TutorialActions from '../../../store/actions/tutorial.actions'

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

constructor(
  private fb:FormBuilder,
  private store:Store) { }

ngOnInit(): void { }

//form object
TutorialForm = this.fb.group({
  name:['',[Validators.required]], 
  url:['',[Validators.required]]
})
 
get f(){
   return this.TutorialForm.controls;
}

addTutorial(){
  console.log(this.TutorialForm.value);
  this.store.dispatch(new TutorialActions.AddTutorial(this.TutorialForm.value as Tutorial));
}

}
