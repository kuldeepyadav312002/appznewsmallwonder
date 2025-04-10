import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-extras",
  templateUrl: "./extras.component.html",
  styleUrls: ["./extras.component.scss"],
})
export class ExtrasComponent implements OnInit {
  imageList = [];

  visionText: string =`Young children have an immense capability to adapt and acquire learning skills that will benefit them in the future. Our vision is to design a free-flowing, non-restrictive learning environment inspiring young children to independently pursue their passion.`;

  missionText: string =`Our mission is to change the way education meets the future; to foster interdisciplinary, integrated thinking and innovative leadership; to engage fully in the global community; and to facilitate lifelong learning.`;

  mottoText: string =`We offer a safe, nurturing and stimulating environment in which this culture of “Connect, Create, Conquer” can flourish Wonderians to be adventurous as they learn and grow.`;

  text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  constructor() {}

  ngOnInit() {
    this.imageList = [
      {
        imageUrl: "/assets/img/more-explore-1.png",
        text: "Curriculum",
        link: '/curriculum'
      },
      {
        imageUrl: "/assets/img/more-explore-2.png",
        text: "Activities",
        link: '/activities/all-activities'
      },
      {
        imageUrl: "/assets/img/more-explore-3.png",
        text: "Pedagogy",
        link: '/books-and-beyond'
      },
      {
        imageUrl: "/assets/img/more-explore-1.png",
        text: "Events & Gallery",
        link: '/events-and-gallery'
      },
    ];
  }
}
