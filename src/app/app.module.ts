import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule, Actions } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostsFacade} from '../effects/user.effects'
import {StoreModule} from '@ngrx/store';
import {CustomerService} from "./app.services";
import {reducer} from '../reducer/user.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature("customers", reducer),
    EffectsModule.forFeature([PostsFacade]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
