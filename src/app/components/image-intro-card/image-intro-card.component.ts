import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image-intro-card",
  templateUrl: "./image-intro-card.component.html",
  styleUrls: ["./image-intro-card.component.scss"],
})
export class ImageIntroCardComponent implements OnInit {
  @Input() imgSrc: string = "";
  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() content: string = "";

  constructor() {}

  ngOnInit() {}
}
