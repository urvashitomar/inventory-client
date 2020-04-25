import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UpdateDetailsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientTestingModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
