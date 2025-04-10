import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-carousel-image-section",
  templateUrl: "./carousel-image-section.component.html",
  styleUrls: ["./carousel-image-section.component.scss"],
})
export class CarouselImageSectionComponent implements OnInit {
  @Input() images = [];
  @Output() navigateClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  navigateToHomeIntro() {
    this.navigateClicked.emit(true);
  }
}
