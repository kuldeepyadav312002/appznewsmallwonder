import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-explore-section",
  templateUrl: "./explore-section.component.html",
  styleUrls: ["./explore-section.component.scss"],
})
export class ExploreSectionComponent implements OnInit {
  text1: string = "Lorem Ipsum";
  paraText: string = 'Mark Twain said "Twenty years from now you will be more disappointed by the things yo did not do than by the ones you did. So throw off the bowlines, sail away from the safe harbor. Catch the trade winds in your sail".'

  constructor() {}

  ngOnInit() {}
}
