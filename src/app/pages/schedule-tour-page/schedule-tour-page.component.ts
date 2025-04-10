import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule-tour-page",
  templateUrl: "./schedule-tour-page.component.html",
  styleUrls: ["./schedule-tour-page.component.scss"],
})
export class ScheduleTourPageComponent implements OnInit {
  title: string = "Schedule a tour";
  bgImage: string = "/assets/image/activities.png";
  locationExploreTitle: string = "Pick your Location";

  locationList = [
    {
      title: "Small Wonders Kindergarten",
      content: ``,
      addHeader: "Model Town",
      address: "L-301, Model Town, Panipat",
      phone: "+91 9050417272",
      email: "smallwonders2002@gmail.com",
    },
    {
      title: "Small Wonders World School",
      content: ``,
      addHeader: "TDI City",
      address: "B block, TDI City sector 39",
      phone: "+91 7027401201",
      email: "smallwonderstdi@gmail.com",
    },
    {
      title: "Small Wonders Ikigai",
      content: ``,
      addHeader: "Yamuna Enclave",
      address: "Yamuna Enclave",
      phone: "+91 7027401210",
      email: "smallwonders2002@gmail.com",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
