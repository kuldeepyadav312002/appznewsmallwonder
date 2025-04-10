import { Component, OnInit, Input } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-more-to-explore",
  templateUrl: "./more-to-explore.component.html",
  styleUrls: ["./more-to-explore.component.scss"],
})
export class MoreToExploreComponent implements OnInit {
  @Input() imageList = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToImageLink(link: string) {
    this.router.navigateByUrl(link);
  }
}
