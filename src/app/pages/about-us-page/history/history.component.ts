import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  text: string = `SMALL WONDERS was established in the year 2002 which was the first kindergarten in the city, Panipat.
   Small Wonders has carved a niche for itself and has emerged as a frontrunner amongst all schools in Panipat.
   From a promising beginning, the school has progressed to become an educational institution par excellence.
   It is a whole new universe of learning, where the bounds of imagination are limitless, and each child explores ever expanding horizon.`;

  imageList = [];
  accordionData = [];

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

    this.accordionData = [
      {
        id: 1,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 2,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 3,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 4,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
      {
        id: 5,
        header: "Lorem Ipsum",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
      },
    ];
  }
}
