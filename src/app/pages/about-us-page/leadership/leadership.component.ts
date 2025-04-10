import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leadership",
  templateUrl: "./leadership.component.html",
  styleUrls: ["./leadership.component.scss"],
})
export class LeadershipComponent implements OnInit {
  text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  directorsInfoList = [];
  imgSrc="/assets/img/girl-book.png";

  constructor() {}

  ngOnInit() {
    this.directorsInfoList = [
      {
        imgSrc: "/assets/img/portrait-1.jpeg",
        title: "Arun Chopra",
        subTitle: "MANAGING DIRECTOR",
        content: `He is a trained Life Coach and a significant power behind its conceptualization who firmly believes that Small Wonders play a significant role in creating mature and wise individuals who can happily take on any challenge life throws at them. He believes, “A meaningful human existence can be summarised in the amalgamation of body, mind, and spirit. Just as a sapling grows into a huge tree that bears fruits and flowers, harmonised thoughts lead to actions that yield fruits of righteousness and illumination. Such humans create a peaceful world where an endless saga of human glory will be recited”.`,
      },
      {
        imgSrc: "/assets/img/portrait-1.jpeg",
        title: "Sanju Chopra",
        subTitle: "PEDAGOGICAL CONTENT DIRECTOR",
        content: `She believes in providing the two most important gifts in the life of kids: One is roots, the other is wings. Under her guidance Small Wonders is committed to provide quality education with the right blend of scholastic and co-scholastic opportunities to all our students.`,
      },
      {
        imgSrc: "/assets/img/portrait-1.jpeg",
        title: "Arnav Chopra",
        subTitle: "DESIGN AND CREATIVE DIRECTOR",
        content: `He has the experience in brand building, concept designing, and marketing communications for leading companies and organizations.`,
      }
    ];
  }
}
