import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-section",
  templateUrl: "./image-section.component.html",
  styleUrls: ["./image-section.component.scss"],
})
export class ImageSectionComponent implements OnInit {
  @Input() image: "";

  constructor() {}

  ngOnInit() {}
}
