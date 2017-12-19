import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NbAuthModule} from "./@nebular/auth/auth.module";



const routes: Routes = [
  {
    path: 'lists', loadChildren: () => new Promise(resolve => {(require as any).ensure([], require => {resolve(require('./lists/lists.module').ListsModule); }) })
  },
    {
        path: 'pages', loadChildren: () => new Promise(resolve => {(require as any).ensure([], require => {resolve(require('./pages/pages.module').PagesModule); }) })
    },

    { path: '', redirectTo: 'auth/login', pathMatch : 'full' }, //浏览器页面加载后跳转到登入页面
    { path: '**', redirectTo: 'auth/login'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule,NbAuthModule],
})
export class AppRoutingModule {
}
