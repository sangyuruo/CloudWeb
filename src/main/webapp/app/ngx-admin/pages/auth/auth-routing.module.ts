import {NgxAuthComponent} from "./auth.component";
import {NgxLoginComponent} from "./login/login.component";
import {NgxRegisterComponent} from "./register/register.component";
import {NgxLogoutComponent} from "./logout/logout.component";
import {NgxRequestPasswordComponent} from "./request-password/request-password.component";
import {NgxResetPasswordComponent} from "./reset-password/reset-password.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";




const routes: Routes = [
  {
    path: 'auth',
    component: NgxAuthComponent,
    children: [
      {
        path: '',
        component: NgxLoginComponent,
      },
      {
        path: 'login',
        component: NgxLoginComponent,
      },
      {
        path: 'register',
        component: NgxRegisterComponent,
      },
      {
        path: 'logout',
        component: NgxLogoutComponent,
      },
      {
        path: 'request-password',
        component: NgxRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NgxResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AuthRoutingModule { }

export const routedComponents = [
    NgxAuthComponent,
    NgxLoginComponent,
    NgxRegisterComponent,
    NgxLogoutComponent,
    NgxRequestPasswordComponent,
    NgxResetPasswordComponent,
];
