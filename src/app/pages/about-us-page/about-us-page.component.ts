import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-about-us-page",
  templateUrl: "./about-us-page.component.html",
  styleUrls: ["./about-us-page.component.scss"],
})
export class AboutUsPageComponent implements OnInit {
  @ViewChild('missionSection') missionSection: ElementRef;
  @ViewChild('visionSection') visionSection: ElementRef;

  image = "/assets/img/aboutUs.jpg";
  title = "";
  text = "Welcome to our Wonderian Family, and to our website. This website has been created to give parents and carers a brief synopsis, 'flavour' of the offerings and facilities that are available to our students.";

  constructor() {}

  ngOnInit() {}

  scrollToMission() {
    this.missionSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToVision() {
    this.visionSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}