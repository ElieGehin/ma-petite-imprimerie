import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "src/app/homepage/homepage.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { PricesComponent } from "src/app/prices/prices.component";
import { TattooComponent } from "src/app/tattoo/tattoo.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
