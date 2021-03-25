import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswdComponent } from './pages/forgot-passwd/forgot-passwd.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-passwd', component: ForgotPasswdComponent },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
