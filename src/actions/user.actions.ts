// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { User } from '../interface/user.model';

// Section 2
export const ADD_USER       = '[USER] Add'
export const REMOVE_USER    = '[USER] Remove'
export const GET_USER    = '[USER] Get'
export const LOAD_USER    = '[USER] Load'
export const LOAD_USER_FAIL = '[USER] Fail'
// Section 3
export class AddUser implements Action {
    readonly type = ADD_USER

    constructor(public payload: User) {}
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER

    constructor(public payload: number) {}
}

export class GetUser implements Action {
    readonly type = GET_USER

   // constructor(public payload: User[]) {}
}

export class LoadUserSuccess implements Action {
    readonly type = LOAD_USER;
  
    constructor(public payload: User[]) {}
  }
  export class LoadUserFail implements Action {
    readonly type = LOAD_USER_FAIL;
  
    constructor(public payload: string) {}
  }
  
// Section 4
export type Actions = AddUser | RemoveUser | GetUser | LoadUserSuccess | LoadUserFail