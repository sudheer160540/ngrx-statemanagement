import { Component, OnInit } from '@angular/core';
import  {AppState} from '../app.state';
import { Observable } from 'rxjs';
import { User } from 'src/interface/user.model';

import * as reducer from '../reducer/user.reducer';
import * as postActions  from '../actions/user.actions';
import { Store, select } from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers$: Observable<User[]>;
  error$: Observable<String>;
  constructor(private store: Store<reducer.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new postActions.GetUser());
    this.customers$ = this.store.pipe(select(reducer.getUser));
    this.error$ = this.store.pipe(select(reducer.getError));
    console.log(this.customers$)
    
  }
}
