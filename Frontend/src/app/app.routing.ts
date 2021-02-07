import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginComponent } from "./login/login.component";
import { AccountModule } from "./login/login.module";
import { AuthGuard } from "./login/_helpers";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
    
  },
  
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate : [AuthGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "home",
    canActivate : [AuthGuard]
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AccountModule,
    RouterModule.forRoot(routes, {
      useHash: false, // se falso non appare più # nell'url
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
