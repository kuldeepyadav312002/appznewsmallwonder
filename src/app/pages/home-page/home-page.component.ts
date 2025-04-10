import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  images = [];

  curriculumList = [
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "ESTABLISHING A LOVE FOR LEARNING",
      content: ``,
      ageInterval: '2-5 years',
      routePath: `curriculum`
    },
    {
      imgSrc: "/assets/img/girl-book.png",
      title: "CHALLENGING EVERY CHILD",
      content: ``,
      ageInterval: '5-7 years',
      routePath: `curriculum`
    },
    {
      imgSrc: "/assets/img/kids-books.png",
      title: "FOCUSING ON THE WHOLE CHILD",
      content: ``,
      ageInterval: '7-9 years',
      routePath: `curriculum`
    },
    {
      imgSrc: "/assets/img/more-explore-1.png",
      title: "SUSTAINING MOMENTUM",
      content: ``,
      ageInterval: '9+',
      routePath: `curriculum`
    }
  ];

  eventList = [
    {
      imgSrc: "/assets/img/more-explore-2.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 4,
    },
    {
      imgSrc: "/assets/img/event-2.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 5,
    },
    {
      imgSrc: "/assets/img/event-3.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 1,
    },
    {
      imgSrc: "/assets/img/more-explore-2.png",
      title: "",
      content: ``,
      date: "November 07, 2019",
      numComments: 2,
    },
  ];

  schoolAgeBreakList = [
    {
      title: "Preschool",
      ageRange: "18 months - 3 years",
      imgSrc: "/assets/img/more-explore-1.png",
    },
    {
      title: "Kindergarten",
      ageRange: "3 - 6 years",
      imgSrc: "/assets/img/more-explore-2.png",
    },
    {
      title: "Middle School",
      ageRange: "6 - 10 years",
      imgSrc: "/assets/img/more-explore-3.png",
    },
    {
      title: "High School",
      ageRange: "10 - 16 years",
      imgSrc: "/assets/img/more-explore-2.png",
    },
  ];

  testimonialList = [
    {
      content: `Small Wonders is where learning feels like a joyful adventure. My kids absolutely love going to school every day!`,
      name: "Mr. Jindal",
      designation: "Father of Aaryan",
      imgSrc: "/assets/img/mmm.png",
    },
    {
      content: `We’ve been a part of the Small Wonders family for over a decade. My elder daughter studied here, and now my son is following in her footsteps. The care and education this school provides are unmatched!`,
      name: "Mrs. Dua",
      designation: "Mother of priya",
      imgSrc: "/assets/img/fff.png",
    },
    {
      content: `The foundation that Small Wonders gave my child has been invaluable. Thank you for instilling a love for learning in her!`,
      name: "Mrs. Rana",
      designation: "Mother of Asha",
      imgSrc: "/assets/img/fff.png",
    },
    {
      content: `Small Wonders World School has been our partner in raising independent, creative thinkers. We couldn’t be happier with our choice.`,
      name: "Mrs. Bhatia",
      designation: "Mother of Raghav",
      imgSrc: "/assets/img/fff.png",
    },
    {
      content: `Thank you, Ms. Sanju Chopra and Mr. Arun Chopra, for creating an institution that not only educates but also empowers our children for life`,
      name: "Mr. joshi",
      designation: "Father of sumant",
      imgSrc: "/assets/img/mmm.png",
    },
    {
      content: `Ms. Sanju Chopra, your passion for holistic education has created a wonderful environment for children to grow and excel`,
      name: "Mr. Chaudhari",
      designation: "father of Ananya",
      imgSrc: "/assets/img/mmm.png",
    },
    {
      content: `Small Wonders doesn’t just teach; it inspires. My daughter comes home every day excited about what she’s learned!`,
      name: "Mrs. Gupta",
      designation: "Mother of Khushi",
      imgSrc: "/assets/img/fff.png",
    },
    {
      content: `It’s rare to find a school that has been consistently excellent for over 20 years. Small Wonders is a gem in education.`,
      name: "Mr. Singh",
      designation: "Father of Aryan",
      imgSrc: "/assets/img/mmm.png",
    },
    {
      content: `When we first visited Small Wonders, we knew this was the right school for our child. The warm environment and personalized attention make all the difference.`,
      name: "Mr. Ramesh",
      designation: "Father of Tanvi",
      imgSrc: "/assets/img/mmm.png",
    },

    

    {
      content: `Ms. Sanju Chopra and Mr. Arun Chopra, your tireless efforts and vision have made Small Wonders a beacon of excellence. Thank you for making education a joy for our children.`,
      name: "Mrs. Mehta",
      designation: "Mother of Priya",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `My child has blossomed in this nurturing environment. The staff at Small Wonders go above and beyond for each child.`,
      name: "Mrs. D’Souza",
      designation: "Mother of sahil",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `Small Wonders has created a learning environment where children are encouraged to dream big and achieve more. Thank you!.`,
      name: "Mrs. Kapoor",
      designation: "Mother of Aarav",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `Thank you, Mr. Arun Chopra, for creating a school where learning is fun, innovative, and meaningful.`,
      name: "Mr. Malhotra",
      designation: "father of Kartik",
      imgSrc: "/assets/img/mmm.png",
    },
    {
      content: `Ms. Sanju Chopra and Mr. Arun Chopra, together you’ve created a legacy of excellence at Small Wonders World School. Thank you for your vision and leadership!`,
      name: " Mrs. Pruthi",
      designation: "mother of Rehaan",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `Thank you, Ms. Sanju Chopra and Mr. Arun Chopra, for your dedication to nurturing every child at Small Wonders World School. You are an inspiration to us all!`,
      name: "Mrs. Sharma",
      designation: "mother of Mrinal",
      imgSrc: "/assets/img/fff.png",
    },
    {
      content: `Small Wonders has created a learning environment where children are encouraged to dream big and achieve more. Thank you!`,
      name: "Mrs. Jaglan",
      designation: "mother of Aryan and Abhinay",
      imgSrc: "/assets/img/fff.png",
    },
    {
      content: `A special thanks to Mr. Arun Chopra for being such a dedicated and inspiring leader. Small Wonders reflects his passion for education.`,
      name: "Mr. Verma",
      designation: "father of Aman",
      imgSrc: "/assets/img/mmm.png",
    },
    {
      content: `It’s incredible how Small Wonders World School has evolved over the years while staying true to its mission of nurturing young minds`,
      name: " Mrs. Arora",
      designation: "mother of Aarna",
      imgSrc: "/assets/img/fff.png",
    },


    {
      content: `Ms. Sanju Chopra, your passion for holistic education has created a wonderful environment for children to grow and excel.`,
      name: "Mr. Choudhary",
      designation: "father of Ananya",
      imgSrc: "/assets/img/mmm.png",
    },

    {
      content: `Small Wonders doesn’t just teach; it inspires. My daughter comes home every day excited about what she’s learned!`,
      name: "  Mrs. Gupta",
      designation: "mother of Khushi",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `Small Wonders World School has been a blessing for my child. The personalized attention and caring teachers make it a perfect place for learning.`,
      name: " Mrs. Jain",
      designation: "mother of Aaryan",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `My child has blossomed in this nurturing environment. The staff at Small Wonders go above and beyond for each child.`,
      name: " Mrs. Garg",
      designation: "mother of Sahil",
      imgSrc: "/assets/img/fff.png",
    },

    {
      content: `It’s been more than 20 years since Small Wonders began, and it continues to set the benchmark for education. We’re proud to be part of its legacy.`,
      name: " Mr. Goel",
      designation: "father of Riya",
      imgSrc: "/assets/img/mmm.png",
    },

  ];

  constructor() {}

  ngOnInit() {}

  navigateToHomeIntro() {
    document
      .querySelector(".home-intro-section")
      .scrollIntoView({ behavior: "smooth" });
  }
}
