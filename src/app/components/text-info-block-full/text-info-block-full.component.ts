import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-text-info-block-full",
  templateUrl: "./text-info-block-full.component.html",
  styleUrls: ["./text-info-block-full.component.scss"],
})
export class TextInfoBlockFullComponent implements OnInit {
  @Input() title: string = "";
  @Input() text: string = "";

  constructor() {}

  ngOnInit() {}
}
