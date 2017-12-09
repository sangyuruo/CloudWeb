import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NgxAuthModule} from "./pages/auth/auth.module";


const routes: Routes = [
  {
    path: 'pages', loadChildren: () => new Promise(resolve => {(require as any).ensure([], require => {resolve(require('./pages/pages.module').PagesModule); }) })
  },
    /*{ path: '', redirectTo: 'auth/login', pathMatch: 'full' },*///浏览器页面加载后跳转到登入页面
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule,

      //添加auth
      NgxAuthModule,
  ],
})
export class AppRoutingModule {
}
