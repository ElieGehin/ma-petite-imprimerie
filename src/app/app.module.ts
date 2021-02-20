import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ContactComponent } from "./contact/contact.component";
import { PricesComponent } from "./prices/prices.component";
import { FooterComponent } from "./reused-elements/footer/footer.component";
import { HeaderComponent } from "./reused-elements/header/header.component";
import { NavbarComponent } from "./reused-elements/navbar/navbar.component";
import { TattooComponent } from "./tattoo/tattoo.component";

const routes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "tarifs", component: PricesComponent },
  { path: "tattoo", component: TattooComponent },
  { path: "accueil", component: HomepageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    PricesComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TattooComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
