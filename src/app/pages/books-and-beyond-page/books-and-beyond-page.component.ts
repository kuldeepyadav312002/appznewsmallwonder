import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books-and-beyond-page",
  templateUrl: "./books-and-beyond-page.component.html",
  styleUrls: ["./books-and-beyond-page.component.scss"],
})
export class BooksAndBeyondPageComponent implements OnInit {
  title: string = "Pedagogy";
  bgImage: string = "/assets/img/pedagogy.jpg";
  envSectionTitle: string = "Learning Environment";
  contentList = [
    {
      heading: "Providing Inspired and highly trained Faculty",
      text: `Our teachers look at the world through the child's perspective because each one learns in different ways and at a different pace. We provide teachers with tools and guidance to accommodate a child’s natural curiosity and to fully support each child.`,
    },
    {
      heading: "Providing curriculum designed by inspiring and highly trained Wonderian faculty",
      text: `Our teachers look at the world through the child's perspective because each one learns in different ways and at a different pace.  We provide teachers with tools and guidance to accommodate a child’s natural curiosity and to fully support each child. We highly value our teachers and recognize them as educators whose role is very influential in child’s learning. `,
    },
    {
      heading: "Safe Sanctuaries for learning",
      text: `All of us know that physical surroundings can impact our behaviour, thoughts, emotions, and well-being. We know children learn with all five senses; our school is more than just functional spaces. Our creative learning spaces are specifically designed to support our curriculum and daily activities, providing children with a safe, calm, and stress-free learning environment.`,
    },
    {
      heading: "Mixed age groups",
      text: `Children have all the facilities to learn in different age group to explore the mental, verbal, and logical skills in different environment. It gives the opportunity to them to understand their own mental levels and mingle with the students beyond their own age.`,
    },
    {
      heading: "Rich language environment",
      text: `Students are given environment to learn other languages also along with English and their mother tongue. They have the option to choose that medium of expression in which they are more comfortable to express themselves fully.`,
    },
  ];

  introSectionTitle: string = "Pillars of our Pedagogy";
  introSectionContent = ``;

  introSectionContentList = [
    {
      heading: "Children learn while they play",
      text: `Children do not play so that they can learn, but rather they learn while they play. There are various forms and levels of play and a professional teacher knows how to foster play with countless possibilities for children to learn. Play can happen through more organized activities or through free play, where the teacher’s role is to guide, document, and participate to enhance learning. More academic areas also benefit from play based learning methods, such as science, maths and linguistic skills.`,
    },
    {
      heading: "Learning by exploring",
      text: `Children also learn through guided experimentation, and this is achieved by doing projects. The term “project-based learning” is part of our educational approach and involves a collaborative effort between children and teachers. The project exploration can be done in a small group, or with the whole class. Teachers draw inspiration from thoughtfully designed materials and will select a suitable project that fits the children’s developmental age, whatever the topic that is currently being explored.`,
    },
    {
      heading: "Learning Happens Everywhere",
      text: `Children are learning every moment of the day, whether it’s putting on your own shoes; pouring yourself a drink or learning about science through a hands-on science project. The teacher’s role is to enhance this situational learning.`,
    }
  ];

  // daySectionTitle: string = "Day at Small Wonders";
  //
  // daySectionContent: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
  // consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  // Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

  childrenLearnSectionTitle: string = "What children will learn at Small wonders";
  childrenLearnSectionContent = [
    {
      heading: "EXPLORING AND INTERACTING WITH THE WORLD",
      text: `We support the development of children’s linguistic and mathematical skills and strengthen children’s relationship with nature and the environment through science and environmental education.`,
      color: "orange",
      bulletPoints: [
        "Linguistic Skills",
        "Mathematical Skills",
        "Science and Social skills",
      ],
    },
    {
      heading: "UNDERSTANDING THE WORLD WE LIVE IN",
      text: `We support children in understanding the diversity in their local community, as well as the practices that activate respect for diversity. We support children’s growth as conscious human beings and help them to understand what it means to be an ethically responsible member of society.`,
      color: "violet",
      bulletPoints: ["Cultural Competence", "Socio Emotional skills"],
    },
    {
      heading: "LEARNING FORMS OF EXPRESSION",
      text: `We familiarize them with different art forms and their cultural heritage. We offer children opportunities to express themselves through musical activities, visual arts/crafts and bodily/verbal expression.`,
      color: "green",
      bulletPoints: [
        "Musical Activities",
        "Crafts & Visual Expression",
        "Verbal & Physical Expression",
      ],
    },
    {
      heading: "PRACTICING A HEALTHY WAY OF LIVING",
      text: `We focus on building a strong foundation for a healthy way of living which consists of physical activity, nutrition, rest, self-care and care of others. This learning area supports other learning areas and helps children manage their daily life and routines.`,
      color: "blue",
      bulletPoints: ["Socio-Emotional Competence", "Physical Wellbeing"],
    },
  ];

  constructor() {}

  ngOnInit() {
    const slider = document.querySelector('.slider') as HTMLElement;
let slideIndex = 0;

function showSlide(index: number) {
  slider.style.transform = `translateX(-${index * 300}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % 3;
  showSlide(slideIndex);
}

setInterval(nextSlide, 2000); // Automatically transition slides every 2 seconds

  }
}


