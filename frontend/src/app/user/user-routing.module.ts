import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
