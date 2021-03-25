import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import { PendingSalesComponent } from './pages/pending-sales/pending-sales.component';
import { AdminRouterModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [AdminComponent, ItemListComponent, ItemAddComponent, PendingSalesComponent, HomeComponent],
  imports: [
    CommonModule,
    AdminRouterModule
  ]
})
export class AdminModule { }
