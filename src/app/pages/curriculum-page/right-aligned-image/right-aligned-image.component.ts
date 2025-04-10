import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-right-aligned-image",
  templateUrl: "./right-aligned-image.component.html",
  styleUrls: ["./right-aligned-image.component.scss"],
})
export class RightAlignedImageComponent implements OnInit {
  @Input() imgSrc = "";
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() listItems = [];

  constructor() {}

  ngOnInit() {}
}
