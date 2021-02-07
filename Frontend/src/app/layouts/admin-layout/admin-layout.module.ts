import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { GeneratorComponent } from "../../generator/generator.component";
import { HomeComponent } from "app/home/home.component";
import { AssorbitoreComponent } from "app/assorbitore/assorbitore.component";
import { InProgressComponent } from "app/in-progress/in-progress.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
  ],
  declarations: [
    
    AssorbitoreComponent,
    GeneratorComponent,
    InProgressComponent,
    HomeComponent
  ],
})
export class AdminLayoutModule {}
