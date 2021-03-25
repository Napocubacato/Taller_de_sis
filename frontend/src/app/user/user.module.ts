import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';



@NgModule({
  declarations: [UserComponent, HomeComponent, SearchResultsComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MDBBootstrapModule,
  ]
})
export class UserModule { }
