import { HomeComponent } from './../user/pages/home/home.component';
import { PendingSalesComponent } from './pages/pending-sales/pending-sales.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'item-add', component: ItemAddComponent },
    { path: 'item-list', component: ItemListComponent },
    { path: 'pending-sales', component: PendingSalesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouterModule { }
