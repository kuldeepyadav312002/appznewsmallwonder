import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-card-section",
  templateUrl: "./image-card-section.component.html",
  styleUrls: ["./image-card-section.component.scss"],
})
export class ImageCardSectionComponent implements OnInit {
  @Input() image: "";
  @Input() title: "";
  @Input() text: "";

  constructor() {}

  ngOnInit() {}
}
