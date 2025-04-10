import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-text-info-block",
  templateUrl: "./image-text-info-block.component.html",
  styleUrls: ["./image-text-info-block.component.scss"],
})
export class ImageTextInfoBlockComponent implements OnInit {
  @Input() title: string = "";
  @Input() imgSrc: string = "";
  @Input() text: string = "";

  constructor() {}

  ngOnInit() {}
}
