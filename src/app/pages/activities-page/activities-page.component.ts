import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-activities-page",
  templateUrl: "./activities-page.component.html",
  styleUrls: ["./activities-page.component.scss"],
})
export class ActivitiesPageComponent implements OnInit {
  title: string = "";
  bgImage: string ="/assets/img/activities.jpg";

  testimonialList = [
    {
      content: `The warm, nurturing and academic environment has exceeded our expectations in developing the whole child, I am so happy my daughter studied in this school in her early years.`,
      name: "Sangeeta Shah",
      designation: "Mother of Tanvi",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Small Wonders’ way to inspire its learners and their parents through activities is amazing. My son loves his friends and all the fun learning activities. I know Small wonders is a safe place for my child, each day becomes a great day as he enters the gateway of his school. I truly appreciate all the members of staff!`,
      name: "Suman Jaglan",
      designation: "Mother of Aryan and Abhijay",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `I am thoroughly impressed by the virtual online learning of Small Wonders.   This sudden transition to online learning was quickly streamlined by you people. Our children could continue their online education, taking tests and completing projects through online lessons, through your dedicated and committed staff.`,
      name: "Nishant Gupta",
      designation: "Father of Kanav",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `My daughter has learned so much from Small Wonders. The minute she started at Small Wonders we felt a lot of changes in her confidence level. Her overall development in the Small Wonders, had opened the gates for her in one of the best Boarding School. Though, even today, she loves her pre- schoolteachers and talks about them, when she is a grown-up child now..`,
      name: "Rupali gupta",
      designation: "Mother of Muskaan",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Small Wonders focuses on the individual strengths of its children which I felt when my son grew up in the excellent individualized and warm environment of your school.  The connectivity of teachers with the students provides them academic challenges on an individual basis, as well as the tools and strategies needed to meet those challenges. I am so pleased that my child grew in this environment.`,
      name: "Arti Chhabra",
      designation: "Mother of Krishiv",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Dear Sanju Ma’am, I really want to thank you for the efforts you are putting in our kids in this kind of situation.  In this Lockdown period, my daughter looks forward to the forthcoming classes so eagerly. This continuity in teaching and your efforts are commendable.  Handling things so seriously and conveniently, taking care of each and every child in such a way is commendable. Hats off to you and all the teachers!!.`,
      name: "Suchi Katpalia",
      designation: "Mother of Mantra",
      imgSrc: "/assets/img/sampleParent.png",
    },
    {
      content: `Both my kids started at Small Wonders and grew as independent young kids. Instilling the sense of independence in its students from a young age by its staff members always impressed me. My kids joined the school as little timid children and have now become more confident socially and in their daily activities. I appreciate all the efforts of Small Wonders for its kids. The moment the kids move out of the gates of Small Wonders, you find in them a very confident personality who can win the world!.`,
      name: "Minky Narang",
      designation: "Mother of Kaavya and Dhani",
      imgSrc: "/assets/img/sampleParent.png",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
