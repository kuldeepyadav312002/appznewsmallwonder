import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {OverlayComponent} from "../../../components/overlay/overlay.component";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {

  @ViewChild(OverlayComponent, {static: false})
  imageModalRef: OverlayComponent;

  sportsText: string = `Children and sports are a natural combination. Being part of a sports team is critical to the growth and development of every child. As sportspersons, children develop key character traits including commitment, responsibility, honor, perseverance, cooperation, leadership and sportsmanship.
  Every student deserves to benefit from being part of a team.Students who have the drive, desire and commitment to play a sport have the opportunity to do so, regardless of physical attributes, skill level or ability.`;

  discoveryText: string = `Small wonders encourages discovery through our inquiry based approach curriculum which fosters students to learn through their own curiosity.
  Since our students are driving the learning, they are studying the things they care about and wonder about the most, thereby acquiring an array of skills along the way.
  Taking part in inquiry-based learning means learning how to learn - how to formulate insightful questions and go about pursuing answers to them.`;

  coCurricularText: string = `Our daily timetable ensures a careful and equal distribution of academic and co-curricular activities contributing towards holistic growth of students.
The school curriculum encompasses dance, drama, Indian and Western music and visual arts programme consisting of art and craft and clay modelling. The children are given ample opportunity to explore and express themselves through various media like annual school performance, Sports Day, SPECIAL CELEBRATION DAYS eg Heritage Day, Independence/Republic Day, World Peace Day, Earth Day, World Ozone Day, Environment Day etc`;

  curriculumText: string = `Curriculum is based on various Key concepts which empower the child to explore the concept of KNOWING MYSELF to LEARNING ABOUT OTHERS and going through various stages to reach to SELF EXPLORATION. Its marvellously designed to cater to satiate the curiosity of child. Dynamic learning goals align and animate our curriculum`;
  clubsText: string = `Integration of academics and activities is the key element in the holistic development and grooming of the child. To encourage the students to widen their horizons and experience the skills that are beyond the classroom learning, the school is offering Co-scholastic skills for the students of Classes I-V to inculcate team spirit and creativity during school hours, through ACtivity clubs such as Gardening, Personality development, Magic story world, Fitness Freak, Cookery and Makeup, Creative Writing and Science Experiments.`;
  stageExposureText: string = `Having exposure to stage activities is a child’s way of symbolically expressing and resolving internal conflict, youngsters fabricate their creativity, certainty, confidence and innovative articulation. Stage Exposure helps develop children in various areas such as: Confidence, Expanded Perception, Creative Problem Solving, Development of the right brain , Team work`;
  selectedActivityName: string = 'curriculum';


  @ViewChild('myTestComp', { static: false })activitiesListComponent: ActivitiesListComponent;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateTo(activityName) {
    this.selectedActivityName = activityName;

    this.imageModalRef.title = activityName;
    this.imageModalRef.showModal();
  }
}
