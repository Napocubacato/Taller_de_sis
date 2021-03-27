import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './ui/alert/alert.component';

import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';


@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AlertService
  ],
  exports: [AlertComponent]
})
export class CoreModule { }
