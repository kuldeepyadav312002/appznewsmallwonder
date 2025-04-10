import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-right-text-info-block",
  templateUrl: "./image-right-text-info-block.component.html",
  styleUrls: ["./image-right-text-info-block.component.scss"],
})
export class ImageRightTextInfoBlockComponent implements OnInit {
  @Input() title1: string = "";
  @Input() title2: string = "";
  @Input() imgSrc: string = "";
  @Input() text: string = "";

  constructor() {}

  ngOnInit() {}
}
