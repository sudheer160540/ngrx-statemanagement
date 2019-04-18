import { Injectable }                 from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";

import {AppState} from '../app.state';
import {User} from '../interface/user.model';
import {CustomerService} from '../app/app.services';

import { Store }                      from '@ngrx/store';

import * as reducer from '../reducer/user.reducer';
import * as postActions  from '../actions/user.actions';

import { Observable,of }   from 'rxjs';
type Action = postActions.Actions;

@Injectable()
export class PostsFacade {
    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) { }

    @Effect()
    loadCustomers$: Observable<Action> = this.actions$.pipe(
      ofType<postActions.GetUser>(
        postActions.GET_USER
      ),
      mergeMap((action: postActions.GetUser) =>
        this.customerService.getUser().pipe(
          map(
            (customers: User[]) =>
              new postActions.LoadUserSuccess(customers)
          ),
          catchError(err => of(new postActions.LoadUserFail(err)))
        )
      )
    );
  
}