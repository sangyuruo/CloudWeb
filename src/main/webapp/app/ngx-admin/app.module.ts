import '../vendor.ts';
import './typings.d.ts';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//添加
import { NB_AUTH_TOKEN_WRAPPER_TOKEN, NbAuthJWTToken } from './@nebular/auth';
import {NbAuthModule} from "./@nebular/auth/auth.module";
import {NbEmailPassAuthProvider} from "./@nebular/auth/providers/email-pass-auth.provider";
import {ApiService} from "./app.service";


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        AppRoutingModule,

        NgbModule.forRoot(),
        ThemeModule.forRoot(),
        CoreModule.forRoot(),

        //添加
        NbAuthModule.forRoot({
            providers: {
                email: {
                    service: NbEmailPassAuthProvider,
                },
            },
        }),
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        //添加
        ApiService,
        { provide: NB_AUTH_TOKEN_WRAPPER_TOKEN, useClass: NbAuthJWTToken },
    ],
})
export class EmCloudWebNgxAppModule {

}

