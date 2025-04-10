import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-parents-testimonial",
  templateUrl: "./parents-testimonial.component.html",
  styleUrls: ["./parents-testimonial.component.scss"],
})
export class ParentsTestimonialComponent implements OnInit {
  @Input() testimonialList = [
    {
      content: `Small Wonders is where learning feels like a joyful adventure. My kids absolutely love going to school every day!`,
      name: "Mr. Jindal",
      designation: "Father of Aaryan",
      imgSrc: "/assets/img/mlogo2.png",
    },
    {
      content: `We’ve been a part of the Small Wonders family for over a decade. My elder daughter studied here, and now my son is following in her footsteps. The care and education this school provides are unmatched!`,
      name: "Mrs. Dua",
      designation: "Mother of priya",
      imgSrc: "/assets/img/flogo3.png",
    },
    {
      content: `The foundation that Small Wonders gave my child has been invaluable. Thank you for instilling a love for learning in her!`,
      name: "Mrs. Rana",
      designation: "Mother of Asha",
      imgSrc: "/assets/img/flogo3.png",
    },
    {
      content: `Small Wonders World School has been our partner in raising independent, creative thinkers. We couldn’t be happier with our choice.`,
      name: "Mrs. Bhatia",
      designation: "Mother of Raghav",
      imgSrc: "/assets/img/flogo3.png",
    },
    {
      content: `Thank you, Ms. Sanju Chopra and Mr. Arun Chopra, for creating an institution that not only educates but also empowers our children for life`,
      name: "Mr. joshi",
      designation: "Father of sumant",
      imgSrc: "/assets/img/mlogo2.png",
    },
    {
      content: `Ms. Sanju Chopra, your passion for holistic education has created a wonderful environment for children to grow and excel`,
      name: "Mr. Chaudhari",
      designation: "father of Ananya",
      imgSrc: "/assets/img/mlogo2.png",
    },
    {
      content: `Small Wonders doesn’t just teach; it inspires. My daughter comes home every day excited about what she’s learned!`,
      name: "Mrs. Gupta",
      designation: "Mother of Khushi",
      imgSrc: "/assets/img/flogo3.png",
    },
    {
      content: `It’s rare to find a school that has been consistently excellent for over 20 years. Small Wonders is a gem in education.`,
      name: "Mr. Singh",
      designation: "Father of Aryan",
      imgSrc: "/assets/img/mlogo2.png",
    },
    {
      content: `When we first visited Small Wonders, we knew this was the right school for our child. The warm environment and personalized attention make all the difference.`,
      name: "Mr. Ramesh",
      designation: "Father of Tanvi",
      imgSrc: "/assets/img/mlogo2.png",
    },

    

    {
      content: `Ms. Sanju Chopra and Mr. Arun Chopra, your tireless efforts and vision have made Small Wonders a beacon of excellence. Thank you for making education a joy for our children.`,
      name: "Mrs. Mehta",
      designation: "Mother of Priya",
      imgSrc: "/assets/img/flogo3.png",
    },

    {
      content: `My child has blossomed in this nurturing environment. The staff at Small Wonders go above and beyond for each child.`,
      name: "Mrs. D’Souza",
      designation: "Mother of sahil",
      imgSrc: "/assets/img/flogo3.png",
    },

    {
      content: `Small Wonders has created a learning environment where children are encouraged to dream big and achieve more. Thank you!.`,
      name: "Mrs. Kapoor",
      designation: "Mother of Aarav",
      imgSrc: "/assets/img/flogo3.png",
    },

    {
      content: `Thank you, Mr. Arun Chopra, for creating a school where learning is fun, innovative, and meaningful.`,
      name: "Mr. Malhotra",
      designation: "father of Kartik",
      imgSrc: "/assets/img/mlogo2.png",
    },
  ];

  sample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  titleIntro: string = "Our Testimonials";
  title: string = "What our Happy Parents Say";

  // slideConfig = { "slidesToShow": 4, "slidesToScroll": 1, 'autoplay': true, 'autoplaySpeed': 3500, 'dots': true, 'infinite': true, 'arrows': true 'responsive': [{ 'breakpoint': 1600, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 1, } }, { 'breakpoint': 1000, 'settings': { 'slidesToShow': 2, 'slidesToScroll': 1, } }, { 'breakpoint': 600, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, } }] };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: false,
    infinite: true,
    // autoplay: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: "1025",
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: "825",
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: "600",
        settings: {
          autoplay: true,
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: "480",
        settings: {
          autoplay: true,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  constructor() {}

  ngOnInit() {}

  slickInit(e) {
    console.log("slick initialized");
  }
}
