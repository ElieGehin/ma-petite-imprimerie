import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Url } from "url";

@Component({
  selector: "app-tattoo",
  templateUrl: "./tattoo.component.html",
  styleUrls: ["./tattoo.component.scss"],
})
export class TattooComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}

const urlPdf: any = "/src/app/assets/pdf/fiche_de_soins.pdf";
