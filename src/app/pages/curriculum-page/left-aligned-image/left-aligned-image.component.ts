import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-left-aligned-image",
  templateUrl: "./left-aligned-image.component.html",
  styleUrls: ["./left-aligned-image.component.scss"],
})
export class LeftAlignedImageComponent implements OnInit {
  @Input() imgSrc = "";
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() listItems = [];
  @Input() listLinks = [];

  constructor() {}

  ngOnInit() {}
}
