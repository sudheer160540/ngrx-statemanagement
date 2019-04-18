import { Action } from '@ngrx/store'
import { User } from '../interface/user.model';
import * as UserActions from '../actions/user.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as fromRoot from '../app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface UserState extends EntityState<User> {
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
  }
// const initialState:User={
//      name:'Sudheer Nunna',
//      url:'www.google.com'
// }

export interface AppState extends fromRoot.AppState {
    customers: UserState;
  }

export const customerAdapter: EntityAdapter<User> = createEntityAdapter<
  User
>();
export const defaultUser: UserState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: null
  };
  export const initialState = customerAdapter.getInitialState(defaultUser);

export function reducer( state = initialState,
    action: UserActions.Actions):UserState{

    switch(action.type){
       case UserActions.LOAD_USER:
       return customerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });

       default:
       return state;
    }
}


const getUserFeatureState = createFeatureSelector<UserState>(
    "customers"
  );
  
  export const getUser = createSelector(
    getUserFeatureState,
    customerAdapter.getSelectors().selectAll
  );

  export const getError = createSelector(
    getUserFeatureState,
    (state: UserState) => state.error
  );