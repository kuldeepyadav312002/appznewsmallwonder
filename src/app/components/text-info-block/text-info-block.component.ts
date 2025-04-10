import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-text-info-block",
  templateUrl: "./text-info-block.component.html",
  styleUrls: ["./text-info-block.component.scss"],
})
export class TextInfoBlockComponent implements OnInit {
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() additionalText: string = "";

  constructor() {}

  ngOnInit() {}
}
