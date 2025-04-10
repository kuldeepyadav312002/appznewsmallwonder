import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-carousel-info-card-event",
  templateUrl: "./carousel-info-card-event.component.html",
  styleUrls: ["./carousel-info-card-event.component.scss"],
})
export class CarouselInfoCardEventComponent implements OnInit {
  @Input() title = "";
  @Input() content = "";
  @Input() date = "";
  @Input() numComments: number = 0;
  @Input() imgSrc = "";

  constructor() {}

  ngOnInit() {}
}
