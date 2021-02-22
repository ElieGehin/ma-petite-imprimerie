import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "src/app/homepage/homepage.component";
import { ContactComponent } from "src/app/contact/contact.component";
import { PricesComponent } from "src/app/prices/prices.component";
import { TattooComponent } from "src/app/tattoo/tattoo.component";
import { PiercingComponent } from "src/app/piercing/piercing.component";
import { DermographyComponent } from "src/app/dermography/dermography.component";
import { HygieneComponent } from "src/app/hygiene/hygiene.component";
import { CreationsComponent } from "src/app/creations/creations.component";
import { HygienepiercingComponent } from "src/app/hygiene/hygienepiercing/hygienepiercing.component";
import { FreehandPiercingComponent } from "src/app/piercing/freehand-piercing/freehand-piercing.component";
import { PdfViewerComponent, PdfViewerModule } from "ng2-pdf-viewer";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
