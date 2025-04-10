import { Component, OnInit,Input } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-franchise-page",
  templateUrl: "./franchise-page.component.html",
  styleUrls: ["./franchise-page.component.scss"],
})
export class FranchisePageComponent implements OnInit {
  bgImage: string = "/assets/img/franchise.jpg";
  title: string = "Franchise";

sectionHeading1: string = `Become a partner`;
  sectionText1: string = `New Heights, New Opportunities. Join Small Wonders and take advantage of our momentum.`;
  workFranchiseHeading: string = "Inspire, Lead and Succeed";
  workFranchiseSubText: string = "Build Your Legacy with Small Wonders";
  workFranchiseSubDes: string = `Established in 2002, we have been transforming the way children learn, grow, and thrive. Our franchise model allows passionate educators and entrepreneurs to become a part of our legacy and offer high-quality education in their communities. With a proven track record and an innovative approach to early childhood education, Small Wonders World School is the ideal partner for those who share our vision of shaping the future of education.
Joining the Small Wonders family means becoming part of a successful, forward-thinking network that values creativity, innovation, and child-centered learning. Our franchise program is designed to provide you with the tools, support, and resources needed to establish a thriving educational institution. From comprehensive training to ongoing guidance, we empower our franchisees to provide world-class education while building a strong brand presence in their region.
`;
  workFranchiseOwnerName: string = 'Mr. Arun Chopra';
  workFranchiseOwner: string = 'Director';
  advantagesHeading: string = 'Advantages';
  redirectText1: string = `Curriculum is based on various Key concepts which empower the child to explore the concept of KNOWING MYSELF to LEARNING ABOUT OTHERS and going through various stages to reach to SELF EXPLORATION.`;

  redirectText2: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.`;

  redirectText3: string = `SMALL WONDERS SCHOOL was conceptualised with the Philosophy that kids enjoy their schooling if given an environment which creates enthusiasm every time.`;

  constructor(private router: Router) {}


  @Input() testimonialList = [
    {
      advantagesNumber: `01`,
      advantagesDes: "Proven Success ",
      imgSrc: "/assets/img/act-icon3.png",
    },
    {
      advantagesNumber: `02`,
      advantagesDes: "Innovative Curriculum ",
      imgSrc: "/assets/img/act-icon3.png",
    },
    {
      advantagesNumber: `03`,
      advantagesDes: "Strong Brand ",
      imgSrc: "/assets/img/act-icon3.png",
    },
    {
      advantagesNumber: `04`,
      advantagesDes: "Comprehensive Support ",
      imgSrc: "/assets/img/act-icon3.png",
    },
    {
      advantagesNumber: `05`,
      advantagesDes: "Market Potential ",
      imgSrc: "/assets/img/act-icon3.png",
    },
    {
      advantagesNumber: `06`,
      advantagesDes: "Passionate Community ",
      imgSrc: "/assets/img/act-icon3.png",
    },
  ]
  ngOnInit() {}

  navigateTo(url) {
    this.router.navigate([url]);
  }
}
