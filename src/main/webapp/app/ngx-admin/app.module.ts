/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import '../vendor.ts';
import './typings.d.ts';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//添加
import {NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken, NbEmailPassAuthProvider} from '@nebular/auth';
import {NgxAuthModule} from "./pages/auth/auth.module";
import {ApiService} from "./app.service";


/*const formSetting: any = {
    redirectDelay: 0,
    showMessages: {
        success: true,
    },
};*/

@NgModule({
  declarations: [AppComponent],
    //添加auth
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,


    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

      //添加
      NgxAuthModule.forRoot({
          providers: {
              email: {
                  service: NbEmailPassAuthProvider,
                  config: {
                      baseEndpoint: '',
                      login: {
                          rememberMe: true,
                          endpoint: '/auth/login',
                          method: 'post',
                          redirect: {
                              success: '/lists',
                              failure: null,
                          },
                          errors: ['Login/Email combination is not correct, please try again.'],
                          messages: ['successfully logged in.'],
                      },
                      register: {
                          alwaysFail: false,
                          rememberMe: true,
                          endpoint: 'emclouduaa/api/register',
                          method: 'post',
                          redirect: {
                              success: '/auth/login',
                              failure: null,
                          },
                          errors: ['Something went wrong, please try again.'],
                          messages: ['You have been successfully registered.'],
                      },
                      logout: {
                          alwaysFail: false,
                          endpoint: '/auth/logout',
                          method: 'delete',
                          redirect: {
                              success: '/auth/login',
                              failure: null,
                          },
                          defaultErrors: ['Something went wrong, please try again.'],
                          messages: ['You have been successfully logged out.'],
                      },
                      requestPass: {
                          endpoint: '/auth/request-pass',
                          method: 'post',
                          redirect: {
                              success: '/',
                              failure: null,
                          },
                          errors: ['Something went wrong, please try again.'],
                          messages: ['Reset password instructions have been sent to your email.'],
                      },
                      resetPass: {
                          endpoint: '/auth/reset-pass',
                          method: 'post',
                          redirect: {
                              success: '/',
                              failure: null,
                          },
                          resetPasswordTokenKey: 'reset_password_token',
                          errors: ['Something went wrong, please try again.'],
                          messages: ['Your password has been successfully changed.'],
                      },
                      /*token: {
                          key: 'data.token',
                          getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
                              this.getConfigValue('token.key')),
                      },
                      errors: {
                          key: 'data.errors',
                          getter: (module: string, res: HttpErrorResponse) => getDeepFromObject(res.error,
                              this.getConfigValue('errors.key'),
                              this.getConfigValue(`${module}.defaultErrors`)),
                      },
                      messages: {
                          key: 'data.messages',
                          getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
                              this.getConfigValue('messages.key'),
                              this.getConfigValue(`${module}.defaultMessages`)),
                      },
*/
                  },
              },
          },
          /*forms: {
              login: formSetting,
              register: formSetting,
              requestPassword: formSetting,
              resetPassword: formSetting,
              logout: {
                  redirectDelay: 0,
              },
          },*/
      }),
  ],
  bootstrap: [AppComponent],
  providers: [
      ApiService,
    { provide: APP_BASE_HREF, useValue: '/' },
      //添加
      { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
  ],
})
export class EmCloudWebNgxAppModule {

}
