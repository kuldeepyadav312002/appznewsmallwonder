import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-curriculum-page",
  templateUrl: "./curriculum-page.component.html",
  styleUrls: ["./curriculum-page.component.scss"],
})
export class CurriculumPageComponent implements OnInit {
  image = "/assets/img/school-building.jpg";
  title: string = "curriculum";

  sectionHeading1: string = "Help your child master key developmental milestones in a safe and loving environment.";
  sectionText1: string = `We believe that every child, no matter how young, is a thinker, change-maker and a dreamer. At small wonders  your young scholar benefits from an intentional and strategic approach to academics. We provide learning opportunities that prepare our students for the academic rigor and the plethora of opportunities waiting for them in life.`;

  leftImg1 = "/assets/img/more-explore-1.png";
  leftTitle1: string = "ESTABLISHING A LOVE FOR LEARNING";
  leftContent1: string = `Our youngest learners are cared for and taught important developmental skills by doing what they love best - playing. We take an experiential approach, so your child will be an active participant in their own learning. Through music, creative movement, and sensory activities we help your child hit developmental milestones and solidify the essentials including letters, numbers, shapes, and colors.`;

  leftImg2 = "/assets/img/more-explore-2.png";
  leftTitle2: string = "CHALLENGING EVERY CHILD";
  leftContent2: string = `Children in grades KG-2 thrive in an experiential environment designed to leverage their natural curiosity and joy of learning. Empowered problem solvers and collaborators are encouraged to think big, synthesize and test ideas and celebrate the learning process.  Academics integrated with movement, fine arts, character- based leadership and faith formation are woven together into a seamless experience of personalized growth.`;

  rightImg1 = "/assets/img/more-explore-3.png";
  rightTitle1: string = "FOCUSING ON THE WHOLE CHILD";
  rightContent1: string = `Uncovering academic passions, moral compass setting, social skills and leadership development are the work of students in grades 3-5. Small wonders engages this dynamic window of development with academic personalization, mentoring relationships and experiential learning to develop students who are confident to embrace and share their gifts to impact the world.`;

  rightImg2 = "/assets/img/more-explore-3.png";
  rightTitle2: string = "SUSTAINING MOMENTUM";
  rightContent2: string = `In grades 6 and over we develop children who are capable, self-reliant and have a strong sense of self. In keeping with the school’s mission, we hope to give our children the ability to connect with others to become productive citizens throughout their lives. Our classroom environments are developmentally appropriate, well prepared, positive and warm. We welcome each child to engage in building skills of independence, concentration, order and coordination. Through hands-on, self-directed, and collaborative play, children learn skills in language, math, science, geography, sensorial, fine motor development and music while making creative choices in their learning under the guidance of highly trained teachers.`;

  leftImg3 = "/assets/img/more-explore-2.png";
  leftTitle3: string = "KEY ELEMENTS: Providing new LEARNING ENVIRONMENT";
  leftContent3: string = `WONDERNOMICS, WONDER EXPLODING DOTS, WONDERSHOONYA, WONDER BOOKS AND BEYOND.`;
  leftItems3 =['WONDER BOOKS and BEYOND' , 'WONDERNOMICS', 'WONDER EXPLODING DOTS', 'WONDER SHOONYA'];
  leftLinks3 =['books-and-beyond', '#', '#', 'shoonya'];

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

  ngOnInit() {}
}
