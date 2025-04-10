import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-carousel-info-card",
  templateUrl: "./carousel-info-card.component.html",
  styleUrls: ["./carousel-info-card.component.scss"],
})
export class CarouselInfoCardComponent implements OnInit {
  @Input() imgSrc = "";
  @Input() title = "";
  @Input() content = "";
  @Input() ageInterval = "";
  @Input() routePath = "";

  constructor() {}

  ngOnInit() {}
}
