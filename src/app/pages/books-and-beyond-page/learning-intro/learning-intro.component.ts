import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-learning-intro",
  templateUrl: "./learning-intro.component.html",
  styleUrls: ["./learning-intro.component.scss"],
})
export class LearningIntroComponent implements OnInit {
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() contentList = [];

  constructor() {}

  ngOnInit() {}
}
