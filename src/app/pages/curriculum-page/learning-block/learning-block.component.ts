import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-learning-block",
  templateUrl: "./learning-block.component.html",
  styleUrls: ["./learning-block.component.scss"],
})
export class LearningBlockComponent implements OnInit {
  @Input() heading: string = "";
  @Input() text: string = "";
  @Input() color: string = "black";
  @Input() bulletPoints = [];

  constructor() {}

  ngOnInit() {}

  getColor() {
    return this.color;
  }
}
