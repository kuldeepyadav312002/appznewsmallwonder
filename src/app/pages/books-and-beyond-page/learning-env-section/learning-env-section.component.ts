import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-learning-env-section",
  templateUrl: "./learning-env-section.component.html",
  styleUrls: ["./learning-env-section.component.scss"],
})
export class LearningEnvSectionComponent implements OnInit {
  @Input() title: string = "";
  @Input() contentList = [];

  constructor() {}

  ngOnInit() {}
}
