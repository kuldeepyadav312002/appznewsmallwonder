import {Component, OnInit} from "@angular/core";
import {SafePipe} from "../../../pipe/safe.pipe";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.scss"],
})
export class AboutUSComponent implements OnInit {
  text: string = `At Small Wonders, we seek to provide the most meaningful educational experience our students will have in their lives.
Childhood is a period of life when everything is possible. It is a time to discover the world and all of the possibilities it holds. We believe that children are active agents in their own lives from a young age, and with age-appropriate considerations, we take their thoughts, ideas and opinions into account as we continuously develop our concepts and train our faculty to adapt and cultivate this approach. Students work collaboratively with classmates and teachers, who engage them in discovery opportunities that keep students interested and engaged in learning.`;


  aboutUsVideoUrls: string[] = [
    'https://www.youtube.com/embed/vAXhQtdDRUs',
    'https://www.youtube.com/embed/pahENmHW8Pw',
    'https://www.youtube.com/embed/nkluQagTeJ4'
  ];

  imageList = [];
  image = "/assets/img/aboutUs.jpg";
  imageCardTitle = "TITLE";
  imageCardContent = `We create the CURIOUS Beings , As we understand We can teach a lesson for a Day, but if we teach them to learn by curiosity, they will continue the learning process as long as they live.`;

  constructor() {
  }

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
