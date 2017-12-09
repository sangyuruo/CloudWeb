import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NbLayoutModule, NbCardModule, NbCheckboxModule } from '@nebular/theme';
import {
    defaultSettings, NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_OPTIONS_TOKEN, NB_AUTH_PROVIDERS_TOKEN,
    NB_AUTH_TOKEN_WRAPPER_TOKEN,
    NB_AUTH_USER_OPTIONS_TOKEN, NbAuthOptions,
    NbAuthService, NbAuthSimpleToken, NbDummyAuthProvider, NbEmailPassAuthProvider,
    NbTokenService
} from "@nebular/auth";
import {deepExtend} from "@nebular/auth/helpers";
import {routes} from "@nebular/auth/auth.routes";
import {NgxLoginComponent} from "./login/login.component";
import {NgxRegisterComponent} from "./register/register.component";
import {NgxRequestPasswordComponent} from "./request-password/request-password.component";
import {NgxResetPasswordComponent} from "./reset-password/reset-password.component";
import {NgxLogoutComponent} from "./logout/logout.component";
import {NgxAuthBlockComponent} from "./auth-block/auth-block.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {NgxAuthComponent} from "./auth.component";





export function nbAuthServiceFactory(config: any, tokenService: NbTokenService, injector: Injector) {
  const providers = config.providers || {};

  for (const key in providers) {
    if (providers.hasOwnProperty(key)) {
      const provider = providers[key];
      const object = injector.get(provider.service);
      object.setConfig(provider.config || {});
    }
  }

  return new NbAuthService(tokenService, injector, providers);
}

export function nbOptionsFactory(options) {
  return deepExtend(defaultSettings, options);
}

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbCheckboxModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
      //添加auth
      AuthRoutingModule,
  ],
  declarations: [
      NgxAuthComponent,
    NgxAuthBlockComponent,
    NgxLoginComponent,
    NgxRegisterComponent,
    NgxRequestPasswordComponent,
    NgxResetPasswordComponent,
    NgxLogoutComponent,
  ],
  exports: [
      NgxAuthBlockComponent,
      NgxLoginComponent,
      NgxRegisterComponent,
      NgxRequestPasswordComponent,
      NgxResetPasswordComponent,
      NgxResetPasswordComponent,
      NgxLogoutComponent,
  ],
})
export class NgxAuthModule {
  static forRoot(nbAuthOptions?: NbAuthOptions): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgxAuthModule,
      providers: [
        { provide: NB_AUTH_USER_OPTIONS_TOKEN, useValue: nbAuthOptions },
        { provide: NB_AUTH_OPTIONS_TOKEN, useFactory: nbOptionsFactory, deps: [NB_AUTH_USER_OPTIONS_TOKEN] },
        { provide: NB_AUTH_PROVIDERS_TOKEN, useValue: {} },
        { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthSimpleToken },
        { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
        {
          provide: NbAuthService,
          useFactory: nbAuthServiceFactory,
          deps: [NB_AUTH_OPTIONS_TOKEN, NbTokenService, Injector],
        },
        NbTokenService,
        NbDummyAuthProvider,
        NbEmailPassAuthProvider,
      ],
    };
  }
}
