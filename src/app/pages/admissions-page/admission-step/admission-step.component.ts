import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-admission-step",
  templateUrl: "./admission-step.component.html",
  styleUrls: ["./admission-step.component.scss"],
})
export class AdmissionStepComponent implements OnInit {
  @Input() step: number = 1;
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() bulletList = [];
  @Input() backgroundColor = "pink";

  constructor() {}

  ngOnInit() {}

  getColor() {
    return this.backgroundColor == "pink" ? "#f9f6f1" : "#fff";
  }
}
