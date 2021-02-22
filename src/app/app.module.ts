import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { PdfViewerModule } from "ng2-pdf-viewer";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ContactComponent } from "./contact/contact.component";
import { PricesComponent } from "./prices/prices.component";
import { FooterComponent } from "./reused-elements/footer/footer.component";
import { HeaderComponent } from "./reused-elements/header/header.component";
import { NavbarComponent } from "./reused-elements/navbar/navbar.component";
import { TattooComponent } from "./tattoo/tattoo.component";
import { PiercingComponent } from "./piercing/piercing.component";
import { DermographyComponent } from "./dermography/dermography.component";
import { HygieneComponent } from "./hygiene/hygiene.component";
import { CreationsComponent } from "./creations/creations.component";
import { HygienepiercingComponent } from "./hygiene/hygienepiercing/hygienepiercing.component";
import { FreehandPiercingComponent } from "./piercing/freehand-piercing/freehand-piercing.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/accueil",
    pathMatch: "full",
  },
  { path: "contact", component: ContactComponent },
  { path: "tarifs", component: PricesComponent },
  { path: "tattoo", component: TattooComponent },
  { path: "accueil", component: HomepageComponent },
  { path: "piercing", component: PiercingComponent },
  { path: "dermographie", component: DermographyComponent },
  { path: "hygiene", component: HygieneComponent },
  { path: "creations", component: CreationsComponent },
  { path: "hygienepiercing", component: HygienepiercingComponent },
  { path: "freehand", component: FreehandPiercingComponent },
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
    PiercingComponent,
    DermographyComponent,
    HygieneComponent,
    CreationsComponent,
    HygienepiercingComponent,
    FreehandPiercingComponent,
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
