import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-piercing",
  templateUrl: "./piercing.component.html",
  styleUrls: ["./piercing.component.scss"],
})
export class PiercingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
