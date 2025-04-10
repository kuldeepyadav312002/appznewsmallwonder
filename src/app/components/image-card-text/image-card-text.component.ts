import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-card-text",
  templateUrl: "./image-card-text.component.html",
  styleUrls: ["./image-card-text.component.scss"],
})
export class ImageCardTextComponent implements OnInit {
  @Input() image: "";
  @Input() title: "";
  @Input() content: "";

  constructor() {}

  ngOnInit() {}
}
