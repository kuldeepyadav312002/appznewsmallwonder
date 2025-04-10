import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class OverlayComponent implements OnInit {
  @Input() show: boolean = false;
  title: any;

  constructor() {}

  ngOnInit() {}

  showModal() {
    this.show = true;
  }

  handleClose() {
    this.show = false;
  }
}
